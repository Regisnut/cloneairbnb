import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground,
  StyleSheet
} from "react-native";
// import { MapView } from "expo";
import MapView from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

import RoomItem from "../components/RoomItem";
import axios from "axios";

class RoomScreen extends React.Component {
  state = {
    room: {
      photos: [
        "https://a2.muscache.com/im/pictures/78258559/75143e16_original.jpg",
        "https://a1.muscache.com/im/pictures/94115999/69e19b9f_original.jpg",
        "https://a1.muscache.com/im/pictures/94116113/39f01888_original.jpg",
        "https://a0.muscache.com/im/pictures/78258742/42b26479_original.jpg",
        "https://a1.muscache.com/im/pictures/78258750/ee52abac_original.jpg",
        "https://a1.muscache.com/im/pictures/78258866/6125dc9a_original.jpg",
        "https://a2.muscache.com/im/pictures/78258872/cc2c590e_original.jpg",
        "https://a0.muscache.com/im/pictures/78258879/de57b358_original.jpg",
        "https://a0.muscache.com/im/pictures/78258884/5c57c1de_original.jpg",
        "https://a2.muscache.com/im/pictures/7606a3da-e49d-43d1-a1b8-3bac6529148d.jpg",
        "https://a2.muscache.com/im/pictures/cf48e162-0259-4813-bc4c-af9cb9fe2482.jpg",
        "https://a2.muscache.com/im/pictures/5f8b17f6-0aee-46c1-81b4-855a8d0da9d9.jpg",
        "https://a2.muscache.com/im/pictures/0d515e48-1ad4-4453-b342-dc39528de7af.jpg",
        "https://a1.muscache.com/im/pictures/78258888/0f60f239_original.jpg",
        "https://a2.muscache.com/im/pictures/2792f5d9-0b6e-4338-806e-84a96299d803.jpg",
        "https://a2.muscache.com/im/pictures/ab077333-cd25-4139-8e8a-a0fecbf7d264.jpg",
        "https://a2.muscache.com/im/pictures/4f920fd6-ed6f-40f7-a7c3-05df2fd9f1b4.jpg",
        "https://a2.muscache.com/im/pictures/82e25500-ad6e-41a9-91dd-aff4a686585e.jpg",
        "https://a1.muscache.com/im/pictures/78259052/33ae1034_original.jpg",
        "https://a1.muscache.com/im/pictures/78259055/59295f32_original.jpg",
        "https://a1.muscache.com/im/pictures/78259055/59295f32_original.jpg",
        "https://a1.muscache.com/im/pictures/78259056/d6a384b1_original.jpg",
        "https://a2.muscache.com/im/pictures/78259059/3f7fc75a_original.jpg",
        "https://a1.muscache.com/im/pictures/78259067/8aa56f69_original.jpg",
        "https://a2.muscache.com/im/pictures/fc8144b4-1db1-45a0-9772-8e566ea89c2f.jpg",
        "https://a2.muscache.com/im/pictures/78259071/259cf03b_original.jpg",
        "https://a2.muscache.com/im/pictures/c331c395-a241-42d6-ba11-e37ff88cc0e7.jpg",
        "https://a1.muscache.com/im/pictures/94116260/10f4b78e_original.jpg",
        "https://a0.muscache.com/im/pictures/78258737/005bda16_original.jpg",
        "https://a2.muscache.com/im/pictures/cc71f67f-5508-416f-ab77-ed1850db1f85.jpg",
        "https://a0.muscache.com/im/pictures/78259237/76ec03c4_original.jpg",
        "https://a2.muscache.com/im/pictures/78259243/eb687626_original.jpg",
        "https://a0.muscache.com/im/pictures/78259368/76dff8dd_original.jpg",
        "https://a2.muscache.com/im/pictures/78259359/4142efdd_original.jpg",
        "https://a2.muscache.com/im/pictures/63468cc8-6978-479b-a7a3-742c6e053c11.jpg"
      ],
      _id: "58ff73d11765a998979a3396",
      shortId: 5,
      title: "Eiffel Tower Luxury 90m², 2 Terraces",
      description:
        "This is a completely renovated flat, close to Eiffel Tower and the Seine river, meant to inspire a true Parisian experience. Elegant two bedrooms of about 90 sqm with 2 terraces and a private car park.",
      price: 219,
      ratingValue: 5,
      reviews: 84,
      loc: [2.2841681, 48.8498514],
      user: {
        account: {
          photos: [
            "https://a2.muscache.com/im/pictures/a137f243-fbe3-4806-9caa-3d7d1448f201.jpg?aki_policy=profile_x_medium"
          ],
          favorites: ["58ff73d11765a998979a33a4", "58ff73d11765a998979a33ac"],
          rooms: ["58ff73d11765a998979a3396"],
          username: "Scheryan",
          description:
            "We love this wonderful city and we're pleased to be able to offer this apt so that you may enjoy it as well. Our wish is for you to feel very comfortable and get the most out of your stay. Welcome to Paris! Have a great time. Should you stay with us, we will do everything imaginable to facilitate your best stay possible, this is our promise to you. We have not yet had a guest who did not love the place."
        },
        _id: "58ff73cc1765a998979a3390"
      },
      city: {
        _id: "58ff73cc1765a998979a3391",
        source:
          "https://a0.muscache.com/airbnb/static/destinations/o-Paris_480x320.jpg",
        name: "Paris",
        slug: "paris",
        loc: [2.3325361, 48.8589507],
        zoom: 11,
        __v: 0
      },
      __v: 0
    },

    isLoading: false,
    descriptionLines: 3,
    error: ""
  };

  static navigationOptions = ({ navigation }) => ({
    title: "Room"
  });

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
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={{ flex: 1, marginHorizontal: 10, marginTop: 10 }}>
          {/* <RoomItem item={this.state.room} /> */}
          {/* <StatusBar barStyle="light-content" /> */}
          <Swiper
            // style={styles.wrapper}
            autoplay={false}
            showsButtons={true}
            style={{ height: 250 }}
            //   autoplay={true} style={{ height: 300 }}
          >
            {this.state.room.photos.map((pic, index) => {
              return (
                <ImageBackground
                  key={index}
                  style={{
                    height: 250,
                    width: "100%",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2
                  }}
                  source={{ uri: pic }}
                  // resizeMethod="contain"
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
                    {this.state.room.price}€
                  </Text>
                </ImageBackground>
              );
            })}
          </Swiper>

          <View style={{ flexDirection: "row", marginVertical: 8 }}>
            <View style={{ flex: 1 }}>
              <Text
                numberOfLines={1}
                style={{ fontSize: 18, fontWeight: "500", marginTop: 3 }}
              >
                {this.state.room.title}
              </Text>
              {this.renderStars(this.state.room)}
            </View>
            <Image
              source={{ uri: this.state.room.user.account.photos[0] }}
              style={{ height: 60, width: 60, borderRadius: 30 }}
            />
          </View>
          <Text
            numberOfLines={this.state.descriptionLines}
            OnPress={() => {
              this.setState({
                descriptionLines: 0
              });
            }}
            style={{
              lineHeight: 20,
              fontSize: 16,
              fontWeight: "400",
              marginBottom: 5
            }}
          >
            {this.state.room.description}
          </Text>

          <MapView
            showUserLocation={true}
            style={{ height: 300, width: "100%" }}
            initialRegion={{
              latitude: this.state.room.loc[1],
              longitude: this.state.room.loc[0],
              latitudeDelta: 0.09,
              longitudeDelta: 0.04
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.state.room.loc[1],
                longitude: this.state.room.loc[0]
              }}
              title={this.state.room.title}
            />
          </MapView>
        </ScrollView>
      );
    }
  }
  componentDidMount = async () => {
    try {
      const id = this.props.navigation.state.params.id;
      const response = await axios.get(
        "https://airbnb-api.now.sh/api/room/" + id
      );
      this.setState({
        room: response.data,
        isLoading: false
      });
      console.log(this.state);
    } catch (e) {
      this.setState({ error: "An error occured" });
    }
  };
}
const styles = StyleSheet.create({
  wrapper: {}
});
export default RoomScreen;
