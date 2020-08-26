import React from 'react';
import mpcss from '../MyPost/MyPost.module.css';
import Post from '../MyPost/Post/Post.js'

const Mypost = (props) => {


    let PostItems = props.postData.map(post => <Post message={post.message} id={post.id} />);

    return(
        <div className = {mpcss.mypostsblock}>
            <div>
                <p>My posts</p>
                <textarea placeholder="My post"></textarea>
                <br/>
                <button className = {mpcss.button1}>ADD Post</button>
                <button className = {mpcss.button2}>Remove post</button>
                {PostItems}
            </div>
        </div>
    );
        
    
}

export default Mypost;