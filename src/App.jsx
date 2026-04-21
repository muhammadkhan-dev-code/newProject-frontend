import { Outlet } from 'react-router'
import Footer from './features/auth/pages/Footer'
import Header from './features/auth/pages/Header'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
