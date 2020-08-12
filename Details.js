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






class Details extends React.Component {
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


                        <Text style = {{color:'black',fontFamily:'AvenirLTStd-Heavy',fontSize: 22,marginLeft:72}}>
                         Expense details
              
          


                       </Text>


                    </View>

                    

                  
                    <View style={{height:'100%'}}>

                    <View style={{height:70,width:'88%',alignSelf:'center',alignItems:'center',flexDirection:'row',backgroundColor:'#242327',borderRadius:10,marginTop:15}}>
                     <Image style={{height:40,width:40,marginLeft:15,resizeMode:'contain'}} source={require('./use.png')}/>
                     <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'white',marginLeft:12}}>Paid by</Text>
                     <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'white',marginLeft:4}}>Krish Shetty</Text>
                    </View>


                    <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'#242327',alignSelf:'center',marginTop:40}}>Split Equally</Text>

                     <Text style = {{color:'#242327',fontFamily:'AvenirLTStd-Medium',fontSize:15,marginTop:8,alignSelf:'center',width:'60%',textAlign:'center'}}>Select which people owe an equal share</Text>

                      
                      <View style={{flexDirection:'row',alignItems:'center',marginTop:20,width:'88%',alignSelf:'center',justifyContent:'space-between'}}>

                      <TouchableOpacity style={{height:32,width:56,borderRadius:16,backgroundColor:'#242327',justifyContent:'center'}}>
                      <Text style={{fontSize:33,fontFamily:'AvenirLTStd-Heavy',color:'white',alignSelf:'center',marginTop:-3}}>=</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={{height:32,width:56,borderWidth:1,borderColor:'#e3e3e3',borderRadius:16,backgroundColor:'white',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('Detailtwo')}>
                      <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327',alignSelf:'center'}}>1.23</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={{height:32,width:56,borderWidth:1,borderColor:'#e3e3e3',borderRadius:16,backgroundColor:'white',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('Detailagain')}>
                      <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327',alignSelf:'center'}}>%</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={{height:32,width:56,borderRadius:16,borderWidth:1,borderColor:'#e3e3e3',backgroundColor:'white',justifyContent:'center'}}>
                      <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327',alignSelf:'center'}}>|||</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={{height:32,width:56,borderRadius:16,borderWidth:1,borderColor:'#e3e3e3',backgroundColor:'white',justifyContent:'center'}}>
                      <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327',alignSelf:'center'}}>+/-</Text>
                      </TouchableOpacity>
                      </View>



                      <View style={{height:70,width:'88%',flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#e3e3e3',borderRadius:10,marginTop:30,alignSelf:'center'}}>

                       <Image style={{height:40,width:40,resizeMode:'contain',marginLeft:13}} source={require('./use.png')} />

                       <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:12,width:'65%'}}>Krish Shetty</Text>
                        
                       <Image style={{height:20,width:20,resizeMode:'contain',marginLeft:18}} source={require('./tick.png')} /> 
                      </View>

                      <View style={{height:70,width:'88%',flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#e3e3e3',borderRadius:10,marginTop:25,alignSelf:'center'}}>

                       <Image style={{height:40,width:40,resizeMode:'contain',marginLeft:13}} source={require('./use.png')} />

                       <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:12,width:'65%'}}>jay patel</Text>
                        
                       <Image style={{height:20,width:20,resizeMode:'contain',marginLeft:18}} source={require('./tick.png')} /> 
                      </View>



                      <View style={{height:70,width:'88%',flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#e3e3e3',borderRadius:10,marginTop:120,alignSelf:'center',justifyContent:'space-between'}}>
                          <View style={{flexDirection:'column',width:'50%',marginLeft:18}}>
                           <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327'}}>₹200/person</Text>

                           <Text style={{fontSize:14,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>(2 people)</Text>
                          </View>

                          <View style={{flexDirection:'row',alignItems:'center',width:'20%'}}>
                          <Text style={{fontSize:14,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:6}}>All</Text>

                          <Image style={{height:20,width:20,resizeMode:'contain',marginLeft:10}} source={require('./tick.png')} />
                          </View>
                      </View>


                      <TouchableOpacity style={{width:'88%',height:50,borderRadius:25,backgroundColor:'#242327',alignSelf:'center',marginTop:40,justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('Expenses')}>
                        <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',alignSelf:'center'}}>Done</Text>
                      </TouchableOpacity>




                    </View>
                       
                  

                    


                    </SafeAreaProvider>


      );
  }

}


export default Details;