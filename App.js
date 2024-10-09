import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HelloWorld from './src/screens/HelloWorld';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HelloWorld}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}