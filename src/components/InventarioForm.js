import { Formik, Form, Field } from 'formik';
import styles from '@/styles/InventarioForm.module.css';

const initialValues = {
  radio: '',
  encendedor: '',
  pito: '',
  alarma: '',
  llavero: '',
  plumillas: '',
  tapetes: '',
  espejos: '',
  caja_cd: '',
  planta: '',
  dvd: '',
  llanta_repuesto: '',
  gato: '',
  cruceta: '',
  extintor: '',
  kit_carretera: '',
  herramientas: '',
  tapa_gasolina: '',
  copas: '',
  antena: '',
  chapas: '',
  luces: '',
  vidrios_electricos: '',
  tarjeta_propiedad: '',
  seguro_obligatorio: '',
  revision_tecnicomecanica: '',
  poliza_garantia: ''
};

const handleSubmit = (values) => {
  console.log(values);
};

const InventarioForm = () => {
  const fieldsInv = [
    { name: 'radio', label: 'Radio' },
    { name: 'encendedor', label: 'Encendedor' },
    { name: 'pito', label: 'Pito' },
    { name: 'alarma', label: 'Alarma' },
    { name: 'llavero', label: 'Llavero' },
    { name: 'plumillas', label: 'Plumillas' },
    { name: 'tapetes', label: 'Tapetes' },
    { name: 'espejos', label: 'Espejos' },
    { name: 'caja_cd', label: 'Caja CD' },
    { name: 'planta', label: 'Planta' },
    { name: 'dvd', label: 'DVD' },
    { name: 'llanta_repuesto', label: 'Llanta Repuesto' },
    { name: 'gato', label: 'Gato' },
    { name: 'cruceta', label: 'Cruceta' },
    { name: 'extintor', label: 'Extintor' },
    { name: 'kit_carretera', label: 'Kit Carretera' },
    { name: 'herramientas', label: 'Herramientas' },
    { name: 'tapa_gasolina', label: 'Tapa Gasolina' },
    { name: 'copas', label: 'Copas' },
    { name: 'antena', label: 'Antena' },
    { name: 'chapas', label: 'Chapas' },
    { name: 'luces', label: 'Luces' },
    { name: 'vidrios_electricos', label: 'Vidrios Eléctricos' }
  ];

    const fieldsDoc = [
      { name: 'tarjeta_propiedad', label: 'Tarjeta de Propiedad' },
      { name: 'seguro_obligatorio', label: 'Seguro Obligatorio' },
      { name: 'revision_tecnicomecanica', label: 'Revisión Tecnicomecánica' },
      { name: 'poliza_garantia', label: 'Poliza de Garantia' }
    ];

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.formContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Sí</th>
              <th>No</th>
            </tr>
          </thead>
          <tbody>
            {fieldsInv.map((field) => (
              <tr key={field.name}>
                <td>{field.label}</td>
                <td>
                  <Field type="radio" name={field.name} value="si" />
                </td>
                <td>
                  <Field type="radio" name={field.name} value="no" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Documentos</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Sí</th>
              <th>No</th>
            </tr>
          </thead>
          <tbody>
            {fieldsDoc.map((field) => (
              <tr key={field.name}>
                <td>{field.label}</td>
                <td>
                  <Field type="radio" name={field.name} value="si" />
                </td>
                <td>
                  <Field type="radio" name={field.name} value="no" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </Form>
    </Formik>
  );
};

export default InventarioForm;
