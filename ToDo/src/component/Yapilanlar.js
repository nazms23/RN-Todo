import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React from 'react'
import YapildiOgesi from './YapildiOgesi'

const Yapilanlar = ({dataaa, yapilmadifonk, silfonk}) => {
  return (
    <ScrollView style={[{
        
      }, styles.div]}>
    <View style={styles.yapilanbox}>
        <Text style={styles.yapilantext}>YAPILANLAR</Text>
    </View>
    {dataaa != undefined && dataaa.length > 0 && dataaa.map((veri)=>{
        return (<YapildiOgesi title={veri.isim} key={veri.id} idsi={veri.id} yapilmadifonks={yapilmadifonk} silfonks={silfonk} />)
    })}

    </ScrollView>
  )
}

export default Yapilanlar

const styles = StyleSheet.create({
    div: {
        width: '100%',
        borderWidth:1,
        height: '40%',
      },
    yapilanbox:{
        width:'100%',
        borderTopWidth:2,
        borderColor:'white',
        alignItems:'center'  
    },
    yapilantext:{
        color:'white',
        marginVertical:10,
        fontSize:20
    }
})