// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import {View, StyleSheet} from "react-native";
// import { Button, Layout, Section, Text, SectionContent, TopNav, themeColor, useTheme } from "react-native-rapi-ui";

// const Home = ()=>{
//     // const navigation = useNavigation()
//     const {theme, setTheme} = useTheme()
//     return(
//         <Layout>
//         <TopNav leftContent={<Ionicons name="menu-outline" size={20} color={theme == "dark" ? themeColor.white100 : themeColor.black100} />} middleContent="Home" 
//         rightContent={<Ionicons name={theme == "dark" ? "moon" : "sunny"}
//         size={20}
//         color={theme == "dark" ? themeColor.white100 : themeColor.black100} />}
//         rightAction={()=>{
//             if(theme == "dark")
//             setTheme("light");
//             else
//             setTheme("dark")
//         }} />
        
//         <StatusBar style="light" backgroundColor={theme == "dark" ? "black" : "blue"} />
//             <View style={{flex: 1, justifyContent: "center", alignItems: "center", margin: 10}}>
//                 <Section>
//                     <SectionContent>
//                         <Text fontWeight="bold" style={{textAlign: "center"}}>These Components are coming from Rapid UI</Text>
//                         <Button style={{marginTop: 10}} text="Go to Second Screen" onPress={()=>navigation.navigate('Profile')}></Button>
//                     </SectionContent>
//                 </Section>
//             </View>
//         </Layout>
//     )
// }
// export default Home;

// const style = StyleSheet.create({
//     btn: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     }
// })