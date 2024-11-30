import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//adding route start>>>
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Orders from './components/Orders.jsx';
import PrivetRoutes from './Routes/PrivetRoutes.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'orders',
        element:<PrivetRoutes>
            <Orders></Orders>
          </PrivetRoutes>
      }
    ]
  },
]);
//adding route end>>>

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
