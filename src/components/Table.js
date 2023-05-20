import { Formik, Form, Field } from 'formik';
import styles from '@/styles/Table.module.css'
import CustomersForm from './CustomersForm';
import VehicleForm from './VehicleForm';

const {fullName, phone, email} = CustomersForm;
const {brand, model, idCard, color, mileage} = VehicleForm 
const initialValues = {
  Fecha: '',
  Asesor: '',
  Kilometraje: mileage,
  Cliente: fullName,
  Celular: phone,
  Email: email,
  Marca: brand,
  Modelo: model,
  Placa: idCard,
  Color: color
};

const handleSubmit = (values) => {
  console.log(values);
};

const Table = () => {
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.formContainer}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="fecha">Fecha:</label>
                  <Field type="text" id="fecha" name="fecha" />
                </td>
                <td>
                  <label htmlFor="asesor">Asesor de Servicio:</label>
                  <Field type="text" id="asesor" name="asesor" />
                </td>
                <td>
                  <label htmlFor="status">Estado de la Orden:</label>
                  <Field type="text" id="status" name="status" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="cliente">Cliente:</label>
                  <Field type="text" id="cliente" name="cliente" />
                </td>
                <td>
                  <label htmlFor="celular">Celular:</label>
                  <Field type="text" id="celular" name="celular" />
                </td>
                <td>
                  <label htmlFor="email">Email:</label>
                  <Field type="text" id="email" name="email" />
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
