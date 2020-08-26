import React from 'react';
import pcss from '../Profile/profile.module.css';
import Mypost from "../Profile/MyPost/MyPost.js";
import Profileinfo from "../Profile/Profileinfo/profileinfo.js";

const Profile = (props) => {
    
    

    return(
        <div className = {pcss.navbar}>
            <Profileinfo />
            <Mypost postData={props.state.postData} />
        </div>
    );
        
    
}

export default Profile;