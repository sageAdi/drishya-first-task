import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {
   Wrapper,
   DropdownMenu,
   DropdownContent,
   Software,
   PCsDevice,
   Entertainment,
} from './DropdownNavElement'

export default function index() {
   return (
      <div>
         <Wrapper>
            {/* <DropdownMenu>
               <DropdownIcon/>
               <h5>All Microsoft</h5>
               <DropdownContent>
                  <Software>
                     <h2>Software</h2>
                     <a href="#link">Link</a>
                     <a href="#link1">Link1</a>
                     <a href="#link2">Link2</a>
                  </Software>
                  <PCsDevice>
                  <h2>PCs & Device</h2>
                     <a href="#link">Link</a>
                     <a href="#link1">Link1</a>
                     <a href="#link2">Link2</a>
                  </PCsDevice>
                  <Entertainment>
                  <h2>Entertainment</h2>
                     <a href="#link">Link</a>
                     <a href="#link1">Link1</a>
                     <a href="#link2">Link2</a>
                  </Entertainment>
               </DropdownContent>
            </DropdownMenu> */}
            <DropdownMenu title='All Microsoft'></DropdownMenu>
            <NavDropdown title='All Microsoft' id='basic-nav-dropdown'>
               <NavDropdown.Item href='#action/3.1'>
                  Action
                  <div className='subdropdown'>ONe</div>
                  <div className='subdropdown'>ONe</div>
                  <div className='subdropdown'>ONe</div>
               </NavDropdown.Item>
               <NavDropdown.Item href='#action/3.2'>Action1</NavDropdown.Item>
               <NavDropdown.Item href='#action/3.3'>Action2</NavDropdown.Item>
               <NavDropdown.Item href='#action/3.4'>Action3</NavDropdown.Item>
               <NavDropdown.Item href='#action/3.5'>Action</NavDropdown.Item>
               <div className='subdropdown'></div>
            </NavDropdown>
         </Wrapper>
      </div>
   )
}
