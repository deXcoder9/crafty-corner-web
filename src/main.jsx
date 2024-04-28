import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './Components/Authentication/Sign Up/SignUp.jsx';
import ArtnCraft from './Components/Art & Craft/ArtnCraft.jsx';
import AddCraftToCart from './Components/Add Craft/AddCraftToCart.jsx';
import ArtnCraftList from './Components/My Art and Craft List/ArtnCraftList.jsx';
import AuthProvider from './Auth Provider/AuthProvider.jsx';
import Home from './Components/home/Home.jsx';
import ErrorPage from './404 Page/ErrorPage.jsx';
import Root from '../Root.jsx';
import Private from './Protected Route/Private.jsx';
import CardDetails from './Components/Details/CardDetails.jsx';
import Update from './Components/Update/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element: <SignUp></SignUp>
      },
      {
        path:'/artncraft',
        element: <ArtnCraft></ArtnCraft>,
        loader: ()=> fetch("http://localhost:5000/artncraft")
      },
      {
        path: '/details/:id',
        element:  <Private> <CardDetails></CardDetails></Private>,
        loader: ()=> fetch("http://localhost:5000/artncraft")
      },
      {
        path:'/addCraft',
        element: <Private> <AddCraftToCart></AddCraftToCart> </Private>
      },
      {
        path:'/myArtnCart',
        element: <Private><ArtnCraftList></ArtnCraftList></Private>,
        loader:()=> fetch("http://localhost:5000/artncraft")
      },
      {
        path:'/update/:id',
        element: <Update></Update> ,
        loader:({params})=> fetch(`http://localhost:5000/artncraft/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
