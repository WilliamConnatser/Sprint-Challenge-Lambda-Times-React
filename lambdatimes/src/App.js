import React from 'react';
import styled from 'styled-components';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import CallToAction from './components/CallToAction';
import withAuthentication from './components/withAuthentication';

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

const App = () => {

  const AuthGuard = withAuthentication(Content)(CallToAction);

  return (
    <AppWrapper>
      <TopBar />
      <Header />
      <AuthGuard />
    </AppWrapper>
  );
}

export default App;
