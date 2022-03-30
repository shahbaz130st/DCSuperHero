import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListOfSuperHeros from "../screens/listofsuperheros/ListOfSuperHeros";
import DetailOfSuperHero from "../screens/detailofsuperhero/DetailOfSuperHero";

const RootStack = createNativeStackNavigator();

const Routing = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="ListOfSuperHeros" component={ListOfSuperHeros} />
                <RootStack.Screen name="DetailOfSuperHero" component={DetailOfSuperHero} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
export default Routing;