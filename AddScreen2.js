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






class AddScreen2 extends React.Component {
  constructor() {
    super();
     this.state={

       group:'',
       type:'',
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


                        <Text style = {{color:'black',fontFamily:'AvenirLTStd-Heavy',fontSize: 22,marginLeft:65}}>
                         Add new contact
              
          


                       </Text>


                    </View>

                    

                  
                    <KeyboardAwareScrollView
                       keyboardShouldPersistTaps = 'always'>


                       <Image style={{height:100,width:100,resizeMode:'contain',alignSelf:'center',marginTop:25}} source={require('./camera.png')}/>

                       <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#242327',alignSelf:'center',marginTop:10}}>Upload photo</Text>

                       

                       <View style={{width:'86%',height:60,borderRadius:30,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:50,justifyContent:'center'}}>
             <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'94%',height:60,marginLeft:'6%'}}
             placeholder="Enter Name"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({group: text})}
             value={this.state.group}
             />
            </View>

            <View style={{flexDirection:'row',width:'86%',height:60,borderRadius:30,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:30,alignItems:'center'}}>
            <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'82%',height:60,marginLeft:'6%'}}
             placeholder="Enter mobile no. / email"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({mobile: text})}
             value={this.state.password}
             />

             <Image style={{height:10,width:20,resizeMode:'contain',marginTop:2}} source={require('./down.png')} />
             
            </View>

            

            <TouchableOpacity style={{height:50,width:'86%',borderRadius:25,marginTop:35,backgroundColor:'#242327',alignSelf:'center',justifyContent:'center',marginBottom:20}} onPress={()=>this.props.navigation.navigate('Friends')}>
             <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',alignSelf:'center'}}>Add</Text>
            </TouchableOpacity>

                       

                    </KeyboardAwareScrollView>
                       
                  

                    


                    </SafeAreaProvider>


      );
  }

}


export default AddScreen2;