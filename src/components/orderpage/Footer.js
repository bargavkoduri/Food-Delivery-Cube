import React from "react";
import styled from "styled-components";
import RoomSharpIcon from "@mui/icons-material/RoomSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #171a29;
  color: white;
  height: 300px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 200px;
  margin-top : 50px
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 10px 0px;
  font-weight : 300
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  margin-top : 50px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-top : 50px
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Food Delivery</Logo>
        <Desc>
          <p>Order food from favourite restaurants near you.</p>
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/foods" style={{ textDecoration: "none", color: "white" }}>
              Foods
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              Cart
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <RoomSharpIcon style={{ marginRight: "10px", color: "orange" }} />{" "}
          <a
            href="https://goo.gl/maps/55Pvy1pt13e5Zx938"
            style={{ textDecoration: "none", color: "white" }}
          >
            Sricity, Chitoor, Andhra Pradesh, India
          </a>
        </ContactItem>
        <ContactItem>
          <LocalPhoneSharpIcon
            style={{ marginRight: "10px", color: "orange" }}
          />{" "}
          +91 9999999999
        </ContactItem>
        <ContactItem>
          <MailOutlineSharpIcon
            style={{ marginRight: "10px", color: "orange" }}
          />
          contact@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
