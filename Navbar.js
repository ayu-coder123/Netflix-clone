import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">NETFLIX</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <a href="/signin"><button type="submit" bg="red" style={{marginLeft:'1rem'}}>Sign in</button></a>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}
export default ColorSchemesExample;