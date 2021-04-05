import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import {FireStore} from '../firebase';

const FeedContainer = styled.div`
    flex: 1;
    padding-top: 30px;
    padding-bottom: 100px;
    padding-left: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #18191a;
`

function Feed() {
    const [post, setPost] = useState([])
  

    useEffect(()=> {
        const getData = () => {
                FireStore.collection('post').orderBy("createAt","desc").onSnapshot(snapshot => {
                const postArray = snapshot.docs.map(doc => ({
                    documentId: doc.id,
                    ...doc.data()
                }))
                setPost(postArray)
            })
        }
        getData();
    }, [])

    return (
        <FeedContainer>
            <StoryReel />
            <MessageSender />
            {post && post.map(singlePost => 
                <Post 
                    postObj={singlePost}
                    key={singlePost.documentId} 
                    profilePic={singlePost.profilePic} 
                    image={singlePost.imageUrl} 
                    username={singlePost.author} 
                    timestamp={singlePost.createAt} 
                    message={singlePost.message} 
                    /> 
            )}
        </FeedContainer>
    )
}

export default Feed
