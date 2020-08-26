import {renderEntireTree} from "../render.js";

let state = {

    profilePage:{
        postData :[
            {id: 1, message: 'Tany11a'},
            {id: 32, message: 'Ilon'},
            {id: 12, message: 'Sasha'},
            {id: 21, message: 'Sonya'},
            {id: 143, message: 'Lana'}
        ],
        newPostText: "itkamasutra"
    },

    messagesPage: {
        dialogsdata:[
            {id: 1, name: 'Tany11a'},
            {id: 32, name: 'Ilon'},
            {id: 12, name: 'Sasha'},
            {id: 21, name: 'Sonya'},
            {id: 143, name: 'Lana'}
        ],
        messagedata :[
            {id: 1, message: 'message111'},
            {id: 22, message: 'message2'},
            {id: 133, message: 'message3'},
            {id: 2144, message: 'message4'},
            {id: 14355, message: 'message5'}
        ]
    }

}

window.state = state;

export let addPost = () => {
    let newPost = {
        
        message: state.profilePage.newPostText,
        
    };

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireTree(state);
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}



export default state;