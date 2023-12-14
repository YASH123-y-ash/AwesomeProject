import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
    )
}

export default Home