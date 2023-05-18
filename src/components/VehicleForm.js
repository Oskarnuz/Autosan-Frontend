import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from '@/styles/VehicleForm.module.css';

import Image from 'next/image';

import logoImg from '../assets/Autosan.png';

const SignupSchema = Yup.object().shape({
  brand: Yup.string()
    .matches(/^[A-Za-z ]+$/, 'Ingrese una marca válida')
    .required('Ingrese la marca'),
  model: Yup.string()
    .required('Ingrese el modelo'),
  year: Yup.number()
    .min(1900, 'Ingrese un año válido')
    .max(new Date().getFullYear(), 'Ingrese un año válido')
    .required('Ingrese el año'),
  mileage: Yup.number()
    .min(0, 'Ingrese un kilometraje válido')
    .required('Ingrese el kilometraje'),
  idCard: Yup.string()
    .matches(/^[A-Za-z0-9]+$/, 'Ingrese un número de identificación válido')
    .required('Ingrese la placa'),
  color: Yup.string()
    .required('Ingrese el color'),
  fuel: Yup.string()
    .required('Ingrese el tipo de combustible'),
  video: Yup.string()
    .url('Ingrese una URL válida')
    .required('Ingrese el enlace del video'),
});

const VehicleForm = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
      <div className={styles.logo}>
          <Image src={logoImg} alt="Logo Autosan" width={140} height={70} />
      </div>
      <h2 className={styles.formTitle}>DATOS DEL VEHÍCULO</h2>
      <Formik
        initialValues={{
          brand: '',
          model: '',
          year: '',
          mileage: '',
          idCard: '',
          color: '',
          fuel: '',
          video: '',
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
              <label htmlFor="brand">Marca:</label>
              <Field type="text" name="brand" />
              <ErrorMessage name="brand" component="div" className={styles.formError} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="model">Modelo:</label>
              <Field type="text" name="model" />
              <ErrorMessage name="model" component="div" className={styles.formError} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="year">Año:</label>
              <Field type="number" name="year" />
              <ErrorMessage name="year" component="div" className={styles.formError} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="mileage">Kilometraje:</label>
              <Field type="number" name="mileage" />
              <ErrorMessage name="mileage" component="div" className={styles.formError} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="idCard">Placa:</label>
              <Field type="text" name="idCard" />
              <ErrorMessage name="idCard" component="div" className={styles.formError} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="color">Color:</label>
              <Field type="text" name="color" />
              <ErrorMessage name="color" component="div" className={styles.formError} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="fuel">Combustible:</label>
              <Field as="select" name="fuel">
                <option value="" disabled></option>
                <option value="Gasolina">Gasolina</option>
                <option value="Diesel">Diesel</option>
                <option value="Híbrido">Híbrido</option>
                <option value="Eléctrico">Eléctrico</option>
              </Field>
              <ErrorMessage name="fuel" component="div" className={styles.formError} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="video">Video:</label>
              <Field type="text" name="video" />
              <ErrorMessage name="video" component="div" className={styles.formError} />
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.button}>
              Finalizar
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
    
  );
};

export default VehicleForm;
