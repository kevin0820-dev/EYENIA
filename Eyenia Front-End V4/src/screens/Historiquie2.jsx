import React from 'react'
import { SafeAreaView, StatusBar, View, TouchableOpacity,Image,Text, StyleSheet, ProgressBarAndroid } from 'react-native'
import MapView, {Marker} from 'react-native-maps';

import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function Historiquie2({navigation}) {
  return (
    <SafeAreaView style={{marginTop:20}}>
        <StatusBar backgroundColor={'#18567F'}  barStyle={'light'}/>
        <View style={{flexDirection:'row', backgroundColor:'#18567F'}}>
            <TouchableOpacity style={styles.to1}>
                <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.t1}>Historique</Text></View>
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
           <View style={styles.view6}> 
                <View style={{flexDirection:'row', margin:10, justifyContent:'space-between'}}>
                    <Text style={{fontSize:18.5, fontWeight:'500',textDecorationLine: 'underline'}}>
                    arrêt
                    </Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:13, fontWeight:'400', marginTop:5}}>
                    2023-03-03  
                    </Text>
                    <Text style={{fontSize:13, fontWeight:'400'
                    , marginTop:5, color:'rgba(24, 86, 127, 1)',marginLeft:5}}>
                    | 02:13:15
                    </Text>
                    </View>
                    
                </View>
                <View style={{flexDirection:'row', margin:10, justifyContent:'space-between'}}>
                    <Text style={{fontSize:18.5, fontWeight:'500',textDecorationLine: 'underline'}}>
                    démarrer
                    </Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:13, fontWeight:'400', marginTop:5}}>
                    2023-03-03   
                    </Text>
                    <Text style={{fontSize:13, fontWeight:'400'
                    , marginTop:5, color:'rgba(24, 86, 127, 1)',marginLeft:5}}>
                    | 02:13:15
                    </Text>
                    </View>
                    
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:15,fontWeight:'500',color:'#18567F', margin:8}}>
                    Show complete address
                  </Text>
                   <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                     <Icon name="arrow-right" size={20} color="#18567F"  style={{marginTop:8}}/>
                  </IconComponentProvider>
                </View>
               
           </View>
           <>
           <Image source={require('../../assets/path2.png')} style={{position:'absolute', top:300, left:50}}/>
           <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={30} color="#18567F"  style={{position:'absolute', top:385, left:35}}/>
              
              <Icon name="map-marker" size={30} color="#18567F"  style={{position:'absolute', top:285, left:165}}/>
              <View style={{width:15, height:15, backgroundColor:'#E18700', borderRadius:18,justifyContent:'center'
              , alignItems:'center', position:'absolute', top:289, left:172}}><Text style={{color:'white', fontSize:11, fontWeight:'600'}}>P
              </Text></View>
              <Icon name="map-marker" size={30} color="#18567F"  style={{position:'absolute', top:365, left:285}}/>
              </IconComponentProvider>
              <View style={{width:15, height:15, backgroundColor:'#00A911', borderRadius:18,justifyContent:'center'
              , alignItems:'center', position:'absolute', top:390, left:42}}><Text style={{color:'white', fontSize:11, fontWeight:'600'}}>S</Text></View>
              <View style={{width:15, height:15, backgroundColor:'#D61414', borderRadius:18,justifyContent:'center'
              , alignItems:'center', position:'absolute', top:370, left:292}}><Text style={{color:'white', fontSize:11, fontWeight:'600'}}>
                E</Text>
                </View>
                <Image source={require('../../assets/car.png')} style={{position:'absolute', top:365, left:85, width:58.17, height:29.45, transform: [{rotate: '-20deg'}]}}/>
                
           </>
           <View style={styles.view2}>
                    <View style={{flexDirection:'row', marginTop:20}}>  

                    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="play-circle-outline" size={20} color="#18567F"  style={{marginLeft:15}}/>
              </IconComponentProvider>
            <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
                style={{color:'#18567F', width:240, marginLeft:10, marginRight:10}}/>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                    <Icon name="fast-forward" size={25} color="#000000" />
              </IconComponentProvider>
                </View>
                <Text style={{fontSize:11, fontWeight:'400', marginHorizontal:50}}>2023-03003   00:00:00 - 2023-03-08  20:48:21</Text>
                <View style={{flexDirection:'row', margin:20, marginTop:30}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Image source={require('../../assets/clock.png')} style={{width:21, height:18, marginTop:3}}/>
              <Text style={{fontSize:15, fontWeight:'600', marginLeft:10,marginRight:15 }}>00:05:34</Text>
              <Image source={require('../../assets/meter1.png')} style={{width:20, height:20}}/>
              <Text style={{fontSize:15, fontWeight:'600', marginLeft:10,marginRight:15}}>0Km/h</Text>
              <Image source={require('../../assets/meter1.png')} style={{width:20, height:20}}/>
              <Text style={{fontSize:15, fontWeight:'600', marginLeft:10}}>167.08Km</Text>
              </IconComponentProvider>
                    </View>
                <Text style={{marginLeft:wp('14%'), fontSize:11, fontWeight:'400', marginTop:-10}}>2023-03-03</Text>      
            </View>
            <View style={{width:'100%', backgroundColor:'#FFFF', position:'absolute', height:'5%',top:'85%'}}>
      <TouchableOpacity style={{width:124, height:5, borderRadius:5,alignSelf:'center',
       backgroundColor:'rgba(54, 52, 53, 1)', marginTop:15}}>
        </TouchableOpacity></View>


    </SafeAreaView>
  )
}

export default Historiquie2;
const styles= StyleSheet.create({
    v1:{
     flex:1,
     backgroundColor:'white'
 },
 t1:{
     fontSize:18,
     fontWeight:'500',
     marginLeft:75,
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
   backgroundColor:'#FFFF',
   borderColor:'#FFFF'
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
     top:480
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
    view6:{
        position:'absolute',
        backgroundColor:'#ffff',
        width:278,borderRadius:10,left:10, top:120, paddingBottom:10
    },
});