import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from '../../Layouts/Main-Layout/MainLayout'
import Home from '../../Pages/Home/Home'
import Products from '../../Pages/Products/Products'
import Cart from '../../Pages/Cart/Cart'
import Categories from '../../Pages/Categories/Categories'
import Profile from '../../Pages/User-Auth/Profile/Profile'
import Login from '../../Pages/User-Auth/Login/Login'
import Register from '../../Pages/User-Auth/Register/Register'
import Error from '../../Pages/Error/Error'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      
      {
        path: "categories",
        element: <Categories />,
      },
      
      {
        path: "cart",
        element: <Cart />,
      },
      
      
      
      {
        path: "profile",
        element: <Profile />,
      },
      
      {
        path: "login",
        element: <Login />,
      },
      
      {
        path: "register",
        element: <Register />,
      },
      
      {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({params}) => {
          if (typeof params.prefix !== 'string' || !/^[a-z]+$/i.test(params.prefix)) {
            throw new Response("Bad Request", {
              statusText: 'Category not found',
              status: 400,
              
            });
          }
          return true;
        } ,
      },
      
    ],
  },
]);


const AppRouters = () => {
  return <RouterProvider router={router}/>;
  
}

export default AppRouters