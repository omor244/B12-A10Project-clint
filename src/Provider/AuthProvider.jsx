import { createUserWithEmailAndPassword,  updateProfile } from "firebase/auth";

import { auth } from "../Firebase/Firebase";
import AuthContex from "../Components/Context/AuthContex";


const AuthProvider = ({ children }) => {

    const createuser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateuser = (updateedData) => {

        return updateProfile(auth.currentUser, updateedData)
    }
    
    const userinfo = {
        createuser,
        updateuser
    }


    return <AuthContex value={userinfo}>
        {children}
    </AuthContex>
};

export default AuthProvider;