import { Navigate } from 'react-router-dom';
import config from '../../config.json';

const Login = ({userState}) => {
  return (
    <>
      
      <p>Login page</p>
      { userState.loggedIn ? <Navigate to="/dashboard" /> : <LoginLink /> }
      {userState.loggedIn ? (
          <p>loggedin</p>
        ) : (
          <p>not loggedin</p>
        )}
    </>
  )
};

function LoginLink() {
  const authorizeUrl = 'https://discord.com/oauth2/authorize';
  const params = new URLSearchParams();
  params.append('response_type', 'code');
  params.append('client_id', config.clientId);
  params.append('scope', 'identify guilds');
  params.append('redirect_uri', config.apiUrl + '/login/redirect');
  params.append('prompt', 'none');
  const fullAuthorizeUrl = authorizeUrl + '?' + params.toString();
  window.location.replace(fullAuthorizeUrl);
  return (
    <p>Redirecting</p>
  )
}

export default Login;