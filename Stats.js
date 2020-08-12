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






class Stats extends React.Component {
  render() {
    return(

       <SafeAreaProvider style={{backgroundColor:'white'}}>
        <StatusBar
             backgroundColor = "white"
         

           />

           <View style = {{height:60,backgroundColor:'white',flexDirection:'row',width:'100%',alignItems:'center',elevation:3,justifyContent:'space-between'}}>
                        <View>
                        <TouchableOpacity onPress= {()=>this.props.navigation.goBack()}>
                            <Image
                                source={require('./left.png')}
                                style={{width: 25, height: 28,marginLeft:20,resizeMode:'contain'}}


                            />
                        </TouchableOpacity>
                        </View>


                        <Text style = {{color:'black',fontFamily:'AvenirLTStd-Heavy',fontSize: 22,marginLeft:30}}>
                         Scan Code
              
          


                       </Text>


                       <TouchableOpacity style={{height:28,width:78,borderRadius:14,backgroundColor:'#242327',justifyContent:'center',marginRight:18}} onPress={()=>this.props.navigation.navigate('Status')}>
                        <Text style={{fontSize:13,fontFamily:'AvenirLTStd-Medium',color:'white',alignSelf:'center'}}>My Code</Text>

                       </TouchableOpacity>


                    </View>

                    

                  
                    <View style={{height:'100%'}}>
                     <Image style={{height:300,width:300,resizeMode:'contain',marginTop:200,alignSelf:'center'}} source={require('./share.png')} />
                  
                  </View>

      </SafeAreaProvider>


      );
  }

}


export default Stats;