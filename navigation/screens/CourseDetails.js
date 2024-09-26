import * as React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function CourseDetails({ route, navigation }) {
    const { course } = route.params;

    const addToCart = () => {
        navigation.navigate('Cart', { course });
    };

    return (
        <View style={styles.container}>
            <Image source={course.image} style={styles.image} />
            <Text style={styles.title}>{course.name}</Text>
            <Text style={styles.price}>{course.price}</Text>
            <Text style={styles.content}>{course.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 22,
        marginBottom: 10,
    },
    content: {
        fontSize: 18,
        marginBottom: 20,
    },
});
