
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen'
import Tip from './src/screens/Tip';
import Board from './src/screens/Board';
import LoginBoard from './src/screens/LoginBoard';
import SignupBoard from './src/screens/SignupBoard';
import MapScreen from './src/screens/MapScreen'
import Add_vehicle from './src/screens/Add_vehicle';
import Notification from './src/screens/Notification';
import Membership from './src/screens/Membership';
import MapScreen2 from './src/screens/MapScreen2';
import MapScreen3 from './src/screens/MapScreen3';
import List from './src/screens/List';
import Regiage from './src/screens/Regiage';
import Zone_dalerte from './src/screens/Zone_dalerte';
import Barrière from './src/screens/Barrière'
import Historiue from './src/screens/Historiue';
import Historiquie2 from './src/screens/Historiquie2';
import Details from './src/screens/Details';
import Membership2 from './src/screens/Membership2';
import Driver_detail from './src/screens/Driver_detail';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown: false,
      gestureEnabled:true,gestureDirection:'horizontal'
      }}>
        <Stack.Screen name="Eyenia" component={HomeScreen} />
        <Stack.Screen name="Tip" component={Tip}/>
        <Stack.Screen name="Board" component={Board}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation:'slide_from_right'}} />
        <Stack.Screen name="LoginBoard" component={LoginBoard}/>
        <Stack.Screen name='SignupBoard' component={SignupBoard}/>
        <Stack.Screen name='MapScreen' component={MapScreen}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation:'slide_from_right'}}/>
        <Stack.Screen name='Add_vehicle' component={Add_vehicle}/>
        <Stack.Screen name="Notification" component={Notification}/>
        <Stack.Screen name='Membership' component={Membership}/>
        <Stack.Screen name='MapScreen2' component={MapScreen2}/>
        <Stack.Screen name='MapScreen3' component={MapScreen3}/>
        <Stack.Screen name='List' component={List}/>
        <Stack.Screen name='Regiage' component={Regiage}/>
        <Stack.Screen name='Zone_dalerte' component={Zone_dalerte}/>
        <Stack.Screen name='Barrière' component={Barrière}/>
        <Stack.Screen name='Historiue' component={Historiue}/>
        <Stack.Screen name='Historiquie2' component={Historiquie2}/>
        <Stack.Screen name='Details' component={Details}/>
        <Stack.Screen name='Membership2' component={Membership2}
         options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation:'slide_from_right'}}/>
          <Stack.Screen name='Driver_detail' component={Driver_detail}
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation:'slide_from_right'}}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}