import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import logoImg from "../assets/Autosan.png";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  const [fullName, setFullName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const decodedToken = jwtDecode(token);
      const { id } = decodedToken;
      fetchUserData(id);
      setLoggedIn(true);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/${userId}`
      );
      const userData = response.data.data;

      setFullName(userData.fullName);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    setLoggedIn(false);
    router.push("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logoImg} alt="Logo Autosan" width={300} height={150} />
      </div>
      <div className={styles.text}>
        <p>¡El cuidado de su vehículo, en manos expertas!</p>
      </div>
      <div className={styles.login}>
        {loggedIn ? (
          <div className={styles.dropdown}>
            <span className={styles.dropdownText}>Hello {fullName}</span>
            <div className={styles.dropdownContent}>
              <div onClick={() => router.push("/CustomerPage")}>
                Customer Page
              </div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.signup}>
              <Link href="/UserPage">SignUp</Link>
            </div>
            <div className={styles.login}>
              <Link href="/LoginPage">
                {loggedIn ? "Logout" : "LogIn"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


