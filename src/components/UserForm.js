import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "@/styles/UserForm.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from 'axios';

import logoImg from "../assets/Autosan.png";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[A-Za-z ]+$/, "Ingrese un nombre válido")
    .required("Ingrese su nombre completo"),
  email: Yup.string()
    .email("Ingrese un correo válido")
    .required("Ingrese su correo electrónico"),
  password: Yup.string()
    .required("Ingrese su contraseña")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número"
    ),
});

const UserForm = () => {
  const router = useRouter();

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/user/signup', values);
      
      if (response.status === 201) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        alert('Registro exitoso');
        resetForm();
        router.push('/');
      } else {
        alert('Error en el registro');
      }
    } catch (error) {
      console.error(error);
      alert('Error en el servidor');
    }

    setSubmitting(false);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <Image src={logoImg} alt="Logo Autosan" width={140} height={70} />
        </div>
        <h2 className={styles.formTitle}>REGISTRARSE</h2>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Nombre completo:</label>
                <Field type="text" name="fullName" />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className={styles.formError}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Correo electrónico:</label>
                <Field type="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.formError}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Contraseña:</label>
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.formError}
                />
              </div>

              <button type="submit" disabled={isSubmitting} className={styles.button}>
                ENVIAR
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserForm;

