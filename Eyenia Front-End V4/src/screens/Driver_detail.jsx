import React from 'react'
import { SafeAreaView,View,Text,Image,TouchableOpacity,StatusBar,StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
function Driver_detail({navigation}) {
  return (
    <SafeAreaView style={{marginTop:20, backgroundColor:'#FFFF', flex:1}}>
    <StatusBar backgroundColor={'#18567F'}  barStyle={'light'}/>
    <View style={{flexDirection:'row', backgroundColor:'#18567F'}}>
    <TouchableOpacity style={styles.to1}>
      <Image source={require('../../assets/back.png')}/>
        </TouchableOpacity>
            <Text style={styles.t1}>Profile</Text>
        </View>
        <View style={{margin:30}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text1}>Username</Text>
                <Text style={styles.text2}>William34</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text1}>Email</Text>
                <Text style={styles.text2}>william34@gmail.com</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text1}>Phone Number</Text>
                <Text style={styles.text2}>+1 2343 02382</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text1}>Password</Text>
                <TouchableOpacity style={{position:'absolute', left:285}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                 <Icon name="chevron-right" size={25} color="#5D5C59" />
              </IconComponentProvider></TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text1}>Language</Text>
                <TouchableOpacity style={{position:'absolute', left:285}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                 <Icon name="chevron-right" size={25} color="#5D5C59" />
              </IconComponentProvider></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text1}>Maps</Text>
                <TouchableOpacity style={{position:'absolute', left:285}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                 <Icon name="chevron-right" size={25} color="#5D5C59" />
              </IconComponentProvider></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text1}>Help</Text>
                <TouchableOpacity style={{position:'absolute', left:285}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                 <Icon name="chevron-right" size={25} color="#5D5C59" />
              </IconComponentProvider></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text1}>About Us</Text>
                <TouchableOpacity style={{position:'absolute', left:285}} onPress={()=>{navigation.navigate('Membership')}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                 <Icon name="chevron-right" size={25} color="#5D5C59" />
              </IconComponentProvider></TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text1}>Term and condition</Text>
                <TouchableOpacity style={{position:'absolute', left:285}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                 <Icon name="chevron-right" size={25} color="#5D5C59" />
              </IconComponentProvider></TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text1}>Note the app</Text>
                <TouchableOpacity style={{position:'absolute', left:285}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                 <Icon name="chevron-right" size={25} color="#5D5C59" />
              </IconComponentProvider></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text1}>Deconnexion</Text>
                <TouchableOpacity style={{position:'absolute', left:285}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                 <Icon name="chevron-right" size={25} color="#5D5C59" />
              </IconComponentProvider></TouchableOpacity>
            </View>
            
        </View>
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
              <Icon name="bell-badge-outline" size={25} color="#5D5C59" style={{marginLeft:135, marginTop:-10}}/>
              </IconComponentProvider>
              </TouchableOpacity>
             
              <TouchableOpacity onPress={()=>{navigation.navigate('Driver_detail')}}>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="account-circle" size={25} color="rgba(24, 86, 127, 1)" style={{marginLeft:50, marginTop:-10}}/>
              </IconComponentProvider>
              </TouchableOpacity>
              
            </View>
          </View>
    </SafeAreaView>
  )
}

export default Driver_detail
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
text1:{
    fontSize:19,
    fontWeight:'500',
    marginBottom:20
},
text2:{
    fontSize:16,
    fontWeight:'400'
},
bottomtab:{
  width:wp('100%'),
  backgroundColor:'white',
  height:hp('8%'),
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