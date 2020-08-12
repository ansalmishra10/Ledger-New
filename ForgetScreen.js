

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






class ForgetScreen extends React.Component {










   render() {


    
    


    return (
         
         
         <View style={{flex:1}}>

        <StatusBar
             backgroundColor = "black"
         

           />


            <View style={{height:'100%',backgroundColor:'white'}}>


              <Image source={require('./left.png')} style={{height:25,width:28,resizeMode:'contain',marginLeft:20,marginTop:30}} />


              <Text style={{fontSize:35,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:20,marginTop:55}}>Forget</Text>
              <Text style={{fontSize:35,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:20,marginTop:5}}>Password</Text>


              <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',marginTop:30,marginLeft:22}}>Please enter your email address. You</Text>
              <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',marginTop:3,marginLeft:22}}>will recieve a link to create a new</Text>
              <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',marginTop:3,marginLeft:22}}>password via email.</Text>
              

              <View style={{width:'88%',height:56,borderRadius:28,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:60,justifyContent:'center'}}>
             <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',marginLeft:20}}>Email</Text>
            </View>


            <TouchableOpacity style={{height:50,width:'88%',backgroundColor:'#242327',justifyContent:'center',alignSelf:'center',marginTop:35,borderRadius:25}} onPress={()=>this.props.navigation.navigate('SigninScreen')}>
             <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'white',alignSelf:'center'}}>Sent</Text>
            </TouchableOpacity>
              
            </View>       
            
        
           
        </View>


        
        


    );
  }
}

export default ForgetScreen;