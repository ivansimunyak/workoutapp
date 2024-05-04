import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const Exercise = ({ route }) => {
  const { exercises } = route.params;
  return (
    <ScrollView style={styles.table}>
      {/* Table Rows */}
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.name}
          name={exercise.name}
          sets={exercise.sets}
          reps={exercise.reps}
          weight={exercise.weight}
        />
      ))}
    </ScrollView>
  );
}

const ExerciseCard = ({ name, sets, reps, weight }) => {
  return (
<View style={styles.card}>
      {/* Exercise Name (Centered) */}
      <View style={styles.centeredRow}>
        <Text style={styles.name}>{name}</Text>
      </View>

   {/* Sets and Reps */}
   <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.key}>Sets: {sets}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.key}>Reps: {reps}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.key}>Weight: {weight}</Text>
        </View>
      </View>

      {/* RIR (Rate of Perceived Exertion) and Reps on Last Set */}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter RIR"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Reps on last set"
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  table: {
    borderColor: '#e0e0e0',
    backgroundColor: '#222831', // Light grey background for the table
  },
  card: {
    backgroundColor: '#393E46',
    padding: 12,
    borderRadius: 8,
    margin:15,
    elevation:5
  },
  centeredRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  name: {
    color: '#BBE1FA',
    fontWeight: 'bold',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  key: {
    color: '#BBE1FA',
    fontWeight: 'bold',
    fontSize: 14
  },
  inputContainer: {
    flex: 1,
    marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#BBE1FA',
    borderRadius: 4,
    paddingHorizontal: 8,
  },
});

export default Exercise;