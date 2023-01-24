//import liraries
import { useNavigation } from '@react-navigation/native';
import { doc, limit } from 'firebase/firestore';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Touchable, TouchableOpacity,RefreshControl } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { app, auth, getFirestore, collection, addDoc, getDocs,db , deleteDoc} from '../firebase'
import * as actions from '../Redux/actions/index'
// create a component
const ViewProduct = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const prod = useSelector((state)=> state.prod.prodData);

    console.log("prod", prod)

    const[mylist,setList] = useState(null)
    const[refresh,setRefresh] = useState(null)
   

 

    useEffect(()=>{
        setRefresh(true)
        dispatch(actions.getProdAction());
        // console.log("dispatching")
    },[])

    useEffect(()=>{
        setList(prod);
        if(prod!=null){ setRefresh(false)}
       
    },[])



    useEffect(()=>{
        setTimeout(()=>{
            setRefresh(false)
            setList(prod)
        },4000)
     },[mylist,refresh,prod])

     const onUpdateClick = async(id) =>{
       
        navigation.navigate("Update",{id:id})
     }

     const onDeleteClick = async(id) =>{
        await dispatch(actions.getProdAction());
        const data = doc(db,"products",id)
        await deleteDoc(data)
        setList(prod)
        setRefresh(true),
        setTimeout(()=>{
            setRefresh(false)
        },4000)
        
     }

     const pullMe = async() =>{
        await dispatch(actions.getProdAction());
        setRefresh(true),
        setTimeout(()=>{
            setRefresh(false)
        },4000)
     }

    return (
        <ScrollView 
        refreshControl={<RefreshControl
            refreshing= {refresh}
            onRefresh= {()=>pullMe()}
        />}
        style={{flex:1, backgroundColor:'#ffffff'}}>
        <View style={styles.container}>
            <View style={{marginTop:20,}}>
            <Text style={{fontSize:20, fontWeight:'800',textAlign:'center'}}>ViewProduct</Text>
            <Text style={{fontSize:12, fontWeight:'800',marginTop:5}}>Please Pull And Refresh and Update Data</Text>

            </View>
            {/* {  console.log("list", mylist)} */}
           {mylist==null ? (<Text>Pull to refresh</Text>):
            mylist.map((pro)=>{
                return(
                    
                    <View style={{marginTop:20, backgroundColor:"skyblue", width:'70%', alignItems:'center',borderRadius:10, flex:1 }}>
                        <View style={{flexDirection:'row', justifyContent:'space-between',padding:20,}}>
                        <Text style={{flex:1, fontSize:15, fontWeight:'600'}}>Name:</Text>
                        <Text style={{fontSize:15, fontWeight:'600'}}>{pro.name}</Text>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-between',padding:20,}}>
                        <Text style={{flex:1, fontSize:15, fontWeight:'600'}}>Price:</Text>
                        <Text style={{fontSize:15, fontWeight:'600'}}>{pro.price}</Text>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-between',padding:20,}}>
                        <Text style={{flex:1, fontSize:15, fontWeight:'600'}}>Offer Price:</Text>
                        <Text style={{fontSize:15, fontWeight:'600'}}>{pro.offerPrice}</Text>
                        </View>


                        

                        
                        <TouchableOpacity onPress={() => onUpdateClick(pro.id)} style={{marginBottom:20, backgroundColor:'yellow', padding:10,borderRadius:10, width:100, alignItems:'center'}}>
                            <Text style={{fontWeight:'500'}}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onDeleteClick(pro.id)} style={{marginBottom:20, backgroundColor:'yellow', padding:10,borderRadius:10, width:100, alignItems:'center'}}>
                            <Text style={{fontWeight:'500'}}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                   
                )
            })
           }
           
        </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems:'center'
    },
});

//make this component available to the app
export default ViewProduct;
