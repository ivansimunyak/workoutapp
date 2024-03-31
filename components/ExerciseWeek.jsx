import React from "react";
import ExerciseDay from "./ExerciseDay";
import { Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const Tab = createMaterialTopTabNavigator();
const exercisePlan = require('../mock_data.json').training_plan;
console.log('This is planned' + exercisePlan.toString());
const ExerciseWeek = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {exercisePlan.map((week) => (
        <Tab.Screen
          key={`Week-${week.week_number}`}
          name={`Week ${week.week_number}`}
          component={ExerciseDay}
          initialParams={{ exerciseDayList: week.days }}
        />
      ))}

    </Tab.Navigator>
  );
}

const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#DAD7CD',
    height: 50,
  },
  tabBarIndicatorStyle: {
    backgroundColor: '#344E41',
    height: 4,
  },
  tabBarLabelStyle: {
    fontSize: 16,
    textTransform: 'none',
  },
};
export default ExerciseWeek;