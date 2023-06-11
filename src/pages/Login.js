import React from 'react';

const Login = ({userState}) => {
  return (
    <>
      <p>Login page</p>
      {userState.loggedIn ? (
          <p>loggedin</p>
        ) : (
          <p>not loggedin</p>
        )}
    </>
  )
};

export default Login;