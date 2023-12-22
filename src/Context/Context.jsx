import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase.config";


export const AuthContext = createContext(null);

// google provider
const googleProvider = new GoogleAuthProvider();

// github provider
const githubProvider = new GithubAuthProvider();

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // google log in popup
  const googleLogin = () => {
     setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github login popup
  const githubLogin = () => {
     setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

 

  // email and password sign up
  const emailSignup = (email, password) => {
     setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const emailLogin = (email, password) => {
     setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out user
  const logOut = () => {
     setLoading(true);
    return signOut(auth);
  };

  
   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       setUser(user);
       setLoading(false);
     });
     return () => {
       unsubscribe();
     };
   }, []);
  const authInfo = {
    googleLogin,
    githubLogin,
    emailLogin,
    emailSignup,
    logOut,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
