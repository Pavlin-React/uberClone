import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export let localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://th.bing.com/th/id/R.d856c0bbf05463c16eabf893f8cc45ab?rik=JLE6P9Jq3sj7WQ&pid=ImgRaw&r=0",
    categories: ["coffee", "bar"],
    price: "$$",
    reviews: "1234",
    rating: "4.5",
  },
  {
    name: "Benihana",
    image_url:
      "https://media.blogto.com/articles/20180627-2048-Mezu18.jpg?w=1200&cmd=resize_then_crop&height=630&quality=70",
    categories: ["coffee", "bar"],
    price: "$$",
    reviews: "124",
    rating: "4.4",
  },
];

const RestaurantItem = ({restaurantData}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "white",
            padding: 15,
            marginTop: 10,
          }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
};

let RestaurantImage = ({image}) => (
  <View>
    <Image
      source={{uri: image}}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={24} color="black" />
    </TouchableOpacity>
  </View>
);

let RestaurantInfo = ({name, rating}) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 10,
    }}
  >
    <View>
      <Text>{name}</Text>
      <Text>35-40 • min</Text>
    </View>
    <View
      style={{
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
export default RestaurantItem;
