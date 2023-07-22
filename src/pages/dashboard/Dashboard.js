import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';
import config from '../../config';
import styles from './Dashboard.module.scss';
import mainLoadingTextStyles from '../../styles/MainLoadingText.module.scss';
import { EnsureLogin } from '../../utils/Login';
import { Link } from 'react-router-dom';

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
  }, [userState]);

  return (
    <>
      <NavBar userState={userState} setUserState={setUserState} />
      <EnsureLogin userState={userState} />
      { guilds == null ? <LoadingServers /> : <Guilds guilds={guilds} /> }
    </>
  )
};

function LoadingServers() {
  return (
    <>
      <div className={mainLoadingTextStyles['main-loading-text']}>
        <h1>Loading your servers...</h1>
      </div>
    </>
  )
}

function Guilds({guilds}) {
  return (
    <>
      <div className={styles['main-container']}>
        <h1>Select a server</h1>
        <div class="d-flex flex-wrap justify-content-center">
        {guilds.map((guild) => {
          return (
            <>
              <div className={'card p-2 m-2 ' + styles['guild-card']}>
                <div className="text-center">
                  <img className={"card-img-top rounded-circle " + styles['guild-image']} src={guild.iconUrl} alt={"Server " + guild.name + " icon"} />
                  <div className="card-body">
                    <h5 class="card-title">{guild.name}</h5>
                  </div>
                </div>
                <GuildCardLink guild={guild} />
              </div>
            </>
          )
        })}
        </div>
      </div>
    </>
  )
}

function GuildCardLink({guild}) {
  if (guild.isBotInGuild) {
    return (
      <Link to={'/dashboard/' + guild.id} className='stretched-link'></Link>
    );
  } else {
    const url = 'https://discord.com/api/oauth2/authorize?client_id=' + config.clientId + '&permissions=8&scope=bot&guild_id=' + guild.id;
    return (
      // Disable anchor-has-content warning because we don't need text in the link
      // (the user can click anywhere on the card go to the link because of the stretched-link class)
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a href={url} className='stretched-link'></a>
    )
  }
}

export default Dashboard;