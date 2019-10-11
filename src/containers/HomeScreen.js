import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

import RoomItem from "../components/RoomItem";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Accueil"
    };
  };

  state = {
    rooms: [],
    isLoading: true,
    error: ""
  };

  showMoreApp = () => {
    this.props.navigation.navigate("Other");
  };

  componentDidMount = async () => {
    try {
      StatusBar.setBarStyle("dark-content");
      const response = await axios.get(
        "https://airbnb-api.now.sh/api/room?city=paris"
      );
      this.setState({ rooms: response.data.rooms, isLoading: false });
    } catch (e) {
      this.setState({ error: "An error occured" });
    }
  };

  render = () => {
    if (this.state.isLoading === true) {
      return <ActivityIndicator />;
    } else {
      return (
        <>
          <SafeAreaView style={{ marginHorizontal: 10, marginTop: 10 }}>
            <StatusBar barStyle="light-content" />

            <FlatList
              data={this.state.rooms}
              keyExtractor={item => {
                return item._id;
              }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("Room", {
                        id: item._id
                      });
                    }}
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: "#BBBBBB",
                      marginBottom: 15
                    }}
                  >
                    <RoomItem item={item} />
                  </TouchableOpacity>
                );
              }}
            />
          </SafeAreaView>
        </>
      );
    }
  };
}

export default HomeScreen;
