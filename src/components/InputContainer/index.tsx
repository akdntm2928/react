import { useState } from 'react';
import { ToDoInput } from '../ToDoInput';
import { ShowToDoInputButton } from '../showToDoInputButton';


export const InputContainer = () => {
    const [showToDoInput, setShowToDoInput] = useState(false);

    const onClose = () => {
        setShowToDoInput(false);
    };

    return (
        <>
            {showToDoInput && <ToDoInput onClose={onClose} />}
            <ShowToDoInputButton
                show={showToDoInput}
                onclick={() => setShowToDoInput(!showToDoInput)} />
        </>
    )
}