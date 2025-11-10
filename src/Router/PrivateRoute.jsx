import { use } from 'react';
import { Navigate } from 'react-router';
import AuthContex from '../Components/Context/AuthContex';
import Loadding from '../Loadder/Loadding';

const PrivateRoute = ({ children }) => {
    const { user, loadding } = use(AuthContex)

    if (loadding) {
        return <Loadding></Loadding>
    }
    
    if (user) {
        return children
    }
 


    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;