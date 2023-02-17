import React, { useState } from 'react'

const Login = ({setAlert}) => {
    const[email, setEmail] = useState ('')
    const[password, setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()        
        if(email.trim() === 'hola@gmail.com' && password.trim() === '123456'){
            setAlert({mgs: 'Sesion iniciada'})
        }else{
            setAlert({mgs: 'Datos Incorrectos'})
        }
    }

    return (
        <div className='container'>
            <h1>Desafio</h1>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-12">
                        <input type="password" 
                            className="form-control" 
                            id="password"
                            value={password}
                            onChange={e=>setPassword(e.target.value)} />
                    </div>
                </div>
                <button className='btn btn-primary' disabled={!email.trim() || !password.trim()} >Login</button>
            </form>
        </div>
    )
}

export default Login
