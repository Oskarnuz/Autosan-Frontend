import { Formik, Form, Field } from 'formik';
import styles from '@/styles/Table.module.css'
import { format } from 'date-fns';
import CustomersForm from './CustomersForm'

import Cookies from 'js-cookie';


const initialValues = {
  fecha: '',
  asesor: '',
  kilometraje: '',
  cliente: '',
  celular: '',
  email: '',
  marca: '',
  modelo: '',
  placa: '',
  color: '',
  numeroOrden: ''
};

const handleSubmit = (values) => {
  console.log(values);
};

const Table = () => {

  const currentDate = new Date();
  const formattedDate = format(currentDate, 'dd/MM/yyyy');

  const customerValues = Cookies.get('customerValues');

  // Assign the cookie values to the initialValues if they exist and are valid JSON
  const initialValuesWithCookies = customerValues ? { ...initialValues, ...JSON.parse(customerValues) } : initialValues;



  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.formContainer}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="fecha">Fecha:</label>
                  <Field type="text" id="fecha" name="fecha" value={formattedDate}/>
                </td>
                <td>
                  <label htmlFor="asesor">Asesor de Servicio:</label>
                  <Field type="text" id="asesor" name="asesor" />
                </td>
                <td>
                  <label htmlFor="status">No Orden:</label>
                  <Field type="text" id="status" name="status" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="cliente">Cliente:</label>
                  <Field type="text" id="cliente" name="cliente"  />
                </td>
                <td>
                  <label htmlFor="celular">Celular:</label>
                  <Field type="text" id="celular" name="celular"  />
                </td>
                <td>
                  <label htmlFor="email">Email:</label>
                  <Field type="text" id="email" name="email"  />
                </td>
                <td>
                  <label htmlFor="marca">Auto Marca:</label>
                  <Field type="text" id="marca" name="marca" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="modelo">Modelo:</label>
                  <Field type="text" id="modelo" name="modelo" />
                </td>
                <td>
                  <label htmlFor="placa">Placa:</label>
                  <Field type="text" id="placa" name="placa" />
                </td>
                <td>
                  <label htmlFor="color">Color:</label>
                  <Field type="text" id="color" name="color" />
                </td>
                <td>
                  <label htmlFor="kilometraje">Kilometraje:</label>
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
