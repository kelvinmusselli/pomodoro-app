import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import { LayoutContainer } from './styles'

const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      {/* outlet é como se fosse o children */}
      <Outlet />
    </LayoutContainer>
  )
}

export default DefaultLayout
