import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Resister';
import Dashboard from '../Layout/Dashboard';
import Contact from '../Component/Contact/Contact';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element:<Register></Register>
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {

      }
    ]
  }
]);

export default Router;