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






class Expenses extends React.Component {
  constructor() {
    super();
     this.state={

        pet:'',
        amount:'',
        note:'',
       
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


                        <Text style = {{color:'black',fontFamily:'AvenirLTStd-Heavy',fontSize: 22,marginLeft:76}}>
                         Add Expenses
              
          


                       </Text>


                    </View>

                    

                  
                    <KeyboardAwareScrollView
                       keyboardShouldPersistTaps = 'always'>

                       
                   <View style={{height:138,width:'100%',backgroundColor:'#D7F0F7'}}>

                   <View style={{flexDirection:'row',alignItems:'center',width:'88%',marginTop:10,alignSelf:'center',justifyContent:'space-between'}}>
                    <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327'}}>With you and</Text>
                    <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#242327'}}>30/6/2020</Text>
                   </View>

                   <View style={{flexDirection:'row',width:'88%',alignSelf:'center',marginTop:15}}>
                <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}}  onPress={()=>this.props.navigation.navigate('UserScreen')}>
                 <Image style={{width:54,height:54,resizeMode:'contain'}} source={require('./use.png')} />
                  
                 
                 <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginTop:6}}>Karan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:'column',alignItems:'center',marginLeft:15}}>
                 <Image style={{width:54,height:54,resizeMode:'contain'}} source={require('./use.png')} />
                  
              
                 <Text style={{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#242327',marginTop:6}}>Rahul</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{marginLeft:15}} onPress={()=>this.props.navigation.navigate('Select')}>
                <Image style={{height:50,width:50,resizeMode:'contain'}} source={require('./plus2.png')}/>
                </TouchableOpacity>

               </View>
                   </View>

                   <View style={{flexDirection:'row',alignItems:'center',width:'88%',height:60,alignSelf:'center',marginTop:30,justifyContent:'space-between'}}>

                   <Image style={{height:50,width:50,resizeMode:'contain'}} source={require('./petrol1.png')} />

                   <View style={{height:60,width:'82%',backgroundColor:'#F7F7F7',borderRadius:30,justifyContent:'center'}}>

                   <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'95%',height:60,marginLeft:'5%'}}
             placeholder="Enter a description"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({pet: text})}
             value={this.state.pet}
             />
                   </View>
                   </View>


                   <View style={{flexDirection:'row',alignItems:'center',width:'88%',height:60,alignSelf:'center',marginTop:30,justifyContent:'space-between'}}>

                   <Image style={{height:50,width:50,resizeMode:'contain'}} source={require('./paise.png')} />

                   <View style={{height:60,width:'82%',backgroundColor:'#F7F7F7',borderRadius:30,justifyContent:'center'}}>

                   <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'95%',height:60,marginLeft:'5%'}}
             placeholder="Enter Amount"

             placeholderTextColor="#24232780"
            keyboardType={'numeric'}
             
             onChangeText={(text) => this.setState({pet: text})}
             value={this.state.pet}
             />
                   </View>
                   </View>


                   <TouchableOpacity style={{flexDirection:'row',marginTop:30,height:60,alignItems:'center',justifyContent:'space-between',backgroundColor:'#F7F7F7',width:'88%',borderRadius:30,alignSelf:'center',elevation:2}}
                     onPress={()=>this.props.navigation.navigate('Split')}>
                   <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',marginLeft:25}}>How was this expense Split?</Text>
                   <Image style={{height:20,width:10,resizeMode:'contain',marginRight:20}} source={require('./arrow2.png')} />


                   </TouchableOpacity>

                   <View style={{width:'88%',height:60,borderRadius:30,backgroundColor:'#F7F7F7',alignSelf:'center',marginTop:30,justifyContent:'center'}}>
            

            <TextInput
             style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'#24232780',width:'96%',height:60,marginLeft:'4%'}}
             placeholder="Add notes"

             placeholderTextColor="#24232780"
             
             
             onChangeText={(text) => this.setState({note: text})}
             value={this.state.note}
             />

             </View>


             <TouchableOpacity style={{height:50,width:'88%',alignSelf:'center',borderRadius:25,marginTop:170,backgroundColor:'#242327',elevation:2,justifyContent:'center'}}
              onPress={()=>this.props.navigation.navigate('Group')}>
              <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',alignSelf:'center'}}>Save</Text>
             </TouchableOpacity>
                     

                       

                    </KeyboardAwareScrollView>
                       
                  

                    


                    </SafeAreaProvider>
                  

      );
  }

}


export default Expenses;