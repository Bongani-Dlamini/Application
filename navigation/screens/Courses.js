import * as React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

export default function Courses({ navigation }) {
    const courses = [
        { 
            name: 'FirstAid', 
            screen: 'CourseDetails', 
            image: require('../../assets/firstaid.jpeg'), 
            price: 'R1500', 
            content: 'Purpose: To provide first aid awareness and basic life support.\n\nContent:\n* Wounds and bleeding\n* Burns and fractures\n* Emergency scene management\n* Cardio-Pulmonary Resuscitation (CPR)\n* Respiratory distress e.g., Choking, blocked airway' 
        },
        { 
            name: 'Childminding', 
            screen: 'CourseDetails', 
            image: require('../../assets/childminding.jpeg'), 
            price: 'R750', 
            content: 'Purpose: To provide basic child and baby care.\n\nContent:\n* Birth to six-month old baby needs\n* Seven-month to one-year-old needs\n* Toddler needs\n* Educational toys' 
        },
        { 
            name: 'Cooking', 
            screen: 'CourseDetails', 
            image: require('../../assets/cooking.jpeg'), 
            price: 'R750', 
            content: 'Purpose: To prepare and cook nutritious family meals.\n\nContent:\n* Nutritional requirements for a healthy body\n* Types of protein, carbohydrates and vegetables\n* Planning meals\n* Preparation and cooking of meals' 
        },
        { 
            name: 'LifeSkills', 
            screen: 'CourseDetails', 
            image: require('../../assets/lifeskills.jpeg'), 
            price: 'R1500', 
            content: 'Purpose: To provide skills to navigate basic life necessities.\n\nContent:\n* Opening a bank account\n* Basic labour law (know your rights)\n* Basic reading and writing literacy\n* Basic numeric literacy' 
        },
        { 
            name: 'Sewing', 
            screen: 'CourseDetails', 
            image: require('../../assets/sewing.jpeg'), 
            price: 'R1500', 
            content: 'Purpose: To provide alterations and new garment tailoring services.\n\nContent:\n* Types of stitches\n* Threading a sewing machine\n* Sewing buttons, zips, hems, and seams\n* Alterations\n* Designing and sewing new garments' 
        },
        { 
            name: 'Landscaping', 
            screen: 'CourseDetails', 
            image: require('../../assets/landscaping.jpeg'), 
            price: 'R1500', 
            content: 'Purpose: To provide landscaping services for new and established gardens.\n\nContent:\n* Indigenous and exotic plants and trees\n* Fixed structures (fountains, statues, benches, tables, built-in braai)\n* Balancing of plants and trees in a garden\n* Aesthetics of plant shapes and colours\n* Garden layout' 
        },
        { 
            name: 'GardenMaintenance', 
            screen: 'CourseDetails', 
            image: require('../../assets/garden.jpeg'), 
            price: 'R750', 
            content: 'Purpose: To provide basic knowledge of watering, pruning, and planting in a domestic garden.\n\nContent:\n* Water restrictions and the watering requirements of indigenous and exotic plants\n* Pruning and propagation of plants\n* Planting techniques for different plant types' 
        },
    ];

    return (
        <ImageBackground
            source={require('../../assets/back.png')}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
                {courses.map((course, index) => (
                    <TouchableOpacity
                        key={index}
                        style={{
                            marginVertical: 10,
                            width: 300,
                            height: 150,
                            borderRadius: 10,
                            overflow: 'hidden',
                            elevation: 5,
                        }}
                        onPress={() => navigation.navigate(course.screen, { course })}
                    >
                        <ImageBackground
                            source={course.image}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    padding: 10,
                                    borderRadius: 5,
                                }}
                            >
                                {course.name}
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </ImageBackground>
    );
}





