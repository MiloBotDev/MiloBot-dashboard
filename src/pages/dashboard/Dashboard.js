//import { Navigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';

const Dashboard = ({userState, setUserState}) => {
  return (
    <>
      <NavBar userState={userState} setUserState={setUserState} />
      {/* !userState.loggedIn ? <Navigate to="/login" /> : null */}
      <p>This is the bot dashboard</p>
    </>
  )
};

export default Dashboard;