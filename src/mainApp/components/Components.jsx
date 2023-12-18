import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react';
import DropDownComponent from '../../commonComponent/customDropDown/DropDownComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import ModalComponent from '../../commonComponent/modalComponent/ModalComponent';

const Components = () => {
  return (
    <ScrollView style={styles?.mainContainer} nestedScrollEnabled={true}>
      <DropDownComponent />
      <ModalComponent />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})

export default Components