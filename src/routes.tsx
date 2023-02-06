import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import Cats from './pages/Main/Cats'
import Dogs from './pages/Main/Dogs'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Dogs />} />
        <Route path='/cats' element={<Cats />} />
      </Route>
    </Routes>
  )
}
