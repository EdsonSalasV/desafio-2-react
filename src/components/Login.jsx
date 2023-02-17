import React, { useState } from 'react'

const Login = () => {
    const[email, setEmail] = useState ('')
    return (
        <div className='container'>
            <h1>Desafio</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="name@example.com" 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-12">
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
