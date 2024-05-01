import { StyleSheet, TouchableOpacity, Platform } from "react-native";

const ButtonPrimary = ({ children, ...others }) => {
  return (
    <TouchableOpacity style={styles.btnStyle} {...others} >{children}</TouchableOpacity>
  );
};

const ButtonSecondary = ({ children, ...others }) => {
  return (
    <TouchableOpacity style={{ ...styles.btnStyle, backgroundColor: "red", }} {...others} >{children}</TouchableOpacity>
  );
};

const ButtonTersier = ({ children, ...others }) => {
  return (
    <TouchableOpacity style={{ ...styles.btnStyle, backgroundColor: "#f8f9fa" }} {...others} >{children}</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: "#eaa831",
    padding: 15,
    marginVertical:10,
    borderRadius: 30,
    color: "white",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export { ButtonPrimary, ButtonSecondary, ButtonTersier };