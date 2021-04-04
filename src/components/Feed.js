import React from 'react';
import styled from 'styled-components';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';


const FeedContainer = styled.div`
    flex: 1;
    padding-top: 30px;
    padding-bottom: 100px;
    padding-left: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #18191a;
`

function Feed() {
    return (
        <FeedContainer>
            <StoryReel />
            <MessageSender />
            <Post profilePic="" image="https://w2-cdn-img.fetcherx.com/static/images/0d1a5933e4ce08c7c61d611876914fe4.jpg?type=jpg&o_type=jpg" username="han" timestamp={213245} message="asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas" />
            <Post profilePic="" image="https://64.media.tumblr.com/1b846541d1ca742bd901450bc910335f/1693bfaf8825d1e1-86/s1280x1920/a2872ce8387a5e408e0f0cefbefbd2a64f0afe54.jpg" username="han" timestamp={213245} message="asdas" />
        </FeedContainer>
    )
}

export default Feed
