import React, {useEffect, useState} from 'react';
import { TouchableWithoutFeedback} from 'react-native';
import { View, Text, StyleSheet,ActivityIndicator, StatusBar } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [val,setVal]=useState(0);
  useEffect(() => {
    setInterval(()=>{if(val<360){
      setVal(val+125)
    }
    else {
      setVal(0);
    }},500) 
  }, []);
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo:{
    width: 150,
    height: 150,
    marginBottom:150,
    marginTop:150
  },
});
	return (
		<TouchableWithoutFeedback onPress={() => navigation.navigate("Tip")}>
      
			<View style={styles.container}>
      <View style={{width:136,height:136,backgroundColor:'#01B4E60A', borderRadius:100
      ,position:'absolute', left:327, top:-44}}></View>
        
      <View style={{width:136,height:136,backgroundColor:'#18567F0A', borderRadius:100
      ,position:'absolute', left:-89, top:113}}></View>
      
      <View style={{width:136,height:136,backgroundColor:'#18567F0A', borderRadius:100
      ,position:'absolute', left:319, top:576}}></View>
      <StatusBar hidden={true}/>
				<Image source={require("../../assets/logo.png")} style={styles.imageLogo} />
				
        <Image source={require('../../assets/splash_ring.png')} style={{transform: [{rotate: val+'deg'}]}}/>        
			
        <TouchableOpacity style={{width:124, height:5, borderRadius:5, backgroundColor:'rgba(54, 52, 53, 1)', position:'absolute', top:'96%'}}>
        </TouchableOpacity>
      </View>
		</TouchableWithoutFeedback>
	);
}


