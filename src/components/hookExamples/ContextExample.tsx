import React, { createContext, useContext, useState } from "react";
import { TextInput } from "react-native";
import { MyTitle } from "../common/MyTitle";
import { Text } from 'react-native';

const FormContext = createContext<{ 
    name: string, 
    setName: (name: string) => void
}>({
    name: '',
    setName: () => ''
});

const FormInput = () => {
    const { setName } = useContext(FormContext);

    return (
        <TextInput
            onChangeText={(text: string) => setName(text)}
            style={{
                height: 40,
                width: '80%',
                margin: 12,
                borderWidth: 1,
                borderRadius: 10,
                padding: 10
            }}
        />
    )
};

const FormInputResult = () => {
    const { name } = useContext(FormContext);
    return (<Text>{ 'Input Result : ' + name}</Text>);
};

export const ContextExample : React.VFC = () => {

    const [name, setName] = useState('');

    return (
        <FormContext.Provider value={{ name, setName }}>
            <MyTitle label={'useContext'} />
            <FormInput/>
            <FormInputResult/>
        </FormContext.Provider>
    );
};
