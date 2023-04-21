import React,{useState} from 'react'
import { Text,TextInput,SafeAreaView,StyleSheet,View,TouchableOpacity,Image,
    FlatList,ScrollView,alert, StatusBar} from 'react-native'
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function List({navigation}) {
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [show2,setShow2]=useState(false)
  return (
    <SafeAreaView style={{marginTop:25, marginBottom:25,backgroundColor:'#FFFF'}}>
        <StatusBar backgroundColor={'white'}/>
         <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.to1}>
                <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.t1}>Lists</Text>
        </View>
        <ScrollView>
        <View style={{borderWidth:0.3, width:334,height:44, marginLeft:15, borderRadius:8}}>
        <View style={{flexDirection:'row', marginTop:5}}>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="magnify" size={25} color="#5D5C59" style={{marginLeft:8, marginTop:3}}/>
              </IconComponentProvider>
             <TextInput placeholder='Search Vehicle' style={{width:255, marginLeft:5}}/>
             <TouchableOpacity style={styles.v1}>
                <Text style={{color:'white', fontSize:20, fontWeight:'bold', }}>+</Text>
            </TouchableOpacity>
        </View></View>
        
        <View style={styles.cardview}>
    <View style={{flexDirection:'row', marginTop:10}}>
      <View style={{flexDirection:'row', marginTop:15, marginLeft:35}}>
        <Image source={require('../../assets/car1.png')} style={{marginTop:5}}/>
        <Text style={{fontSize:20,fontWeight:'600', color:'#18567F', marginLeft:10}}>BMW</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, position:'absolute', left:250 }}>
        <Image source={require('../../assets/battery.png')}/>  
        <Text style={{fontSize:14,fontWeight:'400',marginLeft:10}}>35%</Text>
      </View>
      
    </View>
    <View style={{backgroundColor:'rgba(24, 86, 127, 0.12)', height:104, borderBottomLeftRadius:10,borderBottomRightRadius:10, marginTop:20}}>
    <View style={{flexDirection:'row', marginTop:5}}>
      <View style={{flexDirection:'row', marginTop:10, marginLeft:35}}>
        <Image source={require('../../assets/meter.png')} style={{marginTop:5}}/>
        <Text style={{fontSize:12,fontWeight:'400', marginLeft:10, marginTop:5}}>60km/h</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, marginLeft:45}}>
        <Image source={require('../../assets/fuel.png')} style={{marginTop:5}}/>
        <Text style={{fontSize:12,fontWeight:'400', marginLeft:10, marginTop:5}}>50L</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, marginLeft:45}}>
        <Image source={require('../../assets/network.png')} style={{marginTop:5}}/>
        <Text style={{fontSize:12,fontWeight:'400',marginLeft:5, marginTop:5}}>Full</Text>
      </View>
    </View>
    <Text style={{fontSize:11, fontWeight:'400', color:'red', marginLeft:32, marginTop:15}}>
    Ew Arret 7 mi </Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:11, fontWeight:'400',marginLeft:32, marginTop:10, marginBottom:10}}>
      57, Street Rock Garden, 59800 Washington
        </Text>
            <TouchableOpacity onPress={()=>{setShow(!show); setShow1(false);setShow2(false)}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="dots-vertical" size={25} color="#5D5C59" style={{marginLeft:35, marginTop:3}}/>
              </IconComponentProvider>
              </TouchableOpacity>
              {
                show?(
              <View style={{width:114,height:124,backgroundColor:'#FFFFFF',position:'absolute',
             top:-90, left:160, borderRadius:10,paddingLeft:10}}>
                <TouchableOpacity  style={styles.to2}>
                <Image source={require('../../assets/listIcon.png')} style={{width:20,height:20,marginLeft:5}} />
                    <Text style={styles.text1}>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to2}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                            <Icon name="trash-can-outline" size={25} color="#5D5C59" />
                        </IconComponentProvider>
                    <Text style={styles.text1}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to2}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                            <Icon name="cog-outline" size={25} color="#5D5C59" />
                        </IconComponentProvider>
                <Text style={styles.text1}>Setting</Text>
                </TouchableOpacity>
            </View>):null}
          </View>
        </View>    
         </View>    



         <View style={styles.cardview}>
         <View style={{flexDirection:'row', marginTop:10}}>
      <View style={{flexDirection:'row', marginTop:15, marginLeft:35}}>
        <Image source={require('../../assets/car1.png')} style={{marginTop:5}}/>
        <Text style={{fontSize:20,fontWeight:'600', color:'#18567F', marginLeft:10}}>AUDI</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, position:'absolute', left:250 }}>
        <Image source={require('../../assets/battery.png')}/>  
        <Text style={{fontSize:14,fontWeight:'400',marginLeft:10}}>45%</Text>
      </View>
      
    </View>
    <View style={{backgroundColor:'rgba(24, 86, 127, 0.12)', height:104, borderBottomLeftRadius:10,borderBottomRightRadius:10, marginTop:20}}>
    <View style={{flexDirection:'row', marginTop:5}}>
      <View style={{flexDirection:'row', marginTop:10, marginLeft:35}}>
        <Image source={require('../../assets/meter.png')} style={{marginTop:5}}/>
        <Text style={{fontSize:12,fontWeight:'400', marginLeft:10, marginTop:5}}>55km/h</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, marginLeft:45}}>
        <Image source={require('../../assets/fuel.png')} style={{marginTop:5}}/>
        <Text style={{fontSize:12,fontWeight:'400', marginLeft:10, marginTop:5}}>50L</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, marginLeft:45}}>
        <Image source={require('../../assets/network.png')} style={{marginTop:5}}/>
        <Text style={{fontSize:12,fontWeight:'400',marginLeft:5, marginTop:5}}>Full</Text>
      </View>
    </View>
    <Text style={{fontSize:11, fontWeight:'400', color:'#19B000', marginLeft:32, marginTop:15}}>
    En mouvement 7 mi </Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:11, fontWeight:'400',marginLeft:32, marginTop:10, marginBottom:10}}>
      57, Street Rock Garden, 59800 Washington
        </Text>
            <TouchableOpacity onPress={()=>{setShow1(!show1);setShow(false);setShow2(false)}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="dots-vertical" size={25} color="#5D5C59" style={{marginLeft:35, marginTop:3}}/>
              </IconComponentProvider>
              </TouchableOpacity>
              {
                show1?(
              <View style={{width:114,height:124,backgroundColor:'#FFFFFF',position:'absolute',
             top:-90, left:160, borderRadius:10,paddingLeft:10}}>
                <TouchableOpacity  style={styles.to2}>
                <Image source={require('../../assets/listIcon.png')} style={{width:20,height:20,marginLeft:5}} />
                    <Text style={styles.text1}>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to2}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                            <Icon name="trash-can-outline" size={25} color="#5D5C59" />
                        </IconComponentProvider>
                    <Text style={styles.text1}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to2}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                            <Icon name="cog-outline" size={25} color="#5D5C59" />
                        </IconComponentProvider>
                <Text style={styles.text1}>Setting</Text>
                </TouchableOpacity>
            </View>):null}
          </View>
        </View>
        
         </View>
         <View style={[styles.cardview,{marginBottom:150}]}>
    <View style={{flexDirection:'row', marginTop:10}}>
      <View style={{flexDirection:'row', marginTop:15, marginLeft:35}}>
        <Image source={require('../../assets/car1.png')} style={{marginTop:5}}/>
        <Text style={{fontSize:20,fontWeight:'600', color:'#18567F', marginLeft:10}}>SONATA</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, position:'absolute', left:250 }}>
        <Image source={require('../../assets/battery.png')}/>  
        <Text style={{fontSize:14,fontWeight:'400',marginLeft:10}}>49%</Text>
      </View>
      
    </View>
    <View style={{backgroundColor:'rgba(24, 86, 127, 0.12)', height:104, borderBottomLeftRadius:10,borderBottomRightRadius:10, marginTop:20}}>
    <View style={{flexDirection:'row', marginTop:5}}>
      <View style={{flexDirection:'row', marginTop:10, marginLeft:35}}>
        <Image source={require('../../assets/meter.png')} style={{marginTop:5}}/>
        <Text style={{fontSize:12,fontWeight:'400', marginLeft:10, marginTop:5}}>65km/h</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, marginLeft:45}}>
        <Image source={require('../../assets/fuel.png')} style={{marginTop:5}}/>
        <Text style={{fontSize:12,fontWeight:'400', marginLeft:10, marginTop:5}}>50L</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, marginLeft:45}}>
        <Image source={require('../../assets/network.png')} style={{marginTop:5}}/>
        <Text style={{fontSize:12,fontWeight:'400',marginLeft:5, marginTop:5}}>Full</Text>
      </View>
    </View>
    <Text style={{fontSize:11, fontWeight:'400', color:'red', marginLeft:32, marginTop:15}}>
    Ew Arret 7 mi </Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:11, fontWeight:'400',marginLeft:32, marginTop:10, marginBottom:10}}>
      57, Street Rock Garden, 59800 Washington
        </Text>
            <TouchableOpacity onPress={()=>{setShow2(!show2);setShow(false);setShow1(false)}}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="dots-vertical" size={25} color="#5D5C59" style={{marginLeft:35, marginTop:3}}/>
              </IconComponentProvider>
              </TouchableOpacity>
              {
                show2?(
              <View style={{width:114,height:124,backgroundColor:'#FFFFFF',position:'absolute',
             top:-90, left:160, borderRadius:10,paddingLeft:10}}>
                <TouchableOpacity  style={styles.to2}>
                <Image source={require('../../assets/listIcon.png')} style={{width:20,height:20,marginLeft:5}} />
                    <Text style={styles.text1}>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to2}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                            <Icon name="trash-can-outline" size={25} color="#5D5C59" />
                        </IconComponentProvider>
                    <Text style={styles.text1}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to2}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                            <Icon name="cog-outline" size={25} color="#5D5C59" />
                        </IconComponentProvider>
                <Text style={styles.text1}>Setting</Text>
                </TouchableOpacity>
            </View>):null}
          </View>
        </View>
        
         </View>    
   

        </ScrollView>
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
              <Icon name="clipboard-outline" size={25} color="#18567F" style={{marginLeft:55, marginTop:-10}}/>
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

export default List
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
    v1:
    {
        backgroundColor:'#18567F',
        width:30.83, height:30.83,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    cardview:
    {
        width:330,
        height:175,
        borderRadius:10,
        backgroundColor:'#FFFF',
        marginHorizontal:15,
        marginTop:15, 
        elevation:10
    },
    text1:{
        fontSize:11,
        fontWeight:'400',
        marginLeft:10,
        marginTop:4

    },
    to2:{
        marginTop:13,
        flexDirection:'row'
    },
    bottomtab:{
      width:wp('100%'),
      backgroundColor:'white',
      height:hp('8%'),
      position:'absolute',
      top:hp('94%'),
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
        
})