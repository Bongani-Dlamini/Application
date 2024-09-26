import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// App screens
import HomeScreen from './screens/HomeScreen';
import Courses from './screens/Courses';
import ContactUs from './screens/ContactUs';
import Cart from './screens/Cart';
import CourseDetails from './screens/CourseDetails'; // Import the CourseDetails component

// App screen names
const HomeName = 'Home';
const CoursesName = 'Courses';
const ContactUsName = 'ContactUs';
const CartName = 'Cart';

// These are the navigations for the screens
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function CourseStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Courses" component={Courses} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HomeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === CoursesName) {
              iconName = focused ? 'book' : 'book-outline';
            } else if (rn === ContactUsName) {
              iconName = focused ? 'call' : 'call-outline';
            } else if (rn === CartName) {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={HomeName} component={HomeScreen}/>
        <Tab.Screen name={CoursesName} component={CourseStackNavigator} options={{ headerShown: false }}/>
        <Tab.Screen name={ContactUsName} component={ContactUs}/>
        <Tab.Screen name={CartName} component={Cart}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



