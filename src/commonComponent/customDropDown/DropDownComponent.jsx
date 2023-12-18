import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { countries } from './service';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const DropDownComponent = () => {

  const [selectedCountry, setselectedCountry] = useState("Select Country");
  const [isOpened, setIsOpened] = useState(false);
  const [data, setData] = useState(countries)

  const onSearchCountries = (txt) => {
    if (txt !== "") {
      let tempValue = data?.filter((value, index) => {
        if (value?.country?.toLowerCase().includes(txt)) {
          console.log(value?.country)
        }
        return value?.country?.toLowerCase().includes(txt)
      })
      setData(tempValue)
    } else {
      setData(countries)
    }
  }


  return (
    <SafeAreaView style={styles?.mainContainer}>
      <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: 800 }}>DropDown</Text>
      <TouchableOpacity style={styles?.touchableOpacityD} onPress={() => {
        setIsOpened(!isOpened)
      }}>
        <Text style={{ paddingLeft: 10, fontSize: 18, fontWeight: 800 }}> {selectedCountry} </Text>
        <Icon name={isOpened ? "keyboard-arrow-down" : "keyboard-arrow-up"} size={42} color={"grey"} />
      </TouchableOpacity>
      {
        isOpened ? (
          <View style={styles?.selectionContainer}>
            <TextInput style={styles?.textInputD} onChangeText={(txt) => onSearchCountries(txt)} placeholder='Search' />
            <View style={{ flex: 1 }}>
              <FlatList
                contentContainerStyle={styles?.dropDownValuesContainer}
                data={data}
                renderItem={({ item }) => (
                  <TouchableOpacity style={{ alignSelf: "center", borderBottomColor: "#f6f6f6", width: "100%", margin: 8, elevation: 2, backgroundColor: "white" }}
                    onPress={() => {
                      setselectedCountry(item?.country);
                      setIsOpened(false);
                      setData(countries);
                    }}
                  >
                    <Text style={{ fontSize: 20, textAlign: "center", margin: 4 }}>{item?.country}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>

          </View>
        )
          :
          null
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    // height: 500,
    // justifyContent: "space-around",
    // borderWidth: .5,
    borderRadius: 10,
    padding: 8,
    // margin: ,
  },
  touchableOpacityD: {
    width: "88%",
    height: 50,
    borderWidth: .8,
    borderRadius: 10,
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  selectionContainer: {
    width: "88%",
    height: 300,
    borderRadius: 10,
    borderWidth: .5,
    elevation: 10,
    alignSelf: "center",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  textInputD: {
    width: "96%",
    height: 60,
    borderRadius: 10,
    borderWidth: .7,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "green",
    paddingLeft: 10
  },
  dropDownValuesContainer: {
    marginTop: 10,
    width: "100%",
    // alignItems: "center",
    justifyContent: "space-between",
  }
})

export default DropDownComponent