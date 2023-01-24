//import liraries
import React, { Component, useDebugValue, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { db } from '../firebase';
import { app, auth, getFirestore, collection, addDoc } from '../firebase'
import PopUpModal from './PopUpModal';
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../Redux/actions/index'

// create a component
const AddProduct = () => {

    const dispatch = useDispatch();
    const prod = useSelector((state)=> state.prod.addProd);

    const [name, setName] = useState('')
    const [image, setImage] = useState(null)
    const [price, setPrice] = useState("")
    const [offerPrice, setOfferPrice] = useState('')
    const [PopUp, setPopUp] = useState(false)
    const [msg, setMsg] = useState(false)
    const[check,setCheck]=useState(null)


 

    const handleAddition = async () => {
       let data= {
        name:name,
        price:price,
        offerPrice:offerPrice,
       }
       try{
       dispatch(actions.addProdAction(data));
       if(prod!=undefined){
        setPopUp(true),
        setMsg("product Added")
    }
       }
       catch(e){
        setPopUp(true),
        setMsg(""+e)
       }
       
    }

    useEffect(()=>{
        setCheck(prod)
       
    },[check,prod])


    return (
        <View style={styles.container}>
            <PopUpModal
                isVisible={PopUp}
                msg={msg}
                closeModal={() =>
                    setPopUp(false)
                }
            />

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: '900' }}>Add Product</Text>
            </View>

      

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Name'
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Price'
                    value={price}
                    onChangeText={text => setPrice(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Offer Price'
                    value={price}
                    onChangeText={price => setOfferPrice(price)}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity
                onPress={() => { handleAddition() }}
                style={[styles.button]}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    inputContainer: {
        width: '80%',

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderColor: '#000000',
        borderWidth: 1
    },
    button: {
        backgroundColor: "#0782F9",
        width: "80%",
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
});

//make this component available to the app
export default AddProduct;
