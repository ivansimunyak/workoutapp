import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ExercisePlan from './components/ExercisePlan';
import AppHeader from './components/AppHeader';
import TrainingPlanModal from './components/TrainingPlanModal';
import { Text } from 'react-native';
import { initializeDatabase } from './db/db.js';
import db from './db/db.js';


// Call this function when your app starts up
initializeDatabase();

const App = () => {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [activePlan, setActivePlan] = React.useState(null);

  const handleSaveTrainingPlan = async (plan) => {
    const planResult = await db.runAsync(
      'INSERT INTO plans (plan_name) VALUES (?)',
      plan.plan_name
    );
    console.log('Data inserted into plans:', planResult);
  
    const plan_id = planResult.lastInsertRowId;
  
    for (let i = 1; i <= plan.week_number; i++) {
      const weekResult = await db.runAsync(
        'INSERT INTO weeks (week_number, plan_id) VALUES (?, ?)',
        i,
        plan_id
      );
      console.log('Data inserted into weeks:', weekResult);
    }
    setModalVisible(false);
  };

  const handleAddButtonClick = () => {
    setModalVisible(true);
  };

  const handleSelectedPlan = React.useCallback((plan_id) => {
    setActivePlan(plan_id);
  }, [setActivePlan]);

  const renderPlan = !activePlan ? <Text>Plan not found! </Text> : <ExercisePlan plan_id={activePlan} />;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppHeader onAddButtonClick={handleAddButtonClick} onSelectedPlan={handleSelectedPlan} />
      <TrainingPlanModal visible={modalVisible} onClose={() => setModalVisible(false)} onSave={handleSaveTrainingPlan} />
      {renderPlan}
    </GestureHandlerRootView>
  );
};

export default App;
