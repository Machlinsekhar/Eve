import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";

export default function TabTwoScreen() {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    useEffect(() => {
        const checkForSubscription = setTimeout(() => {
            setIsModalVisible(() => !isModalVisible);
        }, 1500);
        return () => clearTimeout(checkForSubscription);
    }, []);

    const handleSignUp = () => {
        // sign up the user and close the modal
        setIsModalVisible(() => !isModalVisible);
    };



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Premium stuff here</Text>
            <View style={styles.separator} />
            <Modal isVisible={isModalVisible}>
                <Modal.Container>
                    <View style={styles.modal}>

                        <Modal.Body>
                            <Text style={styles.text}>
                                Want access? How heavy is the bleeding?
                            </Text>

                        </Modal.Body>
                        <Modal.Footer>
                            <View style={styles.button}>
                                <Button title=" Spotting " onPress={handleSignUp} />
                                <Button title=" Light " onPress={handleSignUp} />
                                <Button title=" Medium " onPress={handleSignUp} />
                                <Button title=" Heavy " onPress={handleSignUp} />
                            </View>
                        </Modal.Footer>
                    </View>
                </Modal.Container>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "6359A6",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "6359A6",
        fontSize: 20,
        fontWeight: "basic",
    },
    text: {
        color: "FFFFFF",
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },

    button: {
        backgroundColor: "FFFFFF",
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
    },
    modal: {
        width: "100%",
        height: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
});