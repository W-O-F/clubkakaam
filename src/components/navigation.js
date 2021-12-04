import React, { useState } from "react"
import logo from "../images/logo.svg"
// import { NavDiv } from "./style"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
} from "reactstrap"
import menu from "../images/menu.svg"
const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar expand="lg" className="container-fluid fix-nav">
        <NavbarBrand href="/" disabled className="ml-lg-5 ">
          <img
            src={logo}
            style={{ maxHeight: `50px` }}
            className="img-fluid "
            alt=" "
          />
        </NavbarBrand>
        <span style={{ flex: `4 1 auto` }} />
        <NavbarToggler color="white" onClick={toggle}>
          <img src={menu} width="60px" alt="toggle" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" navvvy pt-4" navbar>
            <NavItem className="navlink">
              <NavLink href="#about" className="text-right">
                About Us
              </NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink href="#prizes" className="text-right">
                Prizes
              </NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink href="#timeline" className="text-right">
                Timeline
              </NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink href="#sponsors" className="text-right">
                Sponsors
              </NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink href="#organizer" className="text-right">
                Organizers
              </NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink href="#FAQ" className="text-right">
                FAQs
              </NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink href="#contact" className="text-right">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
