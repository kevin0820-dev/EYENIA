
import * as React from 'react';
import { Button, View, Text, SliderComponent, SafeAreaView, TextInput, StatusBar, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TextField } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import { IconComponentProvider, Icon } from "@react-native-material/core";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MapView, {Marker} from 'react-native-maps';

export default function MapScreen3({navigation}) {
  const  [show,setShow]=React.useState(true)
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#FFFF'}}>
         <MapView 
          initialRegion={{
            latitude:30.733315,
            longitude:76.779419,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421}}
            style={{width:340, height:701, borderRadius:10, marginLeft:10}}>
            <Marker draggable coordinate={{latitude:33.571366,longitude:-122.4324}} style={{width:150, height:150,backgroundColor:'red'}} 
            onDragEnd={(e)=>{Alert.alert(JSON.stringify(e.nativeEvent.coordinate))}} title='testmarker' description='THis is desp'>
              
            </Marker></MapView>
             <TouchableOpacity style={styles.carview} onPress={()=>{setShow(!show)}}>
              <Text style={{fontSize:14, fontWeight:'600', color:'#18567F', marginTop:3}}>BMW</Text>
              <View style={{flexDirection:'row',}}>
              <Image source={require('../../assets/meter.png')} style={{marginRight:10, marginTop:2}}/>
              <Text>60km/h</Text>
              </View>
            </TouchableOpacity>
            {show?(<View style={styles.cardview}>
          <TouchableOpacity style={styles.closeview} onPress={()=>{setShow(!show)}}>
                <Image source={require('../../assets/close.png')} />
              </TouchableOpacity>
            <View style={{flexDirection:'row', marginTop:'14%'}}>
                <TouchableOpacity style={[styles.v4,{marginLeft:20}]} onPress={()=>{navigation.navigate('Historiquie2')}}>
                    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                        <Icon name="map-outline" size={30} color="#5D5C59" />
                    </IconComponentProvider>
                    <Text style={styles.t2}>HISTORIQUE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.v4,,{marginLeft:20}]} onPress={()=>{navigation.navigate('Zone_dalerte')}}>
                    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                        <Icon name="pound" size={30} color="#5D5C59" />
                    </IconComponentProvider>
                    <Text style={styles.t2}>ZONE D’ALERTE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.v4,{marginLeft:20}]} onPress={()=>{navigation.navigate('Barrière')}}>
                    <Image source={require('../../assets/listIcon.png')} style={{marginTop:8}} />
                    <Text style={styles.t2}>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.v4,{marginLeft:30}]} onPress={()=>{navigation.navigate('Details')}}>
                    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                        <Icon name="cog" size={30} color="#5D5C59" />
                    </IconComponentProvider>
                    <Text style={styles.t2}>Settings</Text>
                </TouchableOpacity>
            </View>
          </View>
          ):null}
            
          <Image source={require('../../assets/car.png')} style={{position:'absolute',left:125, top:150,
          width:58.17,height:29.45,transform: [{rotate: '15deg'}]}}/>
          <TouchableOpacity style={[styles.optionview,{top:38, right:-30}]}>
          <Image source={require('../../assets/map1.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.optionview,{top:92}]}>
          <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                        <Icon name="map-marker-account-outline" size={30} color="#000000" />
                    </IconComponentProvider>
                   
          </TouchableOpacity>
          <TouchableOpacity style={[styles.optionview,{top:144}]}>
          <Text style={{fontWeight:'bold',fontSize:14}}>10s</Text>
          </TouchableOpacity>
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
    left:305
  },
  cardview:{
    width:330,
    height:120,
    borderRadius:10,
    backgroundColor:'#FFFF',
    position:'absolute',
    top:hp('68%'),
    marginHorizontal:15,
    paddingBottom:10
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
     alignSelf:'center'
},
v4:{
    alignItems:'center'
},t2:{fontSize:11, marginTop:8},
});