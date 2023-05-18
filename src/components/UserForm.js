import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from '@/styles/UserForm.module.css'
import Image from 'next/image';

import logoImg from '../assets/Autosan.png';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
  .matches(/^[A-Za-z ]+$/, 'Ingrese un nombre válido')
  .required('Ingrese su nombre completo'),
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
  return (
    <div className={styles.pageContainer}>
      
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <Image src={logoImg} alt="Logo Autosan" width={140} height={70} />
        </div>
        <h2 className={styles.formTitle}>USUARIO</h2>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              resetForm();
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Nombre completo:</label>
                <Field type="text" name="fullName" />
                <ErrorMessage name="fullName" component="div" className={styles.formError} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Correo electrónico:</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className={styles.formError} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Contraseña:</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" className={styles.formError} />
              </div>

              <button type="submit" disabled={isSubmitting} className={styles.button}>
                Log In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserForm;
