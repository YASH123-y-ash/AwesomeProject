import React, { useState, useRef } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';

const VideoPlayer = () => {
    const [clicked, setClicked] = useState(false);
    const [paused, setPaused] = useState(false);
    const [progress, setProgress] = useState(null);
    const [fullScreen, setFullScreen] = useState(false)
    const progressRef = useRef();

    const format = seconds => {
        let mins = parseInt(seconds / 60).toString().padStart(2, '0');
        let sec = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
        return `${mins} : ${sec}`
    }

    format(2408)

    return (
        <View style={[styles?.container]}>
            <TouchableOpacity
                key={"touchable-opacity"}
                style={[styles.touchableOpacity, {
                    height: fullScreen ? "100%" : 200 
                }]}
                onPress={() => setClicked(true)}
            >
                <Video
                    ref={progressRef}
                    paused={paused}
                    onProgress={(x) => {
                        setProgress(x)
                    }}
                    source={{
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    }}
                    muted
                    style={{ width: "100%", height: fullScreen ? "100%" : 280, resizeMode: 'contain' }}
                />
                {
                    clicked && (
                        <TouchableOpacity
                            key={"child-touchable-opacity"}
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                backgroundColor: "rgb(0, 0, 0, .3)",
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ flexDirection: "row" }}>
                                {/* forward */}
                                <TouchableOpacity onPress={() => {
                                    progressRef.current.seek(parseInt(progress.currentTime) + 10)
                                }}>
                                    <Image source={require('../assets/photo/forward.jpg')} style={{ width: 40, height: 40, borderRadius: 40 }} />
                                </TouchableOpacity>

                                {/* start pause */}
                                <TouchableOpacity onPress={() => { setPaused(!paused) }}>
                                    <Image source={paused ? require('../assets/photo/starticon.png') : require('../assets/photo/pause.jpg')} style={{ width: 40, height: 40, borderRadius: 40 }} />
                                </TouchableOpacity>

                                {/* backward */}
                                <TouchableOpacity onPress={() => {
                                    progressRef.current.seek(parseInt(progress.currentTime) - 10)
                                }}>
                                    <Image source={require('../assets/photo/backward.jpg')} style={{ width: 40, height: 40, borderRadius: 40 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles?.sliderContent]}>
                                <Text style={[styles?.timeTextStyle]}>{format(progress.currentTime)}</Text>
                                <Slider
                                    style={{ width: "70%", height: 40 }}
                                    minimumValue={0}
                                    maximumValue={progress.seekableDuration}
                                    minimumTrackTintColor="black"
                                    maximumTrackTintColor="black"
                                    value={progress.currentTime} 
                                    onValueChange={(x) => {
                                        progressRef.current.seek(x);
                                    }}
                                    onSlidingComplete={(x) => {
                                        progressRef.current.seek(x);
                                    }}
                                />
                                <Text style={[styles?.timeTextStyle]}>{format(progress.seekableDuration)}</Text>
                            </View>

                            <View style={{
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 width: "100%",
                                 position: "absolute",
                                 bottom: 25,
                                 backgroundColor: "black"
                            }}>
                                <TouchableOpacity onPress={() => {
                                     setFullScreen(!fullScreen)
                                    if(fullScreen){
                                        Orientation.lockToLandscape()
                                    }else{
                                        Orientation.lockToPortrait()
                                    }
                                }}>
                                    <Image source={require('../assets/photo/fullscreen.png')} style={{ width: 40, height: 40,  tintColor: "white" }} />

                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </TouchableOpacity>
        </View>
    )
}

// Later on in your styles..
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    touchableOpacity: {
        width: "100%",
       
    },
    sliderContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        position: "absolute",
        bottom: -20,
    },
    timeTextStyle: {
        color: "white",
        fontWeight: 800
    }
});

export default VideoPlayer