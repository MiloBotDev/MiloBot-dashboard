import logo from './logo.svg';
//import './App.scss';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import { useState } from 'react';
import Dashboard from './pages/dashboard/Dashboard';
import NavBar from './components/NavBar';

const initialUserState = {
  loggedIn: false
};

function App() {
  const [userState, setUserState] = useState(initialUserState);

  return (
    <>
      <BrowserRouter>
        <NavBar userState={userState} />
        <Routes>
          <Route path="/">
            <Route index element={<Home userState={userState} />} />
            <Route path="login" element={<Login userState={userState} />} />
            <Route path="dashboard" element={<Dashboard userState={userState} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

document.documentElement.setAttribute("data-bs-theme", "dark");

export default App;
