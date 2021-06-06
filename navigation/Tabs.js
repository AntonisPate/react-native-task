import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="ListScreen" component={ListScreen} />
        <Tab.Screen name="MapScreen" component={MapScreen} />
      </Tab.Navigator>
    );
  }

export default Tabs
