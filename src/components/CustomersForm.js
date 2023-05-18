import React from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '@/styles/CustomersForm.module.css';
import jsPDF from "jspdf";
import VehiclePage from '@/pages/VehiclePage';

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
  .matches(/^[0-9]+$/, 'Ingrese un número válido'),
  email: Yup.string().email('Ingrese un correo válido').required('Ingrese su correo electrónico'),
});

const generatePDF = (values) => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text('Información del cliente', 10, 20);
  doc.setFontSize(12);
  doc.text(`Nombre: ${values.fullName}`, 10, 30);
  doc.text(`Número de identificación: ${values.identificationCard}`, 10, 40);
  doc.text(`Dirección: ${values.address}`, 10, 50);
  doc.text(`Teléfono: ${values.phone}`, 10, 60);
  doc.text(`Email: ${values.email}`, 10, 70);
  doc.save('informacion_cliente.pdf');
};

const CustomersForm = () => {
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await generatePDF(values);
      alert(JSON.stringify(values, null, 2));
      resetForm();
      router.replace('/VehiclePage');
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

export default CustomersForm;

