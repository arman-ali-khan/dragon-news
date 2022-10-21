import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout./Main';
import Category from '../Pages/Category';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import News from '../Pages/News';
import Profile from '../Pages/Profile';
import Register from '../Pages/Register';
import TremsAndConditions from '../Pages/TremsAndConditions';
import PrivateRoute from './PrivateRoute';


  export  const router = createBrowserRouter([
        {path:'/', element: <Main/>, children:[
          {
            path:'/',
             element: <Home/>,
             loader:()=>fetch('http://localhost:3000/news')
          },
          {
            path:'/category/:id', 
            element: <Category />,
            loader:({params})=> fetch(`http://localhost:3000/category/${params.id}`)
          },
          {
            path:'/news/:id',
             element: <PrivateRoute> <News/></PrivateRoute>,
             loader:({params})=> fetch(`http://localhost:3000/news/${params.id}`)
          },
          {
            path:'/login',
            element:<Login />
          },
          {
            path:'/register',
            element:<Register />
          },
          {
            path:'/trems',
            element:<TremsAndConditions />
          },
          {
            path:'/profile',
            element:<PrivateRoute><Profile /></PrivateRoute>
          }
        ]}
    ])

