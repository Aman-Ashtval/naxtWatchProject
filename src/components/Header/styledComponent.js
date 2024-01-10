import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {BsX} from 'react-icons/bs'
import {FaArrowAltCircleRight, FaFire, FaGamepad} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

import {AiFillHome} from 'react-icons/ai'
import {RiPlayListAddLine} from 'react-icons/ri'

export const HeaderContainer = styled.div`
  padding: 16px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const HeaderLogo = styled.img`
  width: 150px;
  @media (max-width: 768px) {
    width: 120px;
  }
`

export const IconContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ImageEl = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  border: ${props =>
    props.lightTheme ? '1px solid #3b82f6' : '1px solid #ffffff'};
  color: ${props => (props.lightTheme ? '#3b82f6' : '#ffffff')};
  font-size: 16px;
  font-weight: 500;
  padding: 5px 15px;
  border-radius: 7px;
  cursor: pointer;
  @media (max-width: 768px) {
    border: none;
    padding: 5px;
    color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  }
`

export const SpanText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`

// theme change button -------------------------------------------------------->
export const ThemeChangeButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px;
  margin: 0px 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    margin: 0px;
  }
`

// popup container div
export const PopupContainer = styled.div`
  width: 300px;
  padding: 25px;
  background-color: ${props => (props.lightTheme ? '#ffffff' : ' #212121')};
  border-radius: 5px;
`

export const PopupMsg = styled.p`
  color: ${props => (props.lightTheme ? '#4f46e5' : '#f8fafc')};
  font-size: 16px;
  font-weight: 550;
  text-align: center;
  margin-top: 0px;
`

export const CustomButton = styled(LogoutBtn)`
  border: ${props => (props.fill ? 'none' : '1px solid #d7dfe9')};
  background-color: ${props => (props.fill ? '#3b82f6' : 'transparent')};
  color: ${props => (props.fill ? '#ffffff' : '#64748b')};
  font-size: 16px;
  margin: 10px;
  font-weight: 550;
  border-radius: 2px;
  padding: 6px 10px;
  cursor: pointer;
`

export const MenuButton = styled.button`
  margin: 0px 8px;
  border: none;
  padding: 5px;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Popup for menu item in small devices ----------------------------->
export const PopupEl = styled(Popup)`
  &-content {
    width: 100%;
  }
`

// logout popup
export const LogoutPopup = styled(Popup)`
  &-content {
    width: 400px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
`

// Popup container
export const MenuContainer = styled.div`
  align-self: stretch;
  width: 100%;
  height: 100vh;
  margin: 0px;
  padding: 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  background: ${props => (props.lightTheme ? '#ffffff' : ' #212121')};
`

// cancel button
export const CancelButton = styled.button`
  background-color: transparent;
  align-self: flex-end;
  padding: 5px;
  border: none;
  cursor: pointer;
`

// cancel icon
export const CancelIcon = styled(BsX)`
  font-size: 28px;
  color: ${props => (props.lightTheme ? ' #212121' : '#ffffff')};
`

// small device icons ------------------------------------->
export const LogoutArrow = styled(FaArrowAltCircleRight)`
  font-size: 30px;
  color: inherit;
  @media (min-width: 768px) {
    display: none;
  }
`

export const MenuIcon = styled(GiHamburgerMenu)`
  font-size: 30px;
  color: inherit;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`

// sidebar copy properties

// menu unordered list
export const MenuItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
  color: ${props => (props.lightTheme ? '#475569' : ' #f8fafc')};
  @media (max-width: 768px) {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

// menu list item
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  color: inherit;
  background-color: ${props => {
    const {isActive, lightTheme} = props
    if (isActive && lightTheme) {
      return '#f1f1f1'
    }
    if (isActive && lightTheme === false) {
      return '#383838'
    }
    return 'transparent'
  }};
  font-weight: ${props => (props.isActive ? 'bold' : '400px')};
  @media (max-width: 768px) {
    padding-left: 30%;
  }
`

// menu Link
export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-left: 16px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

// Home icon
export const HomeIcon = styled(AiFillHome)`
  font-size: 20px;
  color: ${props => (props.active === 'true' ? ' #ff0b37' : 'inherit')};
`

// Fire Icon
export const FireIcon = styled(FaFire)`
  font-size: 20px;
  color: ${props => (props.active === 'true' ? ' #ff0b37' : 'inherit')};
`

// Game Icon
export const GameIcon = styled(FaGamepad)`
  font-size: 20px;
  color: ${props => (props.active === 'true' ? ' #ff0b37' : 'inherit')};
`

// Play List Icon
export const SaveListIcon = styled(RiPlayListAddLine)`
  font-size: 20px;
  color: ${props => (props.active === 'true' ? ' #ff0b37' : 'inherit')};
`
