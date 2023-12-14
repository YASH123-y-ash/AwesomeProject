import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const CustomButton = ({ onPress, width, height, color, title, margin, linearGradientColors }) => {
    console.log(width)
    return (
        <TouchableOpacity
            onPress={onPress}
            
        >
            <LinearGradient
                colors={linearGradientColors || ['#A5FECB', '#20BDFF', '#5433FF']}
                style={{
                    width: width || 100,
                    height: height || 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8,
                    margin: margin || 10,
                }}
            >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CustomButton