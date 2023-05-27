import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Image from 'next/image';

import mecanicaImg from '../assets/mecanica.jpeg';
import elecImg from '../assets/electricidad.jpg';
import alinImg from '../assets/alineacion.jpg';
import sincImg from '../assets/Automotriz.jpg'
import pinImg from '../assets/pintura.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Autosan</title>
      </Head>
        <Navbar/>
      <main className={styles.container}>
        
        <div className={styles.content}>
          <section className={styles.servicios}>

            <div className={styles.title}>
              <h2>Servicios</h2>
            </div>

            <div className={styles.box}>
              <Image src={mecanicaImg} alt="Logo Autosan" width={200} height={200} />
              <div className={styles.textBox}>
                <h3>Mecánica Automotriz</h3>
                <p>
                La mecánica automotriz es el arte de cuidar y mantener a tu vehículo en óptimas condiciones. Es como brindarle una atención médica de calidad para asegurarte de que tu automóvil esté siempre en su mejor estado.
                Imagina tener a tu disposición a expertos apasionados por los autos, listos para brindarle a tu vehículo el amor y la atención que se merece. Desde diagnósticos precisos hasta reparaciones cuidadosas, nuestros mecánicos están aquí para garantizar que tu automóvil esté en perfectas condiciones.
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <Image src={elecImg} alt="Logo Autosan" width={200} height={200} />
              <div className={styles.textBox}>
                <h3>Electricidad Automotriz</h3>
                <p>
                En el mundo cada vez más electrónico de los automóviles, la electricidad automotriz desempeña un papel fundamental. Nuestros expertos en electricidad automotriz están aquí para garantizar que todos los sistemas eléctricos de tu vehículo funcionen de manera óptima. Desde el sistema de encendido hasta los sistemas de iluminación y seguridad, nuestros técnicos capacitados pueden diagnosticar y solucionar cualquier problema eléctrico que pueda surgir en tu automóvil. Confía en nosotros para mantener la eficiencia y confiabilidad eléctrica de tu vehículo.
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <Image src={alinImg} alt="Logo Autosan" width={200} height={200} />
              <div className={styles.textBox}>
                <h3>Alineación y Balanceo</h3>
                <p>
                Si notas que tu automóvil tiende a desviarse hacia un lado o sientes vibraciones incómodas mientras conduces, es posible que necesites una alineación y balanceo. Nuestros especialistas en alineación y balanceo pueden ajustar y equilibrar adecuadamente las ruedas de tu vehículo para garantizar una conducción suave y segura. Con equipos de última generación y técnicas precisas, nos aseguramos de que tus neumáticos estén alineados correctamente y que no haya desequilibrios que puedan afectar el manejo y el desgaste de tus neumáticos. Confía en nosotros para brindarte una experiencia de conducción más suave y prolongar la vida útil de tus neumáticos.
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <Image src={sincImg} alt="Logo Autosan" width={200} height={200} />
              <div className={styles.textBox}>
                <h3>Sincronización Electrónica</h3>
                <p>
                En la era de los vehículos modernos, la sincronización electrónica se ha vuelto esencial para un funcionamiento óptimo del motor. Nuestros técnicos especializados en sincronización electrónica pueden ajustar y calibrar los componentes electrónicos del motor de tu automóvil para garantizar una combustión eficiente y un rendimiento óptimo. Utilizando herramientas de diagnóstico avanzadas y conocimientos especializados, nos aseguramos de que tu motor funcione de manera suave y eficiente. Confía en nosotros para mantener la potencia y el rendimiento de tu vehículo.
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <Image src={pinImg} alt="Logo Autosan" width={200} height={200} />
              <div className={styles.textBox}>
                <h3>Latoneria y Pintura</h3>
                <p>
                ¿Tienes abolladuras, arañazos o daños en la carrocería de tu automóvil? Nuestro equipo de expertos en latonería y pintura puede devolverle a tu vehículo su aspecto original. Utilizando técnicas de reparación de carrocería de alta calidad y productos de pintura duraderos, podemos eliminar los daños y restaurar la apariencia estética de tu automóvil. Ya sea que necesites una reparación menor o una restauración completa, nuestros técnicos se esfuerzan por brindarte resultados impecables y un acabado excepcional. Confía en nosotros para devolverle el brillo y el atractivo a tu vehículo.
                </p>
              </div>
            </div>
              
            
          </section>

          <div className={styles.carouselContainer}>
            <div className={styles.equipos}>
              <div className={styles.title}>
                <h2>Equipos</h2>
              </div>

              <div className={styles.carousel}>
                <div className={styles.boxEquipos}>
                  <Image src={pinImg} alt="Logo Autosan" width={150} height={150} />
                  <div className={styles.textBoxE}>
                    <h3>Escaner</h3>
                  </div>
                </div>

                <div className={styles.boxEquipos}>
                  <Image src={pinImg} alt="Logo Autosan" width={150} height={150} />
                  <div className={styles.textBoxE}>
                    <h3>Inyectores</h3>
                  </div>
                </div>

                <div className={styles.boxEquipos}>
                  <Image src={pinImg} alt="Logo Autosan" width={150} height={150} />
                  <div className={styles.textBoxE}>
                    <h3>MIG Soldadura</h3>
                  </div>
                </div>

                <div className={styles.boxEquipos}>
                  <Image src={pinImg} alt="Logo Autosan" width={150} height={150} />
                  <div className={styles.textBoxE}>
                    <h3>Sacatocos</h3>
                  </div>
                </div>

                <div className={styles.boxEquipos}>
                  <Image src={pinImg} alt="Logo Autosan" width={150} height={150} />
                  <div className={styles.textBoxE}>
                    <h3>Palancas</h3>
                  </div>
                </div>

                <div className={styles.boxEquipos}>
                  <Image src={pinImg} alt="Logo Autosan" width={150} height={150} />
                  <div className={styles.textBoxE}>
                    <h3>Herramienta</h3>
                  </div>
                </div>

                
              </div>
            </div>
          </div>


        </div>
        <div className={styles.sidebar}>
          <h2>AUTOSAN</h2>
          <h3>Cra 9 No. 14C -16 Santa Ana</h3>
          <h3>Cel: 312 564 1152</h3>
          <div className={styles.orders}>
            <Link href="/ListOrdersPage">Ordenes</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

