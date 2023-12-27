import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Form from '../components/Form';

const Payment = () => {
  const name = "Lina"; // Replace with the actual name you want to display
  
  

  return (
    <div>
      <NavBar name={name} />
      <Form />
      <Footer />
      <Outlet />

    </div>
  );
};

export default Payment;
