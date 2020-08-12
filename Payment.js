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
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';






class Payment extends React.Component {
  constructor() {
    super();
     this.state={

        
        amount:'',
       
     }
  }

  render() {
    return(

      <SafeAreaProvider style={{backgroundColor:'white'}}>
        <StatusBar
             backgroundColor = "white"
         

           />

           <View style = {{height:60,backgroundColor:'white',flexDirection:'row',width:'100%',alignItems:'center',elevation:3}}>
                        <View>
                        <TouchableOpacity onPress= {()=>this.props.navigation.goBack()}>
                            <Image
                                source={require('./left.png')}
                                style={{width: 25, height: 28,marginLeft:20,resizeMode:'contain'}}


                            />
                        </TouchableOpacity>
                        </View>


                        <Text style = {{color:'black',fontFamily:'AvenirLTStd-Heavy',fontSize: 22,marginLeft:100}}>
                         Payment
              
          


                       </Text>


                    </View>

                    

                  
                    <KeyboardAwareScrollView
                       keyboardShouldPersistTaps = 'always'>

                       <View style={{height:96,width:'90%',alignSelf:'center',backgroundColor:'#242327',borderRadius:10,marginTop:20}}>

                       <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'white',marginLeft:16,marginTop:18}}>Amount to pay</Text>
                       <Text style={{fontSize:30,fontFamily:'AvenirLTStd-Heavy',color:'white',marginLeft:16,marginTop:6}}>₹200</Text>
                       
                       </View>

                       <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:'5.5%',width:'90%',marginTop:40}}>UPI/BHIM</Text>

                       <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327CC',marginLeft:'7%',width:'88%',marginTop:25}}>Select your UPI app</Text>

             <View style={{flexDirection:'row',width:'90%',height:60,borderRadius:6,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:10,alignItems:'center',justifyContent:'space-between'}}>

            <Image style={{height:32,width:98,resizeMode:'contain',marginLeft:15}} source={require('./bhim.png')} />

            <Image style={{height:8,width:16,resizeMode:'contain',marginRight:15}}  source={require('./down.png')} />       
            
             
            </View>

            <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327CC',marginLeft:'7%',width:'88%',marginTop:38}}>Enter your UPI ID</Text>

            <View style={{flexDirection:'row',width:'86%',height:60,borderRadius:6,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:10,alignItems:'center'}}>
            

            <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'76%',height:60,marginLeft:'4%'}}
             placeholder="prade33222"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({amount: text})}
             value={this.state.amount}
             />

             <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>@upi</Text>
             
            </View>

            <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:20}}>

             <Image style={{height:18,width:18,resizeMode:'contain',marginLeft:5}} source={require('./check.png')} />
             <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:12}}>Save this details for future payments.</Text>
            </View>

            <TouchableOpacity style={{height:50,width:'90%',borderRadius:25,marginTop:36,backgroundColor:'#242327',alignSelf:'center',justifyContent:'center',elevation:2}} onPress={()=>this.props.navigation.navigate('Success')}>
                <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',alignSelf:'center'}}>Verify & pay</Text>
            </TouchableOpacity>
            

            
      


      </KeyboardAwareScrollView>


      </SafeAreaProvider>


      );
  }

}


export default Payment;