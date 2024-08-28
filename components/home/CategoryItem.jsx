import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function CategoryItem({category,onCategoryPress}) {
  return (
    <TouchableOpacity 
        onPress={()=>onCategoryPress(category)}
    
    style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:5,
        marginHorizontal:10
    }}>
        <View style={{
            padding:15,
            backgroundColor:Colors.PRIMARY6,
            borderRadius:15,
            marginRight:0,
            gap:20
        }}>
            <Image source={{uri:category.icon}}
                style={{
                    width:40,
                    height:40
                }}
            />
        </View>
        <Text style={{
            
            fontSize:12,
            fontFamily:'Bodoni-Medium',
            textAlign:'center'
        }}>{category.name}</Text>
    </TouchableOpacity>
  )
}