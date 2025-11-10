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
import PrivateRoute from "./PrivateRoute";
import Detals from "../Pages/Detals";
import AddChallenge from "../Components/AddChallenges/AddChallenge";
import MyActiveDetails from "../Pages/MyActiveDetails";
import JoinChallenge from "../Components/JoinChallenges/JoinChallenge";
import ErrorPage from "../Error/ErrorPage";
import Loadding from "../Loadder/Loadding";

const axiosapi = UseAPIhook()

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <Loadding></Loadding>,
        children: [
            {
                 path: '/',
                element: <Home></Home>,
                loader: () => axios('http://localhost:3000/challenges/limit')
                
            },
            {
                path: '/challenges',
                element: <Challenge></Challenge>,
                loader: () => axiosapi('/challenges')
            },
            {
                path: '/myactivity',
                element: <PrivateRoute>
                    <Myactivity></Myactivity>
                </PrivateRoute>,
            },
            {
                path: '/trips',
                element: <Trips></Trips>,
                loader: () => axiosapi('/trips')

            },
            {
                path: '/details/:id',
                element: <Detals></Detals>
               
            },
            {
                path: '/addchallenge',
                element: <PrivateRoute>
                    <AddChallenge></AddChallenge>
                </PrivateRoute>
            },
            {
                path: '/myactivedetails/:id',
                element: <PrivateRoute>
                    <MyActiveDetails></MyActiveDetails>
                </PrivateRoute>
            },
            {
                path: '/join/:id',
                element: <PrivateRoute>
                    <JoinChallenge></JoinChallenge>
                </PrivateRoute>,
            
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