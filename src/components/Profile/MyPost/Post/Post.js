import React from 'react';
import mpcss from '../Post/Post.module.css';

const Post = (props) => {
    return(
        <div className = {mpcss.blockuser1}>
            <div className = {mpcss.blockuser}>
                <div>
                    <img src="https://www.verasport.pl/pub/skin/default-skin/img/avatar.png" />
                    <p className={mpcss.nameuser}>Alex</p>
                </div>
                    <p className = {mpcss.textuser}>{props.message}</p>
            </div>
        </div>
    );
        
    
}

export default Post;