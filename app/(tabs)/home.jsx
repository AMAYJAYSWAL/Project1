import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/home/Header'
import Slider from '../../components/home/Slider'
import Category from '../../components/home/Category'

export default function home() {
  return (
    <View>
      <Header/>
      <Slider/>
      <Category/>
    </View>
  )
}