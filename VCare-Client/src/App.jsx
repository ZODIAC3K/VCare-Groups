import { createContext, useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login_Signup from './pages/Login_Signup'

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
      element: <Login_Signup />,
      children: [
        {
          path: ':service',
          // add element when made
        }
      ]
    },
  ])

  return (
    <AuthContext.Provider value={[user, setUser]}>
      <RouterProvider router={router}/>
    </AuthContext.Provider>
  )
}

export default App
