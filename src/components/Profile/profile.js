import React from 'react';
import pcss from '../Profile/profile.module.css';
import Mypost from "../Profile/MyPost/MyPost.js";
import Profileinfo from "../Profile/Profileinfo/profileinfo.js";

const Profile = (props) => {
    // debugger;
    

    return(
        <div className = {pcss.navbar}>
            <Profileinfo />
            <Mypost 
            postData={props.profilePage.postData} 
            addPost={props.addPost}
            newPostText={props.profilePage.newPostText}
            updateNewPostText= {props.updateNewPostText}
            />
        </div>
    );
        
    
}

export default Profile;