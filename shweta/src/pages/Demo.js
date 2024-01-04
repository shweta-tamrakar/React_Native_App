import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';



export default function Home({navigation , route}) {
  const obj = route.params

 

  
  return (
    <>
    <View style = {styles.container}>
    <TouchableOpacity onPress={()=> navigation.navigate('Front')} >
    <AntDesign  style = {styles.icon} name="arrowleft" size={34} color="white" />
      
    </TouchableOpacity>
    </View>
   
   
  
    <View style = {styles.img}>
      <View style = {styles.img1}>
      <Image style = {styles.img1} source={obj.image}></Image>
      </View>
      <View style = {styles.img1}>
      <Image style = {styles.img1} source={obj.image}></Image>

      </View>

    </View>
    <View style = {styles.description}>
    <View style = {styles.title}>
      <Text style = {{fontSize:30, fontWeight:'700', color:'whitesmoke'}}>{obj.title}</Text>

      
    </View>
    <View style = {styles.star}>
      <Text style = {styles.txt}>Artificial selection - taste sweet</Text>
     
      <Text style = {styles.txt}>⭐⭐⭐⭐⭐</Text>
    </View>
    <View>
      <Text style = {{fontSize:20,
      paddingHorizontal:10,
      color:"whitesmoke",
      marginBottom:5}}>
        Capicity
      </Text>
     <View style = {{flexDirection:'row' , justifyContent:'space-evenly'}}>
     <View style = {styles.box}><Text  style = {styles.boxtxt}>calories</Text>
     <Text style = {{fontSize:20, paddingHorizontal:5, color:'whitesmoke'}}>98</Text></View>
      <View style = {styles.box}>
      <Text style = {styles.boxtxt}>Additive</Text>
      <Text style = {{fontSize:20, paddingHorizontal:5, color:'whitesmoke'}}>3%</Text></View> 
      <View style = {styles.box}>
        <Text style = {styles.boxtxt}>Vitamin</Text>
        <Text style = {{fontSize:20, paddingHorizontal:5, color:'whitesmoke'}}>8%</Text></View>
     </View>
    </View>
    </View>
    <View style = {styles.price}>
      <View style = {styles.price1}>
      <Text>Quantity(300gm)</Text>
      <View style = {styles.arrow}>
      <View >
        <Text style = {{borderRadius:50,backgroundColor:'whitesmoke', paddingHorizontal:60}}>1</Text>
      </View>
      <View><Text>$9.8</Text></View>
      </View>
      </View>
      
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:.1,
    backgroundColor:'#ff9859',

  },
  icon:{
    marginVertical:10,

  paddingHorizontal:10,

  },
  img:{
    flex:.3,
    backgroundColor:'#ff9859',
    flexDirection:'row'


  },
  img1:{
    height:250,
    width:200,
    resizeMode:'contain',
  
  },
  description:{
    flex:.3,
    backgroundColor:'#ff9859',
  }
  ,
  title:{
   
    paddingHorizontal:10,
  },
  star:{
    flexDirection:'row',
  
    
   
  },

  txt:{
    color:'whitesmoke',
    fontSize : 13,
    paddingHorizontal:10,

  },
  box:{
    height:75,
    width:75,
    borderWidth:2,
    borderColor:'white',
    marginVertical:10,
  
  },
  boxtxt:{
    fontSize:12,
    textAlign:'center',
    color:'whitesmoke',
    fontWeight:'600',
    marginVertical:5,
    
  },
  arrow:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  price:{
    backgroundColor:'#ff9859',
    flex:.2,
  /*   borderRadius:30, */
  },
  price1:{
    backgroundColor:'#fff',
  
    borderRadius:30,
  }
})