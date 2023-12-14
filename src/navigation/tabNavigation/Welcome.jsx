import { View, Text, Image } from 'react-native'
import React from 'react';

const Welcome = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Welcome !</Text>
      <Image
        key={"user-info-123456"}
        source={require('../../assets/photo/welcomeLogo.png')}
        style={{ width: 400, height: 440, resizeMode: 'cover' }}
      />
    </View>
  )
}

export default Welcome