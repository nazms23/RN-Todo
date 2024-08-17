import { StyleSheet, Text, View,Pressable,Image,TextInput } from 'react-native'
import React, {useState} from 'react'
import {Swipeable,GestureHandlerRootView} from 'react-native-gesture-handler'

const ListeOgesi = ({title, yapildifonks,silfonks,editfonks,idsi}) => {
    const [isTiklandi, setIsTiklandi] = useState(false)

    const [editmod, setEditmod] = useState(false)

    const [textboxgorunurluk, settextboxgorunurluk] = useState("none")
    const [textgorunurluk, settextgorunurluk] = useState("flex")

    const [textboxyazi, settextboxyazi] = useState(title)


    const fonksiyon = yapildifonks;

    const silfonk = silfonks;
    
    const editfonk = editfonks;

    const edittusu = async ()=> {
      let editmodu = !editmod
      setEditmod(!editmod);

      if(editmodu)
      {
        settextboxgorunurluk('flex')
        settextgorunurluk('none')
      }
      else
      {
        settextboxgorunurluk('none')
        settextgorunurluk('flex')
      }
    }

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

    renderRightActions = (progress, dragX) => {
      const trans = dragX.interpolate({
        inputRange: [0, 50, 100, 101],
        outputRange: [-20, 0, 0, 1],
      });
      return (
        <Pressable style={[styles.silbuton,{backgroundColor:"#89c332"}]} onPress={edittusu}>
          <View style={styles.silbutonresimdiv}>
          <Image
            source={require('../../assets/resim/editing.png')}
            style={styles.silbutonresim}
            />
          </View>
        </Pressable>
       
      );
    };
    

    const textboxyazidegisti = async (text)=>{
      settextboxyazi(text);
      await editfonk(idsi,text)
    }
    

    

return (
  <GestureHandlerRootView>
    <Swipeable renderLeftActions={renderLeftActions} renderRightActions={renderRightActions}  >

    
    <Pressable style={[{height: isTiklandi ? 100 : 50},styles.div, editmod ? {backgroundColor:"#89c332"} : {backgroundColor:"#C33240"}]} onPress={()=>{ (textboxyazi.length > 28) & !editmod && setIsTiklandi(!isTiklandi)}}>
    

    
    <View style={styles.checkboxbox}>

        <Pressable style={[{height: isTiklandi ? '40%' : '80%'},styles.checkbox]} onPress={()=> fonksiyon(idsi)}>
            <Image
                source={require('../../assets/resim/checkbos.png')}
                style={styles.checkboxresim}
                
                />
        </Pressable>
    </View>
    <View style={styles.yazibox}>
        <Text style={[styles.yazi,{display:textgorunurluk}]}>{(textboxyazi.length > 28) && !isTiklandi ?  textboxyazi.slice(0,28)+"..." : textboxyazi}</Text>
        <TextInput style={[styles.yazi,{display:textboxgorunurluk}]} value={textboxyazi} onChangeText={textboxyazidegisti} />
    </View>
    </Pressable>

    </Swipeable>
  </GestureHandlerRootView>
  )
}
//28 Satır sığıyor harf
export default ListeOgesi

const styles = StyleSheet.create({
    div:{
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
    }


})