import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Exercise from './ExerciseTable';
import React from 'react';
import { View, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function ExerciseDay({ route }) {
  const { week_id } = route.params;
  console.log("exercise day list "+ week_id)
  return (
    // <Tab.Navigator
    //   screenOptions={screenOptions}
    // >
    //   {exerciseDayList.map((exerciseDay) => (
    //     <Tab.Screen
    //       key={`Day-${exerciseDay.day}`}
    //       name={`Day ${exerciseDay.day}`}
    //       component={Exercise}
    //       initialParams={{ exercises: exerciseDay.exercises }}
    //     />
    //   ))}

    // </Tab.Navigator>
    <View>
      <Text>Exercise Day</Text>
    </View>

  );
}

const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#393E46',
    height: 50,
  },
  tabBarIndicatorStyle: {
    backgroundColor: '#BBE1FA',
    height: 2,
  },
  tabBarLabelStyle: {
    fontSize: 16,
    textTransform: 'none',
  },
  tabBarActiveTintColor: '#BBE1FA'
};
export default ExerciseDay;