import {
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Linking,
  FlatList,
  Dimensions,
  AsyncStorage,




  } from 'react-native';

import React, {Component} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';





class Success extends React.Component {
  render() {
    return(

      <SafeAreaProvider style={{backgroundColor:'white'}}>
      <StatusBar
             backgroundColor = "white"
         

           />

           <View style={{height:'100%'}}>

            <Image style={{height:100,width:100,resizeMode:'contain',alignSelf:'center',marginTop:'65%'}}  source={require('./check2.png')} />

            <Text style={{fontSize:25,fontFamily:'AvenirLTStd-Heavy',marginTop:15,color:'#3BB54A',alignSelf:'center'}}>Payment Successful</Text>

            <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Medium',marginTop:8,color:'#242327CC',alignSelf:'center',width:'60%',textAlign:'center'}}>You just sent ₹200 to Rahul</Text>

            <TouchableOpacity style={{width:170,height:50,borderRadius:25,backgroundColor:'#242327',alignSelf:'center',marginTop:15,elevation:2,justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
             <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',alignSelf:'center'}}>Go to home</Text>
            </TouchableOpacity>


           </View>
      </SafeAreaProvider>


      );
  }

}


export default Success;