import { Navigate } from 'react-router-dom';

const Dashboard = ({userState}) => {
  return (
    <>
      {/* !userState.loggedIn ? <Navigate to="/login" /> : null */}
      <p>This is the bot dashboard</p>
    </>
  )
};

export default Dashboard;