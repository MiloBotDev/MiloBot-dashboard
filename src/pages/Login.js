import React from 'react';

const Login = ({userState}) => {
  return (
    <section>
    <p>Login page</p>
    {userState.loggedIn ? (
        <p>loggedin</p>
      ) : (
        <p>not loggedin</p>
      )}
    </section>
  )
};

export default Login;