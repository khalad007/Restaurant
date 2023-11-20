import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/cart";
import AllUsers from "../layouts/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <PrivateRoutes><Menu></Menu></PrivateRoutes>
      },
      {
        path: 'ourshop/:category',
        element: <OurShop></OurShop>
      }
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },

// admin admin admin admin admin admin
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItem',
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      }

    ]
  }
]);