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
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
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