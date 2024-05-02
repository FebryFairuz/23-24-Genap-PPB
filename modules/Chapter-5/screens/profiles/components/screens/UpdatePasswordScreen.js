import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, SafeAreaView } from 'react-native';
import { ButtonPrimary } from '../../../../components/Buttons/ButtonUi';

const UpdatePasswordScreen = () => {
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  const handleUpdatePassword = () => {
    if (currentPassword === '' || newPassword === '' || repeatNewPassword === '') {
      window.alert('Semua field harus diisi');
      return;
    }

    if (newPassword !== repeatNewPassword) {
      window.alert('Password baru tidak cocok');
      return;
    }

    // Simulasi update password berhasil dengan menampilkan pesan alert
    window.alert('Password berhasil diubah');

    // Clear fields
    setCurrentPassword('');
    setNewPassword('');
    setRepeatNewPassword('');
  };

  return (
    <SafeAreaView style={{margin: 20, flex: 1}}>
      <Text style={styles.Text}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        placeholderTextColor={"grey"}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Text style={styles.Text}>Current Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Current Password"
        placeholderTextColor={"grey"}
        secureTextEntry={true}
        value={currentPassword}
        onChangeText={text => setCurrentPassword(text)}
      />
      <Text style={styles.Text}>New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter New Password"
        placeholderTextColor={"grey"}
        secureTextEntry={true}
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat New Password"
        placeholderTextColor={"grey"}
        secureTextEntry={true}
        value={repeatNewPassword}
        onChangeText={text => setRepeatNewPassword(text)}
      />
      <View style={{ marginVertical: 20 }}>
            <ButtonPrimary onPress={() => handleUpdatePassword()}>
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

export default UpdatePasswordScreen;