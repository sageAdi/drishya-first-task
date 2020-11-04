import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import logo from '../images/logo.png'

const Wrapper = styled.div`
   width: 50%;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background: #fff;
   border: 2px solid #000;
   padding: 50px;
   img {
      width: 108px;
      max-width: none;
      height: auto;
      align-self: center;
      padding: 0;
   }
   & form {
      margin-top: 10px;
   }
`

export default function Contact() {
   return (
      <Wrapper>
         <img src={logo} alt='logo' />

         <Form>
            <Form.Group controlId='formBasicEmail'>
               <Form.Label>Sign in</Form.Label>
               <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>

            <Button variant='primary' type='submit' className='ml-auto'>
               Next
            </Button>
         </Form>
      </Wrapper>
   )
}
