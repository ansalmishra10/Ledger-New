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


 class ManageScreen extends React.Component {
  render() {
    return(

      <ScrollView style={{flex:1, backgroundColor:'#D7F0F7'}}>

      <StatusBar
             backgroundColor = "#D7F0F7"
         

           />


           <Image style={{height:108,width:82,resizeMode:'contain',marginLeft:22,marginTop:50}}
            source={require('./logo1.png')} />

            <Text style={{fontSize:52,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:22,marginTop:25}}>Pay</Text>
            <Text style={{fontSize:52,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:22,marginTop:8}}>Manage</Text>
            <Text style={{fontSize:52,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:22,marginTop:8}}>Glow...</Text>

            <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',marginLeft:25,width:'90%',marginTop:21}}>An easy app to manage your all</Text>
            <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',marginLeft:25,width:'80%',marginTop:3}}>payment</Text>



            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',width:'88%',height:50,alignSelf:'center',marginTop:120,borderRadius:25,backgroundColor:'white',elevation:2}}>
             <Image style={{height:25,width:25, resizeMode:'contain',marginLeft:'10%'}} source={require('./google.png')}/>
             <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:20}}>Sign in with Google</Text>
            </TouchableOpacity>
             

            <View style={{flexDirection:'row',height:50,width:'88%',alignSelf:'center',justifyContent:'space-between',alignItems:'center',marginTop:21}}>

            <TouchableOpacity style={{height:50,width:'48%',borderRadius:25,backgroundColor:'#242327',justifyContent:'center',elevation:2}}
             onPress={()=>this.props.navigation.navigate('SignupScreen')}>
             <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'white',alignSelf:'center'}}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height:50,width:'48%',borderRadius:25,backgroundColor:'#D7F0F7',borderWidth:2,borderColor:'#242327',justifyContent:'center',elevation:2}}
             onPress={()=>this.props.navigation.navigate('SigninScreen')}>
            <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#242327',alignSelf:'center'}}>Sign In</Text>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',width:'76%',alignSelf:'center',alignItems:'center',marginTop:22}}>
              <Text style={{fontSize:12,fontFamily:'AvenirLTStd-Heavy',color:'#24232780'}}>By continuing you agree to the</Text>
              <Text style={{fontSize:12,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',borderBottomWidth:1.5,borderColor:'#24232780',marginLeft:4}}>Terms of Service</Text>
                           <Text style={{fontSize:12,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',marginLeft:4}}>and</Text>

            </View>

                         <Text style={{fontSize:12,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',borderBottomWidth:1.5,borderColor:'#24232780',alignSelf:'center',marginTop:5}}>Privacy Policy.</Text>

            
      </ScrollView>

      );
  }
 }


 export default ManageScreen;