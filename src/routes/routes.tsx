import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Signin } from '@/pages/Signin'

import { Home } from '../pages/Home'
import { PrivateRoutes } from './index'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
