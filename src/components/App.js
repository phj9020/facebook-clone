import React, {useEffect} from 'react';
import Header from './Header';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import {Auth} from '../firebase';
import {useDispatch, useStateValue} from '../dataLayer/StateProvider';
import {SETUSER} from '../dataLayer/reducer';

const AppContainer = styled.div``

const BodyContainer = styled.div`
    min-height: 100vh;
    position: relative;
    left: 0;
    top:67px;
    display: flex;

`
function App() {
  const dispatch = useDispatch();
  const {user} = useStateValue();
  console.log(user)
  useEffect(() => {
    Auth.onAuthStateChanged(user => {
      if(user) {
        dispatch({type:SETUSER, user: user});
      } else {
        dispatch({type:SETUSER, user: null});
      }
    })
  },[dispatch])

  return (
    <AppContainer className="App">
      {!user ? 
        <Login /> :  
        <>
          <Header />
          <BodyContainer>
            <Sidebar />
            <Feed />
            <Widgets />
          </BodyContainer>
        </>
      }
    </AppContainer>
  );
}

export default App;
