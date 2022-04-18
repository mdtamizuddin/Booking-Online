import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import app from '../../firebase.init';

const Login = () => {
    const auth = getAuth(app)
    const emailFeild = useRef('');
    const passwordFeild = useRef('');


    const login = (e) => {
        e.preventDefault()
        const email = emailFeild.current.value;
        const password = passwordFeild.current.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user.email;
                const notify = () => toast(user  + " " + "Opend Door For You")
                notify()
            })
            .catch((error) => {
                const errorCode = error.code;
                const notify = () => toast(errorCode)
                    notify()
            })
    }

    return (
        <form action='submit' onSubmit={login} className='login'>
            <input ref={emailFeild} type="email" placeholder='E-mail Adress' required />
            <input ref={passwordFeild} type="password" placeholder='Password' required />
            <button className='btn-login'>Login</button>
            <button className='btn-forget'>Forget Password ?</button>

            <ToastContainer />
        </form>
    )
}

export default Login