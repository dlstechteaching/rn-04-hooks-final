import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface MyTitleProps {
    label: string;
}

export const MyTitle: React.VFC<MyTitleProps> = ({ label }) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{ label }</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    view: {
        marginVertical: 50
    },
    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
    }
});