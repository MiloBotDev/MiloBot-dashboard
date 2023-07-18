import NavBarSimple from '../../components/NavBarSimple';
import { useEffect } from 'react';
import config from '../../config';
import mainLoadingTextStyles from '../../styles/MainLoadingText.module.scss';

let exchangedCode = false;

const LoginRedirect = () => {
  useEffect(() => {
    (async () => {
      if (exchangedCode) {
        return;
      } else {
        exchangedCode = true;
      }
      console.log('token exchange run');
      //const formData = new FormData();
      const code = new URLSearchParams(window.location.search).get('code');
      const loginResponse = (await fetch(config.apiUrl + '/do-login?' 
          + new URLSearchParams({code})));
      const sessionJwtToken = await loginResponse.json();
      localStorage.setItem('session-jwt-token', sessionJwtToken.accessJWT);
      window.location.replace('/dashboard');
    })();
  }, []);

  return (
    <>
      <NavBarSimple />
      <div className={mainLoadingTextStyles['main-loading-text']}>
        <h1>Logging you in...</h1>
        <br />
        <h4>You will get redirected to the dashboard in a moment...</h4>
      </div>
    </>
  )
};

export default LoginRedirect;