import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Home from './pages/Home';
import Details from './pages/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Details' component={Details} options={{title:"Details"}}/>
      </Stack.Navigator>
      <StatusBar hidden={true} style="auto" />
    </NavigationContainer>
  );
}

                              
