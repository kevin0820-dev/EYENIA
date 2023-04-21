import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, Image, View, StyleSheet,ScrollView } from 'react-native'
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
function Details({navigation}) {
  return (
    <SafeAreaView style={{marginTop:20, backgroundColor:'#ffff'}}>
        <ScrollView>
         <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.to1}>
                <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.t1}>Detail appareil</Text>
        </View>
        
                <View style={styles.v2}>
                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="access-point" size={20} color="#18567F"  />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>Nom de i appareil</Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            <Text style={{fontSize:12, fontWeight:'500', color:'#18567F', marginTop:5}}>ATI-87938</Text>
                           < IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="chevron-right" size={25} color="#18567F" style={{marginTop:0, marginLeft:5}} />
                             </IconComponentProvider>
                        </View>
                        <View>

                        </View>
                    </View>

                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="tag-outline" size={20} color="#18567F"  />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>
                                Tyoe de i equipement
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            <Text style={{fontSize:12, fontWeight:'500', color:'#18567F', marginTop:10, marginLeft:30}}>ATI</Text>
                           </View>
                        <View>

                        </View>
                    </View>

                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <Image source={require('../../assets/imei.png')}/>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>IMEI</Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            <Text style={{fontSize:12, fontWeight:'500', color:'#18567F',marginLeft:70, marginTop:10}}>86079605787938</Text>
                          
                        </View>
                        <View>

                        </View>
                    </View>

                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="clock-outline" size={20} color="#18567F"  />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>Expiration</Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            <Text style={{fontSize:12, fontWeight:'500', color:'#18567F',marginLeft:15, marginTop:10}}>2033-02-10 00:59:59</Text>
                           
                        </View>
                        <View>

                        </View>
                    </View>

                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="sim" size={20} color="#18567F"  style={{transform: [{rotate: '90deg'}]}} />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>SIM</Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            
                           < IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="chevron-right" size={25} color="#18567F" style={{ marginLeft:160}} />
                             </IconComponentProvider>
                        </View>
                        <View>

                        </View>
                    </View>

                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <Image source={require('../../assets/chatgpt.png')}/>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>Icon de peripherique</Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                           < IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="chevron-right" size={25} color="#18567F" style={{marginLeft:50}} />
                             </IconComponentProvider>
                        </View>
                        <View>

                        </View>
                    </View>
                </View>

                <View style={styles.v2}>
                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="battery-20" size={20} color="#18567F" style={{transform: [{rotate: '90deg'}]}}  />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>
                            Battery</Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            <Text style={{fontSize:12, fontWeight:'500', color:'#18567F',marginLeft:120, marginTop:10}}>1%</Text>
                         
                        </View>
                        <View>

                        </View>
                    </View>

                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="information-outline" size={20} color="#18567F"  />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>
                                Status
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            <Text style={{fontSize:12, fontWeight:'500', color:'#18567F', marginTop:10, marginLeft:90}}>Hors ligne</Text>
                           </View>
                        <View>

                        </View>
                    </View>

                </View>
                <View style={styles.v2}>
                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="crosshairs-gps" size={20} color="#18567F" style={{transform: [{rotate: '90deg'}]}}  />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>
                            Duree position</Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            <Text style={{fontSize:12, fontWeight:'500', color:'#18567F',
                             marginTop:10}}>2033-02-10 00:59:59</Text>
                         
                        </View>
                        <View>

                        </View>
                    </View>

                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="phone-in-talk" size={20} color="#18567F"  />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>
                            Derinere mise 
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            <Text style={{fontSize:12, fontWeight:'500', color:'#18567F', marginTop:10}}
                            >2033-02-10 00:59:59</Text>
                           </View>
                        <View>

                        </View>
                    </View>


                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="speedometer" size={20} color="#18567F"  />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>
                            Vitesse 
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            <Text style={{fontSize:12, fontWeight:'500', color:'#18567F', marginTop:10, marginLeft:120}}
                            >0Km/h</Text>
                           </View>
                        <View>

                        </View>
                    </View>


                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="longitude" size={20} color="#18567F"  />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>
                            Longitude 
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            <Text style={{fontSize:12, fontWeight:'500', color:'#18567F', marginTop:10, marginLeft:90}}
                            >3.118535</Text>
                           </View>
                        <View>

                        </View>
                    </View>
                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="latitude" size={20} color="#18567F"  />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>
                            Latitude
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            <Text style={{fontSize:12, fontWeight:'500', color:'#18567F', marginTop:10, marginLeft:95}}
                            >50.642262</Text>
                           </View>
                        <View>

                        </View>
                    </View>
                    <View style={styles.v3}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="map-marker" size={20} color="#18567F"  />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>
                            Address
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                            <Text style={{fontSize:12, fontWeight:'500', color:'#18567F', marginTop:10, marginLeft:10}}
                            >1,rule de normandine mon{'\n'}
                            barcel lille nord,huts,de</Text>
                           </View>
                        <View>

                        </View>
                    </View>
                    <View style={[styles.v3,{ paddingBottom:20,}]}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.v1}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                             <Icon name="account-outline" size={20} color="#18567F"  />
                             </IconComponentProvider>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'500', marginTop:5, marginLeft:15}}>
                            Driver information
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}> 
                        <TouchableOpacity onPress={()=>{navigation.navigate('Driver_detail')}}>
                             <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                                 <Icon name="chevron-right" size={25} color="#18567F"  style={{marginLeft:60}}/>
                             </IconComponentProvider>
                             </TouchableOpacity>
                            
                            </View>
                        <View>

                        </View>
                    </View>

                </View>
                


            </ScrollView>
            <View style={{width:'100%', backgroundColor:'#FFFF', position:'absolute', height:'5%',top:hp('98%')}}>
      <TouchableOpacity style={{width:124, height:5, borderRadius:5,alignSelf:'center',
       backgroundColor:'rgba(54, 52, 53, 1)', marginTop:15}}>
        </TouchableOpacity></View>


    </SafeAreaView>
  )
}

export default Details
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
        marginLeft:70,
        marginTop:22
    },
    v1:
    {
        backgroundColor:'#18567F21',
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
        marginTop:15
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
    },bottomtab:{
        width:wp('100%'),
        backgroundColor:'white',
        height:60,
        position:'absolute',
        top:hp('94%')
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
      v2:{
        width:341,
        backgroundColor:'#18567F12',
        marginHorizontal:10,
        borderRadius:10,
        marginTop:10,
        paddingBottom:10,
        marginBottom:50
      },
      v3:{
        width:321,
         justifyContent:'space-between',
          flexDirection:'row',
         marginHorizontal:20,
         marginTop:22
      }
        
})