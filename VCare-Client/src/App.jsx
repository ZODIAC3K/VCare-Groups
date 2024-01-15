import { createContext, useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login_Signup from './pages/Login_Signup'
import Vcare_service_combo from './pages/Vcare_service_combo'
import Vcare_service from './pages/Vcare_service'

export const AuthContext = createContext(false);

function App() {
  const [user, setUser] = useState(false);

  const router = createBrowserRouter([{
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login_Signup />,
    },
    {
      path: "services",
      element: <Vcare_service_combo />,
    },
    {
      path: "labs",
      element: <Vcare_service location={"labs"}/>
    },
    {
      path: "pharmacy",
      element: <Vcare_service location={"pharmacy"}/>
    },{
      path: "h&u",
      element: <Vcare_service location={"h&u"}/>
    },
  ])

  return (
    <AuthContext.Provider value={[user, setUser]}>
      <RouterProvider router={router}/>
    </AuthContext.Provider>
  )
}

export default App
