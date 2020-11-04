import styled from 'styled-components'

export const StyledNavbar = styled.div`
   .navbar {
      background: #fff;
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
   .navbar-toggler {
      border: 0px;
   }
`
export const SearchBar = styled.div`
   display: flex;
   align-items: center;
   justify-center: center;
`
export const RightNavWrapper = styled.div`
   display: flex;
   .nav-link {
      text-decoration: underline;
      &:hover:after {
         display: none;
      }
   }
`
