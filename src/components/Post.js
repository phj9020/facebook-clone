import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/ko'; 
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import firebase from "firebase/app";
import {FireStore} from '../firebase';

const PostContainer = styled.div`
    width: 610px;
    margin-top: 50px;
    color: white;
    border-radius: 15px;
    background-color:#242526;
    padding: 20px;
`

const PostTop = styled.div`
    display: flex;
    align-items: center;

    .MuiAvatar-root{
        margin-right: 10px;
    }
    .post__topInfo {
        h3{
            font-size: medium;
            margin-bottom: 3px;
        }
        p {
            font-size: 12px;
            color: lightgrey;
        }
    }
`

const PostBottom = styled.div`
    width: 100%;
    padding: 15px 0px;
    margin: 10px 0px;
    word-break: break-all;
`

const PostImage = styled.div`

    img {
        width: 100%;
        object-fit: contain;
    }
`

const PostLike = styled.div`
    width: 100%;
    margin-top: 10px;

    .post__like {
        width: 100%;
        display: flex;
        align-items: center;

        .MuiSvgIcon-root {
            font-size: 16px;
            margin-right: 5px;
        }
    }
`

const PostOptions = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0px;
    border-top: 1px solid #3e4042;
    border-bottom: 1px solid #3e4042;

    .post__option {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 5px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
        border-radius: 10px;
        
        :hover {
            background-color:#94989b;
        }

        .MuiSvgIcon-root {
            font-size: 18px;
            :not(:last-child) {
                margin-right: 5px;
            }
        }
    }
    .post__like--active {
        .MuiSvgIcon-root, p {
            color:#3b8ad9;
        }
    }
`

function Post({postObj, profilePic, image, username, timestamp, message}) {
    const [isClickLike, setIsClickLike] = useState(false);
    
    const likeClicked = (e) => {
        e.preventDefault();
        const currentTarget = e.currentTarget;

        currentTarget.classList.toggle('post__like--active');

        if(isClickLike === false) {
            setIsClickLike(true);
            const db = FireStore.collection('post').doc(`${postObj.documentId}`)
            db.update({
                like: firebase.firestore.FieldValue.increment(1)
            })
        } else {
            const db = FireStore.collection('post').doc(`${postObj.documentId}`)
            db.update({
                like: firebase.firestore.FieldValue.increment(-1)
            })
            setIsClickLike(false);
        }
    }

    return (
        <PostContainer>
            <PostTop>
                <Avatar src={profilePic} />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{moment(timestamp).format('MMMM Do YYYY, h:mm a')}</p>
                </div>
            </PostTop>
            <PostBottom>
                <p>{message}</p>
            </PostBottom>
            <PostImage>
                {image ? <img src={image} alt="postedImage" /> : null}
            </PostImage>
            <PostLike>
                <div className="post__like">
                    <ThumbUpRoundedIcon />
                    <p>{postObj?.like}</p>
                </div>
            </PostLike>
            <PostOptions>
                <div className="post__option" onClick={likeClicked}>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </PostOptions>
        </PostContainer>
    )
}

Post.propTypes = {
    profilePic: PropTypes.string.isRequired,
    image: PropTypes.string,
    username : PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
}

export default Post;
