import { NavigationContainer } from '@react-navigation/native';
import ExerciseWeek from './ExerciseWeek';
import { View, Text } from 'react-native';


const ExercisePlan = ({ exercises }) => {
  console.log("Active plan is " + exercises)
  // const activeExercise = exercises ? <ExerciseWeek exercisePlan={exercises.training_plan} /> : <Text>Hi</Text>
  return (
    <NavigationContainer style={{ backgroundColor: 'blue' }}>
      <ExerciseWeek exercisePlan={exercises.training_plan} />
      {/* {activeExercise} */}
    </NavigationContainer>
  );
}

export default ExercisePlan;  