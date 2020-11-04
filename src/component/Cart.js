import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   margin: 0px 5%;
   padding-top: 48px;
   padding-right: 15px;
   .cart-header {
      padding-bottom: 24px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      .cart-heading {
         width: 60%;
         border-bottom: 1px solid #000;
      }
      &h1 {
         font-size: 24px;
         line-height: 28px;
      }
   }
   .cart-avalibility {
      display: flex;
      justify-content: space-between;
      align-content: center;
      width: 80%;
      & p {
         padding-top: 24px;
         font-size: 18px;
         line-height: 24px;
         & span {
            color: blue;
            cursor: pointer;
         }
      }
   }
`

export default function Cart() {
   return (
      <div id='Cart'>
         <Wrapper>
            <div className='cart-header'>
               <div className='cart-heading'>
                  <h1>Cart</h1>
               </div>

               <a href='#1'>Keep Shopping </a>
            </div>
            <div className='cart-avalibility'>
               <p>Your cart is empty.</p>
               <div className='help'>
                  <p>
                     Need Help? <br />
                     Call <span>08004402127</span>
                  </p>
               </div>
            </div>
         </Wrapper>
      </div>
   )
}