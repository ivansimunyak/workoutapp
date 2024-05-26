import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ExercisePlan from './components/ExercisePlan';
import AppHeader from './components/AppHeader';
import TrainingPlanModal from './components/TrainingPlanModal';
import { Text, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { initializeDatabase } from './db/db.js';

const exercisePlan = require('./mock_data.json');
const planNames = exercisePlan.map(({ plan_name }) => ({ plan_name }));

// Call this function when your app starts up
initializeDatabase();

const App = () => {
  const db = SQLite.openDatabase('myAppDB');

  const [modalVisible, setModalVisible] = React.useState(false);
  const [activePlan, setActivePlan] = React.useState(null);

  const handleSaveTrainingPlan = (plan) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO plans (plan_name) VALUES (?)',
        [plan.plan_name],
        (_, result) => {
          console.log('Data inserted into plans:', result);

          const plan_id = result.insertId;

          for (let i = 1; i <= plan.week_number; i++) {
            tx.executeSql(
              'INSERT INTO weeks (week_number, plan_id) VALUES (?, ?)',
              [i, plan_id],
              (_, result) => {
                console.log('Data inserted into weeks:', result);
              },
              (_, error) => {
                console.log('Error inserting data into weeks:', error);
              }
            );
          }
        },
        (_, error) => {
          console.log('Error inserting data into plans:', error);
        }
      );
    });
    setModalVisible(false);
  };

  const handleAddButtonClick = () => {
    setModalVisible(true);
  };

  const handleSelectedPlan = React.useCallback((plan_name) => {
    const foundExercise = exercisePlan.find((plan) => plan.plan_name === plan_name);
    setActivePlan(foundExercise);
  }, [exercisePlan, setActivePlan]);

  const renderPlan = !activePlan ? <Text>Plan not found! </Text> : <ExercisePlan exercises={activePlan} />;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppHeader exercisePlan={planNames} onAddButtonClick={handleAddButtonClick} onSelectedPlan={handleSelectedPlan} />
      <TrainingPlanModal visible={modalVisible} onClose={() => setModalVisible(false)} onSave={handleSaveTrainingPlan} />
      {renderPlan}
    </GestureHandlerRootView>
  );
};

export default App;
