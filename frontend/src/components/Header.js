import {  Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header className="header">
      <Navbar className="" variant="dark" expand="lg" collapseOnSelect>
        <Container>
        <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={Logo}
                alt="Logo"
                style={{ height: '60px', width: 'auto' }}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <LinkContainer to="/cart">
              <Nav.Link>
                <FaShoppingCart className="alabaster-icon" />
                {/* {cartItems.length > 0 && (
                    <Badge pill bg="sucess" style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )} */}
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
              <Nav.Link>
                <FaUser className="alabaster-icon" />
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
