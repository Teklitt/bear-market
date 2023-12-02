import React from "react";
import {auth, provider} from "./firebase-config";
import {signInWithPopup} from 'firebase/auth'
import "./css/Login.css"

export default function Login({setIsAuth}) {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
        })
    }
    return (
        <div>
            <div className="login-container">
                <h1 className="login-header">Sign Up!</h1>
                <p>*Please sign in with your Morgan Email*</p>
                <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        </div>
    )
}