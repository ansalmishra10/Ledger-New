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




  } from 'react-native';


import React, {Component} from 'react';
import Swiper from 'react-native-swiper';



 


 class StyleScreen extends React.Component {
  constructor(props) {
     super(props);
       this.state ={
    
         newIndex:0,
       }
   }


  

   render() {
     return (
         
         <View style={{flex:1,backgroundColor:'#F2F5F7'}}>

         
         <Swiper
             onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
             ref='swiper' showsButtons={false} loop={false}
             dot={<View style={{backgroundColor: '#D7F0F740', width: 14, height: 4, borderRadius: 2, marginLeft: 4, marginRight: 4, marginTop: 3, marginBottom: 3}} />}
             activeDot={<View style={{backgroundColor: '#D7F0F7', width: 30, height:6, borderRadius:3, marginLeft: 4, marginRight: 4, marginTop: 3, marginBottom: 3}} />}
             paginationStyle={{alignSelf:'center',position:'absolute',bottom:50,right:235}}>

             <View style={{flex:1,backgroundColor: '#D7F0F7'}}>

             <View style={{justifyContent:'center',height:'58%'}}>
              <Image
                   style={{height:170,width:170,resizeMode:'contain',alignSelf:'center'}}
                   source={require('./logo1.png')}
                   />
            </View>


            <View style={{height:'42%',backgroundColor:'#242327',borderTopLeftRadius:50,borderTopRightRadius:50}}>

            <Text style={{fontSize:32,fontFamily:'AvenirLTStd-Heavy',color:'white',width:'55%',marginLeft:'10%',marginTop:40}}>Welcome To</Text>
            <Text style={{fontSize:32,fontFamily:'AvenirLTStd-Heavy',color:'white',width:'55%',marginLeft:'10%',marginTop:5}}>Ledger</Text>
            <Text style={{fontSize:19,fontFamily:'AvenirLTStd-Medium',color:'white',width:'80%',marginLeft:'10%',marginTop:18}}>Ledger keeps track of balances</Text>
            <Text style={{fontSize:19,fontFamily:'AvenirLTStd-Medium',color:'white',width:'80%',marginLeft:'10%',marginTop:5}}>between friends</Text>

            <TouchableOpacity style={{width:'48%',height:50,backgroundColor:'#D7F0F7',borderTopLeftRadius:25,borderBottomLeftRadius:25,marginTop:50,alignSelf:'flex-end',elevation:2,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}} onPress={()=>this.props.navigation.navigate('ManageScreen')}>
             <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:30}}>Skip</Text>

             <Image source={require('./right.png')}
              style={{height:18,width:22,resizeMode:'contain',marginRight:20}} />
            </TouchableOpacity>
            </View>
              
              
              
             </View>

             <View style={{flex:1,backgroundColor: '#D7F0F7'}}>

             <View style={{justifyContent:'center',height:'58%'}}>
              <Image
                   style={{height:170,width:170,resizeMode:'contain',alignSelf:'center'}}
                   source={require('./logo1.png')}
                   />
            </View>


            <View style={{height:'42%',backgroundColor:'#242327',borderTopLeftRadius:50,borderTopRightRadius:50}}>

            <Text style={{fontSize:32,fontFamily:'AvenirLTStd-Heavy',color:'white',width:'60%',marginLeft:'10%',marginTop:40}}>Add Expenses</Text>
          
            <Text style={{fontSize:19,fontFamily:'AvenirLTStd-Medium',color:'white',width:'85%',marginLeft:'10%',marginTop:15}}>Lorem Ipsum is simply dummy text</Text>
            <Text style={{fontSize:19,fontFamily:'AvenirLTStd-Medium',color:'white',width:'80%',marginLeft:'10%',marginTop:5}}>of the printing and typesetting</Text>
            <Text style={{fontSize:19,fontFamily:'AvenirLTStd-Medium',color:'white',width:'80%',marginLeft:'10%',marginTop:5}}>industry.</Text>

            <TouchableOpacity style={{width:'48%',height:50,backgroundColor:'#D7F0F7',borderTopLeftRadius:25,borderBottomLeftRadius:25,marginTop:70,alignSelf:'flex-end',elevation:2,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}  onPress={()=>this.props.navigation.navigate('ManageScreen')}>
             <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:30}}>Skip</Text>

             <Image source={require('./right.png')}
              style={{height:18,width:22,resizeMode:'contain',marginRight:20}} />
            </TouchableOpacity>
            </View>
              
              
              
             </View>

             <View style={{flex:1,backgroundColor: '#D7F0F7'}}>

             <View style={{justifyContent:'center',height:'58%'}}>
              <Image
                   style={{height:170,width:170,resizeMode:'contain',alignSelf:'center'}}
                   source={require('./logo1.png')}
                   />
            </View>


            <View style={{height:'42%',backgroundColor:'#242327',borderTopLeftRadius:50,borderTopRightRadius:50}}>

            <Text style={{fontSize:32,fontFamily:'AvenirLTStd-Heavy',color:'white',width:'55%',marginLeft:'10%',marginTop:40}}>Settle Up</Text>
          
            <Text style={{fontSize:19,fontFamily:'AvenirLTStd-Medium',color:'white',width:'85%',marginLeft:'10%',marginTop:15}}>Lorem Ipsum is simply dummy text</Text>
            <Text style={{fontSize:19,fontFamily:'AvenirLTStd-Medium',color:'white',width:'80%',marginLeft:'10%',marginTop:5}}>of the printing and typesetting</Text>
            <Text style={{fontSize:19,fontFamily:'AvenirLTStd-Medium',color:'white',width:'80%',marginLeft:'10%',marginTop:5}}>industry.</Text>

            <TouchableOpacity style={{width:'48%',height:50,backgroundColor:'#D7F0F7',borderTopLeftRadius:25,borderBottomLeftRadius:25,marginTop:70,alignSelf:'flex-end',elevation:2,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}} onPress={()=>this.props.navigation.navigate('ManageScreen')}>
             <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:30}}>Skip</Text>

             <Image source={require('./right.png')}
              style={{height:18,width:22,resizeMode:'contain',marginRight:20}} />
            </TouchableOpacity>
            </View>
              
              
              
             </View>

             <View style={{flex:1,backgroundColor: '#D7F0F7'}}>

             <View style={{justifyContent:'center',height:'58%'}}>
              <Image
                   style={{height:170,width:170,resizeMode:'contain',alignSelf:'center'}}
                   source={require('./logo1.png')}
                   />
            </View>


            <View style={{height:'42%',backgroundColor:'#242327',borderTopLeftRadius:50,borderTopRightRadius:50}}>

            <Text style={{fontSize:32,fontFamily:'AvenirLTStd-Heavy',color:'white',width:'55%',marginLeft:'10%',marginTop:40}}>Let’s get started!</Text>
          
            <Text style={{fontSize:19,fontFamily:'AvenirLTStd-Medium',color:'white',width:'85%',marginLeft:'10%',marginTop:15}}>Lorem Ipsum is simply dummy text</Text>
            <Text style={{fontSize:19,fontFamily:'AvenirLTStd-Medium',color:'white',width:'80%',marginLeft:'10%',marginTop:5}}>of the printing and typesetting</Text>
            <Text style={{fontSize:19,fontFamily:'AvenirLTStd-Medium',color:'white',width:'80%',marginLeft:'10%',marginTop:5}}>industry.</Text>

            <TouchableOpacity style={{width:'48%',height:50,backgroundColor:'#D7F0F7',borderTopLeftRadius:25,borderBottomLeftRadius:25,marginTop:35,alignSelf:'flex-end',elevation:2,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}} onPress={()=>this.props.navigation.navigate('ManageScreen')}>
             <Text style={{fontSize:18,fontFamily:'AvenirLTStd-Heavy',color:'#242327',marginLeft:30}}>Skip</Text>

             <Image source={require('./right.png')}
              style={{height:18,width:22,resizeMode:'contain',marginRight:20}} />
            </TouchableOpacity>
            </View>
              
              
              
             </View>





         </Swiper>


         </View>
       
     );
   }
 }

 export default StyleScreen;
