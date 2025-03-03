import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const authContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const[user, setUser] = useState(null)
    const[loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
          

    }


useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        console.log("current user", currentUser)
        setLoading(false)
    });
    return()=> {
        return unsubscribe;
    }
},[])



    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        updateUserProfile,
        signOutUser
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;