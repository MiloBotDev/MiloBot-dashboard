//import { Navigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';
import config from '../../config';
import styles from './Dashboard.module.scss';

const Dashboard = ({userState, setUserState}) => {
  const [guilds, setGuilds] = useState();

  useEffect(() => {
    if (userState.loggedIn) {
      (async () => {
        const res = await fetch(config.apiUrl + '/guilds', {
          headers: {
            'Authorization': 'Bearer ' + userState.sessionJwtToken
          }
        });
        const data = await res.json();
        setGuilds(data);
      })();
    }
  }, []);

  return (
    <>
      <NavBar userState={userState} setUserState={setUserState} />
      {/* !userState.loggedIn ? <Navigate to="/login" /> : null */}
      { guilds == null ? <LoadingServers /> : <Guilds guilds={guilds} /> }
    </>
  )
};

function LoadingServers() {
  return (
    <>
      <div className={'main-loading-text'}>
        <h1>Loading your servers...</h1>
      </div>
    </>
  )
}

function Guilds({guilds}) {
  return (
    <>
      <div className={'main-container'}>
        <h1>Your servers</h1>
        <div class="d-flex flex-wrap justify-content-center">
        {guilds.map((guild) => {
          return (
            <>
              <div className={'card p-2 m-2 ' + styles['guild-card']}>
                <div className="text-center">
                  <img className={"card-img-top rounded-circle " + styles['guild-image']} src={guild.iconUrl} alt="Card image cap" />
                  <div className="card-body">
                    <h5 class="card-title">{guild.name}</h5>
                  </div>
                </div>
              </div>
            </>
          )
        })}
        </div>
      </div>
    </>
  )
}

export default Dashboard;