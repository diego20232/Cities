import React from "react";
import { View, Text } from "react-native";
import {  TextInput, Button} from "react-native-paper";


export default props => {



    return (
        <View style={{
            flex: 1,
            backgroundColor: '#483D8B',
            flexDirection: 'column',

        
        }}>
          <Text style={{
            fontSize: 35,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            marginTop: 120
          }}>Cidades Brasileiras</Text>

          <TextInput placeholder="São Paulo" style={{
            padding: 2,
            margin: 45,
            borderRadius: 5,
            marginTop: 34
          }}></TextInput>

<TextInput placeholder="Minas Gerais" style={{
            padding: 2,
            margin: 45,
            borderRadius: 5,
            marginTop: 0,
          

          }}></TextInput>

        <Button style={{
            marginLeft: 90,
            borderRadius: 50,
            width: 200,
            backgroundColor: 'white',
            borderStyle: 'solid'
        }} onPress={() => props.navigation.navigate('MaisCidade')}>Mais cidades</Button>
    
        </View>
    )
}