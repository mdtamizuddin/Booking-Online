import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

import { toast, ToastContainer } from 'react-toastify';
import app from '../../firebase.init';
import ResetPassword from './ResetPassword';

const Login = () => {
    const auth = getAuth(app)
    const emailFeild = useRef('');
    const passwordFeild = useRef('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const login = (e) => {
        e.preventDefault()
        const email = emailFeild.current.value;
        const password = passwordFeild.current.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // const user = result.user.email;
                const notify = () => toast("Door is Opend For You")
                notify()

            })
            .catch((error) => {
                const errorCode = error.code;
                const notify = () => toast(errorCode)
                notify()
            })
    }
    return (
        <>
        <form action='submit' onSubmit={login} className='login animate__animated animate__fadeInRight'>
            <input ref={emailFeild} type="email" placeholder='E-mail Adress' required />
            <input ref={passwordFeild} type="password" placeholder='Password' required />
            <button className='btn-login'>Login</button>
            <ToastContainer />
        </form>

        <button onClick={()=> handleShow()} className='btn-forget mt-3 ms-0'>Forget Password ?</button>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Reset You Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ResetPassword />
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Login