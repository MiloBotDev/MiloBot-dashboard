import styles from './Home.module.scss';
import NavBar from '../../components/NavBar';

const Home = (props) => {
  return (
    <>
      <NavBar {...props} />
      <div>
        <h1 className={styles['main-text']}>MiloBot - An open-source Discord Bot to play games and more</h1>
      </div>
    </>
  )
};

export default Home;