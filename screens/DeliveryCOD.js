import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar,ScrollView } from 'react-native'
import { RadioButton, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'

const DeliveryCOD = ({ navigation }) => {
    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            
            <View style={styles.textcontainer}>
            <TouchableOpacity>
                    <Icon1 name="arrow-back" size={30} color="#FDC913" onPress={()=>navigation.goBack()} style={styles.menu} />
                </TouchableOpacity>
                <Text style={[styles.text,{color:colors.text}]}>Deliver</Text>
            </View>
            <View style={[styles.input,{backgroundColor:colors.card}]}>
                <View style={[styles.cod,{backgroundColor:colors.card}]}>
                    <Text style={[styles.text1,{color:colors.text}]}>Collect Rs. 300 from Customer</Text>
                    <TouchableOpacity style={styles.codtouch} onPress={()=>navigation.navigate("CashonDelivery")}>
                        <Text style={[styles.codtext,{backgroundColor:colors.primary}]}>Collect Cash</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pad}></View>
                <View style={styles.inputcontainer}>
                    <View style={styles.iconcontainer}>
                        <Icon style={styles.icon} name="delivery-dining" size={25} style={{color:colors.text,paddingRight:10}} />
                        <Text style={[styles.res,{color:colors.text}]}>Customer Name</Text>
                    </View>
                    <Text style={[styles.add,{color:colors.text}]}>Address</Text>

                    <View style={styles.detail}>
                        <View style={[styles.detailcontainer,{backgroundColor:colors.card}]}>
                            <Text style={[styles.order,{color:colors.text}]}>Order Details</Text>
                            <View>
                                <Text style={[styles.item,{color:colors.text}]}>1 * Milkshake</Text>
                                <Text style={[styles.item,{color:colors.text}]}>1 * Burger</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.padbutton}>
                <TouchableOpacity style={[styles.inputButton,{backgroundColor:colors.primary}]} onPress={() => navigation.navigate("SearchOrder")}>
                    <Text
                        style={styles.button}
                    >Delivery Completed</Text>
                </TouchableOpacity>
            </View>
            </View>
           
        </View>
        </ScrollView>
    )
}

export default DeliveryCOD


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        height: '100%',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,

    },
    inputButton: {
        paddingTop: 10,
        backgroundColor: '#FDC913',
        paddingBottom: 10,
        borderRadius: 100,
        // width: 140,
        alignSelf: "center",
        paddingLeft: 20,
        paddingRight: 20
    },

    button: {
        fontFamily: 'OpenSansBold',
        color: 'white',
        fontSize: 18,
        alignSelf: 'center'
    },
    padbutton: {
        paddingTop: 30,
        paddingBottom: 20
    },
    inputcontainer: {
        // backgroundColor: 'white',
        // elevation: 2,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 30,
        borderRadius: 20
    },
    iconcontainer: {
        flexDirection: 'row',
    },
    icon: {
        paddingRight: 13
    },
    add: {
        paddingLeft: 40,
        fontFamily: 'OpenSansSemiBold',
        fontSize: 18,
        paddingTop: 10,
        color:'#696969'
    },
    detailcontainer: {
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 10,
        padding: 20
    },
    detail: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40
    },
    res: {
        fontFamily: 'OpenSansBold',
        fontSize: 20,
        color:'#696969'
    },
    order: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 18,
        paddingBottom: 20,
        color:'#696969'
    },
    item: {
        fontFamily: 'OpenSansRegular',
        fontSize: 15,
        paddingLeft: 20,
        color:'#696969'
    },
    text: {
        fontSize: 25,
        fontFamily: 'OpenSansBold',
        color:'#696969'
    },
    textcontainer: {
        paddingBottom: 50,
        flexDirection:'row'
    },
    input:{
        backgroundColor:'white',
        elevation:20,
        paddingTop:40,
        paddingRight:20,
        paddingLeft:20,
        paddingBottom:50,
        borderRadius:20
    },
    cod:{
        backgroundColor:'white',
        elevation:1,
        borderRadius:20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 30,
    },
    pad:{
        paddingTop:20
    },
    codtouch:{
        paddingTop:20    
    },
    codtext:{
        backgroundColor:'#FDC913',
        fontFamily:'OpenSansBold',
        alignSelf:'center',
        // elevation:20,
        padding:10,
        borderRadius:10,
        fontSize:15,
        color:'white'
        
    },
    text1:{
        fontFamily:'OpenSansBold',
        fontSize:18,
        color:'#696969'
    },
    menu:{
        paddingRight:100
    }

})