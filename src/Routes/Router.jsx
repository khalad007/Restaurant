import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";


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
          element: <Menu></Menu>
        },
        {
          path: 'ourshop/:category',
          element: <OurShop></OurShop>
        }
      ]
    },
  ]);