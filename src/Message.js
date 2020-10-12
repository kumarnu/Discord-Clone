import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message({timestamp, user, message}) {
    return (
      <div className="message">
        <Avatar src={user.photo} />
        <div className="message_info">
          <h4>
            <span className="user_name">{user.displayName}</span>
            <span className="message_timestamp">
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
          </h4>
          <p>{message}</p>
        </div>
      </div>
    );
}

export default Message
