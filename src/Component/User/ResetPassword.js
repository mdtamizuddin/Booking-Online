import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import app from '../../firebase.init';

const ResetPassword = (e) => {
    
    const auth = getAuth(app)
    const [email , setEmail] = useState('')
    const ResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                const notify = () => toast(email + "Reset Passwor Mail Sent ")
                notify()
                setEmail('')
            })
            .catch((error) => {
                const errorCode = error.code;
                
                const notify = () => toast(errorCode)
                notify()
            });
    }
    return (
        <>
        <div  >
            <input onChange={(e)=> setEmail(e.target.value)} type="email" className='form-control'  placeholder='Type you Email' required />
            <button onClick={ResetPassword} type='submit' className='btn btn-danger mt-3'>Reset</button>
        </div>
        <ToastContainer />
        </>
    )
}

export default ResetPassword