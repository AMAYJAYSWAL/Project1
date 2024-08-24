import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import {useWarmUpBrowser} from './../hooks/useWarmUpBrowser'
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const {startOAuthFlow}=useOAuth({strategy:'oauth_google'});

  const onPress=React.useCallback(async()=>{
    try{
      const {createdSessionId,signIn,signUp,setActive}=
        await startOAuthFlow();

      if(createdSessionId){
        setActive({ session:createdSessionId});
      }else{

      }
    }catch(err){
      console.error('OAuth error',err);
    }
  },[])
  return (
    <View>
      <View style={{
        display:'flex',
        alignItems:'center',
        marginTop:100
      }}>
      <Image source={require('./../assets/images/image1.jpg')}
        style={{
          width:220,
          height:450,
          borderRadius:20,
          borderWidth:3,
          borderColor:'#000'
        }}
      />
      </View>

      <View style={styles.subContainer}>
        <Text style={{
          fontSize:30,
          fontFamily:'Bodoni-Bold',
          textAlign:'center',
          color:'#2E8B57'
        }}>Your Home, Our Expertise</Text>

        <Text style={{
          fontSize:20,
          fontFamily:'Bodoni-Medium',
          textAlign:'center',
          marginVertical:15,
          color:'#000'
        }}> Discover the beauty of a well maintained home</Text>

        <TouchableOpacity style={styles.btn}
          onPress={onPress}
        >
          <Text style={{
            textAlign:'center',
            color:'#fff',
            fontFamily:'Bodoni',
            fontSize:15
          }}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  subContainer:{
    backgroundColor:'#fff',
    padding:20,
    marginTop:-20
  },
  btn:{
    backgroundColor:'#000',
    padding:16,
    borderRadius:99,
    marginTop:20
  }
})
