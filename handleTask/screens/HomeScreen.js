 //import liraries
 import { useNavigation } from '@react-navigation/native';
import React, { Component, } from 'react';
 import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
 import {auth} from '../../handleTask/firebase'
 
 // create a component
 const HomeScreen = () => {

    const navigation = useNavigation()

    // handlesignOut = ()=>{
    //     auth.signOut().then(()=>{
    //         navigation.replace("Login")
    //     }).catch((error)=>{console.log("err",error)})
    // }

    const navogateToProduct=()=>{
        navigation.navigate("AddProduct")
    }

    const ViewAllProduct = () =>{
        navigation.navigate("ViewProduct")
    }

    return (
        <View style={styles.container}>
            <View style={{alignItems:'center', marginTop:30, backgroundColor:'#234567', marginHorizontal:30, padding:15}}>
                <TouchableOpacity onPress={()=>navogateToProduct()}>
                <Text style={{fontSize:20, fontWeight:'800', color:'white'}}>Add Product</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems:'center', marginTop:30, backgroundColor:'#234567', marginHorizontal:30, padding:15}}>
                <TouchableOpacity onPress={()=>{ViewAllProduct()}}>
                <Text style={{fontSize:20, fontWeight:'800', color:'white'}}>View Product</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
 };
 
 // define your styles
 const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: '#ffffff',
    },
 }); 
 
 //make this component available to the app
 export default HomeScreen;
 
