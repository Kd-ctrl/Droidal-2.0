import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RoboticLandingPage from './components/LandinPage'; 
import LoginPage from './components/LoginPage'; 
import Dashboard from './components/Dashboard'; 
import MainTabs from './components/Hub/MainTabs'; 
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider
import WebSocketComponent from './components/WebSocket';
import MainWorkSpace from './components/MainWorkSpace';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Routes>
          {/* Default Landing Page */}
          <Route path="/" element={<RoboticLandingPage />} />
          
          {/* Login Page */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Dashboard */}
          <Route path="/work-space" element={<Dashboard />} />

          <Route path="/web-socket" element={<WebSocketComponent />} />

          <Route path="/work" element={<MainWorkSpace />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  </React.StrictMode>
);

reportWebVitals();
