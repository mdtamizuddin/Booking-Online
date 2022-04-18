import React from 'react'
import firebase from '../images/firebase.png'
const Blogs = () => {
  return (
    <div className='container d-flex justify-content-center flex-column '>
        <img className='mx-auto d-block img-fluid' src='https://www.acns.colostate.edu/media/sites/100/2021/03/Duo-Process.png' alt="" />
        <p className='mt-5'>what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.</p>
    
    <img className='mt-5' src={firebase} alt="" />
    <p className='mt-5'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
     
   <h2 className='mt-5'>Firebase Alternatives</h2>
   <ol>
     <li>Parse – Open Source Backend Platform;</li>
     <li>Back4app – Parse Hosting Platform;</li>
     <li>Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;</li>
     <li>Backendless – Mobile Backend and API Services Platform;</li>
     <li>Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;</li>
     <li>Heroku – Platform as a service backed by Salesforce.</li>
     <li>Deployd – Simple core library, with a modular API for your application;</li>
   </ol>
    </div>
  )
}

export default Blogs