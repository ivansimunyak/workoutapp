import React from "react";
import ExerciseDay from "./ExerciseDay";
import { Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const Tab = createMaterialTopTabNavigator();
const exercisePlan = require('../mock_data.json').training_plan;
console.log('This is planned' + exercisePlan.toString());
const ExerciseWeek = () => {
return (
    // <Text>Text</Text>
    <Tab.Navigator>
        {exercisePlan.map((week)=>(
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
export default ExerciseWeek;