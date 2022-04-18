import { getAuth , GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const LoginGoogle = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const SigninGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            navigate(from , {replace : true})
        }).catch((error) => {
         
        });
    }
    return (
        <div>
            <h3> or </h3>
            <button onClick={SigninGoogle} className="login-google">Google</button>
            
        </div>
    )
}

export default LoginGoogle