import React from "react";
import ExerciseDay from "./ExerciseDay";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text } from "react-native";


const Tab = createMaterialTopTabNavigator();

const ExerciseWeek = ({exercisePlan}) => {
  console.log("In exercise week "+ exercisePlan.training_plan)
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
export default ExerciseWeek;