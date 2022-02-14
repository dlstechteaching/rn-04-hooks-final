import React, { useEffect, useState } from "react";
import { MyTitle } from "../common/MyTitle";
import { Switch, Text, View } from 'react-native';
import axios from "axios";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const EffectExample : React.VFC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const [isEnabled, setIsEnabled] = useState<boolean>(true);
    const [isEnabled2, setIsEnabled2] = useState<boolean>(true);


    useEffect(() => {
        console.log('log every time it renders');
    });

    useEffect(() => {
        console.log('log one time');
    }, []);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
            });
    }, []);

    useEffect(() => {
        console.log('log when isEnabled change');
    }, [isEnabled]);

    useEffect(() => {
        return () => console.log('log when it is unmounted');
    }, []);

    return (
        <>
            <MyTitle label={'useEffect'} />
            <Text>{`Number of users : ${users.length}`}</Text>
            <View style={{ padding: 20 , display: 'flex', height: 200, justifyContent: 'space-between'}}>
                <Switch
                    onValueChange={() => setIsEnabled(!isEnabled)}
                    value={isEnabled}
                />
                <Switch
                    onValueChange={() => setIsEnabled2(!isEnabled2)}
                    value={isEnabled2}
                />
            </View>
        </>
    );
};
