import {Container, Nav, Navbar} from "react-bootstrap";
function NavMain(){
  return (
    <>
    <Navbar className="bg-dark" style = {{color:"white"}}>
      <Container className="ms-1">
      <Navbar.Brand  style = {{color:"white"}} href="/">Home</Navbar.Brand>
      <Nav.Link href = "/characters">Characters</Nav.Link>
      </Container>
    </Navbar>
    </>
  )
}
export default NavMain;