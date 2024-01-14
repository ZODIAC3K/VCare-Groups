import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
    children:[
      {
        path: "login",
        // add element when made
      },
      {
        path: "services",
        // add element when made
        children: [
          {
            path: ':service'
            // add element when made
          }
        ]
      },
    ]
  }])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
