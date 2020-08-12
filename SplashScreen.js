

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






class SplashScreen extends React.Component {






componentDidMount () {
          
          // alert(JSON.stringify(GLOBAL.userID))
     this.timeoutCheck = setTimeout(() => {
          // this.getData()
         this.props.navigation.navigate('StyleScreen')

  },1000);
  


   }



   render() {


    
    


    return (
         
         
         <View style={{flex:1}}>

        <StatusBar
             backgroundColor = "black"
         

           />


            <View style={{justifyContent:'center',height:'100%',backgroundColor:'white'}}>
              <Image
                   style={{height:180,width:180,resizeMode:'contain',alignSelf:'center'}}
                   source={require('./logo.png')}
                   />
            </View>       
           
        </View>


        
        


    );
  }
}

export default SplashScreen;