import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'


const Registration = () => {
     const [formData, setFormData] = useState({
          email: '',
          password: ''
     })

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
               ...formData,
               [name]: value,
          })
     }

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               const response = await fetch("https://regres.in/api/register", {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: credentials.email, password: credentials.password })
               });
          }
          catch (error) {
          }
     }

     return (
          <div>
               <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                         <label htmlFor="email" className="form-label">Email address</label>
                         <input type="email" className="form-control" value='' onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                         <label htmlFor="password" className="form-label">Password</label>
                         <input type="password" className="form-control" value='' onChange={onChange} name="password" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
               </form>
          </div>
     )
}

export default Registration
