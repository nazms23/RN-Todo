import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ListeOgesi from './ListeOgesi'


const Liste = ({dataaa, yapildifonk, silfonk,editfonk}) => {
  return (
    <ScrollView style={[{
      }, styles.div]}>
    
    {dataaa != undefined && dataaa.length > 0 && dataaa.map((veri)=>{
        return (<ListeOgesi title={veri.isim} key={veri.id} idsi={veri.id} yapildifonks={yapildifonk} silfonks={silfonk} editfonks={editfonk} />)
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