import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

let items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft-drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery store",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast food",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desert",
  },
];

const Categories = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingVertical: 10,
        marginTop: 5,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 40 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
