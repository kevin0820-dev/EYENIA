import React,{useState} from 'react'
import { SafeAreaView, Text, View, Image,
   TouchableOpacity, StatusBar, StyleSheet } from 'react-native' 
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
function Zone_dalerte({navigation}) {
  const [show1,setShow1]=useState(false)
  const [show2,setShow2]=useState(false)
  const [show3,setShow3]=useState(false)
  const [show4,setShow4]=useState(false)
  return (
        <SafeAreaView style={{marginTop:20, backgroundColor:'#FFFF', flex:1}}>
                <StatusBar backgroundColor={'white'}/>
              <View style={{flexDirection:'row', marginTop:'3%'}}>
            <TouchableOpacity style={styles.to1}>
                <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.t1}>Zone d’alerte</Text>
            <TouchableOpacity style={styles.view1}>
                <Text style={{color:'white', fontSize:20, fontWeight:'bold', }}>+</Text>
            </TouchableOpacity>
        </View>
      <View style={{backgroundColor:'#18567F1F',   margin:15,borderRadius:10,paddingBottom:5}}>
        <View style={{backgroundColor:'#FFFF', paddingBottom:12,
         borderTopLeftRadius:10, borderTopRightRadius:10, elevation:10}}>
          <View flexDirection="row">
              <View style={{backgroundColor:'#18567F', alignItems:'center', 
              justifyContent:'center',width:49, height:49, borderRadius:40, marginTop:10,marginHorizontal:10
            }}><Image source={require('../../assets/hash.png')} style={{width:23, height:23}}/></View>
            <Text style={styles.t2}>abeille</Text>
              <Image source={require('../../assets/meter.png')} style={{width:21, height:19,
                 marginTop:20, marginLeft:130, marginRight:10}}/>
            <Text style={{fontSize:14, fontWeight:'700', color:'#18567F', marginTop:20}}>200</Text>
          </View>
          <Text style={{fontSize:14, fontWeight:'400', marginLeft:20, marginTop:10}}>Lorem ipsum dolor sit amet consecte</Text>
        </View>
        <View style={{width:334, height:40, justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:16, fontWeight:'600', color:'#18567F'}}>Param...l’alerte</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{width:28, height:25, borderWidth:0.3, 
            margin:15, marginLeft:65, alignItems:'center', borderColor:'rgba(0, 0, 0, 0.28)'}} onPress={()=>{setShow1(!show1)}}>
           {show1?(<IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="check" size={20} color="#5D5C59" />
              </IconComponentProvider>):null}
          </TouchableOpacity>
          <Text style={{fontSize:16, fontWeight:'500', marginTop:17, marginRight:35}}>Enter</Text>
        </View>
        
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{width:28, height:25, borderWidth:0.3,
             margin:15,alignItems:'center',borderColor:'rgba(0, 0, 0, 0.28)'}} onPress={()=>{setShow2(!show2)}}>
          {show2?(<IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="check" size={20} color="#5D5C59" />
              </IconComponentProvider>):null}
          </TouchableOpacity>
          <Text style={{fontSize:16, fontWeight:'500', marginTop:17}}>Sortie</Text>
        </View></View>
      </View>


      <View style={{backgroundColor:'#18567F1F',  margin:15,borderRadius:10,paddingBottom:5}}>
        <View style={{backgroundColor:'#FFFF',  paddingBottom:12,
         borderTopLeftRadius:10, borderTopRightRadius:10, elevation:10}}>
          <View flexDirection="row">
              <View style={{backgroundColor:'#18567F', alignItems:'center', 
              justifyContent:'center',width:49, height:49, borderRadius:40, marginTop:10,marginHorizontal:10
            }}><Image source={require('../../assets/hash.png')} style={{width:23, height:23}}/></View>
            <Text style={styles.t2}>la gazelle</Text>
            
              <Image source={require('../../assets/meter.png')} style={{width:21, height:19,
                 marginTop:20, marginLeft:100, marginRight:10}}/>
            <Text style={{fontSize:14, fontWeight:'700', color:'#18567F', marginTop:20}}>200</Text>
          </View>
          <Text style={{fontSize:14, fontWeight:'400', marginLeft:20, marginTop:10}}>Lorem ipsum dolor sit amet consecte</Text>
        </View>
        <View style={{width:334, height:40, justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:16, fontWeight:'600', color:'#18567F'}}>Param...l’alerte</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{width:28, height:25, borderWidth:0.3, margin:15,
             marginLeft:65, alignItems:'center',borderColor:'rgba(0, 0, 0, 0.28)' }} onPress={()=>{setShow3(!show3)}}>
           {show3?(<IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="check" size={20} color="#5D5C59" />
              </IconComponentProvider>):null}
          </TouchableOpacity>
          <Text style={{fontSize:16, fontWeight:'500', marginTop:17, marginRight:35}}>Enter</Text>
        </View>
        
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{width:28, height:25, borderWidth:0.3, 
            margin:15, alignItems:'center',borderColor:'rgba(0, 0, 0, 0.28)'}} onPress={()=>{setShow4(!show4)}}>
              {show4?(<IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="check" size={20} color="#5D5C59" />
              </IconComponentProvider>):null}
          
          </TouchableOpacity>
          <Text style={{fontSize:16, fontWeight:'500', marginTop:17}}>Sortie</Text>
        </View></View>
      </View>


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

export default Zone_dalerte
const styles=StyleSheet.create({
  v1:{
      flex:1,
      backgroundColor:'white'
  },
  t1:{
      fontSize:18,
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
    margin:20,

},
view1:
{
    backgroundColor:'#18567F',
    width:30.83, height:30.83,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginLeft:70
},
  t2:{
    fontSize:20, fontWeight:'600',
    color:'#18567F',
    marginTop:20,
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
       alignSelf:'center'
  },
});