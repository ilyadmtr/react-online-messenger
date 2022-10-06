import React from 'react';
import Attachment from "../../svg/Attachment";
import './index.css';

const MessageForm = ({handleSubmit, setText, text, setImg}) => {
    return (
        <form className='message_form' onSubmit={handleSubmit}>
            <div className='label'>
                <label htmlFor="img"><Attachment/></label>
                <input
                    onChange={e => setImg(e.target.files[0])}
                    type="file"
                    id='img'
                    accept='image/*'
                    style={{display: 'none'}}/>
            </div>
            <div>
                <input type="text" placeholder='Enter message...' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div>
                <button className="btn_send">Send</button>
            </div>
        </form>
    );
};

export default MessageForm;