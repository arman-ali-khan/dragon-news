import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

const auth = getAuth(app)
export const AuthContext = createContext()
const UserContex = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password)
}

const loginUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
} 

const getName = (profile)=>{
    setLoading(true)
    updateProfile(auth.currentUser, profile)
   
}

const verifyEmail = ()=>{
    return sendEmailVerification(auth.currentUser)
}




  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser)
        }
        setLoading(false)
    })
    return ()=> unsubscribe()
},[])

const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}

const authInfo = {setLoading, user,createUser,loginUser,logOut,getName,verifyEmail, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContex;