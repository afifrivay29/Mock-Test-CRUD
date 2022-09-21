import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";


function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const Register = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://notflixtv.herokuapp.com/api/v1/users', {
                name: name,
                email: email, 
                password: password
            });
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            }
        }
    }

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
                <h1 className='register title is-3 has-text-centered'>Register</h1>
                <form onSubmit={ Register } className='box'>
                    <p className='has-text-centered'>{message}</p>
                    <div className="field mt-5">
                        <label className='label'>Name</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className='label'>Email</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mb-5">
                        <button type='submit' className='button is-dark is-fullwidth'>Register</button>
                    </div>
                    <p className='has-text-centered'>Already have account?
                      <Link to="/" className="link-login">
                        Login
                      </Link>
                    </p>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
