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






class ProfileScreen extends React.Component {
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


                        <Text style = {{color:'black',fontFamily:'AvenirLTStd-Heavy',fontSize: 22,marginLeft:115}}>
                         Profile
              
          


                       </Text>


                    </View>

                    <View style={{flex:1,backgroundColor:'white'}}>

                    <View style={{flexDirection:'row',alignItems:'center',height:120,width:'90%',alignSelf:'center',backgroundColor:'#242327',borderRadius:6,marginTop:20}}>
                    <Image style={{height:70,width:70,resizeMode:'contain',marginLeft:15}} source={require('./photo.png')} />

                     <View style={{flexDirection:'column',marginLeft:20}}>
                     <Text style={{fontSize:22,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Pradeep Yadav</Text>
                     <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'white',marginTop:5}}>pradeep@gmail.com</Text>
                     <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'white',marginTop:5}}>+91 9876543231</Text>
                     </View>

                     <Image source={require('./edit.png')} style={{height:30,width:30,resizeMode:'contain',marginLeft:42}} />
                    </View>

                    <TouchableOpacity style={{flexDirection:'row',alignSelf:'center',alignItems:'center',marginTop:45,width:'90%'}} onPress={()=>this.props.navigation.navigate('Card')}>
                    <Image style={{height:34,width:34,resizeMode:'contain',marginLeft:10}} source={require('./card.png')} />
                    <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327D9',marginLeft:22}}>Add Payment Details</Text>
                    <Image style={{height:18,width:10,resizeMode:'contain',marginLeft:108}} source={require('./arrow.png')} />
                    </TouchableOpacity>

                    <View style={{height:1,width:'77%',marginLeft:70,backgroundColor:'#e3e3e3',marginTop:15}}>
                    </View>

                    <TouchableOpacity style={{flexDirection:'row',alignSelf:'center',alignItems:'center',marginTop:15,width:'90%'}} onPress={()=>this.props.navigation.navigate('Stats')}>
                    <Image style={{height:34,width:34,resizeMode:'contain',marginLeft:10}} source={require('./scan.png')} />
                    <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327D9',marginLeft:22}}>Scan Code</Text>
                    <Image style={{height:18,width:10,resizeMode:'contain',marginLeft:194}} source={require('./arrow.png')} />
                    </TouchableOpacity>

                    <View style={{height:1,width:'77%',marginLeft:70,backgroundColor:'#e3e3e3',marginTop:15}}>
                    </View>

                    <TouchableOpacity style={{flexDirection:'row',alignSelf:'center',alignItems:'center',marginTop:15,width:'90%'}}>
                    <Image style={{height:34,width:34,resizeMode:'contain',marginLeft:10}} source={require('./about.png')} />
                    <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327D9',marginLeft:22}}>About us</Text>
                    <Image style={{height:18,width:10,resizeMode:'contain',marginLeft:207}} source={require('./arrow.png')} />
                    </TouchableOpacity>

                    <View style={{height:1,width:'77%',marginLeft:70,backgroundColor:'#e3e3e3',marginTop:15}}>
                    </View>


                    <TouchableOpacity style={{flexDirection:'row',alignSelf:'center',alignItems:'center',marginTop:15,width:'90%'}}>
                    <Image style={{height:34,width:34,resizeMode:'contain',marginLeft:10}} source={require('./rate.png')} />
                    <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327D9',marginLeft:22}}>Rate Ledger</Text>
                    <Image style={{height:18,width:10,resizeMode:'contain',marginLeft:179}} source={require('./arrow.png')} />
                    </TouchableOpacity>

                    <View style={{height:1,width:'77%',marginLeft:70,backgroundColor:'#e3e3e3',marginTop:15}}>
                    </View>
                    
                    <TouchableOpacity style={{flexDirection:'row',alignSelf:'center',alignItems:'center',marginTop:15,width:'90%'}}>
                    <Image style={{height:34,width:34,resizeMode:'contain',marginLeft:10}} source={require('./cont.png')} />
                    <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327D9',marginLeft:22}}>Contact Us</Text>
                    <Image style={{height:18,width:10,resizeMode:'contain',marginLeft:190}} source={require('./arrow.png')} />
                    </TouchableOpacity>


                    <View style={{height:1,width:'77%',marginLeft:70,backgroundColor:'#e3e3e3',marginTop:15}}>
                    </View>

                    <TouchableOpacity style={{flexDirection:'row',alignSelf:'center',alignItems:'center',marginTop:15,width:'90%'}}>
                    <Image style={{height:34,width:34,resizeMode:'contain',marginLeft:10}} source={require('./terms.png')} />
                    <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327D9',marginLeft:22}}>Terms and Condition</Text>
                    <Image style={{height:18,width:10,resizeMode:'contain',marginLeft:108}} source={require('./arrow.png')} />
                    </TouchableOpacity>

                    <View style={{height:1,width:'77%',marginLeft:70,backgroundColor:'#e3e3e3',marginTop:15}}>
                    </View>

                    <TouchableOpacity style={{flexDirection:'row',alignSelf:'center',alignItems:'center',marginTop:15,width:'90%'}}>
                    <Image style={{height:34,width:34,resizeMode:'contain',marginLeft:10}} source={require('./logout.png')} />
                    <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327D9',marginLeft:22}}>Logout</Text>
                    <Image style={{height:18,width:10,resizeMode:'contain',marginLeft:221}} source={require('./arrow.png')} />
                    </TouchableOpacity>


                    <View style={{height:1,width:'77%',marginLeft:70,backgroundColor:'#e3e3e3',marginTop:15}}>
                    </View>


                    </View>

                    




      </SafeAreaProvider>


      );
  }

}


export default ProfileScreen;