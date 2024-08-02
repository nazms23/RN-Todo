import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React, {useState} from 'react'

const ListeOgesi = ({title}) => {
    const [isTiklandi, setIsTiklandi] = useState(false)
return (
    <Pressable style={[{height: isTiklandi ? 100 : 50},styles.div]} onPress={()=>{ title.length > 28 && setIsTiklandi(!isTiklandi)}}>
    
    <View style={styles.checkboxbox}>
        <Pressable style={[{height: isTiklandi ? '40%' : '80%'},styles.checkbox]}>
            <Image
                source={require('../../assets/resim/checkbos.png')}
                style={styles.checkboxresim}
                
                />
        </Pressable>
    </View>
    <View style={styles.yazibox}>
        <Text style={styles.yazi}>{(title.length > 28) && !isTiklandi ?  title.slice(0,28)+"..." : title}</Text>
    </View>
    </Pressable>
  )
}
//28 Satır sığıyor harf
export default ListeOgesi

const styles = StyleSheet.create({
    div:{
        backgroundColor:"#C33240",
        width:'100%',
        borderRadius:15,
        marginTop:10,
        justifyContent:'flex-start',
        flexDirection:'row'
    },
    checkboxbox:{
        width:'10%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5
    },
    checkbox:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    checkboxresim:{
        width:'100%',
        height:'100%',
        resizeMode:'stretch'
    },
    yazibox:{
        width:'90%',
        justifyContent:'center',
        paddingRight:10
    },
    yazi:{
        fontSize:20,
        color:'white',
    }


})