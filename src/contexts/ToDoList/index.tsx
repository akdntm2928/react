import { createContext, useState, ReactNode } from "react";

interface Context {
    readonly toDoList: string[];
    readonly onInsert: (toDo: string) => void;
    readonly onDelete: (toDO: string) => void;
}

const ToDoListContext = createContext<Context>({
    toDoList: [],
    onInsert: (): void => { },
    onDelete: (): void => { },
})

interface Props {
    children?: ReactNode;
}

const ToDoListContextProvider = ({ children }: Props) => {
    const [toDoList, setToDoList] = useState([
        '공부하기',
        '운동하기',
        '책 읽기'
    ]);

const onDelete = (todo: string) => {
        setToDoList(toDoList.filter((item) => item !== todo));
    }

    const onInsert = (toDo: string) => {
        setToDoList([...toDoList, toDo]);
    }

    return (
        <ToDoListContext.Provider
            value={{
                toDoList,
                onInsert,
                onDelete,
            }}>
            {children}
        </ToDoListContext.Provider>
    )
}

export { ToDoListContext, ToDoListContextProvider }