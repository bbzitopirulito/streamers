import React, { useState } from 'react';
import './styles.css';

import signUpCalliImg from '../../assets/signUpcalligraphy.png';

export default function SingUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [platform, setPlatform] = useState('');

    async function handleSubmit(event) {
        alert("Something")
    }

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    {/* image calligraphy */}
                    <img src={signUpCalliImg} alt="Sign Up" />
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="E-mail" 
                        value={email} 
                        onChange={event => setEmail(event.target.value)}                         
                    />
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="Username" 
                        value={username} 
                        onChange={event => setUsername(event.target.value)} 
                    />
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={event => setPassword(event.target.value)}                         
                    />
                    <select value={platform} onChange={event => setPlatform(event.target.value)}>
                        <option value="twitch">Twitch</option>                    
                        <option value="mixer">Mixer</option>                    
                        <option value="hitbox">Hitbox</option>                    
                        <option value="facebook">Facebook</option>                    
                        <option value="youtube">Youtube</option>                    
                        <option value="nimo">Nimo</option>                    
                    </select>

                    <button className="btn" type="submit">Go</button>
                </form>
            </div>
        </>
    );
}