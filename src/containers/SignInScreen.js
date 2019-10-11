import React from "react";
import {
  Button,
  AsyncStorage,
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";

import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";

class SignInScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Bienvenue",
      header: null //permet de remplir tout le haut
    };
  };

  state = {
    email: "arno@airbnb-api.com",
    password: "password01"
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#FF595E" }}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <View
            style={{ alignItems: "center", marginTop: 80, marginBottom: 30 }}
          >
            {/* <Icon name="home" size={90} color="#ffffff" /> */}
            <Image
              style={{
                width: "100%",
                height: 200
              }}
              source={{
                uri:
                  "https://cdn.freebiesupply.com/images/large/2x/airbnb-logo.png"
                // source={require("assets/airbnb-logo.png")}
              }}
            />
          </View>
          {/* <Text style={[styles.title, { marginBottom: 10 }]}>Welcome</Text> */}
          <KeyboardAvoidingView
            style={styles.containerKeyboard}
            // keyboardVerticalOffset={200}
            behavior="padding"
            enabled
          >
            <TextInput
              required
              autoCapitalize={"none"}
              placeholder="Email"
              placeholderTextColor="white"
              style={{
                padding: 5,
                marginHorizontal: 20,
                marginBottom: 20,
                height: 44,
                borderColor: "white",
                borderBottomWidth: 1,
                borderBottomColor: "white",
                color: "white",
                fontSize: 20
              }}
              onChangeText={text => this.setState({ username: text })}
              value={this.state.username}
            />
            <TextInput
              required
              secureTextEntry={true} //pour pouvoir appliquer un type password
              placeholder="Password"
              placeholderTextColor="white"
              autoCapitalize={"none"}
              style={{
                paddingLeft: 5,
                marginHorizontal: 20,
                marginBottom: 20,
                height: 44,
                borderColor: "white",
                borderBottomWidth: 1,
                color: "white",
                fontSize: 20
              }}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
            />

            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={this.signInAsync}
            >
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    );
  }

  signInAsync = async () => {
    try {
      const response = await axios.post(
        "https://airbnb-api.now.sh/api/user/log_in",
        {
          email: this.state.username,
          password: this.state.password
        }
      );

      if (response.data.token) {
        await AsyncStorage.setItem("userToken", response.data.token);
        this.props.navigation.navigate("App");
      }
    } catch (e) {
      alert("An error occurred");
    }
  };
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF595E",
    flex: 1,
    padding: 20
  },
  containerKeyboard: {
    backgroundColor: "#FF595E",
    flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: "300",
    color: "white",
    marginVertical: 10,
    textAlign: "center"
  },
  buttonLogin: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 40,
    paddingVertical: 15,
    marginHorizontal: 90,
    marginTop: 20,
    color: "white"
  },
  textLogin: {
    color: "#FF595E",
    fontSize: 20,
    fontWeight: "400"
  }
});
