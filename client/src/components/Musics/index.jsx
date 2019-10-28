import React, {Component} from 'react';
import AudioPlayer from "react-h5-audio-player";
import Alone from '../../Alone.flac';
import newDevice from '../../New device.mp3';

class Music extends Component {
  state = {
    musics: [
      {
      id: 'alone',
      url: `${Alone}`
    }, 
    {
      id: 'new device',
      url: `${newDevice}`
    }
  ], 
  }
  render() {
    const a = this.props.messages.map(message => message.text.trim().toLowerCase());
    const b = this.props.messages.map(message => message.user);
    const niceName = this.props.name.trim().toLowerCase();

    let isCurrentUser = false;

    if(niceName === b[b.length - 1]) {
      isCurrentUser = true;
    } else {
      isCurrentUser = false;
    }

    return (
      isCurrentUser ? null:       
      <div>
          {this.state.musics.map(music => a[a.length - 1] === music.id
            ?   
              <AudioPlayer
              autoPlay
              src={music.url}
              onPlay={e => console.log(e.target)}
              // other props here
              /> :  null
              )}
      </div>
    )
  }
}

export default Music;