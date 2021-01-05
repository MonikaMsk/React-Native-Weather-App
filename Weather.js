import React from 'react';
import { useEffect,useState} from 'react'
import { Text, TextInput, View, StyleSheet,Image, ScrollView, Card} from 'react-native';
import {AntDesign} from '@expo/vector-icons'


const url = "https://api.openweathermap.org/data/2.5/"

export default function Weather(){
    const [city, setCity] = useState();
    const [weather, setWeather] = useState({})


    async function fetchData(){ 
        try {
        const response = await fetch(`${url}weather?q=${city}&units=metric&appid=${key}`);
        const res =  await response.json()
        setWeather(res); 
       console.log(res)
    }  catch(error) {
        console.log(error)
    }
}

    useEffect(() => {
         fetchData()
      }, [city])

    return(
     <ScrollView>
         <View>
            <View style={styles.searchBar}>
            <AntDesign name="search1" style={styles.icon}/>
            <TextInput style={styles.input}
             placeholder="Search"
             onChangeText={newCity => setCity(newCity, console.log(newCity))}
             autoCapitalize="none"
             autoCorrect={false}
             />
             </View>

             {(typeof weather.main != "undefined") ?(
             <View style={styles.layout}>
                <Text style={styles.city}>{weather.name}</Text>
                <View style={{alignSelf:"center"}}>
               <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
               <Text style={styles.diff}>H: {Math.round(weather.main.temp_max)}°C   L: {Math.round(weather.main.temp_min)}°C</Text>
               <Text style={styles.desc}>{weather.weather[0].main}</Text>
               
               <Image style={styles.image}
               source={{uri:"https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"}} />
                </View>
             </View>
             
             ) : (<Text></Text>) }

        </View>
      </ScrollView>
      
    
    )

}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: 'white',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 30
        
    },

    input: {
        flex: 1,
        fontSize: 18
    },

    icon: {
        fontSize:30,
        alignSelf:"center",
        marginHorizontal: 10
    },

    layout:{
        marginTop: 50,
        alignSelf:"center",
    },

    city:{
        fontSize:45,
        paddingTop:5
    },
    temp:{
        fontSize: 70,
        paddingTop: 30,
    },

    diff:{
        fontSize:20,
    },
    desc: {
        fontSize: 40,
        paddingTop:30,
        paddingBottom:50
    },
    image:{
        width:150,
        height:150,

    }


  

})