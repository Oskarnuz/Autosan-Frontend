import { useEffect, useState } from 'react';
import axios from 'axios';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/order');
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Lista de Órdenes Generadas</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>{order.descripcionTrabajo}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
