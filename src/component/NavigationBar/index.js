import React, { useState } from 'react'
import { StyledNavbar } from './NavigationElement'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import DropdownNav from '../DropdownNavigation'
import logo from '../../images/logo.png'
import { VscSearch } from 'react-icons/vsc'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiContactsLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Navigaton() {
   const [searchBtn, setSearchBtn] = useState(false)
   const handleSearch = (e) => {
      setSearchBtn(!searchBtn)
      var input = document.querySelector('.form-inline .form-control')
      var search = document.querySelector('.search')
      var cancle = document.querySelector('.cancle')
      if (searchBtn) {
         input.style.display = 'none'
         search.style.display = 'block'
         cancle.style.display = 'none'
      } else {
         input.style.display = 'block'
         search.style.display = 'none'
         cancle.style.display = 'block'
      }
   }
   return (
      <StyledNavbar>
         <Navbar expand='lg'>
            <Link to='/'>
               <Navbar.Brand href=''>
                  <img src={logo} alt='logo' />
               </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
               {!searchBtn && (
                  <Nav className='mr-auto'>
                     <Nav.Link href='#365'>Microsoft 365</Nav.Link>
                     <Nav.Link href='#Office'>Office</Nav.Link>
                     <Nav.Link href='#Windows'>Windows</Nav.Link>
                     <Nav.Link href='#Surface'>Surface</Nav.Link>
                     <Nav.Link href='#Xbox'>Xbox</Nav.Link>
                     <Nav.Link href='#Support'>Support</Nav.Link>
                  </Nav>
               )}
               <Nav className={searchBtn && 'w-100 inline'}>
                  {!searchBtn && <DropdownNav />}
                  <Form inline className={searchBtn && 'w-100'}>
                     <FormControl
                        type='text'
                        placeholder='Search'
                        className={searchBtn && 'd-flex flex-fill form-control'}
                     />
                     <Button onClick={handleSearch} className='search'>
                        <VscSearch />
                     </Button>
                     <Button onClick={handleSearch} className='cancle'>
                        Cancle
                     </Button>
                  </Form>
                  {!searchBtn && (
                     <div className='right-icons'>
                        <Link to='Cart'>
                           <Button>
                              <AiOutlineShoppingCart />
                           </Button>
                        </Link>
                        <Link to='Contact'>
                           <Button>
                              <RiContactsLine />
                           </Button>
                        </Link>
                     </div>
                  )}
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </StyledNavbar>
   )
}
