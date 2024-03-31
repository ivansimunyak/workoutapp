import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import ExerciseWeek from './components/ExerciseWeek';
import { Text, View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer style={{ flex: 1, backgroundColor: 'blue' }}>
        <AppHeader />
        <ExerciseWeek />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const AppHeader = () => {
  const handleIconPress = () => {
    // Handle icon click here
    console.log('Icon clicked!');
  };
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Workout Logger</Text>
      <TouchableOpacity onPress={handleIconPress}>
        <Icon name="dots-three-vertical" style={styles.settings} />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#344E41',
    height: 60,
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Vertically center items
    paddingHorizontal: 16, // Add padding for spacing
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  settings: {
    fontSize: 24,
    textAlign: 'right'
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Customize the background color
  },

});
export default App;