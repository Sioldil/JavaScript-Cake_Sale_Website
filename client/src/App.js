import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Shop_details from './pages/Shop-details';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import UpdateProduct from './pages/Update-Product';

// Routing --------------------

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<Shop_details />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<Admin />} />
          <Route path="update-product/:id" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
