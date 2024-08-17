import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React, {useState} from 'react'
import {Swipeable,GestureHandlerRootView} from 'react-native-gesture-handler'

const YapildiOgesi = ({title, yapilmadifonks,silfonks,idsi}) => {
    const [isTiklandi, setIsTiklandi] = useState(false)

    const fonksiyon = yapilmadifonks
    const silfonk = silfonks

    renderLeftActions = (progress, dragX) => {
        const trans = dragX.interpolate({
          inputRange: [0, 50, 100, 101],
          outputRange: [-20, 0, 0, 1],
        });
        return (
          <Pressable style={styles.silbuton} onPress={()=>{silfonk(idsi)}}>
            <View style={styles.silbutonresimdiv}>
            <Image
              source={require('../../assets/resim/trash-can.png')}
              style={styles.silbutonresim}
              />
            </View>
          </Pressable>
         
        );
      };

return (
    <GestureHandlerRootView>
    <Swipeable renderLeftActions={renderLeftActions} >
    <Pressable style={[{height: isTiklandi ? 100 : 50},styles.div]} onPress={()=>{ title.length > 28 && setIsTiklandi(!isTiklandi)}}>
    
    <View style={styles.checkboxbox}>

        <Pressable style={[{height: isTiklandi ? '40%' : '80%'},styles.checkbox]} onPress={()=> fonksiyon(idsi)}>
            <Image
                source={require('../../assets/resim/checkdolu.png')}
                style={styles.checkboxresim}
                
                />
        </Pressable>
    </View>
    <View style={styles.yazibox}>
        <Text style={styles.yazi}>{(title.length > 28) && !isTiklandi ?  title.slice(0,28)+"..." : title}</Text>
    </View>
    </Pressable>
    </Swipeable>
    </GestureHandlerRootView>
  )
}
//28 Satır sığıyor harf
export default YapildiOgesi

const styles = StyleSheet.create({
    div:{
        backgroundColor:"#C33240",
        width:'100%',
        borderRadius:15,
        marginTop:10,
        justifyContent:'flex-start',
        flexDirection:'row'
    },
    silbuton:{
        backgroundColor:"crimson",
        borderRadius:15,
        marginTop:10,
        borderColor:'black',
        borderWidth:2,
        width:'15%',
        justifyContent:'center',
        alignItems:'center',
      },
      silbutonresim:{
        width:'100%',
        height:'100%',
        resizeMode:'center',
      },
      silbutonresimdiv:{
        width:"80%",
        height:"80%",
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
        textDecorationLine:'line-through',
    }


})