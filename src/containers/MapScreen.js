import React from "react";
import axios from "axios";
import { Location, Permissions, Mapview } from "expo";
import MapView from "react-native-maps";

class MapScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Map"
    };
  };

  state = {
    latitude: 48.8589507,
    longitude: 2.3325361,
    rooms: []
  };

  render() {
    if (this.state.latitude && this.state.longitude) {
      return (
        <Mapview
          showUserLocation={true}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
          }}
          style={{ flex: 1 }}
          provider={MapView.PROVIDER_GOOGLE}
        >
          {this.state.rooms.map(room => {
            return (
              <MapView.Marker
                key={room.id}
                coordinate={{
                  latitude: room.loc[1],
                  longitude: room.loc[0]
                }}
                title={room.title}
              />
            );
          })}
        </Mapview>
      );
    }
    return null;
  }

  async componentDidMount() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === "granted") {
      let location = await Location.getCurrentPositionAsync({});

      //Récupérer la latitude et la longitude
      //   const latitude = location.coords.latitude;
      const latitude = 48.8589507;
      //   const longitude = location.coords.longitude;
      const longitude = 2.3325361;

      this.setState({
        latitude: latitude,
        longitude: longitude
      });

      const response = await axios.get(
        `https://airbnb-api.now.sh/api/room/around?latitude=${latitude}&longitude=${longitude}`
      );

      this.setState({
        rooms: response.data
      });
    }
  }
}

export default MapScreen;
