import "../styles/NavBar.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function NavBar({ reverseOrder }) {
  const elements = [
    <Navbar.Brand key="brand" className="ms-3" style={{ color:"white"}}>NavBar</Navbar.Brand>,
    <Nav.Link key="home">Home</Nav.Link>,
    <Nav.Link key="features">Features</Nav.Link>,
    <Nav.Link key="pricing">Pricing</Nav.Link>,
    <Nav.Link key="about">About</Nav.Link>,
    <input key="search" className="sBar" placeholder="Search"/>,
    <Button key="searchButton" className= "buttonS">Search</Button>
  ];

  return (
    <>
      <Navbar href="#home" className="bg-dark">
        <Container className="containerNav">
          {reverseOrder ? [...elements].reverse() : elements}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
