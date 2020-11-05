import styled from 'styled-components'

export const StyledNavbar = styled.div`
   .navbar {
      background: ${props => props.bg ? "black" : "#fff"};
      height: 54px;
      font-size: 15px;
      color: #000;
      max-width: 1600px;
      padding: 0px 5%;
      margin: 0px;

      @media screen and (max-widht: 860px) {
         color: #262626;
      }
   }
   .navbar-nav {
      align-items: center;
      justify-content: center;
   }
   .navbar-brand {
      height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      width: 137px;
      margin: 0px;
      margin-left: -4px;
      img {
         width: 108px;
         max-width: none;
         height: auto;
         align-self: center;
         padding: 0;
      }

      @media screen only (max-width: 768px) {
         align-self: center;
         justify-content: center;
         margin: auto;
      }
   }
   .navbar-light .navbar-nav .nav-link {
      border: 1px solid transparent;
      color: #262626;
      display: inline-block;
      margin-top: 1px;
      padding: 16px 8px 10px;
      height: 48px;
      font-size: 13px;
      line-height: normal;

      &:after {
         content: '';
         display: none;
         bottom: 9px;
         width: calc(100%-16px);
         background: #000;
         height: 2px;
      }
      &:hover:after {
         display: block;
      }
   }
   .form-inline .form-control {
      display: none;
      margin-right: 5px;
      border: 2px solid #000;
      border-radius: 0px;
   }
   .btn-primary{
      color: #262626;
      background: transparent;
      border: none;
      &:focus{
         box-shadow: none;
      }
   }
   .btn-primary:not(:disabled):not(.disabled):active{
      color: #262626;
      background: transparent;
      border: none;
      box-shadow: none;
   }
   .cancle{
      display: none;
      border: 1px solid black;
      border-radius: 0px;
   }
   .right-icons{
      margin-right: 15px;
   }
`
