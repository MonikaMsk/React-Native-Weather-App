import React from 'react'
import {View, StyleSheet, Button} from 'react-native'
import LottieView from 'lottie-react-native';

export default function Home({navigation}){


    const pressHandler = () =>{
        navigation.navigate('Weather')
    }

    return (
        
        <View style={styles.container}>
            <LottieView 
            resizeMode={'cover'}
            loop = {true} 
            autoPlay={true}     
            source={require('./assets/animation.json')}/>
            <View paddingTop={50}>
            <Button title="Click here to check weather forecast"
            onPress={pressHandler} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafdff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})