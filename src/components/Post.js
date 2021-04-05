import React from 'react';
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
`

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <PostContainer>
            <PostTop>
                <Avatar src={profilePic} />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{moment(timestamp * 1000).format('MMMM Do YYYY, h:mm a')}</p>
                </div>
            </PostTop>
            <PostBottom>
                <p>{message}</p>
            </PostBottom>
            <PostImage>
                {image ? <img src={image} alt="postedImage" /> : null}
            </PostImage>
            <PostOptions>
                <div className="post__option">
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
