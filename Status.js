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






class Status extends React.Component {
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


                        <Text style = {{color:'black',fontFamily:'AvenirLTStd-Heavy',fontSize: 22,marginLeft:100}}>
                         My Code
              
          


                       </Text>


                    </View>

                    

                  
                    
                       <View style={{height:'100%'}}>

                        <View style={{height:320,width:'90%',alignSelf:'center',backgroundColor:'#D7F0F7',marginTop:30,borderRadius:15}}>
                         <Image style={{height:72,width:72,resizeMode:'contain',marginTop:20,alignSelf:'center'}} source={require('./photo.png')} />

                         <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#242327',alignSelf:'center',marginTop:8}}>Pradeep Yadav</Text>


                         <Image style={{height:150,width:150,resizeMode:'contain',alignSelf:'center',marginTop:25}} source={require('./qr.png')}  />
                        </View>

                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:30,marginLeft:25}}>
                         <Image style={{height:34,width:34,resizeMode:'contain'}} source={require('./share1.png')} />
                         <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327D9',marginLeft:22}}>Share Code</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:28,marginLeft:25}}>
                         <Image style={{height:34,width:34,resizeMode:'contain'}} source={require('./copy.png')} />
                         <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327D9',marginLeft:22}}>Copy Code</Text>
                        </TouchableOpacity>
                       </View>
                  

                    


                    </SafeAreaProvider>


      );
  }

}


export default Status;