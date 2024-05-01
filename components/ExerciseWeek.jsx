import React from "react";
import ExerciseDay from "./ExerciseDay";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const Tab = createMaterialTopTabNavigator();

const ExerciseWeek = ({exercisePlan}) => {
  return (
    <Tab.Navigator screenOptions={screenOptions} >
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
    backgroundColor: '#3F72AF',
    height: 4,
  },
  tabBarLabelStyle: {
    fontSize: 16,
    textTransform: 'none',
  },
};
export default ExerciseWeek;