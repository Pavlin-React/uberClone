import React from "react";
import { SafeAreaView } from "react-native";
import { View, Text } from "react-native";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{backgroundColor: 'white', padding: 15}} >  
        <HeaderTab />
        <SearchBar/>
      </View>
    </SafeAreaView>
  );
};

export default Home;