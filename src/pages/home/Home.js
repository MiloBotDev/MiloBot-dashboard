import styles from './Home.module.scss';
import NavBar from '../../components/NavBar';

const Home = ({userState}) => {
  return (
    <>
      <NavBar userState={userState} />
      <div class={styles['page-wrapper']}>
        <h1 className={styles['main-text']}>MiloBot - An open-source Discord Bot to play games and more</h1>
      </div>
    </>
  )
};

export default Home;