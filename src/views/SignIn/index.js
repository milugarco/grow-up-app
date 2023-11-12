import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native"

import InputCustom from "../../components/Input";
import Logo from "../../components/Logo";

const SignIn = () => {

    const [userInput, setUserInput] = useState("");
    const [passwordInput, setpasswordInput] = useState("");


    const handleInputUserChange = (value) => {
        setUserInput(value);
    };

    const handleInputPasswordChange = (value) => {
        setpasswordInput(value);
    };


    const handleButtonClick = () => {
        alert(userInput);
        alert(passwordInput)
    };

    return (
        <View style={[styles.container]}>
            <Logo width={200} height={70} marginBottom={80} />
            <Text style={[styles.title]}>
                Faça login:
            </Text>

            <InputCustom placeholder={'Digite aqui seu usuário'} backgroundColor={'#fff'} width={220} onChange={handleInputUserChange} marginBottom={25} marginTop={45} />

            <InputCustom placeholder={'Digite aqui seu usuário'} backgroundColor={'#fff'} width={220} onChange={handleInputPasswordChange} marginBottom={18} />

            <Button title="FUCK Me" onPress={() => handleButtonClick()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    title: {
        color: '#a6d390',
        fontWeight: 'bold',
        fontSize: 24,
    },
});

export default SignIn