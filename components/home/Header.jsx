import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {

    const {user}=useUser();
  return (
    <View style={{
        padding:20,
        paddingTop:45,
        backgroundColor:Colors.PRIMARY8,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:10
        }}>
            <Image source={{uri:user?.imageUrl}}
                style={{
                    width:45,
                    height:45,
                    borderRadius:99
                }}
            />

            <View>
                <Text style={{
                    color:Colors.PRIMARY6,
                    fontFamily:'Bodoni-Medium'
                }}>Welcome,</Text>
                <Text style={{
                    fontSize:19,
                    fontFamily:'Bodoni-Medium',
                    color:Colors.PRIMARY6
                }}>{user?.fullName}</Text>
            </View>
        </View>

        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:10,
            alignItems:'center',
            backgroundColor:Colors.PRIMARY7,
            padding:10,
            marginVertical:10,
            marginTop:15,
            borderRadius:8
        }}>
            <Ionicons name="search" size={24} color={Colors.PRIMARY8} />
            <TextInput placeholder='Search...'
                style={{
                    fontFamily:'Bodoni',
                    fontSize:15
                }}
            />
        </View>
    </View>
  )
}