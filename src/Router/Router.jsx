import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Challenge from "../Components/Challenge/Challenge";
import Myactivity from "../Components/Myactivity/Myactivity";
import axios from "axios";
import Trips from "../Components/Trips/Trips";
import UseAPIhook from "../Hooks/UseAPIhook";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";

const axiosapi = UseAPIhook()

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                 path: '/',
                element: <Home></Home>,
                loader: () => axios('http://localhost:3000/challenges/limit')
                
            },
            {
                path: '/challenges',
                element: <Challenge></Challenge>
            },
            {
                path: '/myactivity',
                element: <Myactivity></Myactivity>,
            },
            {
                path: '/trips',
                element: <Trips></Trips>,
                loader: () => axiosapi('/trips')

            }
        ]
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]);

export default router