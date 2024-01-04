import { View, Text, Dimensions,Image,StyleSheet, TouchableOpacity,  } from 'react-native'
import React, { useState } from 'react'

const wh = Dimensions.get('window').height

const arr = [
    {
        image: require('../../assets/images/pack1.png'),
        title: "dried apricots",
        price: '$9.43/ 300g',
        id:1,
    },
    {
        image: require('../../assets/images/pack2.png'),
        title: "dried apricots",
        price: '$9.43/ 300g',
        id:1,
    },
    {
        image: require('../../assets/images/pack3.png'),
        title: "dried apricots",
        price: '$9.43/ 300g',
        id:1,
    },
    {
        image: require('../../assets/images/pack4.png'),
        title: "dried apricots",
        price: '$9.43/ 300g',
        id:1,
    },
]

export default function Home() {
    const [img , setImg]= useState(0)
  return (
    <>
<View style={styles.box_1}>
<Image style={styles.icon} source={require('../../assets/images/infography.gif')}/>
<Image style={styles.icon} source={require('../../assets/images/shopping-bag.gif')}/>
</View>
<View style={styles.box_2} >
    <Text style={styles.txt_1}>Hi , shweta🤗</Text>
    <Text style={styles.txt_2}>what's today's taste?🤔</Text>
</View>
<View style={styles.box_3}>
<Image style={styles.icon1} source={require('../../assets/images/dried-fruits-removebg-preview.png')}/>
<Image style={styles.icon2} source={require('../../assets/images/nuts-removebg-preview.png')}/>
<Image style={styles.icon} source={require('../../assets/images/search.gif')}/>
</View>
<View style={styles.box_4}>
    <View style={styles.circle}>
        <TouchableOpacity onPress={()=>{Navigation.navigate('shopping', arr[img])}} style={[styles.cc , styles.c1]}>
        <Image style={[styles.img , styles.img1]} source={arr[img].image}/>
        </TouchableOpacity>
        {/* <View style={[styles.cc , styles.c1]}>
            <Image style={[styles.img , styles.img1]} source={arr[img].image}/>
        </View> */}
        <View style={[styles.cc , styles.c2]}>
            <Text style={[styles.ctxtcc , styles.ctxt1]}>
             {arr[img].title}
            </Text>
            <Text style={styles.ctxtcc}>
            {arr[img].price}
            </Text>
            <Text style={styles.ctxtcc}>
               ⭐⭐⭐⭐
            </Text>
            <View style={[styles.ctxtcc , styles.cart]}>
                <Image style={[styles.img , styles.img_cart]} source={require('../../assets/images/shopping-cart.gif')}/>
                <Text style={styles.txt_cart}>add to cart</Text>
            </View>
        </View>
        <View style={[styles.cc , styles.c3]} >
            <View style={styles.heart}>
            <Image style={[styles.img , styles.img_heart]} source={require('../../assets/images/heartbeat.gif')}/>
            </View>
        </View>
    </View>
</View>
<View style={styles.box_5} >
<TouchableOpacity onPress={()=>{setImg(0)}} style={[styles.img_box, img == 0? styles.active_2:'']}>
    <Image style={[styles.imgbox, img==0? styles.active_1:'']} source={arr[0].image}/>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{setImg(1)}} style={[styles.img_box, img == 2? styles.active_2:'']}>
    <Image style={[styles.imgbox, img==1? styles.active_1:'']} source={arr[2].image}/>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{setImg(2)}} style={[styles.img_box, img == 2? styles.active_2:'']}>
    <Image style={[styles.imgbox, img==2? styles.active_1:'']} source={arr[2].image}/>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{setImg(3)}} style={[styles.img_box, img == 3? styles.active_2:'']}>
    <Image style={[styles.imgbox, img==3? styles.active_1:'']} source={arr[3].image}/>
</TouchableOpacity>
</View>
    </>
  )
}

const styles = StyleSheet.create({
    box_1:{
        height:wh/8,
        backgroundColor:'#fff',
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',

    },
    box_2:{
        height:wh/8,
        backgroundColor:'#fff',
        padding:20,
    },
    box_3:{
        height:wh/8,
        backgroundColor:'#fff',
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    box_4:{
        height:wh/2,
        backgroundColor:'#fff',
        padding:20,
        justifyContent:'center',
        alignItems:'center',
    },
    box_5:{
        height:wh/6,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:'#fff',
        
    },
    icon:{
        width:60,
        height:'100%'
    },
    icon1:{
        width:50,
        height:'100%',
        borderRadius:50,
        marginLeft:-10,
    },
    icon2:{
        width:50,
        height:'100%',
        borderRadius:50,
        marginLeft:-60,
    },
    txt_1:{
        color:'#1f1613',
        textTransform:'capitalize',
        marginBottom:5,
    },
    txt_2:{
        color:'#1f1613',
        textTransform:'capitalize',
        fontWeight:'600',
    },
    circle:{
        backgroundColor:"#ff9859",
        borderRadius:300,
        width:wh/3,
        height:wh/3,
        position:'relative',
        elevation:5,
        flexDirection:'row'
    },
    cc:{
        height:'100%'
    },
    c1:{
        width:wh/10,
        flexDirection:'column',
        alignItems:"center",
        justifyContent:'center',
    },
    c2:{
       width:wh/7,
       justifyContent:'space-evenly',
       paddingVertical:30,
    },
    c3:{
        width:wh/10,
        justifyContent:'center',
        alignItems:'flex-end',
        transform:[{translateX:10}],
       
        
    },
    img:{
        width:70,
        height:'100%',
    },
    img1:{
        width:90,
        height:wh/6,
        transform:[{translateX:-20}]
    },
    img_heart:{
        width:30,
        height:30,
    },
    img_box:{
        width:70,
        height:70,
        borderRadius:70,
        backgroundColor:'#eae1d5',
        justifyContent:'center',
        alignItems:'center',
        elevation:2,
    },
    imgbox:{
        width:50,
        height:50,
        resizeMode:'contain'
       
    },
    heart:{
        width:30,
        height:30,
        borderRadius:30,
        overflow:'hidden',
        justifyContent:'center',

    },
    ctxtcc:{
        color:'#f6f6eb',
        textTransform:'capitalize',
    },
    ctxt1:{
        fontWeight:'900',
        fontSize:wh/50,
        width:wh/5,
    },
    cart:{
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:"center",
        padding:5,
        width:wh/6,
        borderRadius:300,
        paddingRight:20,
        height:wh/20,
        overflow:'hidden',
        elevation:5,
    },
    txt_cart:{
        textTransform:'capitalize',
    },
    img_cart:{
        width:40,
        height:40,
    },
    active_1:{
        transform:[{scale:1.4}],
    },
    active_2:{
        backgroundColor:'#ff9859',
    }
})