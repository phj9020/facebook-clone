import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';

const PostContainer = styled.div`
    max-width: 650px;
    margin-top: 50px;
    color: white;
`

const PostTop = styled.div`
    display: flex;
    align-items: center;

    .MuiAvatar-root{
        margin-right: 10px;
    }
    .post__topInfo {

    }
`

const PostBottom = styled.div`
    width: 100%;
    padding: 15px 0px;
    word-break: break-all;
`

const PostImage = styled.div`

    img {
        width: 100%;
        object-fit: contain;
    }
`

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <PostContainer>
            <PostTop>
                <Avatar src={profilePic} />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </PostTop>
            <PostBottom>
                <p>{message}</p>
            </PostBottom>
            <PostImage>
                <img src={image} alt="postedImage" />
            </PostImage>
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
