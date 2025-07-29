import { Tabs } from "expo-router"

export default function TabsLayout() {
    return <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor:"#111111",
            elevation:0,
            borderColor:"white",
        }
    }} />
}
