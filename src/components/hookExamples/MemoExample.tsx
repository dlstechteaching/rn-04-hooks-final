import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { MyTitle } from "../common/MyTitle";
import { Switch, Text } from 'react-native';

interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export const MemoExample : React.VFC = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [isEnabled, setIsEnabled] = useState<boolean>(true);


    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                setTodos(response.data);
            });
    }, []);

    const titleWithMaxNbChar = (todos: Todo[]) => {
        let result = '';
        if (todos.length === 0) {
            return result;
        }
        todos.forEach(({ title }) => {
            if (title.length > result.length) {
                result = title;
            }
        });
        console.log('Computing result value');
        return result;
    };

    const getTitleWithMaxNbChar = useMemo(() => titleWithMaxNbChar(todos), [todos]);

    return (
        <>
            <MyTitle label={'useMemo'} />
            <Switch
                onValueChange={() => setIsEnabled(!isEnabled)}
                value={isEnabled}
            />
            <Text style={{ fontWeight: 'bold'}}>Title with the most number of characters : </Text>
            <Text>{getTitleWithMaxNbChar}</Text>
        </>
    );
};
