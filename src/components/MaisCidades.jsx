import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";



export default props => {


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#A9A9A9'}}>
        <View style={{margin: 20}}>

         <Text style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: 'white'
         }}>Paris</Text>

         <Text style={{
            fontSize: 15,
            textDecorationLine: 'underline',
        }}>France</Text>

            <Image source={require ('../Imagens/paris.png')} style={{
                margin: 260,
                marginTop: -45,
            }}/>

       

            <Text style={estilos.textoG}>Tokyo</Text>
            <Text style={estilos.textoP}>Japan</Text>

            <Image source={require ('../Imagens/tokio.png')} style={estilos.imagem}/>

            </View>

      
        

    

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create(
    {
        textoG: {
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            marginTop: -200
        },
        textoP: {
            fontSize: 15,
            textDecorationLine: 'underline',
            marginTop: -1
        },
        imagem: {
            margin: 260,
            marginTop: -40
        },

    }
)