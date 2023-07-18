import { Navigate } from 'react-router-dom';
import config from '../config.json';

export async function goToLogIn(replace = false) {
  console.log('exeucting');
  const authorizeUrl = 'https://discord.com/oauth2/authorize';
  const params = new URLSearchParams();
  params.append('response_type', 'code');
  params.append('client_id', config.clientId.toString());
  params.append('scope', 'identify guilds');
  params.append('redirect_uri', config.baseUrl + '/login-redirect');
  params.append('prompt', 'consent');
  const stateResponse = await fetch(config.apiUrl + '/random-state-string');
  const state = await stateResponse.text();
  sessionStorage.setItem('state', state);
  params.append('state', state);
  const fullAuthorizeUrl = authorizeUrl + '?' + params.toString();
  if (replace) {
    window.location.replace(fullAuthorizeUrl);
  } else {
    window.location.href = fullAuthorizeUrl;
  }
}

export function EnsureLogin({userState}) {
  if (userState.loggedIn) {
    return null;
  } else {
    if (userState.justLoggedOut) {
      return <Navigate to="/" />;
    } else {
      goToLogIn(true);
    }
  }
}