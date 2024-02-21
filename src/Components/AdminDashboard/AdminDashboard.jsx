
import React from 'react';
import './AdminDashBoard.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Header from './Header';

const AdminDashboard = () => {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Home />
    </div>
  )
}

export default AdminDashboard
