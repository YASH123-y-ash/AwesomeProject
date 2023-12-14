import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'

const Layout = () => {

    const [selectedImageFromList, setselectedImageFromList] = useState({})

    const imageArray = [
        { name: 'Image-1', url: require('../../src/assets/photo/desktop-wallpaper-natural-space-ultra-high-definition-high-resolution-for-your-mobile-tablet-explore-highest-resolution-beautiful-and-background-cool-high-resolution.jpg') },
        { name: 'Image-2', url: require('../../src/assets/photo/f8b42e2e3263afde5af679c82a6426d7.jpg') },
        { name: 'Image-3', url: require('../../src/assets/photo/images.jpeg') },
        { name: 'Image-4', url: require('../../src/assets/photo/alotau-papua-new-guinea-png-canoe.jpg') },
        { name: 'Image-5', url: require('../../src/assets/photo/redGarden.jpeg') }
    ]

    const handleViewPress = (event, val, index) => {
        setselectedImageFromList(val)
    }

    return (
        <ScrollView style={[styles.container, {
            flexDirection: "column",
        }]}>
            <View style={[styles.childContainer1]}>
                <ScrollView
                    style={styles.imageBlockScroolView}
                    horizontal
                    nestedScrollEnabled // Enable nested scrolling
                >
                    <View style={[styles?.imageContainer]}>
                        {
                            imageArray?.map((val, index) => {
                                return (
                                    <TouchableOpacity key={index.toString()} onPress={(event) => handleViewPress(event, val, index)}>
                                        <Image
                                            key={index}
                                            source={val?.url}
                                            style={{ width: 100, height: 100, resizeMode: 'cover' }}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                <View style={[styles?.choosedImageBlock]}>
                    <Image
                        key={selectedImageFromList?.index}
                        source={selectedImageFromList?.url}
                        style={{ width: 370, height: 260, resizeMode: 'cover', borderRadius: 6 }}
                    />
                </View>
            </View>



            <View style={[styles.childContainer2, {
            }]}>
                <ScrollView
                    style={styles.imageBlockScroolView}
                    horizontal
                    nestedScrollEnabled // Enable nested scrolling
                >
                    <View style={[styles?.imageContainer]}>
                        {
                            imageArray?.map((val, index) => {
                                return (
                                    <TouchableOpacity key={index.toString()} onPress={(event) => handleViewPress(event, val, index)}>
                                        <Image
                                            key={index}
                                            source={val?.url}
                                            style={{ width: 100, height: 100, resizeMode: 'cover' }}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                <View style={[styles?.choosedImageBlock]}>
                    <Video
                        video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                        videoWidth={200}
                        videoHeight={200}
                        thumbnail={{ uri: '../../src/assets/photo/redGarden.jpeg' }}
                    />
                </View>
            </View>
            <View style={[styles.childContainer3]}>
                <Image
                    source={require(`../../src/assets/photo/desktop-wallpaper-natural-space-ultra-high-definition-high-resolution-for-your-mobile-tablet-explore-highest-resolution-beautiful-and-background-cool-high-resolution.jpg`)}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 7,
        backgroundColor: "#F9F9F9",
    },
    childContainer1: {
        flex: 1,
        height: 400,
        borderRadius: 4,
        borderColor: "#B9F3FC",
        borderWidth: 2,
        gap: 2
    },
    childContainer2: {
        height: 400,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    childContainer3: {
        height: 400,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    },
    imageBlockScroolView: {
        flex: 1,
        borderWidth: 1,
        flexDirection: "row",
        gap: 2,
        borderRadius: 6
    },
    imageContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        gap: 2,
    },
    choosedImageBlock: {
        flex: 3,
        backgroundColor: "#F9F9F9",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        paddingLeft: 5,
        paddingRight: 5
    },
    childContainerText: {
        fontWeight: '800'
    }
});

export default Layout