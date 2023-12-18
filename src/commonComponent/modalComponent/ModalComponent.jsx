import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import DropDownComponent from '../customDropDown/DropDownComponent'

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles?.mainContainer}>
      <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "700" }}>Modal</Text>
      <TouchableOpacity style={styles?.touchableView} onPress={()=> {setModalVisible(true)}}>
        <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "700", }}>Open Modal!</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        // transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={[styles.textStyle, {
                 fontSize: 18,
                 fontWeight: "800"
              }]}>Close !</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
  },
  touchableView: {
    width: 200,
    height: 100,
    borderRadius: 10,
    padding: 10,
    borderWidth: 0.8,
    alignSelf: "center",
    backgroundColor: "#E3F4F4",
    justifyContent: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "800",
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    width: 100,
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default ModalComponent