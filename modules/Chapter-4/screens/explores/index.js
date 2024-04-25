import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Genres } from "../../utils/ConstData";


export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
      isMicrophoneOpen: false,
      isFavoriteSelected: false,
    };
  }

  toggleSidebar = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  };

  closeSidebar = () => {
    this.setState({ isSidebarOpen: false });
  };

  handleFavoritePress = () => {
    this.setState({ isFavoriteSelected: !this.state.isFavoriteSelected });
  };

  toggleMicrophone = () => {
    this.setState({ isMicrophoneOpen: !this.state.isMicrophoneOpen });
    if (!this.state.isMicrophoneOpen) {
      setTimeout(() => {
        this.setState({ isMicrophoneOpen: false });
      }, 5000);
    }
  };

  closeMicrophone = () => {
    this.setState({ isMicrophoneOpen: false });
  };

  genreName1 = Genres[0].name;
  genreName2 = Genres[1].name;
  genreName3 = Genres[2].name;
  genreName4 = Genres[3].name;
  genreIcon1 = Genres[0].icon;
  genreIcon2 = Genres[1].icon;
  genreIcon3 = Genres[2].icon;
  genreIcon4 = Genres[3].icon;


  render() {
    const { isSidebarOpen, isMicrophoneOpen } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar style="light" hidden />
        {isSidebarOpen && (
          <View style={styles.sidebarContainer}>
            <View style={styles.sidebar}>
              <TouchableOpacity onPress={this.closeSidebar}>
                <FontAwesome5 name="times" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFavoritePress}>
                <Text style={styles.sidebarText}>
                  Favorite
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {isMicrophoneOpen && (
          <TouchableOpacity
            style={styles.overlay}
            onPress={this.closeMicrophone}
          >
            <View style={styles.microphonePopup}>
              <FontAwesome5 name="microphone" size={60} color="black" />
            </View>
          </TouchableOpacity>
        )}
        <View style={styles.header}>
          <Text style={styles.headerText}>Explore</Text>
          <TouchableOpacity onPress={this.toggleSidebar}>
            <FontAwesome5 name="bars" size={18} color="orange" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <View style={{ justifyContent: 'center' }}>
              <FontAwesome5 name="search" size={18} color="orange" />
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="white"
            />
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity onPress={this.toggleMicrophone}>
                <FontAwesome5 name="microphone" size={18} color="orange" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.genreContainer}>
          <View style={styles.genreRow}>
            <TouchableOpacity>
              <View style={styles.genreCard}>
                {this.genreIcon1}
                <Text style={styles.genreCardText}>{this.genreName1}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.genreCard}>
                {this.genreIcon2}
                <Text style={styles.genreCardText}>{this.genreName2}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.genreRow}>
            <TouchableOpacity>
              <View style={styles.genreCard}>
                {this.genreIcon3}
                <Text style={styles.genreCardText}>{this.genreName3}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.genreCard}>
                {this.genreIcon4}
                <Text style={styles.genreCardText}>{this.genreName4}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    width: "100%",
    marginTop: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "orange"
  },
  sidebarContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
    position: "absolute",
    marginTop: 65,
    zIndex: 3,
  },
  sidebar: {
    backgroundColor: "#0b1f3f",
    width: "70%",
    height: "100%",
    padding: 20,
    position: "absolute",
    borderTopLeftRadius: 20,
  },
  sidebarText: {
    paddingVertical: 8,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    color: "white",
  },
  searchContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
  searchBar: {
    padding: 9,
    flexDirection: "row",
    backgroundColor: "#0b1f3f",
    borderWidth: 2,
    borderColor: "orange",
    borderRadius: 15,
    marginTop: 30,
    height: 60,
    width: "80%",
  },
  searchInput: {
    backgroundColor: "#0b1f3f",
    fontSize: 14,
    width: "80%",
    marginLeft: 10,
    marginRight: 10,
    color: "white",
  },
  microphonePopup: {
    backgroundColor: "white",
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  genreContainer: {
    alignItems: "center",
    width: "100%",
  },
  genreRow: {
    flexDirection: "row",
    gap: 50,
  },
  genreCard: {
    flexDirection: "column",
    backgroundColor: '#0b1f3f',
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "orange",
  },
  genreCardText: {
    color: "white",
    marginTop: 10,
    fontSize: 14,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9998,
  },
});