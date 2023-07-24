import styles from './GuildDashboard.module.scss';
import NavBar from '../../../components/NavBar';
import { EnsureLogin } from '../../../utils/Login';
import { Speedometer2, ListColumns } from 'react-bootstrap-icons';

const Guild = ({userState, setUserState}) => {
  return (
    <>
      <EnsureLogin userState={userState} />
      <NavBar userState={userState} setUserState={setUserState} />
      {/* Siebar source: https://getbootstrap.com/docs/5.0/examples/sidebars/ */}
      <div className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark' style={{ width: '280px' }}>
        <ul className='nav nav-pills flex-column mb-auto'>
          <li className='nav-item'>
            <a href="/" className='nav-link active' aria-current='page'>
              <Speedometer2 className={'me-2 ' + styles['bi']} /> Dashboard
            </a>
          </li>
          <li className='nav-item'>
            <a href="/" className='nav-link text-white'>
              <ListColumns className={'me-2 ' + styles['bi']} /> Commands
            </a>
          </li>
        </ul>
      </div>
    </>
  )
};

export default Guild;