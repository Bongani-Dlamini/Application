import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function ContactUs({ navigation }) {
    return (
        <ImageBackground
            source={require('../../assets/back.png')}
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text 
                    onPress={() => navigation.navigate('Home')}    
                    style={{ fontSize: 25, fontWeight: 'bold' }}
                ></Text>
            </View>
            
            <Image
                source={require('../../assets/Phone.png')}
                style={{ width: 320, height: 400, marginBottom: 110 }} 
            />
            <TouchableOpacity 
                onPress={() => navigation.navigate('HomeScreen')} 
                style={{ 
                    backgroundColor: 'brown', 
                    padding: 15, 
                    borderRadius: 10, 
                    alignItems: 'center', 
                    position: 'absolute', 
                    bottom: 45, 
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={{ color: 'white', fontSize: 18 }}>Back</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}
