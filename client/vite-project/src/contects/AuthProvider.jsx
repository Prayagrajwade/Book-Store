import React, { createContext, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password)        .then((userCredential) => {
            // User signed up successfully
            setLoading(false);
            return userCredential.user;
        })
        .catch((error) => {
            // Handle any errors here
            setLoading(false);
            throw error; // Rethrow the error to be caught by the component
        });
    }

   

    const authInfo = {
        createUser
    }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
