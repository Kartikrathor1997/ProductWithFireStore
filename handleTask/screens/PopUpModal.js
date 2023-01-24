import React, { useState, useRef } from 'react';
import { Text, View, Dimensions, StyleSheet, Button, ImageBackground, Image, } from 'react-native';
import Modal from 'react-native-modal';
// import ProvButton from './ProvButton';

const { width, height } = Dimensions.get('screen');
export default PopUpModal = (props) => {
    const [input, setinput] = useState(null);
    return (
        <Modal
            deviceHeight={height}
            deviceWidth={width}
            animationInTiming={200}
            backdropTransitionInTiming={100}
            animationIn="slideInUp"
            animationOutTiming={200}
            backdropTransitionOutTiming={100}
            animationOut="slideOutDown"
            useNativeDriver={true}
            isVisible={props.isVisible}
            onRequestClose={props.closeModal}
            onBackdropPress={props.closeModal}
            hideModalContentWhileAnimating={true}
            style={style.modalView}
        >
            <View style={style.container}>

                <View style={{ alignItems:'center', justifyContent:'center', alignSelf:'center',flex:1 }}>
                    <Text style={{fontSize:20, fontWeight:'800',}}>{props?.msg}</Text>
                </View>


            </View>
        </Modal>
    );
};


const style = StyleSheet.create({
    container: {
        flex: 0,
        flexBasis: 'auto',
        minHeight: 100,
        width: 300,
        padding: 10,
        margin: 'auto',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "white",
    },

    modalView:{
        alignSelf:'center'
    }

});
