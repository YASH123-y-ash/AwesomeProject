import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, FlatList, StyleSheet, Image, Button } from 'react-native';

const FlatListComponent = () => {

  const [posts, setPosts] = useState([])
  const [loader, setLoader] = useState(true)

  const getFakeApiData = () => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then((json) => {
        setPosts(json)
        setLoader(false)
      })
  }

  useEffect(() => {
    getFakeApiData();
  }, [])


  return (
    <View style={{ flex: 1 }}>
      {
        loader ? (
          <View style={[ styles?.activityIndicator ]}>
            <ActivityIndicator size="large" color="#2E4F4F" />
          </View>

        )
          :
          <View style={[styles?.flatListContainer]}>
            <FlatList
              data={posts.users}
              renderItem={({ item }) => {
                return (
                  <View style={[styles?.renderItemSingleViewElement]}>
                    <View style={[styles?.PImageContainer]}>
                      <Image
                        key={item?.id}
                        source={{ uri: `${item.image}` }}
                        style={{ width: 200, height: 160, resizeMode: 'cover', borderRadius: 100 }} />
                    </View>

                    <View style={[styles?.contentContainer, { paddingTop: 20 }]}>
                      <View style={[styles?.infoView]}>
                        <Text style={[styles?.infoLabel]}>First Name:</Text>
                        <Text style={[styles?.infoValue]}>{item?.firstName}</Text>
                      </View>

                      <View style={[styles?.infoView]}>
                        <Text style={[styles?.infoLabel]}>Last Name:</Text>
                        <Text style={[styles?.infoValue]}>{item?.lastName}</Text>
                      </View>

                      <View style={[styles?.infoView]}>
                        <Text style={[styles?.infoLabel]}>Age:</Text>
                        <Text style={[styles?.infoValue]}>{item?.age}</Text>
                      </View>

                      <View style={[styles?.infoView]}>
                        <Text style={[styles?.infoLabel]}>Gender:</Text>
                        <Text style={[styles?.infoValue]}>{item?.gender}</Text>
                      </View>

                      <View style={[styles?.infoView]}>
                        <Text style={[styles?.infoLabel]}>Email:</Text>
                        <Text style={[styles?.infoValue]}>{item?.email}</Text>
                      </View>

                      <View style={[styles?.infoView]}>
                        <Text style={[styles?.infoLabel]}>Phone:</Text>
                        <Text style={[styles?.infoValue]}>{item?.phone}</Text>
                      </View>
                    </View>

                  </View>
                )
              }}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.flatListContent}
            />
          </View>
      }
      {/* <Button
      onPress={() => navigation.push('Details')}
      title='Go To Details... Again'
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    borderRadius: 8,
  },
  renderItemSingleViewElement: {
    width: "100%",
    height: 400,
    backgroundColor: "#E3F4F4",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    elevation: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  textBoxFlatList: {
    fontSize: 14,
    color: "black",
    fontWeight: 800
  },
  flatListContent: {
    padding: 10,
  },
  PImageContainer: {
    height: "40%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    height: "60%",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  infoView: {
    width: "50%", height: "20%", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap"
  },
  infoLabel: {
    fontSize: 16, fontWeight: 800
  },
  infoValue: {
    fontWeight: 500,
    fontSize: 12,
    color: "blue"
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center"
  }
})

export default FlatListComponent
