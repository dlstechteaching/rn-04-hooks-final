
import React, { useCallback, useEffect, useState } from "react";
import { MyTitle } from "../common/MyTitle";
import { Switch, Text } from 'react-native';

export const Item: React.VFC<{ transformData: () => string }> = ({ transformData}) => {
    useEffect(() => {
        console.log('transformData was called');
    }, [transformData]);

    return <Text>{transformData()}</Text>

}

export const CallbackExample : React.VFC = () => {

    const [data, setData] = useState('hello data !');
    const [isEnabled, setIsEnabled] = useState<boolean>(true);



    const transformData = useCallback(() => {
        return 'Data :' + data;
    }, [data]);

    return (
        <>
            <MyTitle label={'useCallback'} />
            <Switch
                onValueChange={() => setIsEnabled(!isEnabled)}
                value={isEnabled}
            />
            <Text style={{ fontWeight: 'bold'}}>Transform Data Result : </Text>
            <Item transformData={transformData}/>
        </>
    );
};
