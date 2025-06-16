// import { useState } from 'react';
import styled from '@emotion/styled';
import { DataView } from './pages/DataView';
import { ToDoInput } from './pages/ToDoInput';
import { Header } from './components/Header';
import { ToDoListContextProvider } from './contexts/ToDoList';
import { Route, Routes } from 'react-router-dom';

const Container = styled.div`
  height:100vh;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-color:#eeeeee;
`;
const NotFound = styled.div`
  text-align:center;
`

function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<DataView />} />
          <Route path="/add" element={<ToDoInput />} />
          <Route
            path="*"
            element={
              <NotFound>
                404<br />
                NotFound
              </NotFound>
            }
          />
        </Routes>
      </ToDoListContextProvider>
    </Container >
  );
}

export default App;
