
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useRef } from 'react'
import app from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const emailFeild = useRef('');
    const passwordFeild = useRef('');
    const nameFeild = useRef('');

    const auth = getAuth(app);

    const register = (e) => {
        e.preventDefault()
        const email = emailFeild.current.value;
        const password = passwordFeild.current.value;
        const displayName = nameFeild.current.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              
                updateUserName(displayName)
                const notify = () => toast('Sign Up Successfull');
                notify()
                emailVerification()
            })
            .catch((error) => {
                const errorMessage = error.code;
                
                const notify = () => toast(errorMessage);
                notify()
            });
    }
    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then((result) => {
                console.log(result)

            })
            .catch((error) => {
            })
    }
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                const notify = () => toast('User Verification Mail Sent Plz Check Mail & verify user');
                notify()
            });
    }

    return (
        <>
            <form onSubmit={register} className='login animate__animated animate__fadeInUp'>
                <input ref={nameFeild} type="text" placeholder='Name' required />
                <input ref={emailFeild} type="email" placeholder='E-mail Adress' required />
                <input ref={passwordFeild} type="password" placeholder='Password' required />
                <button className='btn-login mb-5'>Register</button>

            </form>

            <ToastContainer />
        </>
    )
}

export default Register