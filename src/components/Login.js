import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const Auth = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://notflixtv.herokuapp.com/api/v1/users/login', {
            email: email, 
            password: password
        });
        navigate("/dashboard");
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
                <h1 className='login title is-3 has-text-centered '>Login</h1>
                <form onSubmit={ Auth } className='box'>
                <p className='has-text-centered'>{message}</p>
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
                        <button className='button is-dark is-fullwidth'>Login</button>
                    </div>
                    <p className='has-text-centered'>Don't Have an account?  
                      <Link to="/register" className="link-register">
                        Register
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

export default Login
