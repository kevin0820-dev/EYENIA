import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet,Text, TouchableOpacity, View, Image,StatusBar } from 'react-native';
import {TextInput} from "react-native";
function Add_vehicle({navigation}) {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#FFFF'}}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.to1}>
                <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.t1}>Add New Vehicle</Text>
        </View>
        <View style={styles.v2}>
            <View>
                <TextInput style={styles.in1}placeholder='Toyota Corolla X'/>
                <Text style={{position:'absolute', backgroundColor:'#e6f5ff', 
                left:30,top:12, fontSize:12, fontWeight:'500', color:'#18567F'}}>Vehicle Name</Text> 
            </View>
            <View>
                <TextInput style={styles.in1}placeholder='893475974398' keyboardType='numeric'/>
                <Text style={{position:'absolute', backgroundColor:'#e6f5ff', 
                left:30,top:12, fontSize:12, fontWeight:'500', color:'#18567F'}}>Device IMEI</Text> 
            </View>
            <View>
                <TextInput style={styles.in1}placeholder='Iphone'/>
                <Text style={{position:'absolute', backgroundColor:'#e6f5ff', 
                left:30,top:12, fontSize:12, fontWeight:'500', color:'#18567F'}}>Device Type</Text> 
            </View>
            <View>
                <TextInput style={styles.in1}placeholder='MG4858'/>
                <Text style={{position:'absolute', backgroundColor:'#e6f5ff', 
                left:30,top:12, fontSize:12, fontWeight:'500', color:'#18567F'}}>Device Model</Text> 
            </View>
            <View >
                
            <Image source={require('../../assets/flag.png')} style={styles.img}/>
            <Text style={{position:'absolute', fontSize:14, opacity:0.5, top:35, left:70}}>+1</Text>
            <Image source={require('../../assets/Line.png')} style={{position:'absolute', top:30, left:120}}/>
                <TouchableOpacity>
                <Image source={require('../../assets/arrowdown2.png')} style={{position:'absolute', top:42, left:92}}/>
                </TouchableOpacity>
                <TextInput style={[styles.in1,{paddingLeft:115, marginBottom:15}]}placeholder='4575474523'
                 keyboardType='numeric'/>
                
                <Text style={{position:'absolute', backgroundColor:'#e6f5ff', 
                left:30,top:12, fontSize:12, fontWeight:'500', color:'#18567F'}}>SIM Number</Text>
                
            </View>
            
        </View>
        <View style={styles.v2}>
            <TextInput style={[styles.in1,{marginBottom:20}]} placeholder='Test01' color='#18567F8C' label='Add to Client'  variant='outlined'/>
            <Text style={{position:'absolute', backgroundColor:'#e6f5ff', 
                left:30,top:12, fontSize:12, fontWeight:'500', color:'#18567F'}}>Add to Client</Text>
        </View>
        <TouchableOpacity style={styles.to2}>
            <Text style={{color:'white',fontSize:16,fontWeight:'700'}}>
            Submit
            </Text>
        </TouchableOpacity>
        
      <TouchableOpacity style={{width:124, height:5, borderRadius:5,alignSelf:'center', backgroundColor:'rgba(54, 52, 53, 1)', position:'absolute', top:690}}>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    v1:{
        flex:1,
        backgroundColor:'white'
    },
    t1:{
        fontSize:18,
        fontWeight:'500',
        marginLeft:45,
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
        borderWidth:0.5,
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
        marginTop:10,
        borderRadius:10
    },
    img:{
        width:36, height:24,
        position:'absolute',
        top:35,
        left:25
    }
});
export default Add_vehicle