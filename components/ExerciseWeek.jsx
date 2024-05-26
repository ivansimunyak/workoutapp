import React from "react";
import ExerciseDay from "./ExerciseDay";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View, StyleSheet } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator(); // Add this line

const CustomTabBar = ({ state, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.index > 0 && (
        <MaterialIcons
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => navigation.navigate(state.routes[state.index - 1].name)}
        />
      )}
      <Text style={styles.tabText}>{state.routes[state.index].name}</Text>
      {state.index < state.routes.length - 1 && (
        <MaterialIcons
          name="arrow-forward"
          size={24}
          color="black"
          onPress={() => navigation.navigate(state.routes[state.index + 1].name)}
        />
      )}
    </View>
  );
};

const ExerciseWeek = ({exercisePlan}) => {
  return (
    <Tab.Navigator screenOptions={{...screenOptions}} tabBar={props => <CustomTabBar {...props} />}>
      {exercisePlan.map((week) => (
        <Tab.Screen
          key={`Week-${week.week_number}`}
          name={`Week ${week.week_number}`}
          component={ExerciseDay}
          initialParams={{ exerciseDayList: week.days }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393E46',
    height: 50,
  },
  tabText: {
    marginHorizontal: 20,
    fontSize: 16,
    textTransform: 'none',
    color: '#BBE1FA',
  },
});

const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#393E46',
    height: 50,
  },
  tabBarIndicatorStyle: {
    backgroundColor: '#BBE1FA',
    height: 2,
  },
  tabBarLabelStyle: {
    fontSize: 16,
    textTransform: 'none',
  },
  tabBarActiveTintColor: '#BBE1FA'
};

export default ExerciseWeek;