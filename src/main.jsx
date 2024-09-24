import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Applied from './component/Applied/Applied';
import JobDetails from './component/FeaturedJobs/JobDetails';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      // {
      //   path: '/jobs', 
      //   element: <Home></Home>
      // },
      {
        path: '/applied',
        element: <Applied></Applied>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Career Hub</title>
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)
