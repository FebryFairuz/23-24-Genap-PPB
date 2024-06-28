import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ColorPallete } from "../../../utils/Colors";

export function Bookshelf({ data }) {
  return (
    <View style={styles.container}>
      {Object.values(data).length > 0 ? (
        <View style={{ flexDirection: "row" }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <CardBook item={item} />}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        </View>
      ) : (
        <View style={styles.noBooksCard}>
          <Ionicons
            name={"information-circle-outline"}
            color={ColorPallete.red}
            size={34}
          />
          <Text style={styles.noBooks}>
            No books founded
          </Text>
        </View>
      )}
    </View>
  );
}

const CardBook = ({ item }) => {
  const navigation = useNavigation();
  const imageSource = item.img;
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("DetailBook", { book: item })}
    >
      <Image source={imageSource} style={styles.image} />
      <View style={styles.info_view}>
        <Ionicons name={"eye"} color={ColorPallete.white} size={14} />
        <Text
          style={{ marginLeft: 3, fontSize: 11, color: ColorPallete.white }}
        >
          {item.views}
        </Text>
      </View>
      <Text style={styles.bookTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  noBooksCard: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: ColorPallete.white,
    borderRadius: 10,
    padding: 20,
  },
  noBooks: {
    fontSize: 16,
    textAlign: "center",
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: ColorPallete.white,
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 15,
  },
  info_view: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0,
    padding: 5,
    backgroundColor:"rgba(0,0,0,0.5)"
  },
});
