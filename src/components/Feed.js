import React from 'react';
import styled from 'styled-components';
import StoryReel from './StoryReel';

const FeedContainer = styled.div`
    flex: 1;
    padding: 30px 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Feed() {
    return (
        <FeedContainer>
          <StoryReel />
          {/* MessageSender */}
        </FeedContainer>
    )
}

export default Feed
