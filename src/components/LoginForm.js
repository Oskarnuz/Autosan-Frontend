// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import styles from '@/styles/LoginForm.module.css'

// import Image from 'next/image';

// import logoImg from '../assets/Autosan.png';

// const LoginSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Ingrese un correo válido")
//     .required("Ingrese su correo electrónico"),
//   password: Yup.string()
//     .required("Ingrese su contraseña"),
// });

// const LoginForm = () => {
//   return (
//     <div className={styles.pageContainer}>
      
//       <div className={styles.formContainer}>
//         <div className={styles.logo}>
//           <Image src={logoImg} alt="Logo Autosan" width={140} height={70} />
//         </div>
//         <h2 className={styles.formTitle}>INICIAR SESION</h2>
//     <Formik
//       initialValues={{
//         email: "",
//         password: "",
//       }}
//       validationSchema={LoginSchema}
//       onSubmit={(values, { setSubmitting, resetForm }) => {
//         // Lógica para el inicio de sesión
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//           resetForm();
//         }, 400);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form className={styles.form}>
//           <div className={styles.formGroup}>
//             <label htmlFor="email">Correo electrónico:</label>
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" component="div" className={styles.formError} />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="password">Contraseña:</label>
//             <Field type="password" name="password" />
//             <ErrorMessage name="password" component="div" className={styles.formError} />
//           </div>

//           <button type="submit" disabled={isSubmitting} className={styles.button}>
//             ENVIAR
//           </button>
//         </Form>
//       )}
//     </Formik>
//     </div>
//     </div>
//   );
// };

// export default LoginForm;


import { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '@/styles/LoginForm.module.css';

import Image from 'next/image';
import logoImg from '../assets/Autosan.png';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Ingrese un correo válido')
    .required('Ingrese su correo electrónico'),
  password: Yup.string().required('Ingrese su contraseña'),
});

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('http://localhost:8080/api/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        // Inicio de sesión exitoso, redireccionar al index
        router.push('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error de conexión');
    }

    setSubmitting(false);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <Image src={logoImg} alt="Logo Autosan" width={140} height={70} />
        </div>
        <h2 className={styles.formTitle}>INICIAR SESION</h2>
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
              {error && <div className={styles.error}>{error}</div>}
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
                ENVIAR
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
