import { NavigationContainer } from '@react-navigation/native';
import ExerciseWeek from './ExerciseWeek';


const ExercisePlan = ({exercises}) =>{
    return(
        <NavigationContainer style={{ backgroundColor: 'blue' }}>
        <ExerciseWeek exercisePlan={exercises.training_plan} />
      </NavigationContainer>
    );
}

  export default ExercisePlan;