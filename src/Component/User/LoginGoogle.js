import { getAuth , GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const LoginGoogle = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const [merror, setErro] = useState('')
    const [signInWithGoogle, error] = useSignInWithGoogle(auth);

    const SigninGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
        
        }).catch((error) => {
         
        });
    }
    return (
        <div>
            <h3> or </h3>
            <button onClick={SigninGoogle} className="login-google">Google</button>
            <p>{merror}</p>
        </div>
    )
}

export default LoginGoogle