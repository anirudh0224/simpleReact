import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/cafe-logo.png'
import Countrytour from '../Countrytour';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Navbarweb = ({ cartCount, toggleCart }) => {
  return (
    // <div className='' style={{ width: '100%', backgroundColor: '#9e9e9e' }}>
    <Navbar expand="lg" className="bg-body-tertiary fix tranc" style={styles.navbar}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" width={'120px'} height={'45px'} srcset="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='ps-3 d-flex-lg justify-content-lg-end align-items-lg-center'>
          <Nav className="m-0">
            <Nav.Link href="#"> <Link to='/' className="navData">Home</Link> </Nav.Link>
            <Nav.Link href="#link"><Link to='/About' className="navData">About</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/Services' className="navData">Services</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/Portfolio' className="navData">Portfolio</Link></Nav.Link>
            {/* <Nav.Link href="#link"><Link className="navData">Team</Link></Nav.Link>
            <Nav.Link href="#link"><Link className="navData">Blog</Link></Nav.Link> */}
            <NavDropdown title="Packages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#"><Link to="/Countrytour" className="navData">Within the country  </Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link className="navData">Out of country</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link className="navData">Something</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <Link className="navData">Separated link</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"><Link to='/Contact' className="navData">Contact</Link></Nav.Link>
            <Nav.Link href='#'>
              <div style={styles.cartIcon} onClick={toggleCart}>
                🛒 <span style={styles.cartCount}>{cartCount}</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </div>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: 'rgba(184, 186, 188, 0.847)',
    color: '#fff',
  },
  cartIcon: {
    cursor: 'pointer',
  },
  cartCount: {
    marginLeft: '5px',
    fontWeight: 'bold',
  },
};

export default Navbarweb;