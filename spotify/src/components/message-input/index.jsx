import React from 'react';

const MessageInput = () => (
    <div className="send-container">
        <form>
            <label>message:
              <input  type="text" value="Non"></input>
            </label>
            <input type="submit" value="Submit" />
        </form> 
    </div>
)

export default MessageInput;