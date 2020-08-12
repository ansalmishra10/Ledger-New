import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen.js';
import StyleScreen from './StyleScreen.js';
import ManageScreen from './ManageScreen.js';
import SigninScreen from './SigninScreen.js';
import SignupScreen from './SignupScreen.js';
import UpiScreen from './UpiScreen.js';
import ForgetScreen from './ForgetScreen.js';
import HomeScreen from './HomeScreen.js';
import ProfileScreen from './ProfileScreen.js';
import Request from './Request.js';
import Stats from './Stats.js';
import Friends from './Friends.js';
import Activity from './Activity.js';
import UserScreen from './UserScreen.js';
import Payment from './Payment.js';
import Settle from './Settle.js';
import Success from './Success.js';
import Status from './Status.js';
import AddScreen from './AddScreen.js';
import AddScreen2 from './AddScreen2.js';
import GiveScreen from './GiveScreen.js';
import TakeScreen from './TakeScreen.js';
import Group from './Group.js';
import Expenses from './Expenses';
import Select from './Select.js';
import Split from './Split.js';
import Details from './Details.js';
import Detailtwo from './Detailtwo.js';
import Detailagain from './Detailagain.js';
import Card from './Card.js';
import Successtwo from './Successtwo.js';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="StyleScreen" component={StyleScreen} />
        <Stack.Screen name="ManageScreen" component={ManageScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="UpiScreen" component={UpiScreen} />
        <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Request" component={Request} />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Settle" component={Settle} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
        <Stack.Screen name="AddScreen2" component={AddScreen2} />
        <Stack.Screen name="GiveScreen" component={GiveScreen} />
        <Stack.Screen name="TakeScreen" component={TakeScreen} />
        <Stack.Screen name="Group" component={Group} />
        <Stack.Screen name="Expenses" component={Expenses} />
        <Stack.Screen name="Select" component={Select} />
        <Stack.Screen name="Split" component={Split} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Detailtwo" component={Detailtwo} />
        <Stack.Screen name="Detailagain" component={Detailagain} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Successtwo" component={Successtwo} />




        
        

      </Stack.Navigator>



    </NavigationContainer>
  );
}


export default App;