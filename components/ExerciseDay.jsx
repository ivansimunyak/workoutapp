import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExerciseTable from './ExerciseTable';
import React from 'react';

const Tab = createMaterialTopTabNavigator(); 
  
function ExerciseDay({route}) {
  const {exerciseDayList} = route.params;
  // console.log('Inside of ' + exerciseDayList)

  return (
    <Tab.Navigator>
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
export default ExerciseDay;