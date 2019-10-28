import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InFoBar from '../InFoBar';
import Input from '../Input';
import Messages from '../Messages';
import Music from '../Musics';

import './chat.scss';


let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const endPoint = 'https://music-chat-app.herokuapp.com/';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(endPoint);

        setName(name);
        setRoom(room);

        socket.emit("join", {name, room}, () => {

        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [endPoint, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages]);

    // function for sending messages 
    const sendMessage = (event) => {
        event.preventDefault(); 

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }

    }

    return(
    <div className="outerContainer">
        <div className="container">
            <InFoBar room = {room}/>
            <Messages messages={messages} name={name}/>
            <Input setMessage={setMessage} message={message} sendMessage={sendMessage}/>
        </div>
        <div className='card-container'>
            <Music messages={messages} name={name}/>
        </div>
    </div>
    )
}

export default Chat;