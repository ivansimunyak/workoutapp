import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet } from 'react-native';


const TrainingPlanModal = ({ visible, onClose, onSave }) => {
  const [planName, setPlanName] = useState('');
  const [weekNumber, setWeekNumber] = useState('');
  const [dayNumber, setDayNumber] = useState('1');
  const [unit, setUnit] = useState('');

  function instantiateDays() {
    const days = [];
    for (let i = 1; i <= parseInt(dayNumber, 10); i++) {
      days.push({
        day: i,
        exercises: []
      });
    }
    return days;
  }

  const handleSave = () => {
    if (!planName || !weekNumber || !dayNumber || !unit) {
      alert('Please fill in all fields.');
      return;
    }

    const days = instantiateDays;
    const newTrainingPlan = {
      plan_name: planName,
      week_number: parseInt(weekNumber),
      unit,
      days,
    };

    onSave(newTrainingPlan);
  };

  const handleAddDay = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, '');

    // Convert the cleaned text to an integer
    const inputValue = parseInt(cleanedText, 10);

    // Ensure the value is within the desired range (1 to 7)
    const clampedValue = Math.min(Math.max(inputValue, 1), 7);

    setDayNumber(inputValue ? clampedValue.toString() : '');
    instantiateDays();
  }

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
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
            <TextInput
              placeholder="Weight Unit"
              onChangeText={setUnit}
              value={unit}
              style={styles.input}
            />
            <TextInput
              placeholder="Days"
              onChangeText={text => {
                // Remove any non-numeric characters
                handleAddDay(text)
              }}
              keyboardType="numeric"
              value={dayNumber}
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
