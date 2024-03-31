import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExerciseTable from './ExerciseTable';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

function ExerciseDay({ route }) {
  const { exerciseDayList } = route.params;

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
    >
      {exerciseDayList.map((exerciseDay) => (
        <Tab.Screen
          key={`Day-${exerciseDay.day}`}
          name={`Day ${exerciseDay.day}`}
          component={ExerciseTable}
          initialParams={{ exercises: exerciseDay.exercises }}
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
export default ExerciseDay;