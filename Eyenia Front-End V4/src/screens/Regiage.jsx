
import React from 'react'
import { SafeAreaView,StyleSheet, View, TouchableOpacity, Image,Text, StatusBar } from 'react-native'

import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

  

function Regiage({navigation}) {
  return (
    <SafeAreaView style={{marginTop:20, flex:1, backgroundColor:'#FFFF'}}>
        <StatusBar backgroundColor={'white'}/>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.to1}>
                <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.t1}>Regiage</Text>
        </View>
        <ScrollView>
        <View style={styles.v1}>
            <Text style={{color:'white', fontSize:24, fontWeight:'500', margin:20,marginLeft:25}}>BMW</Text>
        </View>
        <View style={[styles.v3, {marginTop:30}]}>
            <View style={styles.v2}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={20} color="#18567F" />
              </IconComponentProvider>
            </View>
            <Text style={{fontSize:18, fontWeight:'400',marginLeft:20}}>Tracking mode</Text>
            <TouchableOpacity>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="chevron-right" size={25} color="#000000" style={{position:'absolute', left:120,top:3}}/>
              </IconComponentProvider>
            </TouchableOpacity>
            
        </View>
        <View style={styles.v3}>
            <View style={styles.v2}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="bell-badge" size={20} color="#18567F" />
              </IconComponentProvider>
            </View>
            <Text style={{fontSize:18, fontWeight:'400',marginLeft:20}}>Notifications</Text>
            <TouchableOpacity>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="chevron-right" size={25} color="#000000" style={{position:'absolute', left:135,top:3}}/>
              </IconComponentProvider>
            </TouchableOpacity>
        </View>

        <View style={styles.v3}>
            <View style={styles.v2}>
            <Image source={require('../../assets/calender.png')}/>
            </View>
            <Text style={{fontSize:18, fontWeight:'400',marginLeft:20}}>Abonnement</Text>
            <TouchableOpacity>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="chevron-right" size={25} color="#000000" style={{position:'absolute', left:135,top:3}}/>
              </IconComponentProvider>
            </TouchableOpacity>
        </View>

        <View style={styles.v3}>
            <View style={styles.v2}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="bluetooth" size={20} color="#18567F" />
              </IconComponentProvider>
            </View>
            <Text style={{fontSize:18, fontWeight:'400',marginLeft:20}}>Appareils Associe</Text>
            <TouchableOpacity>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="chevron-right" size={25} color="#000000" style={{position:'absolute', left:95,top:3}}/>
              </IconComponentProvider>
            </TouchableOpacity>
        </View>

        <View style={styles.v3}>
            <View style={styles.v2}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="car" size={20} color="#18567F" />
              </IconComponentProvider>
            </View>
            <Text style={{fontSize:18, fontWeight:'400',marginLeft:20}}>Coupure Circuit</Text>
            <TouchableOpacity>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="chevron-right" size={25} color="#000000" style={{position:'absolute', left:115,top:3}}/>
              </IconComponentProvider>
            </TouchableOpacity>
        </View>

        <View style={styles.v3}>
            <View style={styles.v2}>
            <Image source={require('../../assets/monitor.png')}/>
            </View>
            <Text style={{fontSize:18, fontWeight:'400',marginLeft:20}}>Redemarer</Text>
            <TouchableOpacity>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="chevron-right" size={25} color="#000000" style={{position:'absolute', left:150,top:3}}/>
              </IconComponentProvider>
            </TouchableOpacity>
        </View>

        <View style={styles.v3}>
            <View style={styles.v2}>
            <Image source={require('../../assets/speedometer.png')}/></View>
            <Text style={{fontSize:18, fontWeight:'400',marginLeft:20}}>Speed Alert</Text>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Text style={{position:'absolute', left:250,top:3,color:'#18567F',fontSize:15, fontWeight:'600'}}>100Km/h</Text>
              </IconComponentProvider>
        </View>


        <View style={styles.v3}>
            <View style={styles.v2}>
            <Image source={require('../../assets/reset.png')}/>
            </View>
            <Text style={{fontSize:18, fontWeight:'400',marginLeft:20}}>Reset</Text>
            <TouchableOpacity>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="chevron-right" size={25} color="#000000" style={{position:'absolute', left:190,top:3}}/>
              </IconComponentProvider>
            </TouchableOpacity>
        </View>

        <View style={[styles.v3,{marginBottom:200}]}>
            <View style={styles.v2}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="trash-can-outline" size={20} color="#18567F" />
              </IconComponentProvider>
            </View>
            <Text style={{fontSize:18, fontWeight:'400',marginLeft:20}}>Delete the Device</Text>
            <TouchableOpacity>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="chevron-right" size={25} color="#000000" style={{position:'absolute', left:95,top:3}}/>
              </IconComponentProvider>
            </TouchableOpacity>
        </View></ScrollView>

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

export default Regiage
const styles=StyleSheet.create({
    to1:{
        width:30,
        height:30,
        borderRadius:40,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        margin:20
    },
    t1:{
        fontSize:18,
        fontWeight:'500',
        marginLeft:95,
        marginTop:22
    },
    v1:{
        backgroundColor:'#18567F',
        borderRadius:10,
        width:320,
        height:70,
        margin:10,
        marginHorizontal:20
    },
    v2:{
        width:31,
        height:31,
        borderRadius:30,
        backgroundColor:'#18567F21',
        justifyContent:'center',
        alignItems:'center'
    },
    v3:{
        flexDirection:'row',
        marginTop:15,
        marginLeft:20

    },
    bottomtab:{
        width:wp('100%'),
        backgroundColor:'white',
        height:60,
        position:'absolute',
        top:wp('90%')
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
    

})