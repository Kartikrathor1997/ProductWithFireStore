//import liraries
import { useNavigation, useRoute } from '@react-navigation/native';
import { doc } from 'firebase/firestore';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { app, db, auth, getFirestore,collection,addDoc, getDocs, updateDoc, deleteDoc} from '../firebase'

// create a component
const UpdateProduct = () => {

    const route = useRoute();
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [image, setImage] = useState(null)
    const [price, setPrice] = useState("")
    const [offerPrice, setOfferPrice] = useState('')
    const [PopUp, setPopUp] = useState(false)
    const [msg, setMsg] = useState(false)
    
    const Update = async(id) =>{
        id = route.params?.id
        const userDoc = doc(db,"products",id)
        const newFields ={name: name, price:price, offerPrice:offerPrice}
        try{
            await updateDoc(userDoc,newFields)
            setPopUp(true)
            setMsg("updated")
        }
        catch(e){
            setPopUp(true)
            setMsg(""+e)
        }
        
   
     
    }

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
            <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: '900' }}>Update Product</Text>
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
                value={offerPrice}
                onChangeText={price => setOfferPrice(price)}
                style={styles.input}
            />
        </View>
        <TouchableOpacity
            onPress={() => { Update() }}
            style={[styles.button]}>
            <Text style={styles.buttonText}>Update</Text>
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
export default UpdateProduct;
