import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function SingUp({ history }) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [platform, setPlatform] = useState('twitch');

    async function handleSubmit(event) {
        event.preventDefault();

        history.push('/feed');
    }

    return (
        <>
            <div className="signupwrapper">
                <div className="all">
                    <div className="about">
                        <h1>Information exchange <br></br>For Streamers</h1>
                        <p>
                            Streamers is a platform where streamers can find info 
                            about streaming tips, tricks and even rates about their stream! 
                            If you're a viewer, you can also join us to rate streamers, tell their pros and cons, 
                            and even say what they can do to improve their performances in their streams!                    
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
                            <label htmlFor="username">Username</label> 
                            <input 
                                type="text" 
                                id="username"                                 
                                value={username} 
                                onChange={event => setUsername(event.target.value)} 
                            />
                            <label htmlFor="password">Password</label> 
                            <input 
                                type="password" 
                                id="password"                                 
                                value={password} 
                                onChange={event => setPassword(event.target.value)}                         
                            />
                            <label htmlFor="platform">Platform</label> 
                            <select value={platform} id="platform" onChange={event => setPlatform(event.target.value)}>
                                <option value="twitch">Twitch</option>                    
                                <option value="mixer">Mixer</option>                    
                                <option value="hitbox">Hitbox</option>                    
                                <option value="facebook">Facebook</option>                    
                                <option value="youtube">Youtube</option>                    
                                <option value="nimo">Nimo</option>                    
                            </select>

                            <button className="btn" type="submit">Sign Up</button>

                            <div className="login">
                                <p>Already have an account? <Link to="/login">Log In!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}