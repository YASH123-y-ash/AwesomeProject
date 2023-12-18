import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const GridItemWithIcon = ({ metaData, tabName, blockName }) => {
  const [gridData, setGridData] = useState([])

  const getGridData = () => {
    setGridData(metaData?.tabs[0]?.blocks.find((val) => val?.blockName === blockName)?.fields)
  }
  useEffect(() => {
    getGridData();
  }, [metaData, tabName, blockName])

  const navigation = useNavigation();

  return (
    <View style={[styles?.gridItemContainer]}>
      {
        gridData && gridData?.map((val, index) => {
          return (
            <View key={index} style={[styles?.gridItem, {
              backgroundColor: val?.gridBoxStyle?.backgroundColor,
              margin: val?.gridBoxStyle?.margin
            }]}>
              <TouchableOpacity onPress={() => navigation.navigate(val?.fieldName)}>
                <View style={{
                  borderWidth: 1,
                  borderColor: val?.gridBoxStyle?.iconColor,
                  borderRadius: 50,
                  width: 70,
                  height: 70,
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <Icon name={val?.iconName} size={42} color={val?.gridBoxStyle?.iconColor} />
                </View>
              </TouchableOpacity>
              <View style={{ marginTop: 6 }}><Text style={{ fontWeight: "bold" }}>{val?.displayName}</Text></View>
            </View>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  gridItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 4,
    margin: 6
  },
  gridItem: {
    width: 130,
    height: 180,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default GridItemWithIcon