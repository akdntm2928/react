import styled from '@emotion/styled';
import { useContext, useState } from 'react';
import { Button } from '../../components/button';
import { Title } from '../../components/Title';
import { TextInput } from '../../components/TextInput';
import { ToDoListContext } from '../../contexts/ToDoList';
import { useNavigate } from 'react-router-dom';
import { ShowToDoInputButton } from 'components/showToDoInputButton';
const Container = styled.div`
  position: absolute;
  top: 5vh;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Background = styled.div`

`;
const Contents = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 background-color: #ffffff;
 padding: 32px;
 border-radius: 8px;
 z-index: 1;
`;
const InputContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`;

export const ToDoInput = () => {
    const { onInsert } = useContext(ToDoListContext);
    const [toDo, setToDo] = useState('');
    const navigate = useNavigate();

    const onInsertToDo = () => {
        if (toDo === '') return;
        onInsert(toDo);
        setToDo('');
        navigate('/')
    }

    return (
        <Container>
            <Background />
            <Contents>
                <Title label="할 일 추가" />
                <InputContainer>
                    <TextInput value={toDo} onChange={setToDo} />
                    <Button label="추가" color="#304FFE" onclick={onInsertToDo} />
                </InputContainer>
            </Contents>
            <ShowToDoInputButton show={true} onclick={() => navigate('/')}></ShowToDoInputButton>
        </Container>
    )
}
