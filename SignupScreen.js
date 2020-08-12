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


 class SignupScreen extends React.Component {
   constructor() {
    super();
     this.state={
        name:'',
        email:'',
        mobile:'',
        password:'',

       
     }
  }

  render() {
    return(

      <KeyboardAwareScrollView style={{width :Dimensions.get('window').width,height:'100%',flexDirection:'column',backgroundColor:'#D7F0F7'}}>
           

           <StatusBar
             backgroundColor = "#D7F0F7"
         

           />


           <View style={{width:'100%',justifyContent:'center'}}>

           <Text style={{fontSize:30,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:29,marginTop:40}}>Sign Up</Text>
           </View>

           <View style={{flexDirection:'column',height:'auto',marginTop:28,width:'100%',backgroundColor:'white',borderTopLeftRadius:50,borderTopRightRadius:50,elevation:2}}>

            <Text style={{fontSize:30,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginTop:44,marginLeft:29}}>Create Account


            </Text>
            <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Medium',color:'#24232780',marginTop:10,marginLeft:29,width:'90%'}}>Please enter the following details</Text>
            <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Medium',color:'#24232780',marginTop:3,marginLeft:29,width:'80%'}}>bellow.</Text>

            <Image style={{height:100,width:100,resizeMode:'contain',alignSelf:'center',marginTop:30}} source={require('./camera.png')}/>

            <View style={{width:'86%',height:60,borderRadius:30,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:36,justifyContent:'center'}}>
             <TextInput
             style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'95%',height:60,marginLeft:'5%'}}
             placeholder="Name"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({name: text})}
             value={this.state.name}
             />
            </View>

            <View style={{width:'86%',height:60,borderRadius:30,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:30,justifyContent:'center'}}>
             <TextInput
             style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'95%',height:60,marginLeft:'5%'}}
             placeholder="Email"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({email: text})}
             value={this.state.email}
             />
            </View>

            <View style={{width:'86%',height:60,borderRadius:30,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:30,justifyContent:'center'}}>
             <TextInput
             style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'95%',height:60,marginLeft:'5%'}}
             placeholder="Mobile No."

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({mobile: text})}
             value={this.state.mobile}
             />
            </View>

            <View style={{width:'86%',height:60,borderRadius:30,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:30,justifyContent:'center'}}>
             <TextInput
             style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'95%',height:60,marginLeft:'5%'}}
             placeholder="Password"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({password: text})}
             value={this.state.password}
             />
            </View>

            <View style={{flexDirection:'row',width:'86%',alignSelf:'center',alignItems:'center',marginTop:30}}>
              <Image style={{height:16,width:16,resizeMode:'contain',marginLeft:5}} source={require('./check.png')} />
              <Text style={{fontSize:12,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',marginLeft:6}}>By continuing you agree to the</Text>
              <Text style={{fontSize:12,fontFamily:'AvenirLTStd-Heavy',color:'#242327',borderBottomWidth:1.5,borderColor:'#242327',marginLeft:4}}>Terms of Service</Text>
                           <Text style={{fontSize:12,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',marginLeft:4}}>and</Text>

            </View>

                         <Text style={{fontSize:12,fontFamily:'AvenirLTStd-Heavy',color:'#242327',borderBottomWidth:1.5,borderColor:'#242327',alignSelf:'center',marginTop:5}}>Privacy Policy.</Text>

            


            <TouchableOpacity style={{flexDirection:'row',width:'50%',height:50,borderTopLeftRadius:25,borderBottomLeftRadius:25,marginTop:38,alignSelf:'flex-end',backgroundColor:'#242327',alignItems:'center'}}
             onPress={()=>this.props.navigation.navigate('UpiScreen')}>

             <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',marginLeft:35}}>Sign Up</Text>
              
            <Image style={{width:20,height:18,resizeMode:'contain',marginLeft:42}} source={require('./white.png')} />

            </TouchableOpacity>


            <View style={{alignItems:'center',flexDirection:'row',width:'90%',alignSelf:'center',marginTop:46,marginBottom:10}}>
             <Text style={{fontSize:14,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:'20%'}}>Already have an Account?</Text>

             <TouchableOpacity onPress={()=>this.props.navigation.navigate('SigninScreen')}>
             <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:5,borderBottomWidth:2,borderColor:'#242327'}}>Sign In</Text>
             </TouchableOpacity>
            </View>

            <View style={{marginBottom:50}}>
            </View>


           </View>


           

             

             
           </KeyboardAwareScrollView>

      );
    }
  }

  export default SignupScreen;