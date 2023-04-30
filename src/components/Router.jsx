import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from '../pages/User';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Routeur() {
  return ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<User />} />
          {/* <Route path="/user/:id/" element={<User />} /> */}
        </Routes>
      </Router>
    </React.StrictMode>
  );
}