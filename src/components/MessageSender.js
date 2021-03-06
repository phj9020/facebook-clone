import React, {useState} from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from '../dataLayer/StateProvider';
import {FireStore} from '../firebase';

const MessageSenderContainer = styled.div`
    max-width: 650px;
    width: 100%;
    margin-top: 30px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background-color:#3a3b3c;
`

const MessageSenderTop = styled.div`
    width: 100%;
    border-bottom: 1px solid #eff2f5;
    padding: 15px 0px;
    display: flex;

    .MuiAvatar-root {
        margin-left: 15px;
    }

    form {
        width:90%;
        display: flex;

        input {
            outline-width: 0;
            border: none;
            padding: 5px 20px;
            margin: 0 10px;
            border-radius: 999px;
            background-color: white;
        }

        input[type="text"] {
            flex: 1;
        }

        button {
            display: none;
        }
    }
`

const MessageSenderBottom = styled.div`
    display: flex;
    color: white;
    justify-content: space-evenly;

    .messageSender__option {
        display: flex;
        align-items: center;
        padding: 15px;
        color: lightgrey;
        margin: 10px 0px;
            cursor: pointer;

        h3 {
            font-size: 16px;
            margin-left: 10px;
        }

        :hover {
            background-color: #18191a;
            border-radius: 20px;
        }
    }
    
`



function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const {user} = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        // save input value in DB 

        const postObject = {
            message: input,
            createAt: Date.now(),
            creatorId: user.uid,
            author: user.displayName,
            imageUrl: imageUrl,
            profilePic: user.photoURL,
            like: 0
        }
        FireStore.collection("post").add(postObject);

        // reset input value after submit 
        setInput("")
        setImageUrl("")
    }

    const handleChange = (e) => {
        const {value} = e.target;
        if(e.target.name === "text") {
            setInput(value);
        } else if(e.target.name === "image"){
            setImageUrl(value);
        }
    }

    return (
        <MessageSenderContainer>
            <MessageSenderTop>
                <Avatar src={user?.photoURL}/>
                <form onSubmit={handleSubmit}>
                    <input value={input} name="text" onChange={handleChange} type="text" placeholder={`What's on your Mind? ${user?.displayName}`} />
                    <input value={imageUrl} name="image" onChange={handleChange} placeholder="Image URL (optional)" />
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button> 
                </form>
            </MessageSenderTop>
            <MessageSenderBottom>
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </MessageSenderBottom>
        </MessageSenderContainer>
    )
}

export default MessageSender
