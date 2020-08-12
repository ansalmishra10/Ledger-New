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






class Activity extends React.Component {
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
                          Activity
              
          


                       </Text>


                    </View>

                    <View style={{flex:1,backgroundColor:'white'}}>


                    <View style={{flexDirection:'row',width:'88%',marginTop:30,alignSelf:'center',alignItems:'center'}}>

                    <Image source={require('./family.png')} style={{height:60,width:60,resizeMode:'contain'}} />

                     <View style={{flexDirection:'column',marginLeft:15,width:'74%'}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>You added</Text>
                       <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:5}}>"Petrol"</Text>
                       <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:5}}>in</Text>
                       <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:5}}>"Family"</Text>
                       </View>

                       <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginTop:4}}>3:00 am</Text>
                     </View>
                    </View>

                    <View style={{flexDirection:'row',width:'88%',marginTop:30,alignSelf:'center',alignItems:'center'}}>

                    <Image source={require('./face2.png')} style={{height:60,width:60,resizeMode:'contain'}} />

                     <View style={{flexDirection:'column',marginLeft:15,width:'74%'}}>
                       
                       <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>You added rahul to the group</Text>
                       <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:5}}>"Family"</Text>
                       
                       

                       <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginTop:4}}>27 Jan</Text>
                     </View>
                    </View>

                    <View style={{flexDirection:'row',width:'88%',marginTop:30,alignSelf:'center',alignItems:'center'}}>

                    <Image source={require('./family.png')} style={{height:60,width:60,resizeMode:'contain'}} />

                     <View style={{flexDirection:'column',marginLeft:15,width:'74%'}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>You created the group</Text>
                       
                       <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:5}}>"Family"</Text>
                       </View>

                       <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginTop:4}}>26 Jan</Text>
                     </View>
                    </View>
                    </View>


      </SafeAreaProvider>


      );
  }

}


export default Activity;