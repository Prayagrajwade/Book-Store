import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from "../Home/home";
import App from "../App";
import Shop from "../Shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../Shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {path:'/',
            element:  <Home />
         },
         {
            path:'/Shop',
            element:<Shop></Shop>
         },
         {
            path:'/About',
            element:<About></About>
         },
         {
            path:'/Blog',
            element:<Blog></Blog>
         },
         {
            path:'/SingleBook',
            element:<SingleBook></SingleBook>
         },
         {
          path:"/books/:id",
          element:<SingleBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/books/${params.id} `)
         }
        ]

    },
    {
        path:"/admin/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
              path:"/admin/dashboard",
              element:  <Dashboard/>
            },
            {
                path:"/admin/dashboard/upload",
                element:<UploadBook/>
            },
            {
                path:"/admin/dashboard/manage",
                element:<ManageBook/>
            },
            {
                path:"/admin/dashboard/edit/:id",
                element:<EditBooks/>,
                loader: ({params}) => fetch(`http://localhost:5000/books/${params.id} `)
            }
        ]
    },
    {
        path : "sign-up",
        element : <Signup/>
    }
])

export default router;
