import React from 'react'

const Login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
                <h1 className='login title is-3 '>Login</h1>
                <form className='box'>
                    <div className="field mt-5">
                        <label className='label'>Email</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder='Email'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder='Password'/>
                        </div>
                    </div>
                    <div className="field mb-5">
                        <button className='button is-dark is-fullwidth'>Login</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
