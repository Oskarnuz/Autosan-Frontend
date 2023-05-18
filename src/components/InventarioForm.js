import { Formik, Form, Field } from 'formik';
import styles from '@/styles/InventarioForm.module.css';

const initialValues = {
  radio: "si",
  encendedor: 'si',
  pito: 'si',
  alarma: 'si',
  llavero: 'si',
  plumillas: 'si',
  tapetes: 'si',
  espejos: 'si',
  caja_cd: 'si',
  planta: 'si',
  dvd: 'si',
  llanta_repuesto: 'si',
  gato: 'si',
  cruceta: 'si',
  extintor: 'si',
  kit_carretera: 'si',
  herramientas: 'si',
  tapa_gasolina: 'si',
  copas: 'si',
  antena: 'si',
  chapas: 'si',
  luces: 'si',
  vidrios_electricos: 'si',
  tarjeta_propiedad: 'si',
  seguro_obligatorio: 'si',
  revision_tecnicomecanica: 'si',
  poliza_garantia: 'si'
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
      <div className={styles.container}>
        <div className={styles.left_section}>
          <section>
            <h2>Inventario</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Descripción </th>
                  <th>Sí</th>
                  <th>No</th>
                </tr>
              </thead>
              <tbody>
                {fieldsInv.map((field) => (
                  <tr key={field.name}>
                    <td>{field.label}</td>
                    <td>
                      <Field type="radio" name={field.name} value="si" defaultChecked />
                    </td>
                    <td>
                      <Field type="radio" name={field.name} value="no" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          </div>

        <div className={styles.mid_section}>
        <h2>Documentos</h2>

          <section>
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
                      <Field type="radio" name={field.name} value="si" defaultChecked />
                    </td>
                    <td>
                      <Field type="radio" name={field.name} value="no" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          
            <div>
              <h2>Observaciones del inventario</h2>
              <textarea className={`${styles.textarea} textarea`} name="observacionesInventario" rows="8" placeholder="Observaciones del inventario"></textarea>
            </div>
            <div>
              <h2>Descripción del Trabajo Autorizado</h2>
              <textarea className={`${styles.textarea} textarea`} name="descripcionTrabajo" rows="8" placeholder="Descripción del Trabajo Autorizado"></textarea>
            </div>
          </section>
        </div>

          <div className={styles.right_section}>
            <div>
              <h2>TARIFA PARQUEADERO</h2>
              <h2>$ 10.000 (24 HORAS)</h2>
            </div>
            <div>
              <h2>ESTIMADO CLIENTE</h2>
              <p>
                Tenga en cuenta que la mano de obra se cancela unicamente en efectivo antes de retirar el vehiculo del taller.
                AUTOSAN NO asume gastos de gruas.
                Verificar el trabajo y objetos que quedaron estipulados en el inventario.
              </p>
            </div>
            <div>
              <h2>NOTA DE AUTORIZACION</h2>
              <p>
                Todo vehiculo tiene 2 dias de parqueadero gratis despues de culminado el trabajo, de lo contrario pasara a parqueadero publico, asumiendo el costo y riesgo que esto acarrea.
                Quedando en conocimiento y aceptando al firmar esta orden de servicio
              </p>
              <h2>IMPORTANTE</h2>
              <p>
                Doy poder amplio y suficiente a AUTOSAN para revisar, diagnosticar, reparar y suministrar las autopartes necesarias para el de mi vehiculo.
              </p>
            </div>
            <div>
              <h2>AUTORIZACION DEL TRABAJO</h2>
              <br />
              <p>_________________________</p>
              <h2>C.C. </h2>
            </div>
            <div>
              <h3>
                SUS DATOS PERSONALES SERAN TRATADOS MEDIANTE LA LEY 1581 DE 2012. AUTOSAN NO SE HACE RESPONSABLE DE OBJETOS DE VALOR DEJADOS DENTRO DEL VEHICULO, SI EL VEHICULO LLEGA SUCIO AL TALLER NO SE HACE RESPONSABLE POR RAYONES O GOLPES QUE NO SE OBSERVAN.
                AUTORIZO A AUTOSAN PARA REALIZAR LAS PRUEBAS TECNICAS NECESARIAS AL VEHICULO DENTRO DEL PERIMETRO URBANO.
                NOTA: NO FIRME SIN HABER VERIFICADO QUE LA INFORMACION REGISTRADA CORRESPONDA A LO INFORMADO Y SOLICITADO POR USTED.
              </h3>

            </div>
          </div>
        
      </div>        

        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </Form>
    </Formik>
  );
};

export default InventarioForm;
