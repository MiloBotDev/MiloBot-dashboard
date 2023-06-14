import { Link } from 'react-router-dom';

const Home = ({userState}) => {
  return (
    <>
      <p>Home page</p>
      { userState.loggedIn ? <Link to="/dashboard">Dashboard</Link> : <Link to="/login">Login</Link> }
    </>
  )
};

export default Home;