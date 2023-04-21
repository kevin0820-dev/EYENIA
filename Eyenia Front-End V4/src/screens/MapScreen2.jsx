
import * as React from 'react';
import { Button, View, Text, SliderComponent, SafeAreaView, TextInput, StatusBar, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TextField } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MapView, {Marker} from 'react-native-maps';
export default function MapScreen2({navigation}) {
  const  [show,setShow]=React.useState(true)
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#FFFF'}}>
          <StatusBar backgroundColor={'white'}/>
          <MapView 
          initialRegion={{
            latitude:30.733315,
            longitude:76.779419,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421}}
            style={{ height:701, borderRadius:20, margin:10}}>
            <Marker draggable coordinate={{latitude:33.571366,longitude:-122.4324}} style={{width:150, height:150,}} 
            onDragEnd={(e)=>{Alert.alert(JSON.stringify(e.nativeEvent.coordinate))}} title='testmarker' description='THis is desp'>
              
            </Marker></MapView>
           <TouchableOpacity style={styles.carview} onPress={()=>{setShow(!show)}}>
              <Text style={{fontSize:14, fontWeight:'600', color:'#18567F', marginTop:3}}>BMW</Text>
              <View style={{flexDirection:'row',}}>
              <Image source={require('../../assets/meter.png')} style={{marginRight:10, marginTop:2}}/>
              <Text>60km/h</Text>
              </View>
            </TouchableOpacity>
          <Image source={require('../../assets/car.png')} style={{position:'absolute',left:125, top:150, width:58.17, height:29.45}}/>
          <TouchableOpacity style={[styles.optionview,{top:38}]} onPress={()=>{navigation.navigate('MapScreen')}}>
          <Image source={require('../../assets/map1.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.optionview,{top:96}]} onPress={()=>{navigation.navigate('MapScreen3')}}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker-account-outline" size={30} color="#000000" />
              </IconComponentProvider>
          
          </TouchableOpacity>
          <TouchableOpacity style={[styles.optionview,{top:154}]}>
          <Text style={{fontWeight:'bold',fontSize:14}}>10s</Text>
          </TouchableOpacity>
          {show?(<View style={styles.cardview}>
            <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'row', marginTop:15, marginLeft:35}}>
                <Image source={require('../../assets/car1.png')} style={{marginTop:5}}/>
                <Text style={{fontSize:20,fontWeight:'600', color:'#18567F', marginLeft:10}}>BMW</Text>
              </View>
              <View style={{flexDirection:'row', marginTop:10, marginLeft:125}}>
                <Image source={require('../../assets/battery.png')}/>  
                <Text style={{fontSize:14,fontWeight:'400', marginLeft:10}}>35%</Text>
              </View>
              <TouchableOpacity style={styles.closeview} onPress={()=>{setShow(!show)}}>
                <Image source={require('../../assets/close.png')} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', marginTop:5}}>
              <View style={{flexDirection:'row', marginTop:10, marginLeft:35}}>
                <Image source={require('../../assets/meter.png')} style={{marginTop:5}}/>
                <Text style={{fontSize:12,fontWeight:'400', marginLeft:10, marginTop:5}}>60km/h</Text>
              </View>
              <View style={{flexDirection:'row', marginTop:10, marginLeft:45}}>
                <Image source={require('../../assets/fuel.png')} style={{marginTop:5}}/>
                <Text style={{fontSize:12,fontWeight:'400', marginLeft:10, marginTop:5}}>50L</Text>
              </View>
              <View style={{flexDirection:'row', marginTop:10, marginLeft:35}}>
                <Image source={require('../../assets/network.png')} style={{marginTop:5}}/>
                <Text style={{fontSize:12,fontWeight:'400', marginLeft:10, marginTop:5}}>FULL</Text>
              </View>
            </View>
            <Text style={{fontSize:11, fontWeight:'400', color:'#FF0000', marginLeft:32, marginTop:10}}>Ew Arret 7 mi</Text>
              <Text style={{fontSize:11, fontWeight:'400',marginLeft:32, marginTop:5, marginBottom:10}}>
                57, Street Rock Garden, 59800 Washington
                </Text>
          </View>
          ):null}
          <View style={styles.bottomtab}>
            <TouchableOpacity style={styles.newCar} onPress={()=>{navigation.navigate('Add_vehicle')}}>
              <Text style={{fontSize:30, color:'white'}}>+</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginTop:-5}}>
              <TouchableOpacity>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="home-outline" size={25} color="#18567F" style={{marginLeft:10, marginTop:-10}}/>
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
const styles= StyleSheet.create({
  carview:{
    width:86,
    height:55,
    backgroundColor:'#FFFF',
    alignItems:'center',
    position:'absolute',
    top:90,
    left:120,
    borderRadius:5
  },
  optionview:{
    backgroundColor:'white',
    width:46,
    height:46,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    left:300
  },
  cardview:{
    width:330,
    height:144,
    borderRadius:10,
    backgroundColor:'#FFFF',
    position:'absolute',
    top:hp('68%'),
    marginHorizontal:15
  },
  closeview:{
    width:14.5,
    height:14.5,
    backgroundColor:'white',
    position:'absolute',
    top:6, 
    borderColor:'black',
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center', 
    borderRadius:50,
    left:310
},
bottomtab:{
  width:wp('100%'),
  backgroundColor:'white',
  height:hp('8%'),
  position:'absolute',
  top:hp('98%')
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
},
});