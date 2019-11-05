import React, { useState } from 'react';

import './styles.css';

export default function Login({history}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {        
        event.preventDefault();
        history.push('/feed');
    }

    return (
        <>
            <div className="loginwrapper">
                <div className="all">
                    <div className="welcomeback">
                        <h1>Hey! <br></br>Welcome Back!</h1>
                        <p>
                            It's nice to have you back!
                        </p>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>                                        
                            <label htmlFor="email">E-mail</label> 
                            <input 
                                type="email" 
                                id="email"                                 
                                value={email} 
                                onChange={event => setEmail(event.target.value)}                         
                            />
                            <label htmlFor="password">Password</label> 
                            <input 
                                type="password" 
                                id="password"                                 
                                value={password} 
                                onChange={event => setPassword(event.target.value)}                         
                            />
                            <label htmlFor="platform">Keep me logged in!</label> 
                            <input type="checkbox" name="loggedin" id="loggedin"/>

                            <button className="btn" type="submit">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}