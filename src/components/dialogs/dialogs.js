import React from 'react';
import dcss from '../dialogs/dialogs.module.css';
import DialogItem from "../dialogs/dialogitem/dialogitem.js";
import Message from "../dialogs/message/message.js";


const Dialogs = (props) => {
    
    let DialogsItems = props.dialogsdata.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let MessageItems = props.messagedata.map(message => <Message message={message.message} id={message.id} />);


    return(
        <div className = {dcss.dialogs}>

            <div className = {dcss.dialogs_item}>
                {DialogsItems}
            </div>

            <div className = {dcss.dialogs_message}>
                {MessageItems}
            </div>
        </div>
    );
        
    
}

export default Dialogs;