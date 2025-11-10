import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup,  signOut,  updateProfile } from "firebase/auth";

import { auth } from "../Firebase/Firebase";
import AuthContex from "../Components/Context/AuthContex";
import { useEffect, useState } from "react";

  const googleprovider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
 
    const [user, setuser] = useState(null)
    const createuser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateuser = (updateedData) => {

        return updateProfile(auth.currentUser, updateedData)
    }

    const signinuser = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signoutuser = () => {
        
        return signOut(auth)
    }

    const googlesignin = () => {
         
        return signInWithPopup(auth, googleprovider)
    }


    useEffect(() => {
        
        const unsubsribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
        })

        return () => {
            unsubsribe()
        }
    },[])
    
    const userinfo = {
        createuser,
        updateuser,
        signinuser,
        signoutuser,
        googlesignin,
        user,
    }


    return <AuthContex value={userinfo}>
        {children}
    </AuthContex>
};

export default AuthProvider;