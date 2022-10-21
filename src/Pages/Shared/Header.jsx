
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiUser } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContex';
import LeftNav from './LeftNav';

function Header() {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
      alert('LogOut Success')
    })
    .then(error=>{
      console.error('Error', error);
    })
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            
            <div className='d-block d-lg-none'>
            <LeftNav/>
            </div>
          </Nav>
          {
            user ? <> <p>Welcome, {user.email}</p>
           <Link to='/profile' className='mx-3'>{user.photoURL? <Image roundedCircle style={{height:'30px', width:'30px'}} src={user.photoURL} alt="" /> : <BiUser/>}</Link>
             <Link className='btn btn-warning me-2 ' onClick={handleLogOut}>Logout</Link> 
            </>
            :
             <>
            <Link className='btn btn-warning me-2 ' to='/login'>Login</Link>
           <Link className='btn btn-dark ' to='/register'>Register</Link></>
          }
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


