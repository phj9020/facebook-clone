import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Feed from './Feed';

const AppContainer = styled.div`
  background-color: #18191a;
  height: 100vh;

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
        {/* Feed */}
        {/* Widget */}
      </BodyContainer>
    
    </AppContainer>
  );
}

export default App;
