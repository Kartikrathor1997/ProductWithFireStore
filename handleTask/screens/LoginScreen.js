//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { app } from '../App'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../handleTask/firebase'
import { useNavigation } from '@react-navigation/native';
import PopUpModal from './PopUpModal';
// create a component
const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [PopUp, setPopUp] = useState(false)
    const [msg, setMsg] = useState('')


    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("HomeScreen")
                setPopUp(true)
                setMsg("Logged in Succesful")
            }
        })
        return unsubscribe
    }, [])

    const handleReg = () => {
        auth.createUserWithEmailAndPassword(email, Password).then(userCredentials => {
            const user = userCredentials.user
            console.log("usss", user.email)
            setMsg("Registered Succesful")
            setPopUp(true)
        })
            .catch(error => {
                setMsg('Please register with another email')
                setPopUp(true)
                 })

    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, Password).then(userCredentials => {
            const user = userCredentials.user
            console.log("loged in with user", user.email)
        })
            .catch(error => { 
                setMsg('Wrong Email or Password')
                setPopUp(true)
            })
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">

            <PopUpModal
                isVisible={PopUp}
                msg={msg}
                closeModal={() =>
                    setPopUp(false)
                }
            />
     
<Text style={{fontSize:20, fontWeight:'800', color:'#000000',marginBottom:30 }}>USER LOGIN</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={Password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => { handleLogin() }}
                    style={[styles.button]}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { handleReg() }}
                    style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff30"

    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: "#0782F9",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: "#0782F9",
        borderWidth: 2
    },
    buttonOutlineText: {

    },
});

//make this component available to the app
export default LoginScreen;
