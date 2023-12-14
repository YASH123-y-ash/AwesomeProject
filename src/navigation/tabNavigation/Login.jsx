import { View, StyleSheet, Text, Image, TextInput, Pressable, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../touchableOpacityComponent/CustomButton';

const Login = () => {

    const [text, setText] = useState({
        userName: "",
        password: ""
    })

    const onChangeText = (text, key) => {
        console.log(text)
        setText((prevValue) => ({
            ...prevValue,
            [key]: text
        }))
    }

    const onPressLoginButton = () => {
        console.log("succefull login")
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.LoginContainer}
      >
        <View style={[styles.LoginContainer]}>
            <View style={[styles.userImageInfoContainer]}>
                <View style={[styles.imageContainer]}>
                    <Image
                        key={"user-info-123456"}
                        source={require('../../assets/photo/avatarUserLogo.png')}
                        style={{ width: 110, height: 110, resizeMode: 'cover', borderRadius: 50 }}
                    />
                </View>
                <View><Text style={[styles?.userIdTextStyle]}>ryder0505195@gmail.com</Text></View>
            </View>
            <View style={[styles?.userInputConatiner]}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeText(text, 'userName')}
                    value={text.userName}
                    placeholder="UserName"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeText(text, 'password')}
                    value={text.password}
                    placeholder="Password"
                />
                <CustomButton
                    onPress={onPressLoginButton}
                    title="Login"
                     width= {380}
                    height={50}
                    color="#916BBF"
                    margin={12}
                    linearGradientColors={['#928DAB', '#00d2ff']}
                />
            </View>
            <View style={{ width: "100%", height: "18%", justifyContent: "space-around", alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>or</Text>
                <CustomButton
                    onPress={onPressLoginButton}
                    title="Social Login"
                    width={380}
                    height={50}
                    color="#916BBF"
                    margin={12}
                    linearGradientColors={['#EC6EAD', '#3494E6']}
                />
            </View>
            <View style={{ width: "100%", height: "18%", justifyContent: "space-around", alignItems: "center" }}>
                <Text>
                    Forgot your password?{' '}
                    <TouchableOpacity >
                        <Text style={{ color: 'blue', justifyContent: "center" }}>Reset Password</Text>
                    </TouchableOpacity>
                </Text>
                <Text>
                    Don't have an account?{' '}
                    <TouchableOpacity >
                        <Text style={{ color: 'blue' , justifyContent: "center"}}>Sign up now</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    LoginContainer: {
        flex: 1,
        // borderWidth: 2,
        backgroundColor: "#E3DFFD",
    },
    userImageInfoContainer: {
        height: "28%",
        width: "100%",
        // borderWidth: 2,
        justifyContent: "space-around",
        alignItems: "center"
    },
    userIdTextStyle: {
        fontSize: 14,
        fontWeight: "bold"
    },
    userInputConatiner: {
        width: "100%",
        height: "36%",
        backgroundColor: "#F1EAFF",
        // borderWidth: 2,
        margin: 2
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 8,
    }
})

export default Login