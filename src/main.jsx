import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
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
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import UpdateProfile from './pages/updateProfile.jsx';
import UsersProfile from './components/UsersProfile.jsx';

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
        element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>
      },
      {
        path: "/viewCoffee/:id",
        loader: ({params}) => fetch(`https://espresso-emporium-server-lyart.vercel.app/coffee/${params.id}`),
        element: <ViewCoffee></ViewCoffee>
      },
      {
        path: "/updateCoffee/:id",
        element: <PrivateRoute><UpdateCoffee></UpdateCoffee></PrivateRoute>,
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
      // {
      //   path: "/usersProfile",
      //   element: <PrivateRoute><Users></Users></PrivateRoute>,
      //   loader: () => fetch("https://espresso-emporium-server-lyart.vercel.app/users")
      // },
      {
        path: "/usersProfile",
        element: <PrivateRoute><UsersProfile></UsersProfile></PrivateRoute>,
      },
      {
        path: "/updateProfile/:id",
        element: <UpdateProfile></UpdateProfile>,
        loader: ({params}) => fetch(`https://espresso-emporium-server-lyart.vercel.app/users/${params.id}`)
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      }
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)