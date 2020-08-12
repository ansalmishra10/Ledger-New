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


 class UpiScreen extends React.Component {
  constructor() {
    super();
     this.state={

        upi:'',
        mobile:'',
       
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

           <Text style={{fontSize:30,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:29,marginTop:40}}>Add UPI</Text>
           </View>

           <View style={{flexDirection:'column',height:'auto',backgroundColor:'white',borderTopLeftRadius:50,marginTop:28,borderTopRightRadius:50,elevation:2}}>

            <Text style={{fontSize:30,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginTop:44,marginLeft:29}}>UPI</Text>
            <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Medium',color:'#24232780',marginTop:10,marginLeft:29}}>Please enter your UPI details.</Text>


            <View style={{width:'86%',height:60,borderRadius:30,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:53,justifyContent:'center'}}>
            <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'96%',height:60,marginLeft:'4%'}}
             placeholder="UPI Id"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({upi: text})}
             value={this.state.upi}
             />
             
            </View>

            <View style={{width:'86%',height:60,borderRadius:30,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:30,justifyContent:'center'}}>
             <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'96%',height:60,marginLeft:'4%'}}
             placeholder="Mobile"
             keyboardType="numeric"
             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({mobile: text})}
             value={this.state.mobile}
             />
            </View>

            


            <TouchableOpacity style={{flexDirection:'row',width:'50%',height:60,borderTopLeftRadius:30,borderBottomLeftRadius:30,marginTop:50,alignSelf:'flex-end',backgroundColor:'#242327',alignItems:'center'}} onPress={()=>this.props.navigation.navigate('HomeScreen')}>

             <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',marginLeft:35}}>Submit</Text>
              
            <Image style={{width:20,height:18,resizeMode:'contain',marginLeft:42}} source={require('./white.png')} />

            </TouchableOpacity>


            <TouchableOpacity style={{marginTop:215,alignSelf:'center',marginBottom:30}} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
             <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327',borderBottomWidth:2,borderColor:'#242327'}}>Skip for now</Text>
            </TouchableOpacity>
            
            

           </View>


           

             

             
           </KeyboardAwareScrollView>
             
           </View>
      );
    }
  }

  export default UpiScreen;