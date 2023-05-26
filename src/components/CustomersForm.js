import React from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '@/styles/CustomersForm.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';

import Image from 'next/image';

import logoImg from '../assets/Autosan.png';


const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[A-Za-z ]+$/, 'Ingrese un nombre válido')
    .required('Ingrese su nombre completo'),
  identificationCard: Yup.string()
    .matches(/^[0-9]+$/, 'Ingrese un número válido')
    .required('Ingrese su número de identificación'),
  address: Yup.string().required('Ingrese su dirección'),
  phone: Yup.string()
  .matches(/^[0-9]+$/, 'Ingrese un número válido')
  .required('Ingrese su numero de telefono'),
  email: Yup.string().email('Ingrese un correo válido').required('Ingrese su correo electrónico'),
});


const CustomersForm = () => {
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      
      resetForm();
      const response = await axios.post('http://localhost:8080/api/customer', values);
      //set cookie
      Cookies.set('customerValues', JSON.stringify(values));
      router.push('/VehiclePage');
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
      <div className={styles.logo}>
          <Image src={logoImg} alt="Logo Autosan" width={140} height={70} />
        </div>
      
      <h2 className={styles.formTitle}>INFORMACION DEL CLIENTE</h2>
      <Formik
        initialValues={{
          fullName: '',
          identificationCard: '',
          address: '',
          phone: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Nombre Completo:</label>
              <Field type="text" name="fullName" className={styles.input} />
              <ErrorMessage name="fullName" component="div" className={styles.formError} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="identificationCard">Número de Identificación:</label>
              <Field type="text" name="identificationCard" className={styles.input} />
              <ErrorMessage name="identificationCard" component="div" className={styles.formError} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="address">Dirección:</label>
              <Field type="text" name="address" className={styles.input} />
              <ErrorMessage name="address" component="div" className={styles.formError} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono:</label>
              <Field type="text" name="phone" className={styles.input} />
              <ErrorMessage name="phone" component="div" className={styles.formError} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Correo Electrónico:</label>
              <Field type="email" name="email" className={styles.input} />
              <ErrorMessage name="email" component="div" className={styles.formError} />
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
              Siguiente
            </button>

          </Form>
        )}
      </Formik>
    </div>
    </div>
    
  );
};

export { SignupSchema };
export default CustomersForm;

