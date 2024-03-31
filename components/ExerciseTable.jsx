import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ExerciseTable = ({ route }) => {
  const { exercises } = route.params;
  return (
    <ScrollView style={styles.table} stickyHeaderIndices={[0]}>
      <ExerciseHeader />
      {/* Table Rows */}
      {exercises.map((exercise) => (
        <Exercise
          key={exercise.name}
          name={exercise.name}
          sets={exercise.sets}
          reps={exercise.reps}
          reps_on_last_set={exercise.reps_on_last_set}
        />
      ))}
    </ScrollView>
  );
}

const Exercise = ({ name, sets, reps, reps_on_last_set }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{name}</Text>
      <Text style={styles.cell}>{sets}</Text>
      <Text style={styles.cell}>{reps}</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        defaultValue={reps_on_last_set.toString()}
      />
    </View>
  );
};

const ExerciseHeader = () => {
  return (
    <View style={styles.headerRow}>
      <Text style={styles.headerCell}>Name</Text>
      <Text style={styles.headerCell}>Sets</Text>
      <Text style={styles.headerCell}>Reps</Text>
      <Text style={styles.headerCell}>Last set reps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    borderColor: '#e0e0e0',
    backgroundColor: '#f9f9f9', // Light grey background for the table
  },
  headerRow: {
    flexDirection: 'row', // Horizontally align the header cells
    backgroundColor: '#588157',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333', // Darker text for better contrast
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    margin: 0,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff', // White background for rows to maintain readability
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    color: '#555', // Slightly lighter text for the cells
  },
  input: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    color: '#555',
    borderColor: '#e0e0e0',
    borderRadius: 5,
    backgroundColor: '#effbff', // Very light blue for input fields
  },
});

export default ExerciseTable;