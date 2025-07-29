import { View, Text, StatusBar } from 'react-native'
import React from 'react'

export default function signup() {
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
            <Text style={{color:"white",fontSize:24}}>Login</Text>
        </View>
    )
}