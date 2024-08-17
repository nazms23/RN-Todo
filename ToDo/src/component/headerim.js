import React from 'react'
import {Pressable, StyleSheet, Text, View } from 'react-native'

const headerim = ({flex,butontikla}) => {
  return (
    <View style={[{
      flex: flex
    }, styles.div]}>
      <Pressable style={
        ({pressed}) => [{
          backgroundColor: pressed ? '#CF473C': '#CA3E47'
        }, styles.yenieklebuton]
      }
      
      onPress={butontikla}

      >
        <Text style={styles.yeniekletext}>Yeni Ekle</Text>
      </Pressable>
      <View style={styles.todobox}>
      <Text style={styles.todotext}>TO DO</Text>
      </View>
    </View>
  )
}

export default headerim

const styles = StyleSheet.create({
  div: {
    width: '100%',
    borderWidth:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    backgroundColor: '#CE4A55',
  },
  yenieklebuton:{
    height: '60%',
    width: '20%',
    borderWidth: 2,
    alignItems: 'center',
    borderRadius:20,
    justifyContent:'center',
    //marginTop: '6%',
    marginLeft:10
  },
  todotext:{
    color:'white',
    fontSize:30
  },
  yeniekletext:{
    color:'white',
  },
  todobox:
  {
    width: '100%',
    alignItems:'center',
    justifyContent:'center',
    //marginTop: '6%'


  }
})