import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <p>Home page</p>
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    </>
  )
};

export default Home;