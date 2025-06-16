import styled from '@emotion/styled';
import { Title } from 'components/Title';
import { ToDoList } from 'components/ToDoList';

import { useNavigate } from 'react-router-dom';
import { ShowToDoInputButton } from 'components/showToDoInputButton';

const Container  = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-color:#ffffff;
  padding: 32px;
  border-radius: 8px;
`;

export const DataView = () =>{

    const navigate = useNavigate();
    return (
        <Container>
            <Title label='Todo List'></Title>
            <ToDoList/>
            <ShowToDoInputButton show={false} onclick={()=>navigate('/add')}></ShowToDoInputButton>
        </Container>
    )
}