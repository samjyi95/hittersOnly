import React from 'react';
import {Redirect} from 'react-router-dom'
import FirebaseConfig from "../config/FirebaseConfig"
import firebase from 'firebase'



const Login = (props) => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const handleLogin = () => {
        FirebaseConfig.auth()
            .signInWithPopup(provider)
            .then(() => {
            })
            .catch(error => console.log('there was a login error', error))
    }

    if(props.currentUser){
        console.log(props.currentUser)
        return <Redirect to='/' />
    }

    return(
        <div>
            <div className="loginAndSignupCon">
                <button onClick={handleLogin} className="loginButton">
                <div className="customButton">
                <img src="https://i.imgur.com/DNwWqYR.png" className="googleSignIn" alt="google logo"></img>
                <p>Sign-In with Google</p>
                </div>
                </button>
            </div>
            <div className="loginAndSignupCon">
                <button>
                <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp" target="blank">If you don't have an account sign up here</a>
                </button>
            </div>
        </div>
    )
}

export default Login