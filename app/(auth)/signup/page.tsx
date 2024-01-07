"use client";

import React, { useState } from 'react';
import { db } from '../../../firebase/config.js';


export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message,setMessage] = useState('');

  const handleSubscribe = async (e : any) => {
    e.preventDefault();

    try {
      await db.collection('sharma-dental-clinic').add({name, email ,contact});
      setEmail('');
      setMessage('Thanks for subscribing!');
    } catch (error) {
      console.error("Error adding email: ", error);
      setMessage('Failed to subscribe. Try again later.');
    }
  };


  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">From Consults to Smiles: 
            <br />
            Let's Talk Dental!</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto" >
            <form onSubmit={handleSubscribe}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required value={name}
          onChange={e => setName(e.target.value)}/>
          
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required value={email}
          onChange={e => setEmail(e.target.value)}/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="contact">Phone No.<span className="text-red-600">*</span></label>
<input id="contact" type="number" className="form-input w-full text-gray-800" placeholder="Enter your number" required value={contact}
       onChange={e => setContact(e.target.value)}/>

                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Submit</button>
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center mt-3">
                We will contact you as soon as possible for booking an appoitment with us.
              </div>
            </form>
           
            {message && <div className="text-center mt-4">{message}</div>}

            
          </div>

        </div>
      </div>
    </section>
  )
}
