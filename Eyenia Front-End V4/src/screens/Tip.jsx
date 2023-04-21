
import * as React from 'react';
import { Button, View, Text, SliderComponent, StatusBar} from 'react-native';
import { StyleSheet} from 'react-native';
import { Image } from 'react-native';
import {TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Tip({navigation}) {
    const styles= StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fffF',
         },
      buttonText: {
      color: '#ffffff',
      fontSize: wp('5%'),
      fontWeight:'600'
      },
      buttonNext: {
        width:wp('88%'),
        height:hp('9%'),
        backgroundColor: '#18567F',
        borderRadius: wp('2%'),
        padding: hp('3%'),
        alignItems: 'center',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:hp('10%')
      },
      imageGroup:{
        width: wp('70%'),
        height: hp('35%'),
        marginTop:hp('10%'),
        marginBottom:hp('4%'),
        alignSelf:'center'
      },
  });
  return (
    <View style={styles.container}>

    <Image 
        source={require('../../assets/group1.png')}
        style={styles.imageGroup}
      />
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFF" translucent = {true}/>
      <View style={{flexDirection:'row',alignSelf:'center'}}>
     <Image source={require('../../assets/box.png')} style={{marginRight:hp('1.5%')}}/>
     <View style={{width:10, height:10, backgroundColor:'#263238', opacity:0.3, borderRadius:30}}>
      </View>
      </View>
      <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',
       marginTop:hp('5%'), marginHorizontal:wp('5%')}}>
        Search your vehicle using{'\n'}GPS Tracker.
      </Text>
      
      <Text style={{fontSize:wp('4.5%'),textAlign:'center',alignSelf:'center', marginTop:hp('4%'),fontWeight:'400', opacity:0.7}}>
      Search vehicle and track it. You can{'\n'} track your vehicle using GPS.
      </Text>
      <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate('Board')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={{width:wp('40%'), height:hp('1%'), borderRadius:hp('2%'),alignSelf:'center', backgroundColor:'rgba(54, 52, 53, 1)',
       position:'absolute', top:hp('103%')}}>
        </TouchableOpacity>
    </View>
  );
}