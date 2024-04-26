import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, SafeAreaView } from 'react-native';
import { ButtonPrimary } from '../../../../components/Buttons/ButtonUi';

const UpdateEmailScreen = () => {
  const [email, setEmail] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [repeatNewEmail, setRepeatNewEmail] = useState('');

  const handleUpdateEmail = () => {
    if (currentEmail === '' || newEmail === '' || repeatNewEmail === '') {
      window.alert('Semua field harus diisi');
      return;
    }

    if (newEmail !== repeatNewEmail) {
      window.alert('Email baru tidak cocok');
      return;
    }

    // Simulasi update password berhasil dengan menampilkan pesan alert
    window.alert('Email berhasil diubah');

    // Clear fields
    setCurrentEmail('');
    setNewEmail('');
    setRepeatNewEmail('');
  };

  return (
    <SafeAreaView style={{margin: 20, flex: 1}}>
      <Text style={styles.Text}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor={"grey"}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.Text}>New Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter New Email"
        placeholderTextColor={"grey"}
        secureTextEntry={false}
        value={newEmail}
        onChangeText={text => setNewEmail(text)}
      />
      <View style={{ marginVertical: 20 }}>
            <ButtonPrimary onPress={() => handleUpdateEmail()}>
              <Text style={styles.buttonText}>Submit</Text>
            </ButtonPrimary>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 8,
  },
  Text: {
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default UpdateEmailScreen;