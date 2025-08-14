import { Outlet } from "react-router-dom"
import NavBarOwner from "../../components/owner/NavBarOwner"
import Sidebar from "../../components/owner/Sidebar"

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <NavBarOwner />
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout