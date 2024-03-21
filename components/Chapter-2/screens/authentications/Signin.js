import { SafeAreaView, StatusBar, Text } from 'react-native'

export function Signin() {
  return (
    <SafeAreaView>
        <StatusBar hidden={false} />
        <Text style={{ fontSize:20 }}>Signin</Text>
    </SafeAreaView>
  )
}
