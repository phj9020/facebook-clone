import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

const StoryContainer = styled.div`
    width: 120px;
    height: 200px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center center;
    border-radius:10px;
    box-shadow: 0px 3px 10px -5px rgba(242, 241, 239, 0.75);
    margin-right: 10px;
    transition: transform 0.2s ease-in;
    cursor: pointer;
    position: relative;

    :hover {
        transform: scale(1.07);
    }
 

    .story__avatar {
        margin: 10px;
        border: 5px solid #2c81f4;
    }

    h4 {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;
    }

`

function Story({image, name, profileSrc}) {
    return (
        <StoryContainer image={image}>
            <Avatar src={profileSrc} className="story__avatar"/>
            <h4>{name}</h4>
        </StoryContainer>
    )
}



export default Story;
