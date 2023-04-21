import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet,Text, TouchableOpacity, View, Image, StatusBar} from 'react-native';
import {TextInput} from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function Membership({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor:'#FFFF', flex:1}}>
        <StatusBar  backgroundColor={'white'} barStyle={'dark-content'}/>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.to1}>
                <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.t1}>Membership</Text>
        </View>
        <View style={{width:290, backgroundColor:'#FFFF', margin:20,
        marginTop:70, marginLeft:35, marginBottom:150, borderRadius:10, elevation:10,borderWidth:0.5, borderColor:'rgba(24, 86, 127, 0.08)'}}>
            <View style={{backgroundColor:'#18567F', height:45,
             alignItems:'center', justifyContent:'center', borderRadius:6, margin:6}}>
                <Text style={{color:'#FFFF', fontSize:22, fontWeight:'500'}}>
                1 MOIS
                </Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', paddingVertical:45}}>
            <Text style={{fontSize:44, fontWeight:'500'}}>$15</Text>
            </View>
            
        </View>
        <TouchableOpacity style={styles.to2} onPress={()=>{navigation.navigate('Membership2')}}>
            <Text style={{color:'white',fontSize:16,fontWeight:'700'}}>
            Next
            </Text>
        </TouchableOpacity>
        <View style={styles.bottomtab}>
            <TouchableOpacity style={styles.newCar} onPress={()=>{navigation.navigate('Add_vehicle')}}>
              <Text style={{fontSize:30, color:'white'}}>+</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginTop:-5}}>
              <TouchableOpacity>
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
              <Icon name="bell-badge-outline" size={25} color="#5D5C59" style={{marginLeft:135, marginTop:-10}}/>
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
const styles=StyleSheet.create({
    v1:{
        flex:1,
        backgroundColor:'white'
    },
    t1:{
        fontSize:20,
        fontWeight:'500',
        marginLeft:65,
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
    v2:{
        backgroundColor:'#e6f5ff',
        margin:8,
        borderRadius:12,
    },
    in1:{
        marginLeft:15,
        marginRight:15,
        marginTop:20,
        borderRadius:5,
        borderWidth:0.2,
        height:52,
        padding:8,
        paddingLeft:20,
        borderColor:'#18567F8C'
    },
    to2:{
        justifyContent:'center',
        alignItems:'center',
        width:317,
        height:64,
        backgroundColor:'#18567F',
        marginHorizontal:20,
        borderRadius:10,
        marginBottom:40
    },
    img:{
        width:36, height:24,
        position:'absolute',
        top:35,
        left:25
    },
    bottomtab:{
        width:400,
        backgroundColor:'white',
        height:90,
        marginTop:hp('5%'),
        elevation:20
      },
      newCar:{
          width:60,
          height:60,
          alignItems:'center',
          backgroundColor:'#18567F',
           justifyContent:'center',
           marginTop:-30,
           borderRadius:20,
           alignSelf:'center',
           marginLeft:-20
      },
});
export default Membership