import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '@/styles/ListOrderPage.module.css';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const router = useRouter(); 

  const [numeroOrden, setNumeroOrden] = useState(0);


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/order');
        const data = response.data.data;
        setOrders(data);
      } catch (error) {
        console.log('Error al obtener las órdenes', error);
      }
    };

    fetchOrders();
  }, []);

  const handleGenerateOrder = () => {
    const newNumeroOrden = numeroOrden + 1;
    setNumeroOrden(newNumeroOrden);
    router.push(`/InventarioPage?numeroOrden=${newNumeroOrden}`);
  };
  

  return (
    <section className={styles.container}>
      <div>
        <h1>Listado de Órdenes</h1>
        <div className={styles.ctnOrders}>
          <button onClick={handleGenerateOrder}>Generar Nueva Orden</button>
        </div>
        {Array.isArray(orders) ? (
          orders.map((order) => (
            <div 
            className={styles.orders}
            key={order._id}>
              <p>No Orden: {order._id}</p>
              <p>Placa: {order.placa}</p>
              <p>Fecha: {new Date(order.fecha).toLocaleDateString('es-ES')}</p>
              <p>Cliente: {order.cliente}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron órdenes.</p>
        )}
      </div>
    </section>
  );
};

export default OrderList;
