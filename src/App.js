import React, { useState } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import './App.css';
import './component/login/login.css'
import Dashboard from './component/pages/Dashboard';
import Profile from './component/pages/Profile';
import History from './component/pages/History';
import Wallet from './component/pages/Wallet';
import Logout from './component/pages/Logout';
import SideMenu from './component/pages/SideMenu';
import Login from './component/login/login';
import Register from './component/register/register';
import { Layout } from 'antd';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false)
  return (
    <div className="App">

     <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="logout/" element={<Logout />} /> 
      </Routes>
      
      {/* {user &&
        <Layout>
          <SideMenu />
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="logout/" element={<Logout />} />
          </Routes>
        </Layout>
      } */}

    </div>
  );
}

export default App;
