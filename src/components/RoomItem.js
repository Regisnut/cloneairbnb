import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class RoomItem extends React.Component {
  renderStars(item) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < item.ratingValue) {
        stars.push(<Ionicons key={i} name="md-star" size={32} color="gold" />);
      } else {
        stars.push(<Ionicons key={i} name="md-star" size={32} color="grey" />);
      }
    }

    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {stars}
        <Text
          style={{
            alignItems: "center",
            marginLeft: 5,
            fontSize: 14,
            color: "grey"
          }}
        >
          {item.reviews} reviews
        </Text>
      </View>
    );
  }
  render() {
    const { item } = this.props;
    return (
      <>
        <ImageBackground
          source={{ uri: item.photos[0] }}
          style={{
            height: 300,
            width: "100%",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              backgroundColor: "black",
              padding: 20,
              position: "absolute",
              bottom: 45,
              left: 0
            }}
          >
            {item.price} €
          </Text>
        </ImageBackground>

        <View style={{ flexDirection: "row", marginVertical: 8 }}>
          <View style={{ flex: 1 }}>
            <Text
              numberOfLines={1}
              style={{ fontSize: 18, fontWeight: "500", marginTop: 3 }}
            >
              {item.title}
            </Text>
            {this.renderStars(item)}
          </View>
          <Image
            source={{ uri: item.user.account.photos[0] }}
            style={{ height: 60, width: 60, borderRadius: 30 }}
          />
        </View>
      </>
    );
  }
}
export default RoomItem;
