import React from 'react';
import prfcss from '../Profileinfo/profileinfo.module.css';


const Profileinfo = () => {
    return(
        <div className = {prfcss.profleblock}>
            <div className = {prfcss.imgprofileinfo}>
                <img src="https://www.verasport.pl/pub/skin/default-skin/img/avatar.png" />
            </div>
            <div className = {prfcss.descprofileinfo}>
                <p>Alex1</p>
                <p>27.04.19942</p>
                <p>Men</p>
                <p>Dnepr</p>
                
            </div>
        </div>
    );
        
    
}

export default Profileinfo;