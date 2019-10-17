import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Login.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
    <div className="joinOuterContainer">
        <div className="joinInnterContainer">
             <h1 className="heading">Login</h1>
             <div>
                 <input placeholder="Username" className="joinInput" type="text" onChange={(event) => setUsername(event.target.value)} /> 
             </div>
             <div>
                 <input placeholder="Password" className="joinInput mt-20" type="password" onChange={(event) => setPassword(event.target.value)} />
             </div>
             <Link onClick={(event) => (!username || !password) ? event.preventDefault() : null } to='/code'>
                <button className="button mt-20" type="submit">Log In</button>
             </Link>
        </div>
    </div>
)
    }
export default Login;