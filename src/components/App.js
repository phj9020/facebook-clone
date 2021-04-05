import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

const AppContainer = styled.div`
  background-color: #18191a;

`

const BodyContainer = styled.div`
    position: relative;
    left: 0;
    top:67px;
    display: flex;

`
function App() {
  return (
    <AppContainer className="App">
      <Header />
      <BodyContainer>
        <Sidebar />
        <Feed />
        <Widgets />
      </BodyContainer>
    
    </AppContainer>
  );
}

export default App;
