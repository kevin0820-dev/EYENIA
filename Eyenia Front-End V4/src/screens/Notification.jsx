import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Switch, ScrollView } from 'react-native'

import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
function Notification({navigation}) {
  return (
    <SafeAreaView style={styles.v1}><ScrollView>
        <View style={{flexDirection:'row', marginTop:25}}>
    <TouchableOpacity style={styles.to1}>
        <Image source={require('../../assets/back.png')}/>
    </TouchableOpacity>
    <Text style={styles.t1}>Notifications Settings</Text>
    </View>
    
    <View style={{backgroundColor:'#18567F', width:327, height:107, borderRadius:20, marginLeft:18}}>
        <Text style={{color:'#FFFF', fontSize:13, fontWeight:'400', margin:20}}>Your Car</Text>
        <View style={{flexDirection:'row', marginLeft:20, marginTop:-10}}>
            <Text style={{fontSize:24, fontWeight:'700', color:'#FFFF'}}>BMW</Text>
            <TouchableOpacity style={{width:22, height:22, borderRadius:44, justifyContent:'center', alignItems:'center',
             backgroundColor:'#FFFF', marginLeft:15, marginTop:5}}>
                <Image source={require('../../assets/arrowdown.png')}/></TouchableOpacity>
        </View>
    </View>
    <Image source={require('../../assets/2back.png')} style={{position:'absolute', top:97, left:169, }}/>
    <Image source={require('../../assets/1back.png')} style={{position:'absolute', top:97, left:210, }}/>
    <Image source={require('../../assets/3.png')} style={{position:'absolute', top:165, left:24, }}/>

    <View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:30, marginHorizontal:20,}}>
            <Text style={{fontSize:19,fontWeight:'400'}}>
                Vibration
            </Text>
            <Switch style={{color:'black', marginTop:-5}} thumbColor={true ? '#18567F' : '#37474FC7'}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:10}}>
            <Text style={{fontSize:19,fontWeight:'400'}}>
            Movement
            </Text>
            <Switch style={{color:'black', marginTop:-5}}  thumbColor={true ? '#18567F' : '#37474FC7'}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}>
            <Text style={{fontSize:19,fontWeight:'400'}}>
                Stop
            </Text>
            <Switch style={{color:'black', marginTop:-5}} thumbColor={true ? '#18567F' : '#37474FC7'}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:10}}>
            <Text style={{fontSize:19,fontWeight:'400'}}>
            Enter De Zone
            </Text>
            <Switch style={{color:'black', marginTop:-5}} thumbColor={true ? '#18567F' : '#37474FC7'}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}>
            <Text style={{fontSize:19,fontWeight:'400'}}>
            Sorti De Zone
            </Text>
            <Switch style={{color:'black', marginTop:-5}} thumbColor={true ? '#18567F' : '#37474FC7'}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:10}}>
            <Text style={{fontSize:19,fontWeight:'400'}}>
                Overspeed
            </Text>
            <Switch style={{color:'black', marginTop:-5}} thumbColor={true ? '#18567F' : '#37474FC7'}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}>
            <Text style={{fontSize:19,fontWeight:'400'}}>
            Detachment
            </Text>
            <Switch style={{color:'black', marginTop:-5}} thumbColor={true ? '#18567F' : '#37474FC7'}/>
        </View>
    </View>
    <TouchableOpacity style={styles.to2}>
            <Text style={{color:'white',fontSize:16,fontWeight:'700'}}>
            Comfirmer
            </Text>
        </TouchableOpacity>
        
          </ScrollView>
          <View style={styles.bottomtab}>
            <TouchableOpacity style={styles.newCar} onPress={()=>{navigation.navigate('Add_vehicle')}}>
              <Text style={{fontSize:30, color:'white'}}>+</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginTop:-5}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('MapScreen2')}}>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="home-outline" size={25} color="#5D5C59" style={{marginLeft:10, marginTop:-10}}/>
              </IconComponentProvider>
              
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=>{navigation.navigate('List')}}>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="clipboard-outline" size={25} color="#5D5C59" style={{marginLeft:55, marginTop:-10}}/>
              </IconComponentProvider>
              </TouchableOpacity>
             
              <TouchableOpacity onPress={()=>{navigation.navigate('Notification')}}>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="bell-badge-outline" size={25} color="#18567F" style={{marginLeft:135, marginTop:-10}}/>
              </IconComponentProvider>
              </TouchableOpacity>
             
              <TouchableOpacity onPress={()=>{navigation.navigate('Driver_detail')}}>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="account-circle" size={25} color="#5D5C59" style={{marginLeft:50, marginTop:-10}}/>
              </IconComponentProvider>
              </TouchableOpacity>
              
            </View>
          </View>
    </SafeAreaView>
  )
}

export default Notification
const styles=StyleSheet.create({
    v1:{
        flex:1,
        backgroundColor:'white'
    },
    t1:{
        fontSize:18,
        fontWeight:'500',
        marginLeft:25,
        marginTop:22
    },
    to1:{
        width:30,
        height:30,
        borderRadius:40,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        margin:20
    },
    to2:{
        justifyContent:'center',
        alignItems:'center',
        width:317,
        height:64,
        backgroundColor:'#18567F',
        marginHorizontal:20,
        marginTop:15,
        borderRadius:10,marginBottom:100
    },
    bottomtab:{
        width:wp('100%'),
        backgroundColor:'white',
        height:hp('8%'),
        position:'absolute',
        top:hp('98%')},
      newCar:{
          width:60,
          height:60,
          alignItems:'center',
          backgroundColor:'#18567F',
           justifyContent:'center',
           marginTop:-30,
           borderRadius:20,
           alignSelf:'center'
      },
});