import styles from './Home.module.scss';
import NavBar from '../../components/NavBar';

const Home = ({userState, setUserState}) => {
  return (
    <>
      <NavBar userState={userState} setUserState={setUserState} />
      <div>
        <h1 className={styles['main-text']}>MiloBot - An open-source Discord Bot to play games and more</h1>
      </div>
    </>
  )
};

export default Home;