import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import History from './pages/History'
import DefaultLayout from './layouts/DefaultLayout'

const Router: React.FC = () => {
  return (
    <Routes>
      {/* para deixar o header em todas as páginas */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}

export default Router
