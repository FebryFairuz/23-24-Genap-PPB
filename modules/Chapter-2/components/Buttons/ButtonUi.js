import { StyleSheet, TouchableOpacity, Platform } from "react-native";

const ButtonPrimary = ({ children, ...others }) => {
  return (
    <TouchableOpacity style={styles.btnPrimary} {...others} >{children}</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: "#eaa831",
    padding: 15,
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

export { ButtonPrimary };