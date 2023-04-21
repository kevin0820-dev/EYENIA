import React from 'react'
import { SafeAreaView, StatusBar, Image,View, 
        TouchableOpacity, Text, StyleSheet, ProgressBarAndroid } from 'react-native'
import MapView, {Marker} from 'react-native-maps';

import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
function Historiue({navigation}) {
  return (
    <SafeAreaView style={{marginTop:20}}>
        <StatusBar backgroundColor={'#18567F'}  barStyle={'light'}/>
        <View style={{flexDirection:'row', backgroundColor:'#18567F'}}>
            <TouchableOpacity style={styles.to1}>
                <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.t1}>BMW</Text></View>
            <MapView 
          initialRegion={{
            latitude:30.733315,
            longitude:76.779419,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421}}
            style={{width:340, height:701, borderRadius:10, marginHorizontal:10}}>
            <Marker draggable coordinate={{latitude:33.571366,longitude:-122.4324}} style={{width:150, height:150,backgroundColor:'red'}} 
            onDragEnd={(e)=>{Alert.alert(JSON.stringify(e.nativeEvent.coordinate))}} title='testmarker' description='THis is desp'>
            </Marker></MapView>
            <Image source={require('../../assets/car.png')}
             style={{position:'absolute', left:10, top:340,transform: [{rotate: '-50deg'}]}} />

            <View style={[styles.view1,{ top:275,left:310}]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={25} color="#FFFF" />
              </IconComponentProvider>
        </View>


             <Image source={require('../../assets/path.png')} style={{position:'absolute', top:175, left:73,transform: [{rotate: '10deg'}]}}/>
            <View style={styles.view2}>
                <View style={{flexDirection:'row', margin:20}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="clock-check-outline" size={25} color="#18567F" />
              <Text style={{fontSize:15, fontWeight:'600', marginLeft:10, marginRight:120}}>12:41</Text>
              <Icon name="speedometer" size={25} color="#18567F"/>
              <Text style={{fontSize:15, fontWeight:'600', marginLeft:10}}>45km/h</Text>
              </IconComponentProvider>
                    </View>  
                    <View style={{flexDirection:'row'}}>  

                    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="play-circle-outline" size={20} color="#18567F"  style={{marginLeft:15}}/>
              </IconComponentProvider>
            <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
                style={{color:'#18567F', width:240, marginLeft:10, marginRight:10}}/>
                <Text style={{fontWeight:'600'}}>2X</Text></View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:11, fontWeight:'400', color:'#FF0000',margin:15}}>Ew Arret 7 mi</Text>
                   <TouchableOpacity onPress={()=>{navigation.navigate('Historiquie2')}}>
                    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                        <Icon name="skip-backward" size={20} color="#18567F"  style={{marginLeft:175, marginTop:10}}/>
                    </IconComponentProvider></TouchableOpacity>
                    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                     <Icon name="skip-forward" size={20} color="#18567F"  style={{marginLeft:5, marginTop:10}}/>
                    </IconComponentProvider>
                </View>
                <Text style={{fontWeight:'400', fontSize:11, marginLeft:12}}>57, Street Rock Garden, 59800 Washington</Text>
            </View>
            <View style={styles.bottomtab}>
            <TouchableOpacity style={styles.newCar} onPress={()=>{navigation.navigate('Add_vehicle')}}>
              <Text style={{fontSize:30, color:'white'}}>+</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginTop:-5}}>
              <TouchableOpacity>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="home" size={25} color="#5D5C59" style={{marginLeft:10, marginTop:-10}}/>
              </IconComponentProvider>
              
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=>{navigation.navigate('List')}}>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="clipboard" size={25} color="#5D5C59" style={{marginLeft:55, marginTop:-10}}/>
              </IconComponentProvider>
              </TouchableOpacity>
             
              <TouchableOpacity onPress={()=>{navigation.navigate('Notification')}}>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="bell-badge" size={25} color="#5D5C59" style={{marginLeft:135, marginTop:-10}}/>
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

export default Historiue
const styles= StyleSheet.create({
    v1:{
     flex:1,
     backgroundColor:'white'
 },
 t1:{
     fontSize:18,
     fontWeight:'500',
     marginLeft:95,
     marginTop:22,
     color:'#FFFF'
 },
 to1:{
   width:30,
   height:30,
   borderRadius:40,
   borderWidth:1,
   alignItems:'center',
   justifyContent:'center',
   margin:20,
   backgroundColor:'#FFFF'
},
view1:{
 width:38, height:38,borderRadius:30,
  backgroundColor:'#18567F',justifyContent:'center',alignItems:'center',position:'absolute',
},view2:{
    width:336,
     height:160, position:'absolute',
     left:12,
     backgroundColor:'white',
     borderRadius:10,
     top:420
  },
  view3:{flexDirection:'row', marginHorizontal:40, marginTop:20},
  view4:{position:'absolute',
        width:342,
         height:55, 
        backgroundColor:'#FFFF',
        borderRadius:10,
        top:80,
        left:10,
        flexDirection:'row'
    },
    view5:{alignItems:'center', justifyContent:'center', 
    width:25, height:25, borderWidth:0.7, borderRadius:20},
    bottomtab:{
        width:400,
        backgroundColor:'white',
        height:90,
        position:'absolute',
        top:600
      },
      newCar:{
          width:60,
          height:60,
          alignItems:'center',
          backgroundColor:'#18567F',
           justifyContent:'center',
           marginTop:-30,
           borderRadius:20,
           marginLeft:155
      },
});