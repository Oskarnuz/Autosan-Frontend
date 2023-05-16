import { Formik, Form, Field } from 'formik';
import styles from '@/styles/Table.module.css'


const initialValues = {
  Fecha: '',
  Asesor: '',
  Kilometraje: '',
  Cliente: '',
  Celular: '',
  Email: '',
  Marca: '',
  Modelo: '',
  Placa: '',
  Color: ''
};

const handleSubmit = (values) => {
  console.log(values);
};

const Table = () => {
  return (
    <div>
      <h2>Inventario</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.formContainer}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="fecha">Fecha</label>
                  <Field type="text" id="fecha" name="fecha" />
                </td>
                <td>
                  <label htmlFor="asesor">Asesor</label>
                  <Field type="text" id="asesor" name="asesor" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="cliente">Cliente</label>
                  <Field type="text" id="cliente" name="cliente" />
                </td>
                <td>
                  <label htmlFor="celular">Celular</label>
                  <Field type="text" id="celular" name="celular" />
                </td>
                <td>
                  <label htmlFor="email">Email</label>
                  <Field type="text" id="email" name="email" />
                </td>
                <td>
                  <label htmlFor="marca">Marca</label>
                  <Field type="text" id="marca" name="marca" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="modelo">Modelo</label>
                  <Field type="text" id="modelo" name="modelo" />
                </td>
                <td>
                  <label htmlFor="placa">Placa</label>
                  <Field type="text" id="placa" name="placa" />
                </td>
                <td>
                  <label htmlFor="color">Color</label>
                  <Field type="text" id="color" name="color" />
                </td>
                <td>
                  <label htmlFor="kilometraje">Kilometraje</label>
                  <Field type="text" id="kilometraje" name="kilometraje" />
                </td>
              </tr>
            </tbody>
          </table>
          
        </Form>
      </Formik>
    </div>
  );
};

export default Table;
