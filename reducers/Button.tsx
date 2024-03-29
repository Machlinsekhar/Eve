import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type ButtonProps = {
    title: string;
    onPress: () => void;
};

export const Button = ({ title, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "FFFFFF",
        margin: 15,
        padding: 15,
        borderRadius: 25,
        alignItems: "center",
    },
    text: {
        color: "6359A6",
        fontWeight: "700",
        fontSize: 18,
    },
});