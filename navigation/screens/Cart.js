import * as React from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const courses = [
  { id: 'Course1', name: 'First Aid', price: 1500 },
  { id: 'Course2', name: 'Childminding', price: 750 },
  { id: 'Course3', name: 'Sewing', price: 1500 },
  { id: 'Course4', name: 'Garden Maintenance', price: 750 },
  { id: 'Course5', name: 'Landscaping', price: 1500 },
  { id: 'Course6', name: 'Cooking', price: 750 },
  { id: 'Course7', name: 'Life Skills', price: 1500 },
];

export default function Cart({ navigation }) {
  const [selectedCourses, setSelectedCourses] = React.useState([]);

  const toggleCourseSelection = (course) => {
    setSelectedCourses(prevSelected => 
      prevSelected.some(c => c.id === course.id)
        ? prevSelected.filter(c => c.id !== course.id)
        : [...prevSelected, course]
    );
  };

  const getDiscount = () => {
    const count = selectedCourses.length;
    if (count >= 4) return 0.15;
    if (count === 3) return 0.10;
    if (count === 2) return 0.05;
    return 0;
  };

  const calculateTotal = () => {
    const subtotal = selectedCourses.reduce((sum, course) => sum + course.price, 0);
    const discount = subtotal * getDiscount();
    return subtotal - discount;
  };

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.courseItem} 
      onPress={() => toggleCourseSelection(item)}
    >
      <View style={styles.courseInfo}>
        <Text style={styles.courseName}>{item.name}</Text>
        <Text style={styles.coursePrice}>R{item.price}</Text>
      </View>
      {selectedCourses.some(c => c.id === item.id) && (
        <TouchableOpacity onPress={() => toggleCourseSelection(item)}>
          <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../../assets/back.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <FlatList
          data={courses}
          renderItem={renderCourseItem}
          keyExtractor={item => item.id}
          style={styles.courseList}
        />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>
            Total: R{calculateTotal().toFixed(2)}
          </Text>
          <Text style={styles.discountText}>
            Discount: {(getDiscount() * 100).toFixed(0)}%
          </Text>
        </View>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.homeButtonText}>Go back HomeScreen</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 19,
  },
  courseList: {
    flex: 1,
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 27,
    borderBottomWidth: 1,
    borderBottomColor: 'gold',
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  coursePrice: {
    fontSize: 16,
    color: 'white',
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  discountText: {
    fontSize: 18,
    color: 'green',
  },
  homeButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'beige',
    borderRadius: 5,
    alignItems: 'center',
  },
  homeButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

