import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './join.scss';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
    <div className="joinOuterContainer">
        <div className="joinInnterContainer">
             <h1 className="heading">Connect</h1>
             <div>
                 <input placeholder="Username" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /> 
             </div>
             <div>
                 <input placeholder="Music Box's Code" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
             </div>
             <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                <button className="button mt-20" type="submit">Connect</button>
             </Link>
        </div>
    </div>
)
    }
export default Join;