import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
  StatusBar
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";

class OtherScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Autre page"
    };
  };

  // state = {
  //   sign: null,
  //   isLoading: true,
  //   latitude: null,
  //   longitude: null
  // };

  // componentDidMount = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   let location;
  //   if (status === "granted") {
  //     location = await Location.getCurrentPositionAsync({});
  //   }

  // // Récupérer la latitude et la longitude
  // const latitude = location.coords.latitude;
  // const longitude = location.coords.longitude;
  // this.setState({
  //   latitude: latitude,
  // //   longitude: longitude
  // });
  //   try {
  //     const response = await axios.get(
  //       "https://airbnb-api.now.sh/api/room/" +
  //         this.props.navigation.state.params.itemId
  //     );
  //     this.setState({
  //       sign: response.data,
  //       isLoading: false,
  //       latitude: response.data.loc[1],
  //       longitude: response.data.loc[0]
  //     });
  //   } catch (e) {
  //     alert("An error occurred");
  //   }
  // };

  render() {
    // if (this.state.isLoading) {
    //   return <ActivityIndicator />;
    // } else {
    return (
      <ScrollView>
        {/* <StatusBar barStyle="light-content" />
          <Swiper style={styles.wrapper} showsButtons>
            {this.state.sign.photos.map((pic, index) => {
              return (
                <ImageBackground
                  key={index}
                  style={{
                    height: 300,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  source={{ uri: pic }}
                  // resizeMethod="contain"
                />
              );
            })}
          </Swiper> */}

        <View style={styles.container}>
          <Text>Des choses affichées</Text>
          {/* <View
              style={{
                flexDirection: "row",
                marginVertical: 10
              }}
            >
              <View>
                <Text style={{ flex: 1, fontWeight: "600" }} numberOfLines={1}>
                  {this.state.sign.title}
                </Text>

                
            <Text numberOfLines={3} style={{ fontSize: 20, marginBottom: 10 }}>
              {this.state.sign.description}
            </Text>
            <View>
              <MapView
                style={{ flex: 1, height: 200 }}
                initialRegion={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  latitudeDelta: 0.09,
                  longitudeDelta: 0.04
                }}
              >
                <MapView.Marker
                  coordinate={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude
                  }}
                  title={this.state.sign.title}
                />
              </MapView>
            </View> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default OtherScreen;
