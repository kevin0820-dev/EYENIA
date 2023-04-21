
import * as React from 'react';
import { Button, View, Text, SliderComponent, SafeAreaView, TextInput, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function SignupBoard({navigation}) {
  return (
    <SafeAreaView style={styles.view1}>
      <Image source={require('../../assets/signuplogo.png')} style={styles.image} />
      <Text style={{ fontSize: 27, fontWeight: 'bold' }}>Sign Up</Text>
      <Text style={styles.t1}>Sign up for new account to continue !</Text>
      <View style={styles.v4}>
        <View style={{width:30, height:30, borderRadius:80,
           justifyContent:'center', alignItems:'center', backgroundColor:'rgba(24, 86, 127, 0.16)', marginHorizontal:10}}><IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="account" size={20} color="rgba(24, 86, 127, 1)" />
              </IconComponentProvider>
             </View>
        <TextInput type='text' style={styles.in1} placeholder='Username'/>
      </View>
      <View style={styles.v4}>
        <View style={{width:30, height:30, borderRadius:80,
           justifyContent:'center', alignItems:'center', backgroundColor:'rgba(24, 86, 127, 0.16)', marginHorizontal:10}}><IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="phone-in-talk-outline" size={20} color="rgba(24, 86, 127, 1)" />
              </IconComponentProvider>
             </View>
        <TextInput type='text' style={styles.in1} placeholder='Phone Number (facultatif)' keyboardType='numeric' />
      </View>
      <View style={styles.v4}>
        <View style={{width:30, height:30, borderRadius:80,
           justifyContent:'center', alignItems:'center', backgroundColor:'rgba(24, 86, 127, 0.16)', marginHorizontal:10}}><IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="email-outline" size={20} color="rgba(24, 86, 127, 1)" />
              </IconComponentProvider>
             </View>
        <TextInput type='text' style={styles.in1} placeholder='Email'/>
      </View>
      <View style={styles.v4}>
        <View style={{width:30, height:30, borderRadius:80,
           justifyContent:'center', alignItems:'center', backgroundColor:'rgba(24, 86, 127, 0.16)', marginHorizontal:10}}><IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="lock-outline" size={20} color="rgba(24, 86, 127, 1)" />
              </IconComponentProvider>
             </View>
        <TextInput type='text' style={styles.in1} placeholder='Password' secureTextEntry={true}/>
      </View>
      <TouchableOpacity style={styles.to1} onPress={()=>{navigation.navigate('MapScreen2')}}>
        <Text style={styles.t3}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{width:124, height:5, borderRadius:5,alignSelf:'center', backgroundColor:'rgba(54, 52, 53, 1)', 
      position:'absolute', top:hp('103%')}}>
        </TouchableOpacity>
        <View style={{flexDirection:'row',}}><Text style={[styles.t4,{opacity:0.5}]}>Already have account?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('LoginBoard')}}>
          <Text style={[styles.t4,{ marginLeft:2,color:'rgba(24, 86, 127, 1)'}]}>Login</Text></TouchableOpacity>
        </View>
        
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  image: {
    marginTop: '17%',
    width: 70,
    height: 60,
    marginBottom:25
  },
  view1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  t1: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 17,
    marginBottom: 7
  },
  in1: {
    padding:5,
    borderRadius:10,
    height:57,
  },
  t2: {
    fontSize: 15,
    fontWeight: '500',
    opacity: 50
  },
  to1: {
    width: 327,
    height: 64,
    backgroundColor: '#18567F',
    borderRadius: 10,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',

  },
  t3: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white'
  },
  v4:{
  flexDirection:"row",
    alignItems:'center',
     borderWidth:0.5,
     marginTop:18,
     borderColor:'#18567F8C',
     borderRadius:10,
     marginHorizontal:40,
     width:330,
     height:57,
  },
  t4:{
    fontSize:16,
    fontWeight:'600',
    marginTop:20
  }
});