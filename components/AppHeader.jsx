import * as React from 'react';

import { View, TouchableOpacity } from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Entypo';
import db from '../db/db';

const AppHeader = ({onAddButtonClick, onSelectedPlan }) => {
    const [value, setValue] = React.useState();
    const [isFocus, setIsFocus] = React.useState(false); 
    const [planNames, setPlanNames] = React.useState([]);

    const handleIconPress = () => {
      // Handle icon click here
      console.log('Icon click!'+ value);
    };

    const fetchPlanNames = async () => {
      await db.allAsync('SELECT * FROM plans').then(({rows: { _array }}) => {
          setPlanNames(_array);
        });
    };

    React.useEffect(() => {
      fetchPlanNames();
    }, []);
    
    return (
      <View style={styles.rowContainer}>
        <View style={styles.container}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={{backgroundColor:"#1B262C"}}
            itemTextStyle={{color:'#BBE1FA'}}
            activeColor='#0F4C75'
            inputSearchStyle={styles.inputSearchStyle}
            data={planNames}
            search
            maxHeight={300}
            labelField="plan_name"
            valueField="plan_id"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item);
              setIsFocus(false);
              console.log("In app header and plan is "+item.plan_id+ "name "+item.plan_name)
              onSelectedPlan(item.plan_id)
            }}
          />
        </View>
        <TouchableOpacity onPress={onAddButtonClick}>
          <Icon name="plus" style={styles.addIcon} />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={handleIconPress}>
          <Icon name="dots-three-vertical" style={styles.settings} />
        </TouchableOpacity>
      </View>
    );
  };

  
const styles = {
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // backgroundColor: '#222831',
      backgroundColor: '#222831',
      paddingHorizontal: 16,
    },
    container: {
      width: '65%',
      padding:10
    },
    dropdown: {
      height: 50,
      borderRadius: 8,
      paddingHorizontal: 8,
      color:'#BBE1FA'
  
    },
    placeholderStyle: {
      fontSize: 16,
      color:'#BBE1FA'
    },
    selectedTextStyle: {
      fontSize: 16,
      color:'#BBE1FA'
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color:'#BBE1FA'
  
    },
    settings: {
      fontSize: 24,
      color:'#BBE1FA',
      paddingRight: 15,
    },
    addIcon:{
      fontSize: 24,
      color:'#BBE1FA',
    },
  };
  export default AppHeader;