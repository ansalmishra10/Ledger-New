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






class Card extends React.Component {
  constructor() {
    super();
     this.state={

        upi:'',
        mobile:'',
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


                        <Text style = {{color:'black',fontFamily:'AvenirLTStd-Heavy',fontSize: 20,marginLeft:60}}>
                         Add Payment Details
              
          


                       </Text>


                    </View>

                    

                  
                    <KeyboardAwareScrollView
                       keyboardShouldPersistTaps = 'always'>


                       <View style={{flexDirection:'row',alignItems:'center',width:'86%',alignSelf:'center',marginTop:25}}>
                         <Image style={{height:20,width:20,resizeMode:'contain'}} source={require('./radio.png')} />
                         <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:12}}>Debit Card</Text>
                       </View>

                       <View style={{height:260,width:'90%',alignSelf:'center',borderRadius:15,backgroundColor:'#D7F0F7',marginTop:18}}>

                       <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginTop:23,marginLeft:20}}>Card Number</Text>

                        <View style={{height:50,width:'90%',backgroundColor:'white',marginTop:10,borderRadius:8,borderWidth:1,borderColor:'#DBDBDB80',justifyContent:'center',alignSelf:'center'}}>
                        </View> 

                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:20,marginTop:21}}>
                        <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>Card Expiry Date</Text>
                        <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:50}}>CVV</Text>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',marginTop:10,width:'90%',alignSelf:'center',height:50,justifyContent:'space-between'}}>
                         <View style={{width:'48.5%',height:50,borderRadius:8,backgroundColor:'white',borderWidth:1,borderColor:'#DBDBDB80'}}>
                         </View>
                         <View style={{width:'48.5%',height:50,borderRadius:8,backgroundColor:'white',borderWidth:1,borderColor:'#DBDBDB80'}}>
                         </View>
                        </View>

                        <View style={{width:'90%',flexDirection:'row',alignItems:'center',marginTop:16,alignSelf:'center'}}>

                          <Image style={{height:15,width:15,resizeMode:'contain',marginLeft:1}} source={require('./check.png')} />
                          <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:13}}>Save this card for future payments.</Text>
                        </View>
                       </View>

                       <View style={{flexDirection:'row',alignItems:'center',width:'86%',alignSelf:'center',marginTop:40}}>
                         <Image style={{height:20,width:20,resizeMode:'contain'}} source={require('./radio1.png')} />
                         <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:12}}>Credit Card</Text>
                       </View>


                       <TouchableOpacity style={{height:50,width:'90%',borderRadius:25,backgroundColor:'#242327',alignSelf:'center',justifyContent:'center',marginTop:'74%'}} onPress={()=>this.props.navigation.navigate('ProfileScreen')}>
                        <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',alignSelf:'center'}}>Save</Text>
                       </TouchableOpacity>

                       
                       

                    </KeyboardAwareScrollView>
                       
                  

                    


                    </SafeAreaProvider>


      );
  }

}


export default Card;