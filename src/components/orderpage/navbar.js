import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FoodContext } from "../../App";
import { Link } from "react-router-dom";


function NavbarF() {
  const {count} = useContext(FoodContext)
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Food Delivery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
                to="/"
                className="nav-link active position-relative"
              >
                Home
              </Link>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
                to="/foods"
                className="nav-link active position-relative"
              >
                Foods
              </Link>
              <Link to="/cart">
                <div className="nav-link active position-relative">
                  <i
                    style={{ marginRight: "5px", fontSize: "23px" }}
                    className="bi bi-cart3"
                  ></i>
                  <span
                    style={{
                      color: "white",
                      fontSize: "10px",
                      backgroundColor: "#171a29",
                    }}
                    className=" top-0 start-100 translate-middle badge rounded-circle"
                  >
                    {count}
                  </span>
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarF;