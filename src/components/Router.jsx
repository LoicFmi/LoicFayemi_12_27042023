import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from '../pages/User';
import NotFound from '../pages/Error';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Routeur() {
  return ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route exact path="/user/:id/" element={<User />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/error" element={<NotFound />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
