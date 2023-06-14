import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';

const NavBar = ({userState}) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
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
          <NavRightSide userState={userState} />
        </Nav>
      </Container>
    </Navbar>
  )
}

function NavRightSide({userState}) {
  const location = useLocation();
  console.log(location);

  if (userState.loggedIn && location.pathname !== '/dashboard') {
    return(
      <>
        <Nav.Link href="/dashboard">Go to dashboard</Nav.Link>
      </>
    )
  } else if (!userState.loggedIn) {
    return(
      <>
        <Nav.Link href="/login">Login with Discord</Nav.Link>
      </>
    )
  }
}

export default NavBar;