import styles from './GuildDashboard.module.scss';
import NavBar from '../../../components/NavBar';
import { EnsureLogin } from '../../../utils/Login';

const Guild = ({userState, setUserState}) => {
  return (
    <>
      <EnsureLogin userState={userState} />
      <NavBar userState={userState} setUserState={setUserState} />
       <h1 className={styles['main-text-fade-in']}>Coming soon!</h1>
    </>
  )
};

export default Guild;