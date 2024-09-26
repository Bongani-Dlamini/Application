import * as React from 'react';
import { View, Text, ImageBackground, TextInput } from 'react-native';
// functions for the text inputs
export default function HomeScreen({ navigation }) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    return (
        <ImageBackground
            source={require('../../assets/back.png')}
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 290 }}>
                <Text 
                    onPress={() => alert('This is home')}
                    style={{ fontSize: 25, fontWeight: 'bold' }}
                >
                </Text>

                <TextInput
                    placeholder="Enter Name&Surname"
                    value={name}
                    onChangeText={setName}
                    style={{
                        width: '80%',
                        padding: 9,
                        marginVertical: 10,
                        backgroundColor: 'beige',
                        borderRadius: 22,
                        borderWidth: 1,
                        borderColor: 'brown',
                    }}
                />

                <TextInput
                    placeholder="please enter your email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={{
                        width: '80%',
                        padding: 10,
                        marginVertical: 10,
                        backgroundColor: 'beige',
                        borderRadius: 22,
                        borderWidth: 1,
                        borderColor: 'brown',
                    }}
                />

                <TextInput
                    placeholder="please enter phone number"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    style={{
                        width: '80%',
                        padding: 10,
                        marginVertical: 10,
                        backgroundColor: 'beige',
                        borderRadius: 22,
                        borderWidth: 1,
                        borderColor: 'brown',
                    }}
                />
            </View>
            <Text
                style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    textAlign: 'center',
                    fontSize: 16,
                    color: 'white',
                    fontWeight: 'bold',
                    padding: 10,
                    borderRadius: 5,
                }}
            >
                When done with inputting details, please click the courses icon
            </Text>
        </ImageBackground>
    );
}

