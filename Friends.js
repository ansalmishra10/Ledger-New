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






class Friends extends React.Component {
  render() {
    return(

      <View style={{flex:1}}>

        <StatusBar
             backgroundColor = "black"
         

           />


            <View style={{height:'100%',backgroundColor:'white'}}>

              <View style={{height:'60%'}}>

                <View style={{flexDirection:'row',marginTop:20,alignItems:'center',justifyContent:'space-between',width:'88%',alignSelf:'center'}}>
                 <Image style={{width:100,height:45,resizeMode:'contain'}} source={require('./newlogo.png')}/>
                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileScreen')}>
                 <Image style={{height:60,width:60,resizeMode:'contain'}} source={require('./photo.png')}/>
                 </TouchableOpacity>
                </View>

                <View style={{width:'90%',alignSelf:'center',marginTop:25,borderRadius:10,height:110,flexDirection:'row',alignItems:'center',backgroundColor:'#242327'}}>
                 <View style={{flexDirection:'column',width:'45%',marginLeft:15}}>
                  <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Medium',color:'white'}}>Total Balance</Text>
                  <Text style={{fontSize:42,fontFamily:'AvenirLTStd-Heavy',color:'white',marginTop:5}}>₹2000</Text>
                 </View>

                  
                </View>



                 <View style={{width:'90%',alignItems:'center',alignSelf:'center',justifyContent:'space-between',flexDirection:'row',marginTop:25}}>
                  <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',height:110,width:110,borderRadius:10,backgroundColor:'#D7F0F7',elevation:2}} onPress={()=>this.props.navigation.navigate('TakeScreen')}>
                  <Text style={{width:'80%',fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',alignSelf:'center',marginTop:8}}>You are Owed</Text>
                  <Text style={{width:'80%',fontSize:24,fontFamily:'AvenirLTStd-Heavy',marginBottom:8,color:'#242327',alignSelf:'center',marginTop:8}}>₹1000</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',height:110,width:110,borderRadius:10,backgroundColor:'#D7F0F7',elevation:2}} onPress={()=>this.props.navigation.navigate('GiveScreen')}>
                  <Text style={{width:'50%',marginLeft:10,fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',marginTop:8}}>You Owed</Text>
                  <Text style={{width:'80%',fontSize:24,fontFamily:'AvenirLTStd-Heavy',marginBottom:8,color:'#242327',alignSelf:'center',marginTop:8}}>₹500</Text>
                  </TouchableOpacity>

                  <View style={{flexDirection:'column',justifyContent:'space-between',height:110,width:110,borderRadius:10,backgroundColor:'#D7F0F7',elevation:2}}>
                  <Text style={{width:'80%',fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#24232780',alignSelf:'center',marginTop:8}}>Expense this month</Text>
                  <Text style={{width:'80%',fontSize:24,fontFamily:'AvenirLTStd-Heavy',marginBottom:8,color:'#242327',alignSelf:'center',marginTop:8}}>₹500</Text>
                  </View>
                 </View>
              </View>

              <View style={{height:'40%',backgroundColor:'#242327',borderTopLeftRadius:50,borderTopRightRadius:50,elevation:2}}>

               <View style={{flexDirection:'row',height:'auto',width:'86%',alignItems:'center',justifyContent:'space-between',alignSelf:'center',marginTop:25}}>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                <Text style={{fontSize:24,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Groups</Text>
               </TouchableOpacity>
               
               <TouchableOpacity> 
                <Text style={{fontSize:24,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Friends</Text>
               </TouchableOpacity> 

               <TouchableOpacity onPress={()=>this.props.navigation.navigate('Activity')}>
                <Text style={{fontSize:24,fontFamily:'AvenirLTStd-Heavy',color:'white'}}>Activity</Text>
               </TouchableOpacity>
                
               </View>

               <View style={{height:5,width:40,backgroundColor:'white',marginLeft:'39.3%',borderRadius:2.5,marginTop:5}}>
               </View>

               <View style={{flexDirection:'row',width:'86%',alignSelf:'center',marginTop:25}}>
                <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}}  onPress={()=>this.props.navigation.navigate('UserScreen')}>
                 <ImageBackground style={{width:90,height:90,resizeMode:'contain'}} source={require('./use.png')}>
                  <Image style={{height:25,width:25,resizeMode:'contain',alignSelf:'flex-end'}} source={require('./bell.png')} />
                 </ImageBackground>
                 <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',marginTop:6}}>Rahul</Text>
                 <View style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                  <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#FF1A1A'}}>₹1000</Text>
                  <Image style={{height:12,width:10,resizeMode:'contain',marginLeft:2}} source={require('./red.png')} />
                 </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:'column',alignItems:'center',marginLeft:20}}>
                 <ImageBackground style={{width:90,height:90,resizeMode:'contain'}} source={require('./use.png')}>
                  <Image style={{height:25,width:25,resizeMode:'contain',alignSelf:'flex-end'}} source={require('./bell.png')} />
                 </ImageBackground>
                 <Text style={{fontSize:20,fontFamily:'AvenirLTStd-Heavy',color:'white',marginTop:6}}>Karan</Text>
                 <View style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                  <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#35FF52'}}>₹500</Text>
                  <Image style={{height:12,width:10,resizeMode:'contain',marginLeft:2}} source={require('./green.png')} />
                 </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={{marginLeft:22,marginTop:16}} onPress={()=>this.props.navigation.navigate('AddScreen2')}>
                <Image style={{height:60,width:60,resizeMode:'contain'}} source={require('./plus.png')}/>
                </TouchableOpacity>

               </View>
              </View>

            </View>  
           
        </View>


      );
  }

}


export default Friends;