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






class Settle extends React.Component {
  constructor() {
    super();
     this.state={

        
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
                         Settle Up
              
          


                       </Text>


                    </View>

                    

                  
                    <KeyboardAwareScrollView
                       keyboardShouldPersistTaps = 'always'>

                       <View style={{height:96,width:'90%',alignSelf:'center',backgroundColor:'#242327',borderRadius:10,marginTop:20}}>

                       <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'white',marginLeft:16,marginTop:18}}>You owe Rahul</Text>
                       <Text style={{fontSize:30,fontFamily:'AvenirLTStd-Heavy',color:'white',marginLeft:16,marginTop:6}}>₹250</Text>
                       
                       </View>

                       <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327CC',marginLeft:'7%',width:'88%',marginTop:25}}>Enter amount to pay</Text>



                       <View style={{width:'86%',height:60,borderRadius:30,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:10,justifyContent:'center'}}>
            

            <TextInput
             style={{fontSize:25,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'96%',height:60,marginLeft:'4%'}}
             placeholder="₹200"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({amount: text})}
             value={this.state.amount}
             />
             
            </View>

            <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:20,marginTop:30}}>Choose a payment method:</Text>

            <View style={{height:120,width:'90%',backgroundColor:'white',borderWidth:2,borderColor:'#F2F2F2',marginTop:25,borderRadius:10,alignSelf:'center'}}>

             <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:16,marginTop:20}}>UPI</Text>

             <View style={{flexDirection:'row',alignItems:'center',width:'92%',alignSelf:'center',marginTop:15,justifyContent:'space-between'}}>

             <TouchableOpacity onPress={()=>this.props.navigation.navigate('Payment')}>
              <Image style={{height:34,width:98,resizeMode:'contain'}} source={require('./bhim.png')} />
             </TouchableOpacity>

             <TouchableOpacity>
              <Image style={{height:34,width:100,resizeMode:'contain'}} source={require('./paytm.png')} />
             </TouchableOpacity>

             <TouchableOpacity>
              <Image style={{height:28,width:98,resizeMode:'contain'}} source={require('./PhonePe.png')} />
             </TouchableOpacity>
             </View>

            </View>

            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',height:64,width:'90%',borderRadius:10,borderWidth:2,borderColor:'#F2F2F2',alignSelf:'center',marginTop:20}}>
             <Image style={{height:32,width:24,resizeMode:'contain',marginLeft:22}} source={require('./cash.png')} />
             <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:12}}>Cash</Text>
            </TouchableOpacity>
      


      </KeyboardAwareScrollView>


      </SafeAreaProvider>


      );
  }

}


export default Settle;