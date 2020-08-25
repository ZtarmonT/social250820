import React from 'react';
import dcss from '../message/message.module.css';

const Message = (props) => {
    return(
        <div className = {dcss.d_message}>
            {props.message}
        </div>
    )
}



export default Message;