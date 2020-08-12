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
  Modal,



  } from 'react-native';

import React, {Component} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';






class Select extends React.Component {
  constructor() {
    super();
     this.state={

        upi:'',
        mobile:'',
        amount:'',
        modalVisible:false,
       
     }


     
  }

  setModalVisible=()=> {
  this.setState({modalVisible: true})
}

setModalVisible2=()=> {
  this.setState({modalVisible: false})
}

  render() {
    return(

      <SafeAreaProvider style={{backgroundColor:'white'}}>
        <StatusBar
             backgroundColor = "transparent"
         

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


                        <Text style = {{color:'black',fontFamily:'AvenirLTStd-Heavy',fontSize: 22,marginLeft:75}}>
                         Select Friends
              
          


                       </Text>


                    </View>

                    

                  
                    <View style={{height:'100%'}}>

                     <View style={{height:40,width:'100%',backgroundColor:'#D7F0F7',justifyContent:'center'}}>
                       <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:22}}>Friends</Text>
                     </View>


                     <TouchableOpacity style={{flexDirection:'row',marginTop:20,alignItems:'center',width:'88%',alignSelf:'center',height:60,borderRadius:10,backgroundColor:'white',elevation:2}}>

                      <Image style={{height:40,width:40,resizeMode:'contain',marginLeft:15}} source={require('./use.png')} />
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:10}}>Krish Shetty</Text>
                     </TouchableOpacity>

                     <TouchableOpacity style={{flexDirection:'row',marginTop:20,alignItems:'center',width:'88%',alignSelf:'center',height:60,borderRadius:10,backgroundColor:'white',elevation:2}}>

                      <Image style={{height:40,width:40,resizeMode:'contain',marginLeft:15}} source={require('./use.png')} />
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:10}}>Karan Patel</Text>
                     </TouchableOpacity>


                     <View style={{height:40,width:'100%',backgroundColor:'#D7F0F7',justifyContent:'center',marginTop:22}}>
                       <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:22}}>From your contacts</Text>
                     </View>


                     <View style={{flexDirection:'row',width:'86%',alignItems:'center',marginTop:16,alignSelf:'center'}}>
                      <Image style={{height:25,width:25,resizeMode:'contain'}} source={require('./add.png')} />
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginLeft:10}}>Invite a friend to ledger</Text>
                     </View>

                     <View style={{height:1,backgroundColor:'#e3e3e3',width:'100%',marginTop:15}}>
                     </View>

                     <TouchableOpacity style={{flexDirection:'row',width:'86%',alignItems:'center',marginTop:15,alignSelf:'center'}} onPress={()=>this.setModalVisible()}>
                      <Image style={{height:40,width:40,resizeMode:'contain'}} source={require('./dp.png')} />
                      <View style={{flexDirection:'column',marginLeft:10}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>Karan Patel</Text>
                      <Text style={{fontSize:13,fontFamily:'AvenirLTStd-Medium',color:'#24232799',marginTop:3}}>+91 9876543213</Text>
                      </View>
                     </TouchableOpacity>

                     <View style={{height:1,backgroundColor:'#e3e3e3',width:'100%',marginTop:15}}>
                     </View>

                     <View style={{flexDirection:'row',width:'86%',alignItems:'center',marginTop:15,alignSelf:'center'}}>
                      <Image style={{height:40,width:40,resizeMode:'contain'}} source={require('./dp.png')} />
                      <View style={{flexDirection:'column',marginLeft:10}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>Karan Patel</Text>
                      <Text style={{fontSize:13,fontFamily:'AvenirLTStd-Medium',color:'#24232799',marginTop:3}}>+91 9876543213</Text>
                      </View>
                     </View>


                     <View style={{height:1,backgroundColor:'#e3e3e3',width:'100%',marginTop:15}}>
                     </View>

                     <View style={{flexDirection:'row',width:'86%',alignItems:'center',marginTop:15,alignSelf:'center'}}>
                      <Image style={{height:40,width:40,resizeMode:'contain'}} source={require('./dp.png')} />
                      <View style={{flexDirection:'column',marginLeft:10}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>Karan Patel</Text>
                      <Text style={{fontSize:13,fontFamily:'AvenirLTStd-Medium',color:'#24232799',marginTop:3}}>+91 9876543213</Text>
                      </View>
                     </View>

                     <View style={{height:1,backgroundColor:'#e3e3e3',width:'100%',marginTop:15}}>
                     </View>

                     <View style={{flexDirection:'row',width:'86%',alignItems:'center',marginTop:15,alignSelf:'center'}}>
                      <Image style={{height:40,width:40,resizeMode:'contain'}} source={require('./dp.png')} />
                      <View style={{flexDirection:'column',marginLeft:10}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>Karan Patel</Text>
                      <Text style={{fontSize:13,fontFamily:'AvenirLTStd-Medium',color:'#24232799',marginTop:3}}>+91 9876543213</Text>
                      </View>
                     </View>

                     <View style={{height:1,backgroundColor:'#e3e3e3',width:'100%',marginTop:15}}>
                     </View>

                     <View style={{flexDirection:'row',width:'86%',alignItems:'center',marginTop:15,alignSelf:'center'}}>
                      <Image style={{height:40,width:40,resizeMode:'contain'}} source={require('./dp.png')} />
                      <View style={{flexDirection:'column',marginLeft:10}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>Karan Patel</Text>
                      <Text style={{fontSize:13,fontFamily:'AvenirLTStd-Medium',color:'#24232799',marginTop:3}}>+91 9876543213</Text>
                      </View>
                     </View>


                     <View style={{height:1,backgroundColor:'#e3e3e3',width:'100%',marginTop:15}}>
                     </View>






                    <Modal
                         animationType="slide"
                         transparent={true}
                         visible={this.state.modalVisible}
                         onRequestClose={() => {
              //             Alert.alert('Modal has been closed.');
                            this.setModalVisible2()
                         }}>
                         <TouchableOpacity
                          style={{
                                   flex: 1,
                                   borderRadius:10,
                                   flexDirection: 'column',
                                   justifyContent: 'center',backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                   alignItems: 'center'}}
                          activeOpacity={1}
                          onPressOut={() => this.setModalVisible2()}
                        >
                         <View style={{
                                  borderRadius:10,
                                   flexDirection: 'column',
                                   justifyContent: 'center',backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                   alignItems: 'center'}}>
                             <View style={{
                                     width:330,borderRadius:10,backgroundColor: 'white',
                                     height: 170}}>
                                     <View style={{width: '95%', margin: 10}}>

                                     
                                     <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginTop:15,marginLeft:30}}>Please confirm this phone number</Text>

                                     <View style={{flexDirection:'row',width:'86%',alignItems:'center',marginTop:25,marginLeft:16}}>
                      <Image style={{height:40,width:40,resizeMode:'contain'}} source={require('./dp.png')} />
                      <View style={{flexDirection:'column',marginLeft:10}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327'}}>Karan Patel</Text>
                      <Text style={{fontSize:13,fontFamily:'AvenirLTStd-Medium',color:'#24232799',marginTop:3}}>+91 9876543213</Text>
                      </View>
                     </View>

                        <View style={{flexDirection:'row',height:30,width:'40%',marginRight:10,alignItems:'center',alignSelf:'flex-end',marginTop:15,justifyContent:'space-between'}}>
                         <TouchableOpacity onPress={()=>this.setModalVisible2()}>
                           <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#FF0404'}}>Cancel</Text>
                         </TouchableOpacity>

                         <TouchableOpacity onPress={()=>this.props.navigation.navigate('Expenses')}>
                           <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginRight:4}}>Invite</Text>
                         </TouchableOpacity>
                        </View>

                                    </View>


                             </View>

                         </View>
                         </TouchableOpacity>
                       </Modal>







                    </View>                       
                  

                    


                    </SafeAreaProvider>


      );
  }

}


export default Select;