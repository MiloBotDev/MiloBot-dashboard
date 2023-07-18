import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, Link } from 'react-router-dom';
import { goToLogIn } from '../utils/Login';

const NavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="/discord-mark-white.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          MiloBot
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#join-our-discord">Join Our Discord</Nav.Link>
        </Nav>
        <Nav>
          <NavRightSide {...props} />
        </Nav>
      </Container>
    </Navbar>
  )
}

function NavRightSide({userState, setUserState}) {
  const location = useLocation();
  console.log(location);

  if (userState.loggedIn && !location.pathname.startsWith('/dashboard')) {
    return(
      <>
        <Nav.Link as={Link} to="/dashboard">Go to dashboard</Nav.Link>
        <Nav.Link onClick={() => logOut(setUserState)}>Log out</Nav.Link>
      </>
    )
  } else if (userState.loggedIn) {
    return(
      <>
        <Nav.Link onClick={() => logOut(setUserState)}>Log out</Nav.Link>
      </>
    )
  } else {
    return(
      <>
        <Nav.Link onClick={goToLogIn}>Login with Discord</Nav.Link>
      </>
    )
  }
}

async function logOut(setUserState) {
  localStorage.clear('session-jwt-token');
  setUserState({
    loggedIn: false,
    justLoggedOut: true
  });
}

export default NavBar;