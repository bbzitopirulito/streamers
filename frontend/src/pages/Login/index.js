import React, { useState } from 'react';

import api from '../../services/api';

import './styles.css';

export default function Login({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [keeploggedin, setKeepLoggedIn] = useState(false);

    async function handleSubmit(event) {        
        event.preventDefault();
        
        const response = await api.get('./user', { 
            email,
            password                                     
        });

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
                            <div className="keeploggedin">
                                <input 
                                    type="checkbox"                                 
                                    name="loggedin" 
                                    id="loggedin"                                    
                                    onChange={event => setKeepLoggedIn(event.target.checked)}
                                />
                                <label htmlFor="platform">Keep me logged in!</label> 
                            </div>

                            <button className="btn" type="submit">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}