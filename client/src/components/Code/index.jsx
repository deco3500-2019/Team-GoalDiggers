import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Code = () => {
    const [code, setCode] = useState('');

    return (
    <div className="joinOuterContainer">
        <div className="joinInnterContainer">
             <h1 className="heading">Connect To Your Box Now!</h1>
             <div>
                 <input placeholder="Enter the ID of your MusicBox here" className="joinInput" type="text" onChange={(event) => setCode(event.target.value)} /> 
             </div>
             <Link onClick={(event) => (!code) ? event.preventDefault() : null } to='/join'>
                <button className="button mt-20" type="submit">Connect</button>
             </Link>
        </div>
    </div>
)
    }
export default Code;