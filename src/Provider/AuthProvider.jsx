import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup,  signOut,  updateProfile } from "firebase/auth";

import { auth } from "../Firebase/Firebase";
import AuthContex from "../Components/Context/AuthContex";
import { useEffect, useState } from "react";

  const googleprovider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [loadding, setloadding] = useState(true)
 
    const [user, setuser] = useState(null)
    const createuser = (email, password) => {
        setloadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateuser = (updateedData) => {
         setloadding(true) 
        return updateProfile(auth.currentUser, updateedData)
    }

    const signinuser = (email, password) => {
        setloadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signoutuser = () => {
        setloadding(true)
        return signOut(auth)
    }

    const googlesignin = () => {
         setloadding(true)
        return signInWithPopup(auth, googleprovider)
    }


    useEffect(() => {
        
        const unsubsribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setloadding(false)
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
        loadding,
        user,
    }


    return <AuthContex value={userinfo}>
        {children}
    </AuthContex>
};

export default AuthProvider;