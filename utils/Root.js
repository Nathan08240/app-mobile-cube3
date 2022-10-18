import Home from "../Layouts/Home";
import AgendaDisplayer from "../Layouts/AgendaDisplayer";
import Students from "../Layouts/Students";
import {createStackNavigator} from "@react-navigation/stack"
import React from 'react';
import {Image, StyleSheet, View} from "react-native";

const Stack = createStackNavigator();


function LogoTitle() {
    return (
        <>
            <View style={{flexDirection: "row"}}>
                <Image source={require('../assets/logo-CESI.png')} style={styles.img}/>
            </View>
        </>
    )
}


function Root() {


    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerStyle: {
                        backgroundColor: "#ffc251",
                    },
                    headerTitle: props => <LogoTitle {...props}/>
                }}
            />
            <Stack.Screen
                name="Agenda"
                component={AgendaDisplayer}
                options={{
                    headerStyle: {
                        backgroundColor: "#ffc251",
                    },
                    headerTitle: props => <LogoTitle {...props}/>
                }}/>
            <Stack.Screen
                name="Students"
                component={Students}
                options={{
                    headerStyle: {
                        backgroundColor: "#ffc251",
                    },
                    headerTitle: props => <LogoTitle {...props}/>
                }}/>
        </Stack.Navigator>
    );
}

export default Root;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffc251',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    img: {
        width: 80,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
})
