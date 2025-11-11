import { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import AuthContex from '../Components/Context/AuthContex';
import Loadding from '../Loadder/Loadding';

const PrivateRoute = ({ children }) => {
    const { user, loadding } = use(AuthContex)

    const location = useLocation()

   

    if (loadding) {
        return <Loadding></Loadding>
    }
    
    if (user) {
        return children
    }
 


    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;