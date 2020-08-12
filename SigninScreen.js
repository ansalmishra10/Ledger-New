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
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';


 class SigninScreen extends React.Component {
  constructor() {
    super();
     this.state={

        email:'',
        password:'',
       
     }
  }


  render() {
    return(
     

     <View style={{width :Dimensions.get('window').width,height:'100%',flexDirection:'column',backgroundColor:'#D7F0F7'}}>
           

           <StatusBar
             backgroundColor = "#D7F0F7"
         

           />

           <KeyboardAwareScrollView
                       keyboardShouldPersistTaps = 'always' style={{height:'100%'}}>


           <View style={{width:'100%',justifyContent:'center'}}>

           <Text style={{fontSize:30,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:25,marginTop:40}}>Sign In</Text>
           </View>

           <View style={{flexDirection:'column',height:Dimensions.get('window').height,backgroundColor:'white',borderTopLeftRadius:50,borderTopRightRadius:50,elevation:2,marginTop:28}}>

            <Text style={{fontSize:30,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginTop:44,marginLeft:29}}>Welcome</Text>
            <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Medium',color:'#24232780',marginTop:10,marginLeft:29}}>Please sign in to continue.</Text>


            <View style={{width:'86%',height:60,borderRadius:30,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:53,justifyContent:'center'}}>
            <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'96%',height:60,marginLeft:'4%'}}
             placeholder="Email"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({email: text})}
             value={this.state.email}
             />
             
            </View>

            <View style={{width:'86%',height:60,borderRadius:30,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:30,justifyContent:'center'}}>
             <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'96%',height:60,marginLeft:'4%'}}
             placeholder="Password"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({password: text})}
             value={this.state.password}
             />
            </View>
            
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ForgetScreen')}>
            <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#24232780',alignSelf:'flex-end',marginTop:18,marginRight:28}}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',width:'50%',height:50,borderTopLeftRadius:25,borderBottomLeftRadius:25,marginTop:52,alignSelf:'flex-end',backgroundColor:'#242327',alignItems:'center'}}
             onPress={()=>this.props.navigation.navigate('HomeScreen')}>

             <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',marginLeft:35}}>Sign In</Text>
              
            <Image style={{width:20,height:18,resizeMode:'contain',marginLeft:42}} source={require('./white.png')} />

            </TouchableOpacity>


            <View style={{alignItems:'center',flexDirection:'row',width:'90%',marginTop:162,alignSelf:'center'}}>
             <Text style={{fontSize:14,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:'20%'}}>Don't have an Account?</Text>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignupScreen')}>
             <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:5,borderBottomWidth:2,borderColor:'#242327'}}>Sign Up</Text>
             </TouchableOpacity>
            </View>

           </View>


           

             
           </KeyboardAwareScrollView>
             
           </View>
      );
    }
  }

  export default SigninScreen;