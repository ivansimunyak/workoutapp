import * as React from 'react';
import { useEffect } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ExercisePlan from './components/ExercisePlan';
import AppHeader from './components/AppHeader';
import TrainingPlanModal from './components/TrainingPlanModal';
import { Text, View, TouchableOpacity  } from 'react-native';
import * as SQLite from 'expo-sqlite';



const exercisePlan = require('./mock_data.json');
const modifiedArray = exercisePlan.map(({ plan_name }) => ({ plan_name }));
const App = () => {
  const db = SQLite.openDatabase('myAppDB');

  // Inside your parent component
  const [modalVisible, setModalVisible] = React.useState(false);
  const [newTrainingPlan, setNewTrainingPlan] = React.useState('Stronger By Science');
  const [activePlan, setActivePlan] = React.useState(null);

  useEffect(() => {
    try {
    
      // Insert two todo items
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO todos (title) VALUES (?), (?)',
          ['Buy groceries', 'Walk the dog'],
          (_, result) => {
            if (result.rowsAffected > 0) {
              console.log('Todo items inserted successfully!');
            } else {
              console.error('Error inserting todo items.');
            }
          }
        );
      });
    } catch (error) {
      console.error('Error inserting todo items:', error);
    }
    
    
  }, []);

  const handleSelectAll = () => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM todos', [], (_, result) => {
        const rows = result.rows;
        for (let i = 0; i < rows.length; i++) {
          console.log(`Todo ${i + 1}:`, rows.item(i));
        }
      });
    });
  };


  const handleSaveTrainingPlan = (plan) => {
    // Handle the new training plan data (e.g., save it to state or send it to an API)
    console.log('New training plan:', plan);
    // You can also close the modal here if needed
    setModalVisible(false);
  };
  
  const handleAddButtonClick = () => {
    // Your logic here (e.g., navigation, state update, etc.)
      setModalVisible(true)
  };

  const handleSelectedPlan = (plan_name) => {
    const foundExercise = exercisePlan.find(plan => plan.plan_name === plan_name);
    setActivePlan(foundExercise)
  };  

  const memorizedHandleSelectedPlan = React.useCallback((plan_name) => {
    const foundExercise = exercisePlan.find(plan => plan.plan_name === plan_name);
    console.log("In App "+ foundExercise.plan_name)
    setActivePlan(foundExercise);
  }, [exercisePlan, setActivePlan]);


  const renderPlan = !activePlan ? <Text>Plan not found! </Text> : <ExercisePlan exercises={activePlan} />
  return (
    <GestureHandlerRootView style={{flex: 1}}>
            <TouchableOpacity onPress={handleSelectAll}>
        <Text>Click me to select all todos</Text>
      </TouchableOpacity>
      <AppHeader exercisePlan={modifiedArray} onAddButtonClick={handleAddButtonClick} onSelectedPlan={memorizedHandleSelectedPlan}/>
      <TrainingPlanModal
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      onSave={handleSaveTrainingPlan}
    />
    {/* <ExercisePlan exercises={activePlan} /> */}
      {renderPlan}
    </GestureHandlerRootView>
  );
};


export default App;