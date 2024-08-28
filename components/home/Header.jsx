import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


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
            padding:10,
            marginVertical:10,
            marginTop:15,
            borderRadius:8,

        }}>
            <View style={styles.container}>
                    <Ionicons name="search" size={24} color={Colors.PRIMARY6} style={styles.icon} />
                    <GooglePlacesAutocomplete
                        placeholder='Enter your Location'
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                        
                        console.log(data.description);
                        console.log(details?.geometry.location)
                        console.log(details?.url)
                        }}
                        query={{
                        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY, // Replace with your actual API key
                        language: 'en',
                        }}
                        styles={{
                        container: styles.autocompleteContainer,
                        textInput: [styles.textInput], // Apply color here
                        }}
                    />
            </View>

        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      zIndex:1,
      position:'static'

    },
    icon: {
        color:Colors.PRIMARY6
    },
    autocompleteContainer: {
      flex: 1,
      marginHorizontal: 0,


    },
    textInput: {
      height: 40,
      borderColor:Colors.PRIMARY6,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10, // Ensure there's padding for the text input
      fontSize: 16,
      backgroundColor:Colors.PRIMARY6,
      fontFamily:'Bodoni-Medium',
    },
    
    
    
    
})