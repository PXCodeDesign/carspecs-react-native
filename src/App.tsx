import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './screen/HomePage';
import SearchPage from './screen/SearchPage';
import BrandPage from './screen/BrandPage';
import BrandDetailPage from './screen/BrandDetailPage';
import BottomBar from './components/BottomBar';
import ModelDetailPage from './screen/ModelDetailPage';
import ToComparePage from './screen/ToComparePage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <BottomBar {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="HomeTab" component={HomeStack} />
        <Tab.Screen name="ToCompareTab" component={ToCompareStack} />
        <Tab.Screen name="SearchTab" component={SearchStack} />
        <Tab.Screen name="BrandTab" component={BrandStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeModelDetailPage"
        component={ModelDetailPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ToCompareStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ToComparePage"
        component={ToComparePage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchModelDetailPage"
        component={ModelDetailPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function BrandStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BrandPage"
        component={BrandPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BrandDetailPage"
        component={BrandDetailPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BrandModelDetailPage"
        component={ModelDetailPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default App;
