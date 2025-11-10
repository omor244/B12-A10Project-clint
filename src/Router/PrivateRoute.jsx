import { use } from 'react';
import { Navigate } from 'react-router';
import AuthContex from '../Components/Context/AuthContex';

const PrivateRoute = ({ children }) => {
    const { user, loadding } = use(AuthContex)

    if (loadding) {
        return <p>loadding....</p>
    }
    
    if (user) {
        return children
    }
 


    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;