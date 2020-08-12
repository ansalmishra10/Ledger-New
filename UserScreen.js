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






class UserScreen extends React.Component {
  render() {
    return(

      <SafeAreaProvider style={{backgroundColor:'white'}}>
         <StatusBar
             backgroundColor = "#D7F0F7"
         

           />

           <ScrollView style={{flex:1,height:'100%', backgroundColor:'#D7F0F7'}}>


           <View style={{flexDirection:'row',alignItems:'center',width:'88%',alignSelf:'center',marginTop:25}}>

           <TouchableOpacity onPress= {()=>this.props.navigation.goBack()} style={{}}>
                            <Image
                                source={require('./left.png')}
                                style={{width: 25, height: 28,resizeMode:'contain'}}


                            />
            </TouchableOpacity>
            
            <TouchableOpacity style={{marginLeft:260}}>
            <Image style={{height:26,width:26,resizeMode:'contain'}} source={require('./plus1.png')}/> 
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft:25}}>
            <Image style={{height:25,width:6,resizeMode:'contain'}} source={require('./dot.png')}/> 

            </TouchableOpacity>

            </View>

            

            <Image style={{height:100,width:100,resizeMode:'contain',alignSelf:'center',marginTop:25}} source={require('./use.png')}/>

           <Text style={{fontSize:25,fontFamily:'AvenirLTStd-Heavy',color:'#242327',alignSelf:'center',marginTop:6}}>Rahul</Text>
           <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#242327',alignSelf:'center',marginTop:5}}>+91 9876543213</Text>
           <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#242327',alignSelf:'center',marginTop:18}}>You owe rahul ₹250</Text>
            
            


           

            <TouchableOpacity style={{height:50,width:160,borderRadius:25,backgroundColor:'#242327',justifyContent:'center',elevation:2,marginTop:24,alignSelf:'center'}}
             onPress={()=>this.props.navigation.navigate('Settle')}>
             <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',alignSelf:'center'}}>Settle up</Text>
            </TouchableOpacity>

            
           
            

            <View style={{height:Dimensions.get('window').height/2+100,marginTop:40,borderTopLeftRadius:50,borderTopRightRadius:50,elevation:2,backgroundColor:'red',backgroundColor:'#242327'}}>
            <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',marginTop:28,marginLeft:25}}>June 2020</Text>


            <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center',width:'88%',marginTop:20}}>
            <Image source={require('./family.png')} style={{height:50,width:50,resizeMode:'contain'}} />
             
          

            <View style={{flexDirection:'column',marginLeft:12,width:'50%'}}>
            <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Family</Text>
            
             <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'white',marginTop:2}}>Shared group</Text>
             
            </View>

            <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#D7F0F7',textAlign:'right'}}>You borrowed</Text>
            
             <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#D7F0F7',marginTop:2,textAlign:'right'}}>₹250</Text>

            </View>
            
            </View>


            <View style={{height:1,width:'88%',backgroundColor:'#9797971A',alignSelf:'center',marginTop:18}}>
            </View>

            <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center',width:'88%',marginTop:18}}>
            <Image source={require('./family.png')} style={{height:50,width:50,resizeMode:'contain'}} />
             
            

            <View style={{flexDirection:'column',marginLeft:12,width:'54%'}}>
            <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Family</Text>
            
             <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'white',marginTop:2}}>Shared group</Text>
             
            </View>

            <View style={{flexDirection:'column',marginLeft:30}}>
            <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#D7F0F7',textAlign:'right'}}>You lent</Text>
            
             <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#D7F0F7',marginTop:2,textAlign:'right'}}>₹250</Text>

            </View>
            
            </View>

            <View style={{height:1,width:'88%',backgroundColor:'#9797971A',alignSelf:'center',marginTop:18}}>
            </View>

            <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center',width:'88%',marginTop:18}}>
            <Image source={require('./family.png')} style={{height:50,width:50,resizeMode:'contain'}} />
             
            

            <View style={{flexDirection:'column',marginLeft:12,width:'54%'}}>
            <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Family</Text>
            
             <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'white',marginTop:2}}>Shared group</Text>
             
            
            </View>

            <View style={{flexDirection:'column',marginLeft:30}}>
            <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#D7F0F7',textAlign:'right'}}>You lent</Text>
            
             <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#D7F0F7',marginTop:2,textAlign:'right'}}>₹250</Text>

            </View>
            
            </View>

            <View style={{height:1,width:'88%',backgroundColor:'#9797971A',alignSelf:'center',marginTop:18}}>
            </View>
            
            <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center',width:'88%',marginTop:18}}>
            <Image source={require('./family.png')} style={{height:50,width:50,resizeMode:'contain'}}/>
             
            

            <View style={{flexDirection:'column',marginLeft:12,width:'54%'}}>
            <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Family</Text>
            
             <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'white',marginTop:2}}>Shared group</Text>
             
            </View>

            <View style={{flexDirection:'column',marginLeft:30}}>
            <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#D7F0F7',textAlign:'right'}}>You lent</Text>
            
             <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#D7F0F7',marginTop:2,textAlign:'right'}}>₹250</Text>

            </View>
            
            </View>

            <View style={{height:1,width:'88%',backgroundColor:'#9797971A',alignSelf:'center',marginTop:18}}>
            </View>

            



            </View>
            

           </ScrollView>


         </SafeAreaProvider>


      );
  }

}


export default UserScreen;