import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import RNModal from "react-native-modal";

export const Modal = ({
    isVisible = false,
    children,
    ...props
}) => {
    return (
        <RNModal
            isVisible={isVisible}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}
            {...props}>
            {children}
        </RNModal>
    );
};

const ModalContainer = () => (
    <View style={styles.container}>{children}</View>
);

const ModalHeader = () => (
    <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
    </View>
);

const ModalBody = () => (
    <View style={styles.body}>
        {children}
    </View>
);

const ModalFooter = () => (
    <View style={styles.footer}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    container: {
        
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: "#6359A6",
        borderColor: "",
        borderStyle: "ridge",
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        paddingTop: 10,
        textAlign: "center",
        fontSize: 24,
    },
    body: {
        justifyContent: "center",
        paddingHorizontal: 15,
        minHeight: 100,
    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        flexDirection: "row",
    },
});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;