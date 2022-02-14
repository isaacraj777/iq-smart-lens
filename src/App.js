import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import './App.css';
import Login from './UI/pages/login/Login';
import Dashboard from './UI/pages/dashboard/Dashboard';
import RevenueLoss from './UI/pages/details/RevenueLoss';
import AuditRisk from './UI/pages/details/AuditRisk';
import theme from './UI/Theme'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/revenueLoss' element={<RevenueLoss />}/>
            <Route path='/auditRIsk' element={<AuditRisk />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
