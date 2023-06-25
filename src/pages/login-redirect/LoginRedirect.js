import styles from './LoginRedirect.module.scss';
import NavBarSimple from '../../components/NavBarSimple';
import { useEffect } from 'react';
import config from '../../config';

const LoginRedirect = () => {

  useEffect(() => {
    (async () => {
      const formData = new FormData();
      const code = new URLSearchParams(window.location.search).get('code');
      const loginResponse = (await fetch(config.apiUrl + '/do-login?' 
          + new URLSearchParams({code})));
      const sessionJwtToken = await loginResponse.text();
      localStorage.setItem('session-jwt-token', sessionJwtToken);
      console.log(sessionJwtToken);
      window.location.replace('/dashboard');
    })();
  });

  return (
    <>
      <NavBarSimple />
      <div className={styles['main-text']}>
        <h1>Logging you in...</h1>
        <br />
        <h4>You will get redirected to the dashboard in a moment...</h4>
      </div>
    </>
  )
};

export default LoginRedirect;