import { useRoute } from "@react-navigation/native";
import React from "react";
import { MyTitle } from "../components/common/MyTitle";
import { PlaygroundScreenProps } from "../navigation/types";
import { TutosHooks } from "../types/tutosHooks";
import { StyleSheet, View } from "react-native"; 
import { StateExample } from "../components/hookExamples/StateExample";
import { EffectExample } from "../components/hookExamples/EffectExample";
import { ContextExample } from "../components/hookExamples/ContextExample";
import { MemoExample } from "../components/hookExamples/MemoExample";
import { CallbackExample } from "../components/hookExamples/CallbackExample";

export const PlaygroundScreen : React.VFC = () => {
    const { params } = useRoute<PlaygroundScreenProps['route']>();

    const renderHookExample = () => {
        switch (params.playgroundName) {
            case TutosHooks.UseState:
                return <StateExample />;
            case TutosHooks.UseEffect:
                return <EffectExample />;    
            case TutosHooks.UseContext:
                return <ContextExample />;    
            case TutosHooks.UseMemo:
                return <MemoExample />;    
            case TutosHooks.UseCallback:
                return <CallbackExample />;               
            default:
                break;
        }
    }
    return (
        <View style={styles.view}>
            <MyTitle label={'Playground'} />
            { renderHookExample() }
        </View>
    );
};


const styles = StyleSheet.create({
    view: {
        display: 'flex',
        alignItems: 'center',
        padding: 20
    }
});