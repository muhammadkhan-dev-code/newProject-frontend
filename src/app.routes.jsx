import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router'

import App from './App'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Protected from './features/auth/component/Protected'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Protected><h3>Home</h3></Protected>} />
    </Route>
  )
)
