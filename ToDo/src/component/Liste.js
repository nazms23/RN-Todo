import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import ListeOgesi from './ListeOgesi'


const Liste = ({dataaa}) => {
    console.log(dataaa)
  return (
    <ScrollView style={[{
      }, styles.div]}>
    
    {dataaa.length > 0 && dataaa.map((veri)=>{
        return (
        <ListeOgesi title={veri.isim}/>
        )
    })}
    
    </ScrollView>
  )
}

export default Liste

const styles = StyleSheet.create({
    div: {
        width: '100%',
        height: '60%',
        borderWidth:1
      }
})