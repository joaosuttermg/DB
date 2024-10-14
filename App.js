import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlunoDetalhes from './src/screens/TransformsDetalhes';
import HelloWorld from './src/screens/Initial';
import Alunos from './src/screens/Transforms';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Initial'>
        <Stack.Screen name='Initial' component={HelloWorld} />
        <Stack.Screen name='Lista de transformações' component={Alunos} />
        <Stack.Screen name='Detalhes da transformação' component={AlunoDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}