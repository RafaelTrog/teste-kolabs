import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import SearchPage from './components/SearchPage'

const AppStyled = styled.div`
  min-width: 800px;
  text-align: center;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <AppStyled>
      <Header />
      <SearchPage />
    </AppStyled>
  );
}

export default App;
