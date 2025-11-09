import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Challenge from "../Components/Challenge/Challenge";
import Myactivity from "../Components/Myactivity/Myactivity";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                index: true,
                element: <Home></Home>
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