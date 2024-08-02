import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Main.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement: <ErrorPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
