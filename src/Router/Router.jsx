import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Challenge from "../Components/Challenge/Challenge";
import Myactivity from "../Components/Myactivity/Myactivity";
import axios from "axios";


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
                element: <Myactivity></Myactivity>
            }
        ]
    },
]);

export default router