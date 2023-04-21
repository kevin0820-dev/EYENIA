import React from 'react'
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet,Text, TouchableOpacity, View, Image } from 'react-native';
import {TextInput} from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Membership2({navigation}) {
  return (
    <SafeAreaView style={{marginTop:20, backgroundColor:'#FFFF'}}>
        
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.to1}>
                <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.t1}>Recharge International</Text>
        </View>
        <ScrollView>

        <View style={{width:290, backgroundColor:'#FFFF', marginLeft:35, borderRadius:10, elevation:10,borderWidth:0.5, borderColor:'rgba(24, 86, 127, 0.08)'}}>
            <View style={{backgroundColor:'#18567F', height:65, alignItems:'center', 
            justifyContent:'center', borderRadius:6, margin:6,}}>
                <Text style={{color:'#FFFF', fontSize:22, fontWeight:'500'}}>
                1 MOIS
                </Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', height:190}}>
                <Text style={{fontSize:21, fontWeight:'500', textAlign:'center'}}>Locate your device{'\n'}
                anywhere wit our recharge</Text>

            <Text style={{fontSize:44, fontWeight:'500', marginTop:15}}>$10</Text>
            </View></View>
            <View style={{flexDirection:'row', marginTop:30, marginHorizontal:100}}>
                <Image  source={require('../../assets/1.png')} style={{marginLeft:10}}/>
                <Image  source={require('../../assets/2.png')} style={{marginLeft:10}}/>
                <Image  source={require('../../assets/2.png')} style={{marginLeft:10}}/>
            </View>
            <Text style={{textAlign:'center', marginTop:20, fontSize:21, fontWeight:'500'}}>
                IMEI: 4758475
            </Text>
            <View style={{width:317, backgroundColor:'rgba(24, 86, 127, 0.15)', padding:20, margin:22, borderRadius:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.text1}>Name:</Text>
                <Text style={styles.text2}>                     William</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.text1}>Bank:</Text>
                <Text style={styles.text2}>                           UBL</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.text1}>Card</Text>
                <Text style={styles.text2}>        233-23280-21</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text1}>Ccv</Text>
                <Text style={styles.text2}>                           353</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.to2} onPress={()=>{navigation.navigate('Membership2')}}>
            <Text style={{color:'white',fontSize:16,fontWeight:'700'}}>
            Recharger
            </Text>
        </TouchableOpacity>
        </ScrollView>
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
              <Icon name="cog-outline" size={25} color="#5D5C59" style={{marginLeft:50, marginTop:-10}}/>
              </IconComponentProvider>
              </TouchableOpacity>
              
            </View>
          </View>
    </SafeAreaView>
  )
}

export default Membership2;
const styles=StyleSheet.create({
    v1:{
        flex:1,
        backgroundColor:'white'
    },
    t1:{
        fontSize:20,
        fontWeight:'500',
        marginLeft:10,
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
    text1:{
        fontSize:18,
        fontWeight:'500',
        color:'#18567F',
        marginBottom:5
    },
    text2:{
        fontSize:18,
        fontWeight:'500',
        textDecorationLine:'underline'
        
    },
    to2:{
        justifyContent:'center',
        alignItems:'center',
        width:317,
        height:64,
        backgroundColor:'#18567F',
        marginHorizontal:20,
        borderRadius:10,
        marginBottom:200
    },
    bottomtab:{
        width:wp('100%'),
        backgroundColor:'white',
        height:90,
        position:'absolute',
        top:hp('95%'),
        elevation:10
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