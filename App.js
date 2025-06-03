import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/WelcomeScreen';
import DataInputScreen from './screens/DataInputScreen';
import RiskScreen from './screens/RiskScreen';
import HistoryScreen from './screens/HistoryScreen';
import MitigationScreen from './screens/MitigationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Boas-vindas">
        <Stack.Screen name="Boas-vindas" component={WelcomeScreen} />
        <Stack.Screen name="Inserir Dados" component={DataInputScreen} />
        <Stack.Screen name="Risco" component={RiskScreen} />
        <Stack.Screen name="Histórico" component={HistoryScreen} />
        <Stack.Screen name="Mitigação" component={MitigationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
