import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface MyButtonProps {
    label: string;
    onPress: () => void;
}

export const MyButton: React.VFC<MyButtonProps> = ({ label, onPress}) => {
    return (
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.text}>{ label }</Text>
            </TouchableOpacity>
    ) 
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 3,
        padding: 10,
        backgroundColor: 'rgba(92, 45, 145, 1)',
        width: '100%',
        borderBottomEndRadius: 15,
        marginVertical: 20
      },
    text: {
        color: 'white',
        textAlign: 'center'
    }
});