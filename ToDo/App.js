import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import Headerim from './src/component/headerim';
import Liste from './src/component/Liste';
import Yapilanlar from './src/component/Yapilanlar';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [dataa, setdataa] = useState({"yapilacaklar":[]})
  
  useEffect(()=>{
    const getir = async()=>{
      let da = await vericek();
      setdataa(da)
      
      
    }
    getir()
    
  }, [])

  const [isyeniekle, setisyeniekle] = useState(false)


  async function vericek()
  {
    let veri = await AsyncStorage.getItem("deneme")
    if(veri == undefined)
    {
      veri = JSON.stringify({"yapilacaklar":[]})
    }
    setdataa(JSON.parse(veri))
    //console.log("veri",veri)
    return JSON.parse(veri)
  }

  const eklencek = async ()=>{
    await AsyncStorage.setItem("deneme",JSON.stringify(dataa))
    // 0 lama kodu
    //await AsyncStorage.setItem("deneme",JSON.stringify({"yapilacaklar":[]}))
    
  }

  

  async function dataekle(isimi,idi)
  {
    await dataa.yapilacaklar.push({isim:isimi,id:idi,yapildi:false})
    setdataa(dataa)
    await eklencek();
    setYeniyapilcak("")

  }


  const yapildiisaretle = async (id) => {
    await dataa.yapilacaklar.map(i => {
      if(i.id == id)
      {
        i.yapildi = true;
      }
    })
    setdataa(dataa)
    await eklencek();
    await vericek();
  }

  const yapilmadiisaretle = async (id) => {
    await dataa.yapilacaklar.map(i => {
      if(i.id == id)
      {
        i.yapildi = false;
      }
    })
    setdataa(dataa)
    await eklencek();
    await vericek();
  }

  const silme = async (id) => {
    await dataa.yapilacaklar.splice(dataa.yapilacaklar.findIndex(i=> i.id == id),1)
    setdataa(dataa)
    await eklencek();
    await vericek();
  }

  const yaziedit = async (id, text) => {
    dataa.yapilacaklar.find(i=> i.id == id).isim = text;
    setdataa(dataa)
    await eklencek();
    await vericek();
  }

  

  const [yeniyapilcak, setYeniyapilcak] = useState("")
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>
      <Headerim flex={1} butontikla= {()=>{setisyeniekle(!isyeniekle)}} />
      <View style={[{display: isyeniekle ? 'flex' :'none'},styles.yenieklebox]}>
      <TextInput style={styles.yeniekletextinput} onChangeText={setYeniyapilcak} value={yeniyapilcak} />
      <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#CF473C': '#CA3E47'},styles.yenieklebutonbox]} 
        onPress={()=>{

        yeniyapilcak.length != 0 && dataekle(yeniyapilcak, (dataa.yapilacaklar != undefined) && ((dataa.yapilacaklar.length != 0) ? (dataa.yapilacaklar[(dataa.yapilacaklar.length-1)].id+1) : 1));

      }} >
        <Text style={styles.yeniekletext}>Ekle</Text>
      </Pressable>
      </View>
      <View style={{flex:7}}>
      <Liste dataaa={dataa.yapilacaklar.filter(veri => !veri.yapildi)} yapildifonk={yapildiisaretle} silfonk={silme} editfonk={yaziedit} />
      {//console.log("yapilcaklar",typeof(dataa.yapilacaklar),dataa.yapilacaklar)
      }
      {//console.log("data ",dataa)
      }
      {dataa.yapilacaklar.filter(veri => veri.yapildi).length != 0 && <Yapilanlar dataaa={dataa.yapilacaklar.filter(veri => veri.yapildi)} yapilmadifonk={yapilmadiisaretle} silfonk={silme} />
      }
      
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
