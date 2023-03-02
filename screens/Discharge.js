import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Modal } from "./Modal";

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

            <View style={styles.separator} />
            <Modal isVisible={isModalVisible}>
                <Modal.Container>
                    <View style={styles.modal}>

                        <Modal.Body>
                            <Text style={styles.text}>
                                Want access? How does your Vaginal enterance feel like?
                            </Text>
                            <View style={styles.button}>
                                <Button title=" Dry " onPress={handleSignUp} />
                                <Button title=" Wet " onPress={handleSignUp} />
                                <Button title=" Nothing " onPress={handleSignUp} />
                                <Button title=" Slippery " onPress={handleSignUp} />
                            </View>

                        </Modal.Body>
                        <Modal.Footer>
                            <Text style={styles.text}>
                                Want access? Looking at it or touching your vaginal discharge what describe it best ?
                            </Text>

                            <View style={styles.button}>
                                <Button title=" Creamy " onPress={handleSignUp} />
                                <Button title=" Whiteish " onPress={handleSignUp} />
                                <Button title=" Nothing " onPress={handleSignUp} />
                                <Button title=" Unusual " onPress={handleSignUp} />
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
        backgroundColor: "#6359A6",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#6359A6",
        fontSize: 20,
        fontWeight: "basic",
    },
    text: {
        color: "#FFFFFF",
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
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
    },
    modal: {
        width: "50%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
    },
});