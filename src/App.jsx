import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import Cidades from "./components/Cidades";
import MaisCidades from "./components/MaisCidades";

const Stack = createNativeStackNavigator();

export default props => {


    return (
    
            <SafeAreaView style={{flex: 1}}>
                <NavigationContainer>
                  <Stack.Navigator initialRouteName="MaisCidade">
                    <Stack.Screen name="Cidade" component={Cidades} options={{title: 'Inicio'}}/>
                    <Stack.Screen name="MaisCidade" component={MaisCidades} options={{title: 'Cidades', headerTitleAlign: 'center', }}/>
                  </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>



    )
}

