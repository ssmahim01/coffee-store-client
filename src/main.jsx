import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './Layouts/MainLayout';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './pages/Home.jsx';
import ViewCoffee from './components/ViewCoffee.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://espresso-emporium-server-lyart.vercel.app/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/viewCoffee/:id",
        loader: ({params}) => fetch(`https://espresso-emporium-server-lyart.vercel.app/coffee/${params.id}`),
        element: <ViewCoffee></ViewCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`https://espresso-emporium-server-lyart.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/usersProfile",
        element: <Users></Users>,
        loader: () => fetch("https://espresso-emporium-server-lyart.vercel.app/users")
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)