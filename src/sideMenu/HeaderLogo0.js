import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, YellowBox} from 'react-native';
import Image from 'react-native-remote-svg';

export default class HeaderLogo extends Component {

     render(){
        return(
           <View style={{flex:1,flexDirection:'row'}}>
           {
             Platform.OS === 'android'
             ?<Image  source={require('../../assets/img/logo1.png')} style={{position:'absolute',right:20,marginTop:-18}}/>
             :<Image  source={require('../../assets/img/logo1.png')} style={{position:'absolute',right:-50,marginTop:-24}}/>
           }
           </View>
        );
     }
  }
