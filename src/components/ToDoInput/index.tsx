import styled from '@emotion/styled';
import { useContext, useState } from 'react';
import { Button } from '../button';
import { Title } from '../Title';
import { TextInput } from '../TextInput';
import { ToDoListContext } from '../../contexts/ToDoList';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Background = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 background-color: rgb(0 0 0 / 75%);
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

interface Props {
 readonly onClose: () => void;
}

export const ToDoInput = ({onClose}:Props) => {
    const { onInsert } = useContext(ToDoListContext);
    const [toDo, setToDo] = useState('');


    const onInsertToDo = () => {
        if (toDo === '') return;
        onInsert(toDo);
        setToDo('');
        onClose();
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
        </Container>
    )
}
