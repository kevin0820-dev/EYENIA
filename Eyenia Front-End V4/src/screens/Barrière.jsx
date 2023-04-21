import React,{useState} from 'react'
import { SafeAreaView, Text, TouchableOpacity, Image,View , StatusBar, StyleSheet,ProgressBarAndroid } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
function Barrière({navigation}) {
    const [show3,setShow3]=useState(false)
    const [show4,setShow4]=useState(false)
    const [val,setVal]=useState(0.1)
  return (
    <SafeAreaView style={{marginTop:20}}>
    <StatusBar backgroundColor={'#18567F'}  barStyle={'light'}/>
    <View style={{flexDirection:'row', backgroundColor:'#18567F'}}>
  <TouchableOpacity style={styles.to1}>
      <Image source={require('../../assets/back.png')}/>
  </TouchableOpacity>
  <Text style={styles.t1}>Barrière</Text>
</View>
<MapView 
          initialRegion={{
            latitude:30.733315,
            longitude:76.779419,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421}}
            style={{width:340, height:701, borderRadius:10, margin:10}}>
            <Marker draggable coordinate={{latitude:33.571366,longitude:-122.4324}} 
            style={{width:150, height:150,backgroundColor:'red'}} 
            onDragEnd={(e)=>{Alert.alert(JSON.stringify(e.nativeEvent.coordinate))}} title='testmarker' description='THis is desp'>
            </Marker></MapView>
        <Image source={require('../../assets/map_design.png')} style={{position:'absolute', top:200,width:320, height:146, marginHorizontal:20}}/>
        <View style={[styles.view1,{ top:210,left:60}]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={15} color="#FFFF" />
              </IconComponentProvider>
             
        </View>
        <View style={styles.view4}>
            <TouchableOpacity style={[styles.view5,{margin:15}]} onPress={()=>{{
                    if(val<=0){setVal(0)}else{setVal(val-0.1)}}}}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>-</Text>
            </TouchableOpacity>
            <Text style={{marginTop:17}}>100m</Text>
            <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={val}
                style={{color:'#18567F', width:144, marginLeft:10, marginRight:10}}/>
                <Text style={{marginTop:17}}>5000m</Text>
                <TouchableOpacity style={[styles.view5,{marginLeft:12, marginTop:15}]} onPress={()=>{
                    if(val>=1){setVal(1)}else{setVal(val+0.1)}}}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>+</Text>
            </TouchableOpacity>
          
            
        </View>
        <View style={[styles.view1,{ top:210,left:178}]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={15} color="#FFFF" />
              </IconComponentProvider>
        </View>

        
        <View style={[styles.view1,{ top:230,left:318}]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={15} color="#FFFF" />
              </IconComponentProvider>
        </View>

        
        <View style={[styles.view1,{ top:280,left:278}]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={15} color="#FFFF" />
              </IconComponentProvider>
        </View>
        
        <View style={[styles.view1,{ top:336,left:278}]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={15} color="#FFFF" />
              </IconComponentProvider>
        </View>

        
        <View style={[styles.view1,{ top:323,left:178}]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={15} color="#FFFF" />
              </IconComponentProvider>
        </View>

        
        <View style={[styles.view1,{ top:277,left:132}]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={15} color="#FFFF" />
              </IconComponentProvider>
        </View>
        <View style={[styles.view1,{ top:285,left:68}]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={15} color="#FFFF" />
              </IconComponentProvider>
        </View>

        <View style={[styles.view1,{ top:322,left:25}]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={15} color="#FFFF" />
              </IconComponentProvider>
        </View>
        <View style={[styles.view1,{ top:270, left:18}]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={15} color="#FFFF" />
              </IconComponentProvider>
        </View>

        <TouchableOpacity style={{position:'absolute', top:430,left:10,
        width:42,height:42, backgroundColor:'#FFFF',borderRadius:20,
         alignItems:'center', justifyContent:'center'}}>
       <Image source={require('../../assets/sync.png')}/>
        </TouchableOpacity>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <Text style={{fontSize:15, fontWeight:'500', marginRight:40}}>Fence name</Text>
                    <Text style={{fontSize:15, fontWeight:'400'}}>Lorem Ipsem text</Text>
                </View>
                <View style={styles.view3}>
                    <Text style={{fontSize:15, fontWeight:'600', color:'#18567F'}}>Param...l’alerte</Text>
                    <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{width:28, height:25, borderWidth:0.3,  alignItems:'center', marginLeft:20}} onPress={()=>{setShow3(!show3)}}>
           {show3?(<IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="check" size={20} color="#5D5C59" />
              </IconComponentProvider>):null}
          </TouchableOpacity>
          <Text style={{fontSize:12, fontWeight:'500',marginLeft:10,marginTop:3 }}>Enter</Text>
        </View>
        
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{width:28, height:25, borderWidth:0.3, alignItems:'center', marginLeft:20}} onPress={()=>{setShow4(!show4)}}>
              {show4?(<IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="check" size={20} color="#5D5C59" />
              </IconComponentProvider>):null}
          </TouchableOpacity>
          <Text style={{fontSize:12, fontWeight:'500',marginLeft:10, marginTop:3}}>Sortie</Text>
        </View></View>
        <TouchableOpacity onPress={()=>{navigation.navigate('Historiquie2')}} style={{width:300, height:50, backgroundColor:'#18567F',
         alignItems:'center', justifyContent:'center', borderRadius:10, marginHorizontal:20, marginTop:15}}>
            <Text style={{color:'#FFFF', fontSize:18, fontWeight:'500'}}>Sauvegarder</Text>
        </TouchableOpacity>
        </View>
        <View style={{width:'100%', backgroundColor:'#FFFF', position:'absolute', height:'5%',top:'83%'}}>
      <TouchableOpacity style={{width:124, height:5, borderRadius:5,alignSelf:'center',
       backgroundColor:'rgba(54, 52, 53, 1)', marginTop:15}}>
        </TouchableOpacity></View>

</SafeAreaView>
  )
}

export default Barrière
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
      backgroundColor:'#FFFF',
      borderColor:'#FFFF'
  },
  view1:{
    width:20, height:20,borderRadius:20,
     backgroundColor:'#18567F',justifyContent:'center',alignItems:'center',position:'absolute',
  },
  view2:{
    width:336,
     height:170, position:'absolute',
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
        top:90,
        left:10,
        flexDirection:'row'
    },
    view5:{alignItems:'center', justifyContent:'center', 
    width:25, height:25, borderWidth:0.7, borderRadius:20}


})