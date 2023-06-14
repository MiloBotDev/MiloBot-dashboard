import { Navigate } from 'react-router-dom';

const Login = ({userState}) => {
  return (
    <>
      <p>Login page</p>
      { userState.loggedIn ? <Navigate to="/dashboard" /> : null }
      {userState.loggedIn ? (
          <p>loggedin</p>
        ) : (
          <p>not loggedin</p>
        )}
    </>
  )
};

export default Login;