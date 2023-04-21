
import * as React from 'react';
import { Button, View, Text, SliderComponent, SafeAreaView,TextInput, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,ToastAndroid} from 'react-native';
import { Image } from 'react-native';
import {TouchableOpacity} from 'react-native';
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function LoginBoard({navigation}) {
  const [username,setUsername]=React.useState('');
  const [pass, setPass]=React.useState(''); 
  function validate(){
    if(username.match('Abc')&&pass.match('1234')){
      navigation.navigate('MapScreen2')
      ToastAndroid.show(
        'Login Successfully',
        ToastAndroid.SHORT,);
    }else if(username.length<=0||pass.length<=0){
      ToastAndroid.show(
        'Please Enter Username and Password',
        ToastAndroid.SHORT,
      );
    }else{
      ToastAndroid.show(
        'Incorrect Username or Password',
        ToastAndroid.SHORT,);
    }
  }
  return (
    
  <SafeAreaView style={styles.view1}>
    <Image source={require('../../assets/signuplogo.png')} style={styles.image} />
      <Text style={{ fontSize: 27, fontWeight: 'bold' }}>Login back</Text>
    <Text style={styles.t1}>Sign in with your account to continue !</Text>
    <View style={styles.v4}>
        <View style={{width:30, height:30, borderRadius:30,
           justifyContent:'center', alignItems:'center', backgroundColor:'rgba(24, 86, 127, 0.16)', marginHorizontal:10}}><IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="account" size={20} color="rgba(24, 86, 127, 1)" />
              </IconComponentProvider>
             </View>
        <TextInput type='text' style={styles.in1} placeholder='Email or number phone' onChangeText={(val)=>{setUsername(val)}}/>
    </View>
    <View style={styles.v4}>
    <View style={{width:30, height:30, borderRadius:30,
           justifyContent:'center', alignItems:'center', 
           backgroundColor:'rgba(24, 86, 127, 0.16)',
            marginHorizontal:10}}>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                <Icon name="lock-outline" size={20} color="rgba(24, 86, 127, 1)" />
              </IconComponentProvider>
             </View>
        <TextInput type='text' secureTextEntry={true}  style={styles.in1} placeholder='Password' onChangeText={(val)=>{setPass(val)}}/>
    </View>
    <TouchableOpacity style={{alignSelf:'flex-end', margin:20}}><Text style={styles.t2}>Forgot Password?</Text></TouchableOpacity>
    <TouchableOpacity style={styles.to1} onPress={()=>{validate()}}>
        <Text style={styles.t3}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', marginTop:'7%'}}>
        <Text style={{fontSize:16, fontWeight:'600', opacity:0.5}}>Dont have an account?</Text>
        <TouchableOpacity style={{marginLeft:10}} onPress={()=>{navigation.navigate('SignupBoard')}}>
          <Text style={{fontSize:16, fontWeight:'600', color:'#18567F'}}>SignUp</Text>
        </TouchableOpacity></View>
        <Text style={{marginTop:'5%', fontSize:14, fontWeight:'500', color:'#0A2049'}}>OR</Text>
      <View style={{flexDirection:'row', marginTop:'5%'}}>
       <TouchableOpacity style={{borderWidth:1, borderRadius:50, width:40, height:40, alignItems:'center'
       , justifyContent:'center', marginRight:20,borderColor:'#18567F'}}>
        <Image source={require('../../assets/google.png')} style={{width:20, height:20}}/>
        </TouchableOpacity> 
        <View style={{borderWidth:1, borderRadius:50, width:40, height:40, alignItems:'center', 
        justifyContent:'center', marginRight:20,borderColor:'#18567F'}}>
          <TouchableOpacity>
        <Image source={require('../../assets/facebook.png')} style={{width:20, height:20}}/>
        </TouchableOpacity>
        </View>
        <View style={{borderWidth:1, borderRadius:50, width:40, height:40, alignItems:'center', 
        justifyContent:'center',borderColor:'#18567F'}}>
        <TouchableOpacity>
        <Image source={require('../../assets/instagram.png')} style={{width:20, height:20}}/>
        </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style={{width:124, height:5, borderRadius:5,alignSelf:'center',
       backgroundColor:'rgba(54, 52, 53, 1)', position:'absolute', top:hp('103%')}}>
        </TouchableOpacity>
      
  </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();
const styles=StyleSheet.create({
  image: {
    marginTop: 67,
    width: 70,
    height: 60,
    marginBottom:30
  },
  view1:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#ffff',
  },
  t1:{
    fontSize:15,
    fontWeight:'400',
    marginTop:20,
    marginBottom:10,
    opacity:0.5
  },
  in1:{
    padding:5,
    borderRadius:10,
    height:60,
  },
  t2:{
    fontSize:15,
    fontWeight:'500',
    opacity:0.5,

  },
  to1:{
    width:327,
    height:64,
    backgroundColor:'#18567F',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  t3:{
      fontSize:16,
      fontWeight:'700',
      color:'white'
  },
   v4:{
    flexDirection:"row",
    alignItems:'center',
     borderWidth:1,
     marginTop:20,
     borderColor:'#18567F8C',
     borderRadius:10,
     marginHorizontal:40,
     width:330,
     height:57
  }
});