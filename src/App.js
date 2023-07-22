//import logo from './logo.svg';
//import './App.scss';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import { useState } from 'react';
import Dashboard from './pages/dashboard/Dashboard';
import LoginRedirect from './pages/login-redirect/LoginRedirect';
import GuildDashboard from './pages/dashboard/guild/GuildDashboard';

function App() {
  const [userState, setUserState] = useState(() => {
    const sessionJwtToken = localStorage.getItem('session-jwt-token');
    if (sessionJwtToken) {
      console.log('sessionJwtToken found');
      return {
        loggedIn: true,
        sessionJwtToken: sessionJwtToken
      };
    } else {
      return {
        loggedIn: false
      };
    }
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home userState={userState} setUserState={setUserState} />} />
            <Route path="login" element={<Login userState={userState} setUserState={setUserState} />} />
            <Route path="dashboard" element={<Dashboard userState={userState} setUserState={setUserState} />} />
            <Route path="dashboard/:guildId" element={<GuildDashboard userState={userState} setUserState={setUserState} />} />
            <Route path="login-redirect" element={<LoginRedirect userState={userState} setUserState={setUserState} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

document.documentElement.setAttribute("data-bs-theme", "dark");

export default App;
