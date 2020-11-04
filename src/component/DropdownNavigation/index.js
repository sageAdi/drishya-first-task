import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { BiRightArrow } from 'react-icons/bi'
import {
   Wrapper,
   DropdownMenu,
   DropdownContent,
   Content,
} from './DropdownNavElement'

export default function DropdownElements() {
   const [dropdown, setDropdown] = useState(false)
   const handleDropdownContent = (e) => {
      var content = document.querySelector('.dropdownContent')
      dropdown
         ? (content.style.display = 'none')
         : (content.style.display = 'flex')
      setDropdown(!dropdown)
   }
   return (
      <div>
         <Wrapper>
            <DropdownMenu>
               <Button onClick={handleDropdownContent}>
                  <span className='dropdownSpan'>All Microsoft</span>
                  <RiArrowDropDownLine />
               </Button>
               <DropdownContent className='dropdownContent'>
                  <div className='dropdownContainer'>
                     <Content>
                        <button>Software</button>
                        <ul>
                           <li>
                              <a href='https://www.microsoft.com/en-in/store/apps/windows?icid=CNavAppsWindowsApps'>
                                 Windows Apps
                              </a>
                           </li>
                           <li>
                              <a href='https://onedrive.live.com/about/en-us/'>
                                 OneDrive
                              </a>
                           </li>
                           <li>
                              <a href='https://outlook.live.com/owa/'>
                                 Outlook
                              </a>
                           </li>
                           <li>
                              <a href='https://www.skype.com/en/'>Skype</a>
                           </li>
                           <li>
                              <a href='https://www.onenote.com/'>OneNote</a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/en-in/microsoft-365/microsoft-teams/free?icid=SSM_AS_Promo_Apps_MicrosoftTeams'>
                                 Microsoft Teams
                              </a>
                           </li>
                        </ul>
                     </Content>
                     <Content>
                        <button>PCs & Device</button>
                        <ul>
                           <li>
                              <a href='https://www.microsoft.com/accessories/en-in'>
                                 Shop Xbox
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/accessories/en-in'>
                                 Accessories
                              </a>
                           </li>
                        </ul>
                     </Content>
                     <Content>
                        <button>Entertainment</button>
                        <ul>
                           <li>
                              <a href='https://www.microsoft.com/en-in/p/xbox-game-pass-ultimate/cfq7ttc0khs0?WT.mc_id=CNavGamesXboxGamePassUltimate'>
                                 Xbox Game Pass Ultimate
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/en-in/p/xbox-live-gold/cfq7ttc0k5dj?WT.mc_id=CNavGamesXboxLiveGold'>
                                 Xbox Live Gold
                              </a>
                           </li>
                           <li>
                              <a href='https://www.xbox.com/en-in/games/xbox-one?xr=shellnav'>
                                 Xbox games
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/en-in/store/games/windows?icid=TopNavWindowsGames'>
                                 PC games
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/en-in/store/games/windows?icid=TopNavWindowsGames'>
                                 Windows digital games
                              </a>
                           </li>
                        </ul>
                     </Content>
                     <Content>
                        <button>Business</button>
                        <ul>
                           <li>
                              <a href='https://www.microsoft.com/en-in/dynamics365/home'>
                                 Microsoft Azure
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/en-in/dynamics365/home'>
                                 Microsoft Dynamics 365
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/en-in/enterprise'>
                                 Microsoft 365
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/en-in/enterprise'>
                                 Microsoft Industry
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/en-in/sql-server/'>
                                 Data platform
                              </a>
                           </li>
                           <li>
                              <a href='https://go.microsoft.com/fwlink/?linkid=2026638'>
                                 Microsoft Advertising
                              </a>
                           </li>
                           <li>
                              <a href='https://powerplatform.microsoft.com/en-in'>
                                 Power Platform
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/en-in/store/b/business?icid=CNavBusinessStore'>
                                 Shop Business
                              </a>
                           </li>
                        </ul>
                     </Content>
                     <Content>
                        <button>Developer & IT </button>
                        <ul>
                           <li>
                              <a href='https://www.microsoft.com/net/'>.NET</a>
                           </li>
                           <li>
                              <a href='https://visualstudio.microsoft.com/'>
                                 Visual Studio
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/cloud-platform/windows-server'>
                                 Windows Server
                              </a>
                           </li>
                           <li>
                              <a href='https://docs.microsoft.com/en-in/'>
                                 Windows Dev Center
                              </a>
                           </li>
                           <li>
                              <a href='https://docs.microsoft.com/en-in/'>
                                 Docs
                              </a>
                           </li>
                           <li>
                              <a href='https://powerapps.microsoft.com/en-in'>
                                 Power Apps
                              </a>
                           </li>
                        </ul>
                     </Content>
                     <Content>
                        <button>Other</button>
                        <ul>
                           <li>
                              <a href='https://www.microsoft.com/en-in/download/default.aspx'>
                                 Free downloads & security
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/en-in/education?icid=CNavMSCOML0_Studentsandeducation'>
                                 Education
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/en-in/p/xbox-gift-card-digital-code/cfq7ttc0k7qk/0001?icid=TopNavMoreGiftCards'>
                                 Gift Cards
                              </a>
                           </li>
                           <li>
                              <a href='https://www.microsoft.com/licensing/default'>
                                 Licensing
                              </a>
                           </li>
                        </ul>
                     </Content>
                     <div className="header-bottom">VIEW SITEMAP<BiRightArrow/></div>
                  </div>
               </DropdownContent>
            </DropdownMenu>
         </Wrapper>
      </div>
   )
}
