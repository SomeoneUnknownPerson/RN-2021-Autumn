import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return(
        <Tab.Navigator
            screenOptions = {{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    borderRadius: 10,
                    height: 70,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen 
                name = "Lab 1" 
                component = {Lab1} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image 
                                source = {require('../../img/1.png')}
                                resizeMode = "contain"
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                            <Text style = {{color: focused ?'#2F88F0' : '#27303E', fontSize: 12}}>
                                    Color
                            </Text>
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen 
                name = "Lab 2" 
                component = {Lab2} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image 
                                source = {require('../../img/2.png')}
                                resizeMode = "contain"
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                            <Text style = {{color: focused ?'#2F88F0' : '#27303E', fontSize: 12}}>
                                    Image
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen 
                name = "Lab 3" 
                component = {Lab3} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image 
                                source = {require('../../img/3.png')}
                                resizeMode = "contain"
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                            <Text style = {{color: focused ?'#2F88F0' : '#27303E', fontSize: 12}}>
                                    UseMemo
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#ffffff',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default TabNavigation;