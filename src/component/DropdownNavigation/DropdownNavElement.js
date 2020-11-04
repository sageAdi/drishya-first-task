import styled from 'styled-components'

export const Wrapper = styled.div`
   .dropdown {
   }
   .dropdown-menu {
      width: 90vw;
      position: absolute;
      transform: translate(-80%);
   }
   .btn {
      font-size: 13px;
      & span {
        display: inline-block;
         &:after {
            content: '';
            display: none;
            bottom: 9px;
            width: 100%;
            background: #000;
            height: 2px;
         }
         &:hover:after {
            display: block;
         }
      }
   }
`
export const DropdownMenu = styled.div`
   float: left;
   display: flex;
   flex-flow: row wrap;
   cursor: pointer;
   &:onfocus {
      display: block;
   }
`
export const DropdownContent = styled.div`
   display: none;
   position: absolute;
   top: 100%;
   right: 0px;
   width: 100%;
   .dropdownContainer {
      width: 100%;
      background: #f2f2f2;
      margin: 0px 1%;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
   }
   .header-bottom{
       width: 100%;
       display: flex;
       justify-content: center;
       background-color: #e6e6e6;
       padding: 5px;
       border-bottom: 2px solid #000;
       align-items: center;
   }
`
export const Content = styled.div`
   justify-self: flex-start;
   display: flex;
   flex-flow: column wrap;
   & button {
      width: 195px;
      text-align: start;
      color: #262626;
      font-size: 13px;
      font-weight: 600;
      padding: 18px 30px 18px 24px;
      border: none;
      background: transparent;
      cursor: default;
   }
   & ul {
      padding: 0px;
      width: 200px;
   }
   & li {
      list-style: none;
      width: 100%;
      padding: 10px 0px 10px 24px;
      &:hover {
            text-decoration: underline;
         }
      & a {
         text-decoration: none;
         color: #262626;
         
         font-size: 13px;
         font-weight: 400px;
         
      }
   }
`
