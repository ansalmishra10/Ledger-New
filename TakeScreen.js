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
import * as Progress from 'react-native-progress';
import {Surface, Shape} from '@react-native-community/art';



class TakeScreen extends React.Component {
  render() {
    return(
         
         <SafeAreaProvider style={{backgroundColor:'white'}}>
         <StatusBar
             backgroundColor = "#D7F0F7"
         

           />

           <ScrollView style={{flex:1,height:'100%', backgroundColor:'#D7F0F7'}}>

           <TouchableOpacity onPress= {()=>this.props.navigation.goBack()} style={{marginLeft:20,marginTop:25}}>
                            <Image
                                source={require('./left.png')}
                                style={{width: 25, height: 28,resizeMode:'contain'}}


                            />
            </TouchableOpacity>

            <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327',alignSelf:'center',marginTop:20}}>You are owed</Text>
            <Text style={{fontSize:40,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginTop:5,alignSelf:'center'}}>₹10,000</Text>
            
            

            <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327',alignSelf:'center',marginTop:60}}>Recieve</Text>
            <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327',alignSelf:'center'}}>₹250</Text>

            <View style={{height:1,width:180,alignSelf:'center',backgroundColor:'#2423271A',marginTop:20}}>

             </View>
            <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327',alignSelf:'center',marginTop:20}}>Left</Text>
            <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327',alignSelf:'center'}}>₹750</Text>

            <View style={{alignSelf:'center',marginTop:-154}}>
            <Progress.Circle size={200} thickness={15}  progress={0.75} unfilledColor={'white'} endAngle={0}  strokeCap={'square'} color = {'black'} borderColor={'white'}/>
            </View>

            <View style={{height:Dimensions.get('window').height/2+100,marginTop:40,borderTopLeftRadius:50,borderTopRightRadius:50,elevation:2,backgroundColor:'red',backgroundColor:'#242327'}}>
            <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',marginTop:28,marginLeft:25}}>June 2020</Text>


            <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center',width:'88%',marginTop:20}}>
            <ImageBackground source={require('./face.png')} style={{height:50,width:50,resizeMode:'contain'}}>
             <Image style={{height:20,width:20,resizeMode:'contain',alignSelf:'flex-end'}} source={require('./bell.png')}/>
            </ImageBackground>

            <View style={{flexDirection:'column',marginLeft:12,width:'54%'}}>
            <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Rahul owes you</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:2}}>
             <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'#35FF52'}}>₹250</Text>
             <Image style={{height:12,width:10,resizeMode:'contain',marginLeft:2}} source={require('./green.png')} />
            </View>
            </View>

            <TouchableOpacity style={{height:32,width:90,backgroundColor:'#D7F0F7',borderRadius:16,elevation:2,justifyContent:'center'}}>
             <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'#242327',alignSelf:'center'}}>Settle Up</Text>
            </TouchableOpacity>
            
            </View>


            <View style={{height:1,width:'88%',backgroundColor:'#9797971A',alignSelf:'center',marginTop:18}}>
            </View>

            <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center',width:'88%',marginTop:18}}>
            <ImageBackground source={require('./face.png')} style={{height:50,width:50,resizeMode:'contain'}}>
             <Image style={{height:20,width:20,resizeMode:'contain',alignSelf:'flex-end'}} source={require('./bell.png')}/>
            </ImageBackground>

            <View style={{flexDirection:'column',marginLeft:12,width:'54%'}}>
            <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Rena owes you</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:2}}>
             <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'#35FF52'}}>₹250</Text>
             <Image style={{height:12,width:10,resizeMode:'contain',marginLeft:2}} source={require('./green.png')} />
            </View>
            </View>

            <TouchableOpacity style={{height:32,width:90,backgroundColor:'#D7F0F7',borderRadius:16,elevation:2,justifyContent:'center'}}>
             <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'#242327',alignSelf:'center'}}>Settle Up</Text>
            </TouchableOpacity>
            
            </View>

            <View style={{height:1,width:'88%',backgroundColor:'#9797971A',alignSelf:'center',marginTop:18}}>
            </View>

            <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center',width:'88%',marginTop:18}}>
            <ImageBackground source={require('./face.png')} style={{height:50,width:50,resizeMode:'contain'}}>
             <Image style={{height:20,width:20,resizeMode:'contain',alignSelf:'flex-end'}} source={require('./bell.png')}/>
            </ImageBackground>

            <View style={{flexDirection:'column',marginLeft:12,width:'54%'}}>
            <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Atul owes you</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:2}}>
             <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'#35FF52'}}>₹250</Text>
             <Image style={{height:12,width:10,resizeMode:'contain',marginLeft:2}} source={require('./green.png')} />
            </View>
            </View>

            <TouchableOpacity style={{height:32,width:90,backgroundColor:'#D7F0F7',borderRadius:16,elevation:2,justifyContent:'center'}}>
             <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'#242327',alignSelf:'center'}}>Settle Up</Text>
            </TouchableOpacity>
            
            </View>

            <View style={{height:1,width:'88%',backgroundColor:'#9797971A',alignSelf:'center',marginTop:18}}>
            </View>
            
            <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center',width:'88%',marginTop:18}}>
            <Image source={require('./face.png')} style={{height:50,width:50,resizeMode:'contain'}}/>
             
            

            <View style={{flexDirection:'column',marginLeft:12,width:'54%'}}>
            <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Karan paid</Text>
            <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'#35FF52',marginTop:2}}>₹250</Text>
            </View>

            <Image style={{height:25,width:25,resizeMode:'contain',marginLeft:60}} source={require('./tick.png')} />
            
            </View>

            <View style={{height:1,width:'88%',backgroundColor:'#9797971A',alignSelf:'center',marginTop:18}}>
            </View>

            <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center',width:'88%',marginTop:18}}>
            <Image source={require('./face.png')} style={{height:50,width:50,resizeMode:'contain'}} />
            
        

            <View style={{flexDirection:'column',marginLeft:12,width:'54%'}}>
            <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Karan paid</Text>
            
             <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'#35FF52',marginTop:2}}>₹250</Text>
             
            </View>

            <Image style={{height:25,width:25,resizeMode:'contain',marginLeft:60}} source={require('./tick.png')} />
            
            </View>



            </View>
            

           </ScrollView>


         </SafeAreaProvider>

      );
  }
}

export default TakeScreen;