/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import Inventory from './src/containers/Inventory';
import RegisterTransaction from './src/containers/RegisterTransaction';

import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  LogBox.ignoreAllLogs();

  return (
    <SafeAreaView style={{flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={( {route} ) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconColor;
                iconColor = focused ? '#FFFFFF' : '#ED574A' ;

                if(route.name === 'Inventory'){
                  return <IconMaterialIcons name={'inventory'} color={iconColor} size={25}/>
                }else if(route.name === 'TransactionRegister'){
                  return <IconMaterialIcons name={'playlist-add-check'} color={iconColor} size={35}/>
                }
              }
            })}
            tabBarOptions={{
              activeTintColor: '#FFF',
              inactiveTintColor: '#ED574A',
              activeBackgroundColor: '#ED574A',
              inactiveBackgroundColor: '#FFF',
              keyboardHidesTabBar: true
            }}
          >
            <Tab.Screen 
              options={{
                title: 'Inventario',
              }} 
              name="Inventory" 
              component={Inventory} 
            />
            <Tab.Screen 
              options={{
                title: 'Registrar Transacción'
              }} 
              name="TransactionRegister" 
              component={RegisterTransaction} 
            />
          </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
