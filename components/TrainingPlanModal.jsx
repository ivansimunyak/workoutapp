import React, { useState } from 'react';
import { View, Text, Modal,Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import db from '../db/db.js';


const TrainingPlanModal = ({ visible, onClose, onSave }) => {
  const [planName, setPlanName] = useState('');
  const [weekNumber, setWeekNumber] = useState('');
  const [planList, setPlanList] = React.useState([]);

  const handleSave = () => {
    if (!planName || !weekNumber) {
      alert('Please fill in all fields.');
      return;
    }

    const newTrainingPlan = {
      plan_name: planName,
      week_number: parseInt(weekNumber),
    };
      
    onSave(newTrainingPlan);
  };

  const handleGenerateList = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM plans',
        [],
        (_, result) => {
          console.log('Data retrieved from plans:', result.rows._array)
          const plans = result.rows._array.map((row) => row.plan_name);
          setPlanList(plans);
        },
        (_, error) => {
          console.log('Error retrieving data from plans:', error);
        }
      );
    });
  };
  const renderPlanList = planList.map((plan, index) => (
    <Text key={index}>{plan}</Text>
  ));


  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
      <Button title="Generate List" onPress={handleGenerateList} />

      {renderPlanList}
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Create New Training Plan</Text>
          <View>
            <TextInput
              placeholder="Plan Name"
              onChangeText={setPlanName}
              value={planName}
              style={styles.input}
            />
            <TextInput
              placeholder="Plan Duration (Weeks)"
              onChangeText={setWeekNumber}
              value={weekNumber}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 8,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#888',
  },
});

export default TrainingPlanModal;
