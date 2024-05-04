import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ExercisePlan from './components/ExercisePlan';
import AppHeader from './components/AppHeader';
import TrainingPlanModal from './components/TrainingPlanModal';



const exercisePlan = require('./mock_data.json');
const modifiedArray = exercisePlan.map(({ plan_name }) => ({ plan_name }));
const App = () => {
  // Inside your parent component
  const [modalVisible, setModalVisible] = React.useState(false);
  const [newTrainingPlan, setNewTrainingPlan] = React.useState(null);
  
  const handleSaveTrainingPlan = (plan) => {
    // Handle the new training plan data (e.g., save it to state or send it to an API)
    console.log('New training plan:', plan);
    // You can also close the modal here if needed
    setModalVisible(false);
  };
  
  const handleHeaderButtonClick = () => {
    // Your logic here (e.g., navigation, state update, etc.)
      setModalVisible(true)
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppHeader exercisePlan={modifiedArray} onHeaderButtonClick={handleHeaderButtonClick}/>
      <ExercisePlan exercises={exercisePlan[1]} />
    <TrainingPlanModal
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      onSave={handleSaveTrainingPlan}
    />
    </GestureHandlerRootView>
  );
};



export default App;