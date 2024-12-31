import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Main from '../pages/mains/Main';
import AddMain from '../pages/mains/AddMain';
import EditMain from '../pages/mains//EditMain';
import Video from '../pages/videos/Video';
import AddVideo from '../pages/videos/AddVideo';
import EditVideo from '../pages/videos/EditVideo';
import Localspace from '../pages/localSpace/Localspace';
import AddLocalspace from '../pages/localSpace/AddLocalspace';
import EditLocalspace from '../pages/localSpace/EditLocalspace';
import StoreSpecial from '../pages/storeSpecial/StoreSpecial';
import AddStoreSpecial from '../pages/storeSpecial/AddStoreSpecial';
import EdiStoreSpecial from '../pages/storeSpecial/EditStoreSpecial';
import Assets from '../pages/Assets';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/main" element={<Main />} />
        <Route path="/add-main" element={<AddMain />} />
        <Route path="/edit-main" element={<EditMain />} />
        <Route path="/video" element={<Video />} />
        <Route path="/add-video" element={<AddVideo />} />
        <Route path="/edit-video" element={<EditVideo />} />
        <Route path="/local-space" element={<Localspace />} />
        <Route path="/add-local-space" element={<AddLocalspace />} />
        <Route path="/edit-local-space" element={<EditLocalspace />} />
        <Route path="/store-special" element={<StoreSpecial />} />
        <Route path="/add-store-special" element={<AddStoreSpecial />} />
        <Route path="/edit-store-special" element={<EdiStoreSpecial />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes
