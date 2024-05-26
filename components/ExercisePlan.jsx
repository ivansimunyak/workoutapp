import { NavigationContainer } from '@react-navigation/native';
import ExerciseWeek from './ExerciseWeek';
import { View, Text } from 'react-native';


const ExercisePlan = ({ exercises }) => {
  return (
    <NavigationContainer style={{ backgroundColor: 'blue' }}>
      <ExerciseWeek exercisePlan={exercises.training_plan} />
    </NavigationContainer>
  );
}

export default ExercisePlan;  