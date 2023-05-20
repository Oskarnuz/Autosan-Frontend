import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import styles from '@/styles/InventarioForm.module.css';
import axios from 'axios';

const initialValues = {
  
  radio: 'true',
  encendedor: 'true',
  pito: 'true',
  alarma: 'true',
  llavero: 'true',
  plumillas: 'true',
  tapetes: 'true',
  espejos: 'true',
  caja_cd: 'true',
  planta: 'true',
  dvd: 'true',
  llanta_repuesto: 'true',
  gato: 'true',
  cruceta: 'true',
  extintor: 'true',
  kit_carretera: 'true',
  herramientas: 'true',
  tapa_gasolina: 'true',
  copas: 'true',
  antena: 'true',
  chapas: 'true',
  luces: 'true',
  vidrios_electricos: 'true',
  tarjeta_propiedad: 'true',
  seguro_obligatorio: 'true',
  revision_tecnicomecanica: 'true',
  poliza_garantia: 'true'
};

const handleSubmit = async (values) => {
  try {
    
    const response = await fetch('http://localhost:8080/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      handleImprimirClick();
    } else {
      console.log('Error al enviar los datos del formulario');
    }
  } catch (error) {
    console.log('Error al enviar los datos del formulario', error);
  }
};

const InventarioForm = () => {
  const [formularioVisible, setFormularioVisible] = useState(true);

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

  const handleImprimirClick = () => {
    setFormularioVisible(false);
    setTimeout(() => {
      window.print();
      setFormularioVisible(true);
    }, 100);
  };

  return (
    <div>
      {formularioVisible && (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={styles.formContainer}>
            <div className={styles.container}>
              <div className={styles.left_section}>
                <section>
                  <h2>Inventario</h2>
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
                            <Field type="radio" name={field.name} value="true" defaultChecked />
                          </td>
                          <td>
                            <Field type="radio" name={field.name} value="false" />
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
                            <Field type="radio" name={field.name} value="true" defaultChecked />
                          </td>
                          <td>
                            <Field type="radio" name={field.name} value="false" />
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
                    Tenga en cuenta que la mano de obra se cancela únicamente en efectivo antes de retirar el vehículo del taller.
                    AUTOSAN NO asume gastos de grúas.
                    Verificar el trabajo y objetos que quedaron estipulados en el inventario.
                  </p>
                </div>
                <div>
                  <h2>NOTA DE AUTORIZACIÓN</h2>
                  <p>
                    Todo vehículo tiene 2 días de parqueadero gratis después de culminado el trabajo, de lo contrario pasará a parqueadero público, asumiendo el costo y riesgo que esto acarrea.
                    Quedando en conocimiento y aceptando al firmar esta orden de servicio
                  </p>
                  <h2>IMPORTANTE</h2>
                  <p>
                    Doy poder amplio y suficiente a AUTOSAN para revisar, diagnosticar, reparar y suministrar las autopartes necesarias para el de mi vehículo.
                  </p>
                </div>
                <div>
                  <h2>AUTORIZACIÓN DEL TRABAJO</h2>
                  <br />
                  <p>_________________________</p>
                  <h2>C.C. </h2>
                </div>
                <div>
                  <h3>
                    SUS DATOS PERSONALES SERÁN TRATADOS MEDIANTE LA LEY 1581 DE 2012. AUTOSAN NO SE HACE RESPONSABLE DE OBJETOS DE VALOR DEJADOS DENTRO DEL VEHÍCULO, SI EL VEHÍCULO LLEGA SUCIO AL TALLER NO SE HACE RESPONSABLE POR RAYONES O GOLPES QUE NO SE OBSERVAN.
                    AUTORIZO A AUTOSAN PARA REALIZAR LAS PRUEBAS TÉCNICAS NECESARIAS AL VEHÍCULO DENTRO DEL PERÍMETRO URBANO.
                    NOTA: NO FIRME SIN HABER VERIFICADO QUE LA INFORMACIÓN REGISTRADA CORRESPONDA A LO INFORMADO Y SOLICITADO POR USTED.
                  </h3>

                </div>
              </div>

            </div>

            <button type="submit" className={styles.submitButton}>
              Enviar
            </button>
          </Form>
        </Formik>
      )}

      {/* <button onClick={handleImprimirClick} className={styles.imprimirButton}>
        Imprimir
      </button> */}
    </div>
  );
};

export default InventarioForm;

