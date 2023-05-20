import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '@/styles/LoginForm.module.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import jwtDecode from "jwt-decode";


import Image from 'next/image';
import logoImg from '../assets/Autosan.png';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Ingrese un correo válido').required('Ingrese su correo electrónico'),
  password: Yup.string().required('Ingrese su contraseña'),
});

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [cookies, setCookie] = useCookies(['cookieToken', 'cookieName']);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/user/signin', values);

      const { token } = response.data.data;
      const decoded = jwtDecode(token);
      const { email } = decoded;
      setCookie('cookieToken', token, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 30,
        });
      if (response.status === 200) {
        setCookie('cookieToken', token, { path: '/' });
        const decodedToken = jwtDecode(token);
        setCookie('cookieName', decodedToken.fullName, { path: '/' });
        router.push('/');

      } else {
        setError('Credenciales inválidas');
      }
    } catch (error) {
      console.error(error);
      setError('Error en el servidor');
    }

    setSubmitting(false);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <Image src={logoImg} alt="Logo Autosan" width={140} height={70} />
        </div>
        <h2 className={styles.formTitle}>INICIAR SESIÓN</h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
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

              {error && <div className={styles.error}>{error}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
