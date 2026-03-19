import React from 'react'
import { Outlet, useLocation} from 'react-router-dom'

function AuthLayout() {
  const location = useLocation();
  const path = location.pathname.split("/").pop();

  const bgMap = {
    login: "login.webp",
    register: "register.webp",
  };

const bg = bgMap[path];

  return (
    <main 
      className="h-screen box-border bg-cover bg-center bg-no-repeat bg-black/30 text-light"
      style={{ backgroundImage: `url('/img/${bg}')` }}
    >
      <Outlet/>
    </main>
  )
}

export default AuthLayout