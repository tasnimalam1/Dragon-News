import { createBrowserRouter, Navigate } from "react-router-dom";
import NewsCategory from "../Component/mainLayoutComponent/NewsCategory/NewsCategory";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <NewsCategory></NewsCategory>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ],
    },
    {
        path: '/news',
        element: <h1>h1news layout</h1>
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <h2>login</h2>
            },
            {
                path: '/auth/register',
                element: <h2>Register</h2>
            }
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])

export default router;