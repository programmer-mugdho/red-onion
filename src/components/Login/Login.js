import React, { useContext, useState } from 'react';
import './Login.css'
import logo from '../../images/logo2.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from '../../App'
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useContext(UserContext)
    const [haveAccount, setHaveAccount] = useState(false)
    // console.log(user)
    const handleSignUp = (e) => {
        if (user.password === user.confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.isSignedIn = true
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    updateUserName(user.name)
                    history.replace(from)
                })
                .catch(function (error) {
                    const newUserInfo = { ...user }
                    var errorMessage = error.message;
                    newUserInfo.error = errorMessage
                    newUserInfo.success = false
                    newUserInfo.isSignedIn = false
                    setUser(newUserInfo)
                });
        }
        else{
            const newUserInfo = { ...user }
            newUserInfo.error = "Password didn't match"
            setUser(newUserInfo)
        }
        e.preventDefault()
    }
    const handleSignIn = (e)=>{
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = { ...user }
                newUserInfo.error = ''
                newUserInfo.isSignedIn = true
                newUserInfo.success = true
                newUserInfo.name = res.user.displayName
                setUser(newUserInfo)
                history.replace(from)
                // console.log(res)
            })
            .catch(function (error) {
                const newUserInfo = { ...user }
                var errorMessage = error.message;
                newUserInfo.error = errorMessage
                newUserInfo.success = false
                newUserInfo.isSignedIn = false
                setUser(newUserInfo)
            });
        e.preventDefault()
    }
    const updateUserName = name=>{
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        })
        .then(res=>{   
        })
        .catch(err=>console.log(err))
    }
    const handleBlur = (e) => {
        let isFormValid = true
        if (e.target.name === 'password') {
            isFormValid = e.target.value.length > 5;
            // console.log(isPasswordValid)
        }
        // if (e.target.name === 'confirmPassword') {
        // }
        // isFormValid = password===confirmPassword
        if (isFormValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
        }
    }
    // console.log(user)
    // console.log(haveAccount, 'account')
    return (
        <div className='login-banner'>
            <div className="form-container">
                <img style={{ margin: '35px 0' }} src={logo} width='220' alt="" />

                <form onSubmit={!haveAccount ? handleSignUp : handleSignIn}>
                    {!haveAccount && < input type="text" onBlur={handleBlur} placeholder='Name' required name='name' />}
                    <input onBlur={handleBlur} type="email" placeholder='Email' required name='email' />
                    <input onBlur={handleBlur} type="password" placeholder='Password' required name='password' />
                    {
                        !haveAccount && <input onBlur={handleBlur} type="password" placeholder='Confirm Password' required name='confirmPassword' />
                    }
                    <input type="submit" value={haveAccount?"Sign in":"Sign up"} className='submit' />
                </form>

                <p onClick={() => setHaveAccount(!haveAccount)}>{haveAccount ? "Don't" : 'Already'} have an account?</p>
                {user.error && <p style={{ color: 'red' }}>{user.error}</p>}
                {user.success && <p style={{ color: 'green' }}>You Logged In Successfully</p>}


            </div>
        </div>
    );
};

export default Login;
