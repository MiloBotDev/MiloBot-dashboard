import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBarSimple = () => {
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
      </Container>
    </Navbar>
  )
}

export default NavBarSimple;