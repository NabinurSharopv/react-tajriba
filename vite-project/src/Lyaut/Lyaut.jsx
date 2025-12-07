import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Lyaut = () => {
  return (
    <>
    <Nav />
    <main>
     <Outlet />
    </main>
    </>
  )
}

export default Lyaut