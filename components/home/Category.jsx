import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, doc, getDocs, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import CategoryItem from './CategoryItem'

export default function Category() {

    const [categoryList, setCategoryList]=useState([]);
    useEffect(()=>{
        GetCategoryList();
    },[])
    const GetCategoryList=async()=>{
        const q=query(collection(db,'Category'));
        const querySnapshot=await getDocs(q);
        querySnapshot.forEach((doc)=>{
            console.log(doc.data());
            setCategoryList(prev=>[...prev,doc.data()])
        })
    }
  return (
    <View>
        <View style={{
            padding:20,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:10,
            alignItems:'center'
        }}>
        <Text style={{
            fontSize:20,
            fontFamily:'Bodoni-Bold',
            }}>Category</Text>

            <Text style={{
                color:Colors.PRIMARY8,
                fontFamily:'Bodoni-Medium'
            }}>View all</Text>
        </View>

        <FlatList
            data={categoryList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
                marginLeft:20
            }}
            renderItem={({item,index})=>(
                <CategoryItem 
                category={item}
                key={index}
                onCategoryPress={(category)=>console.log(category)}/>
            )}
        />
    </View>
  )
}