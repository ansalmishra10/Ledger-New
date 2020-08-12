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





class Successtwo extends React.Component {
  render() {
    return(

      <SafeAreaProvider style={{backgroundColor:'white'}}>
      <StatusBar
             backgroundColor = "white"
         

           />

           <View style={{height:'100%'}}>

            <Image style={{height:100,width:100,resizeMode:'contain',alignSelf:'center',marginTop:'64%'}}  source={require('./check2.png')} />

            <Text style={{fontSize:25,fontFamily:'AvenirLTStd-Heavy',marginTop:15,color:'#3BB54A',alignSelf:'center'}}>Payment Request</Text>

            <Text style={{fontSize:25,fontFamily:'AvenirLTStd-Heavy',marginTop:5,color:'#3BB54A',alignSelf:'center'}}>Successful</Text>

            <TouchableOpacity style={{width:170,height:50,borderRadius:25,backgroundColor:'#242327',alignSelf:'center',marginTop:25,elevation:2,justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
             <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',alignSelf:'center'}}>Go to home</Text>
            </TouchableOpacity>


           </View>
      </SafeAreaProvider>


      );
  }

}


export default Successtwo;