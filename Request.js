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






class Request extends React.Component {
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


                        <Text style = {{color:'black',fontFamily:'AvenirLTStd-Heavy',fontSize: 22,marginLeft:65}}>
                         Request Payment
              
          


                       </Text>


                    </View>

                    

                  
                    <KeyboardAwareScrollView
                       keyboardShouldPersistTaps = 'always'>

                       

                       <View style={{width:'86%',height:56,borderRadius:28,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:35,justifyContent:'center'}}>
             <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'96%',height:56,marginLeft:'4%'}}
             placeholder="UPI Id"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({upi: text})}
             value={this.state.upi}
             />
            </View>

            <View style={{width:'86%',height:56,borderRadius:28,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:30,justifyContent:'center'}}>
            <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'96%',height:56,marginLeft:'4%'}}
             placeholder="Mobile No."

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({mobile: text})}
             value={this.state.password}
             />
             
            </View>

            <View style={{width:'86%',height:56,borderRadius:28,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:30,justifyContent:'center'}}>
             <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'96%',height:56,marginLeft:'4%'}}
             placeholder="Amount"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({amount: text})}
             value={this.state.amount}
             />
            </View>

            <TouchableOpacity style={{height:50,width:'86%',borderRadius:25,marginTop:40,backgroundColor:'#242327',alignSelf:'center',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('Successtwo')}>
             <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'white',alignSelf:'center'}}>Send</Text>
            </TouchableOpacity>

                       

                    </KeyboardAwareScrollView>
                       
                  

                    


                    </SafeAreaProvider>


      );
  }

}


export default Request;