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
      margin: 0px 2%;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: flex-start;
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
      font-weight: 600px;
      padding: 18px 30px 18px 24px;
      border: none;
      background: transparent;
      cursor: default;
   }
   & ul {
      padding: 0px;
   }
   & li {
      list-style: none;
      & a {
         text-decoration: none;
         color: #262626;
         padding: 12px 0px 12px 24px;
         font-size: 13px;
         font-weight: 400px;
         &:hover {
            text-decoration: underline;
         }
      }
   }
`
