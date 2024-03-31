import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import ExerciseWeek from './components/ExerciseWeek';
import { Text } from 'react-native';
const App = () => {
  return (
    <NavigationContainer>
      <Text>This is the text</Text>
    <ExerciseWeek />
  </NavigationContainer>
  );
};
export default App;