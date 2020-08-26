import React from 'react';
import mpcss from '../MyPost/MyPost.module.css';
import Post from '../MyPost/Post/Post.js'

const Mypost = (props) => {
    // debugger;

    let PostItems = props.postData.map(post => <Post message={post.message} id={post.id} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div className = {mpcss.mypostsblock}>
            <div>
                <p>My posts</p>
                <textarea onChange={onPostChange} ref = {newPostElement} value={props.newPostText}/>
                <br/>
                <button onClick={addPost} className = {mpcss.button1}>ADD Post</button>
                <button className = {mpcss.button2}>Remove post</button>
                {PostItems}
            </div>
        </div>
    );
        
    
}

export default Mypost;