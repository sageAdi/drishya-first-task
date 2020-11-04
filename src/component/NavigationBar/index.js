import React from 'react'
import { StyledNavbar, RightNavWrapper } from './NavigationElement'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import DropdownNav from '../DropdownNavigation'
import logo from '../../images/logo.png'
import { VscSearch } from 'react-icons/vsc'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiContactsLine } from 'react-icons/ri'

export default function index() {
   return (
      <StyledNavbar>
         <Navbar expand='lg'>
            <Navbar.Brand href='#home'>
               <img src={logo} alt='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
               <Nav className='mr-auto'>
                  <Nav.Link href='#365'>Microsoft 365</Nav.Link>
                  <Nav.Link href='#Office'>Office</Nav.Link>
                  <Nav.Link href='#Windows'>Windows</Nav.Link>
                  <Nav.Link href='#Surface'>Surface</Nav.Link>
                  <Nav.Link href='#Xbox'>Xbox</Nav.Link>
                  <Nav.Link href='#Support'>Support</Nav.Link>
               </Nav>
               <Nav>
                  <DropdownNav></DropdownNav>
                  <RightNavWrapper>
                     <Nav.Link>
                        <VscSearch />
                     </Nav.Link>
                     <Nav.Link>
                        <AiOutlineShoppingCart />
                     </Nav.Link>
                     <Nav.Link>
                        <RiContactsLine />
                     </Nav.Link>
                  </RightNavWrapper>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </StyledNavbar>
   )
}
