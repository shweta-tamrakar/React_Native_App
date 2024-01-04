import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import shopping from './src/pages/shopping';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen options={{headerShown:false}}  name="Home" component={Home} />
    <Stack.Screen options={{headerShown:false}}  name="shopping" component={shopping} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}


