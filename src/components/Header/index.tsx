import React from 'react'
import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="logo do ignite" />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
