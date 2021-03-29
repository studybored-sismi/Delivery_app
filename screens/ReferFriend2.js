import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useTheme } from 'react-native-paper'


const ReferFriend2 = ({navigation}) =>{
    const { colors } = useTheme()
    const theme = useTheme()
  
    return(
        <View style={{paddingTop:50,backgroundColor:"#f5fffa",paddingBottom:300}}>
          
          <View style={{flexDirection:'row'}}>
            <Icons name="arrow-back" size={30} style={{marginLeft:20,marginRight:20,color:"#FDC913"}}></Icons>
            <Text style={[styles.friend,{color:colors.text}]}>Refer a Friend</Text>
            </View>
            <View style={[styles.view5,{backgroundColor:colors.card}]}>
                <Text style={[styles.refer,{color:colors.text}]}>Refer your friend to join</Text>
                <TouchableOpacity style={{ paddingTop: 5 }} onPress={() =>navigation.navigate("ReferFriend")}>
                            <Text style={{
                                backgroundColor:colors.primary,fontSize:15,fontWeight:'700',
                                color: "white", height: 38, paddingTop: 8, 
                                paddingLeft: 35, paddingRight: 20, paddingBottom: 10,
                                 borderRadius: 20, width: "50%", marginLeft:85,marginTop:20
                            }}>REFER NOW</Text>
                        </TouchableOpacity>
            </View>

            <Text style={[styles.your,{color:colors.text}]}>Your Referrals</Text>
           
            <View style={[styles.view4,{backgroundColor:colors.card}]}>
                <Text style={{marginLeft:15,fontSize:16,color:colors.text,fontFamily:"OpenSansRegular",}}>Friend's Name</Text>
                <Text style={{marginLeft:15,fontSize:16,marginTop:10,color:colors.text,fontFamily:"OpenSansRegular",}}>Date, Time</Text>
            </View>

            <View style={[styles.view4,{backgroundColor:colors.card}]}>
                <Text style={{fontSize:16,marginLeft:15,color:colors.text,fontFamily:"OpenSansRegular",}}>Friend's Name</Text>
                <Text style={{marginLeft:15,fontSize:16,marginTop:10,color:colors.text,fontFamily:"OpenSansRegular",}}>Date, Time</Text>
            </View>
           
        </View>
    )
        
}

export default ReferFriend2;

const styles= StyleSheet.create({
    input:{
        borderColor:"#696969",
       // borderWidth:1,
       marginTop:2,
       marginLeft:45,
       width:"80%",
       borderRadius:2,
       //backgroundColor:"white",
       borderBottomWidth:1   
   
    },
    view5: {
      marginBottom: 40,
      marginLeft: 17,
      height: 140,
      width: "90%",
      backgroundColor: "white",
      borderRadius: 10,
      elevation: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      // paddingLeft: 120,
      paddingTop:20,
      marginTop:20,
      marginRight:30,
      paddingRight:20
      //flexDirection:'row'

  },
  view4: {
    marginBottom: 0,
    marginLeft: 17,
    height: 100,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // paddingLeft: 120,
    paddingTop:20,
    marginTop:20,
    marginRight:30,
    paddingRight:20
    //flexDirection:'row'

},
friend:{
    fontSize:30,
    marginBottom:30,
    color:"#696969",
    fontFamily:"OpenSansBold"
},
refer:{
    paddingLeft:30,
    fontSize:18,
    color:"#696969",
    fontFamily:"OpenSansSemiBold"
},
your:{
    fontSize:18,
    marginLeft:25,
    color:"#696969",
    fontFamily:"OpenSansSemiBold",
}

})