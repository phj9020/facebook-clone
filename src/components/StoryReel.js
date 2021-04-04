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
            <Story image="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://avatars.githubusercontent.com/u/26403885?v=4" 
                name="HanJin" />
            <Story image="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://avatars.githubusercontent.com/u/26403885?v=4" 
                name="HanJin" />
            <Story image="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://avatars.githubusercontent.com/u/26403885?v=4" 
                name="HanJin" />
            <Story image="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://avatars.githubusercontent.com/u/26403885?v=4" 
                name="HanJin" />
        
        </StoryReelContainer>
    )
}

export default StoryReel
