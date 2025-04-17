import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router";
import Root from '../componenets/Pages/Roots/Root';
import Error from '../componenets/Pages/Error/Error';
import Home from '../componenets/Pages/Home/Home';
import About from '../componenets/Pages/About/About';
import BookDetails from '../componenets/BookDetails/BookDetails';
import ReadList from '../componenets/Pages/ReadList/ReadList';

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<Error/>,
      children:[
        {index:true,
          loader:()=>fetch('bookData.json'),
        Component:Home},
        {path:"/about",Component:About},
        {path:"/readList",
          loader:()=>fetch('bookData.json'),
           Component:ReadList},

        {path:"/bookdetails/:id",
          loader:()=>fetch('bookData.json'),
          Component:BookDetails}
      ]
    },
  ]);
  

