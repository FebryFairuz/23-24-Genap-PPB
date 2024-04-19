import { View, Text } from "react-native";
import React from "react";
import { ButtonPrimary } from "../../components/Buttons/ButtonUi";

const TestButtons = ({navigation}) => {
  return (
    <ButtonPrimary onPress={() => navigation.navigate('DetailBook')}>
      <Text>Pencet atuh</Text>
    </ButtonPrimary>
  );
};

export default TestButtons;
