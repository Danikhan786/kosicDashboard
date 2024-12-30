import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Main from '../pages/Main';
import Video from '../pages/Video';
import Localspace from '../pages/Localspace';
import StoreSpecial from '../pages/StoreSpecial';
import Assets from '../pages/Assets';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/main" element={<Main />} />
        <Route path="/video" element={<Video />} />
        <Route path="/local-space" element={<Localspace />} />
        <Route path="/store-special" element={<StoreSpecial />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes
