import { View, Text, StatusBar } from 'react-native'
import {Link, Redirect} from "expo-router"
import React from 'react'

export default function signup() {
    return <Redirect href={"/(tabs)/home"}/>
    return (
        <View style=
            {{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                backgroundColor:"#111111",
            }}>
            <StatusBar barStyle={"light-content"}/>
            <Text style={{color:"white",fontSize:24}}>Signup</Text>
           <Link href={"login"} style={{color:"purple",fontSize:20}}>login</Link>
        </View>
    )
}