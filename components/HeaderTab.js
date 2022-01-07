import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

const HeaderTab = () => {
  let [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

let HeaderButton = ({setActiveTab, text, activeTab}) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveTab(text)}
      style={{
        backgroundColor: activeTab === text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
    >
      <Text
        style={{
          color: activeTab === text ? "white" : "black",
          fontSize: 16,
          fontWeight: "900",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderTab;
