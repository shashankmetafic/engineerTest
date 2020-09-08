import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Form from './src/Form';
import Asteroid from './src/Asteroid';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Asteroid" component={Asteroid} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
