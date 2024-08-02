import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import Headerim from './src/component/headerim';
import Liste from './src/component/Liste';
import Yapilanlar from './src/component/Yapilanlar';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isyeniekle, setisyeniekle] = useState(false)



  const _storeData = async (deger) => {
    console.log("eklemeyebas")
    const jsonValue = JSON.stringify(deger);
    try {
    console.log("ekliyo "+jsonValue)

      await AsyncStorage.setItem(
        'Yapilcaklar',
        jsonValue,
      );
    console.log("ekledi")

    } catch (error) {
      // Error saving data
    console.log("hata")

    }
  };

  _retrieveData = async () => {
    console.log("getirmeyebas")
    try {
    console.log("deniyo")
      const value = await AsyncStorage.getItem('Yapilcaklar');
      if (value !== null) {
        setdataa(JSON.parse(value))
        console.log("buldu")
        
        console.log("DEGERİ " + value);
        //return JSON.parse(value,true)
      }
      else
      {

    console.log("bulamadı")
        //return []
      }
    } catch (error) {
      // Error retrieving data
    console.log("hata")

    }
  };
/*   const storeData = async (value,key) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("key", "jsonValue");
    } catch (err) {
      console.log("Error ",err)
    }
  }; */

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (err) {
      console.log("Error ",err)
    }
  };
  

  const dataekle =async(isimi,idi) =>{
    await dataa.push({isim:isimi,id:idi})
    await setdataa(dataa)
    await _storeData(dataa);
    setYeniyapilcak("")

  }

  const [dataa, setdataa] = useState([])
  
  const [yeniyapilcak, setYeniyapilcak] = useState("")
  
  return (
    <SafeAreaView style={styles.container}>
      <Headerim flex={1} butontikla= {()=>{setisyeniekle(!isyeniekle)}} />
      <View style={[{display: isyeniekle ? 'flex' :'none'},styles.yenieklebox]}>
      <TextInput style={styles.yeniekletextinput} onChangeText={setYeniyapilcak} value={yeniyapilcak} />
      <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#CF473C': '#CA3E47'},styles.yenieklebutonbox]} 
        onPress={()=>{
        dataekle(yeniyapilcak, (dataa.length != 0) ? (dataa[(dataa.length-1)].id+1) : 1);

      }} >
        <Text style={styles.yeniekletext}>Ekle</Text>
      </Pressable>
      </View>
      <View style={{flex:7}}>
      <Liste dataaa={dataa}/>
      {console.log(dataa)}
      <Yapilanlar/>
      </View>
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    justifyContent: 'space-evenly',
  },
  yenieklebox:{
    width:'100%',
    height:75,
    borderBottomWidth:2,
    borderColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  yeniekletextinput:
  {
    height:'80%',
    flex:4,
    backgroundColor:'#D13555',
    fontSize:20,
    color:'white',
    borderRadius:20,
    padding:5,
    marginHorizontal:10
  },
  yenieklebutonbox:{
    flex:1,
    height:'80%',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    marginRight:10
  },
  yeniekletext: {
    fontSize:19,
    color:'white'
  }
});
