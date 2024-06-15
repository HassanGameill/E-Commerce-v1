import React from 'react'
import {lazy, Suspense} from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
const MainLayout = lazy(() => import('../../Layouts/Main-Layout/MainLayout'));
const Home = lazy(() => import('../../Pages/Home/Home'));
const Products = lazy(() => import('../../Pages/Products/Products'));
const Cart = lazy(() => import('../../Pages/Cart/Cart'));
const Wishlist = lazy(() => import('../../Pages/Wishlist/Wishlist'));
const Categories = lazy(() => import('../../Pages/Categories/Categories'));
const Profile = lazy(() => import('../../Pages/User-Auth/Profile/Profile'));
const Login = lazy(() => import('../../Pages/User-Auth/Login/Login'));
const Register = lazy(() => import('../../Pages/User-Auth/Register/Register'));


import Error from '../../Pages/Error/Error'



const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Suspense fallback="loading please wait..">
        <MainLayout />
      </Suspense>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      
      {
        path: "categories",
        element: 
          <Suspense fallback="loading please wait..">
          <Categories />
      </Suspense>,
        
      },
      
      {
        path: "cart",
        element:
          <Suspense fallback="loading please wait..">
          <Cart />
          </Suspense>,
        
      },
      
      
      
      {
        path: "profile",
        element: 
          <Suspense fallback="loading please wait..">
           <Profile />
          </Suspense>,
       
      },
      
      {
        path: "wishlist",
        element:
          <Suspense fallback="loading please wait..">
           <Wishlist />
          </Suspense>,
        
      },
      
      {
        path: "login",
        element: 
           <Suspense fallback="loading please wait..">
           <Login />
          </Suspense>,
      },
      
      {
        path: "register",
        element:
          <Suspense fallback="loading please wait..">
           <Register />
          </Suspense>,
        
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