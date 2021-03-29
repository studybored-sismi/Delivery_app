import React from 'react'
import { View, Text, TouchableOpacity, Alert, StyleSheet, StatusBar } from 'react-native'
import { RadioButton, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'

const ConfirmItem = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()

    return (
        <View style={styles.container}>
        
            <View style={styles.textcontainer}>
            <TouchableOpacity>
                    <Icon1 name="arrow-back" size={30} color="#FDC913" onPress={()=>navigation.goBack()} style={styles.menu} />
                </TouchableOpacity>
                <Text style={[styles.text,{color:colors.text}]}>Confirm Item</Text>
            </View>
            <View style={[styles.inputcontainer,{backgroundColor:colors.card}]}>
                <View style={[styles.iconcontainer,{backgroundColor:colors.card}]}>
                    <Text style={[styles.res,{color:colors.text}]}>Pickup 2 items</Text>
                </View>
                <Text style={[styles.add,{color:colors.text}]}>1 * Milkshake</Text>
                <Text style={[styles.add,{color:colors.text}]}>1 * Burger</Text>
          
            <View style={styles.pad}></View>
            <TouchableOpacity style={[styles.detailcontainer,{backgroundColor:colors.card}]}>
                <Text style={[styles.order,{color:colors.text}]}>Pay Rs. 300 to Restaurant</Text>
            </TouchableOpacity>
            <View style={styles.padbutton}>
                <TouchableOpacity style={[styles.inputButton,{backgroundColor:colors.primary}]} onPress={() => Alert.alert(
                    "Confirm Items",
                    "Are you sure all items are available ?",
                    [
                        { text: "ITEM MISSING", onPress: () => { navigation.navigate("ItemMissing") } },
                        { text: "CONFIRM", onPress: () => { navigation.navigate("PickupCompleted") } }
                    ],
                    { cancelable: false }
                )}>
                    <Text
                        style={styles.button}
                    >Confirm</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ConfirmItem


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
        backgroundColor: 'white',
        elevation: 20,
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
        fontSize: 15,
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
        color:'#696969'
        // paddingBottom:20
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
    pad: {
        paddingTop: 30
    },
    menu:{
        paddingRight:50
    }
})