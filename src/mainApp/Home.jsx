import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import metaData from '../home.json';
import GridItemWithIcon from '../commonComponent/GridItemWithIcon';
import { HOME, HOME_PAGE } from '../contants/tabContants';
import AccountDetails from './accounts/accountDetails/AccountDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Home = ({ navigator }) => {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (metaData) {
      setData(metaData)
      setLoader(false)
    } else {
      setLoader(true)
    }
  }, [metaData])

  
 
  return (
    <View style={[styles?.mainContainer]}>
      {
        loader ? (<View><ActivityIndicator size={"large"} color="#2E4F4F" /></View>) :
          <View style={[styles?.gridItem]}>
            <GridItemWithIcon metaData={data} blockName={HOME} tabName={HOME_PAGE} navigator={navigator} />
          </View>
         
      }
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, alignItems: 'center',
  }
})

export default Home