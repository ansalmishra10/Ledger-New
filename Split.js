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






class Split extends React.Component {
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


                        <Text style = {{color:'black',fontFamily:'AvenirLTStd-Heavy',fontSize: 20,marginLeft:40,width:'56%',textAlign:'center'}}>
                         
                       How was this expense Split?
          


                       </Text>


                    </View>

                    

                  
                    <View  style={{height:'100%'}}>


                    <View style={{flexDirection:'row',borderRadius:10,width:'88%',alignItems:'center',alignSelf:'center',height:70,backgroundColor:'white',borderColor:'#E3E3E3',borderWidth:1,marginTop:22}}>
                      <View style={{elevation:2,marginLeft:12}}>
                      <Image style={{height:40,width:40,resizeMode:'contain'}} source={require('./use.png')} />
                     </View> 

                     <Image style={{height:40,width:40,resizeMode:'contain',marginLeft:-25}} source={require('./photo.png')}/>


                     <View style={{flexDirection:'column',marginLeft:12}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>You paid, split equally</Text>
                      <Text style={{fontSize:14,fontFamily:'AvenirLTStd-Medium',color:'#3BB54A',marginTop:2}}>Jay owes you ₹200</Text>
                     </View>

                     
                     <Image style={{height:20,width:20,resizeMode:'contain',marginLeft:75}} source={require('./tick.png')} />


                    </View>

                    <View style={{flexDirection:'row',borderRadius:10,width:'88%',alignItems:'center',alignSelf:'center',height:70,backgroundColor:'white',borderColor:'#E3E3E3',borderWidth:1,marginTop:22}}>
                      <View style={{elevation:2,marginLeft:12}}>
                      <Image style={{height:40,width:40,resizeMode:'contain'}} source={require('./use.png')} />
                     </View> 

                     <Image style={{height:40,width:40,resizeMode:'contain',marginLeft:-25}} source={require('./photo.png')}/>


                     <View style={{flexDirection:'column',marginLeft:12}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>You are owed the full amount</Text>
                      <Text style={{fontSize:14,fontFamily:'AvenirLTStd-Medium',color:'#3BB54A',marginTop:2}}>Jay owes you ₹200</Text>
                     </View>

                     
              


                    </View>

                    <View style={{flexDirection:'row',borderRadius:10,width:'88%',alignItems:'center',alignSelf:'center',height:70,backgroundColor:'white',borderColor:'#E3E3E3',borderWidth:1,marginTop:22}}>
                      <View style={{elevation:2,marginLeft:12}}>
                      <Image style={{height:40,width:40,resizeMode:'contain'}} source={require('./use.png')} />
                     </View> 

                     <Image style={{height:40,width:40,resizeMode:'contain',marginLeft:-25}} source={require('./photo.png')}/>


                     <View style={{flexDirection:'column',marginLeft:12}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>Jay paid, split equally</Text>
                      <Text style={{fontSize:14,fontFamily:'AvenirLTStd-Medium',color:'#FF1A1A',marginTop:2}}>You owe jay ₹200</Text>
                     </View>

                     
              


                    </View>


                    <View style={{flexDirection:'row',borderRadius:10,width:'88%',alignItems:'center',alignSelf:'center',height:70,backgroundColor:'white',borderColor:'#E3E3E3',borderWidth:1,marginTop:22}}>
                      <View style={{elevation:2,marginLeft:12}}>
                      <Image style={{height:40,width:40,resizeMode:'contain'}} source={require('./use.png')} />
                     </View> 

                     <Image style={{height:40,width:40,resizeMode:'contain',marginLeft:-25}} source={require('./photo.png')}/>


                     <View style={{flexDirection:'column',marginLeft:12}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>jay is owed the full amount</Text>
                      <Text style={{fontSize:14,fontFamily:'AvenirLTStd-Medium',color:'#FF1A1A',marginTop:2}}>Jay owes you ₹200</Text>
                     </View>

                     
              


                    </View>

                    <TouchableOpacity style={{height:40,width:160,borderRadius:20,alignSelf:'center',backgroundColor:'#242327',elevation:2,marginTop:38,justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('Details')}>
                     <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'white',alignSelf:'center'}}>More options</Text>
                    </TouchableOpacity>



                    </View>
                       
                  

                    


                    </SafeAreaProvider>


      );
  }

}


export default Split;