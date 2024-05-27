import { NavigationContainer } from '@react-navigation/native';
import ExerciseWeek from './ExerciseWeek';
import { View, Text } from 'react-native';


const ExercisePlan = ({ plan_id }) => {
  return (
    <NavigationContainer style={{ backgroundColor: 'blue' }}>
      <ExerciseWeek exercisePlan={plan_id} />
    </NavigationContainer>
  );
}

export default ExercisePlan;  