import Image from 'next/image';
import InventarioForm from '../components/InventarioForm';
import Table from '../components/Table';

import logoImage from '../assets/Autosan.jpg';

const InventarioPage = () => {
  return (
    <section>
      <div>
      <div>
          <Image src={logoImage} alt="Logo Autosan" width={200} height={100} />
        </div>
        <div>
          <h2>Orden de Trabajo</h2>
          <p>**Contador(ID)**</p>
          <div>Cra 9 No. 14C -16 Santa Ana Cel: 312 564 1152</div>
        </div>
        <div>
          <Table />
        </div>
      </div>
      <div></div>
      <InventarioForm />
    </section>
  );
};

export default InventarioPage;