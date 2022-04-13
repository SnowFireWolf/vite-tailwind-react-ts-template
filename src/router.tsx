
import React from 'react'
import { useRoutes } from 'react-router-dom'

import Home from '@/pages/Home'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'



export default function RouteConfig() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ]);
}
