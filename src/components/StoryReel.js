import React from 'react';
import styled from 'styled-components';
import Story from './Story';

const StoryReelContainer = styled.div`
    display: flex;
`
function StoryReel() {
    return (
        <StoryReelContainer>
            <Story image="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://avatars.githubusercontent.com/u/26403885?v=4" 
                name="HanJin" />
            <Story image="https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80"
                profileSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" 
                name="Melissa" />
            <Story image="https://images.unsplash.com/photo-1569025708622-8c9c95a090f1?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
                profileSrc="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                name="Tom" />
            <Story image="https://images.unsplash.com/photo-1580854903140-bae685ca67da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                name="Adriana" />
            <Story image="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                name="Jason" />
        
        </StoryReelContainer>
    )
}

export default StoryReel
