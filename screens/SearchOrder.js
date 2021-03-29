import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import { DrawerActions, useTheme } from '@react-navigation/native';

const SearchOrder = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

            <View>
                <View style={[styles.iconcontainer,{backgroundColor:colors.card}]}>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Icon name="dots-three-vertical" size={25} style={{color:colors.text}}  />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon1} onPress={() => navigation.navigate("Notification")}>
                        <Icon1 name="notifications" size={25} style={{color:colors.text}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon2} onPress={() => navigation.navigate("Map")}>
                        <Icon1 name="location-sharp" size={25} style={{color:colors.text}}  />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon3} onPress={() => navigation.navigate("Help")}>
                        <Icon1 name="help-circle" size={25} style={{color:colors.text}}  />
                    </TouchableOpacity>

                </View>
                <View style={styles.menucontainer}>
                    <View style={[styles.homecontainer,{backgroundColor:colors.card}]}>

                        <View style={[styles.start,{backgroundColor:colors.card}]}>
                            <TouchableOpacity onPress={() => navigation.navigate("ActiveOrder")}>
                                <Icon2 name="spinner" size={60}  style={[styles.spinner,{color:colors.text}]} />
                                <Text style={[styles.startcontainer,{color:colors.text}]}>Searching for Orders...</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pad}></View>
                        <View >
                            <View style={styles.option}>
                                <TouchableOpacity style={[styles.touch1,{backgroundColor:colors.card}]} onPress={() => navigation.navigate("Earnings")} >
                                    <Text style={[styles.text,{color:colors.text}]}>Rs.50</Text>
                                    <Text style={[styles.text,{color:colors.text}]}>Today's Earning</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.touch1,{backgroundColor:colors.card}]} onPress={() => navigation.navigate("EarningDetail")} >
                                    <Text style={[styles.text,{color:colors.text}]}>Rs.100</Text>
                                    <Text style={[styles.text,{color:colors.text}]}>Week's Earning</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.option}>
                                <TouchableOpacity style={[styles.touch1,{backgroundColor:colors.card}]} onPress={() => navigation.navigate("COD")} >
                                    <Text style={[styles.text,{color:colors.text}]}>Rs.10 </Text>
                                    <Text style={[styles.text,{color:colors.text}]}>COD</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.touch1,{backgroundColor:colors.card}]} onPress={() => navigation.navigate("DeliveryTip")} >
                                    <Text style={[styles.text,{color:colors.text}]}>Rs.20</Text>
                                    <Text style={[styles.text,{color:colors.text}]}>Delivery Tip</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.option}>
                                <TouchableOpacity style={[styles.shift,{backgroundColor:colors.primary}]} onPress={() => navigation.navigate("Shift")} >
                                    <Text style={styles.shifttext}>Shift Details</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("LoginHistory")} >
                                    <Text style={[styles.logintext,{color:colors.text}]}>Login History</Text>

                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.pad1}></View>
                        <View style={[styles.card,{backgroundColor:colors.card}]}>
                            <Text style={[styles.cardtext,{color:colors.text}]}>See your ID card</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                <Text style={[styles.cardcontainer,{backgroundColor:colors.primary}]}>GO TO PROFILE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default SearchOrder

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#FDC913',
        height: '100%',
        // paddingLeft:20,
        // paddingRight:20
    },
    homecontainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
        paddingBottom: 30
    },
    iconcontainer: {
        flexDirection: 'row',
        // paddingBottom:30,
        backgroundColor: 'white',
        elevation: 5,
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10
    },
    option: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    touch1: {
        // textAlign: 'center',
        // borderWidth: 0.5,
        padding: 15,
        width: 146,
        marginLeft: 10,
        marginRight: 10,
        height: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 8,
        fontSize: 15,
        fontFamily: 'OpenSansSemiBold',
        flexDirection: 'column'
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'OpenSansSemiBold',
        flexDirection: 'column',
        color: '#696969'
    },
    icon1: {
        paddingLeft: 200,
        paddingRight: 25,
        // paddingTop:5
    },
    icon2: {
        paddingRight: 25,
        // paddingTop:5
    },
    icon3: {
        // paddingTop:5
    },
    start: {
        backgroundColor: 'white',
        paddingTop: 30,
        paddingLeft: 20,
        paddingBottom: 30,
        paddingRight: 20,
        borderRadius: 20,
        elevation: 5,
    },
    startcontainer: {
        color: '#696969',
        paddingTop: 10,
        alignSelf: "center",
        fontFamily: 'OpenSansSemiBold',
        fontSize: 20
    },
    spinner: {
        paddingLeft: 110
    },
    pad: {
        paddingBottom: 30,

    },
    pad1: {
        paddingBottom: 50,

    },
    card: {
        backgroundColor: 'white',
        paddingTop: 30,
        paddingLeft: 20,
        paddingBottom: 30,
        borderRadius: 20,
        elevation: 5

    },
    cardcontainer: {
        backgroundColor: '#FDC913',
        borderRadius: 10,
        padding: 10,
        color: 'white',
        elevation: 5,
        alignSelf: "center",
        fontFamily: 'OpenSansBold'
    },
    cardtext: {
        fontFamily: 'OpenSansSemiBold',
        paddingBottom: 20,
        fontSize: 18,
        alignSelf: 'center',
        color: '#696969'
    },
    menucontainer: {
        // backgroundColor: 'white',
        paddingBottom: 20,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40
    },
    shift: {
        backgroundColor: "#FDC913",
        justifyContent: 'center',
        borderRadius: 20,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        width: 130

    },
    shifttext: {
        color: 'white',
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15,
        // borderBottomWidth:1,
        // borderBottomColor:'white'
    },
    logintext: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15,
        // borderBottomWidth:1,
        color: "#FDC913",
        // borderBottomColor:"#FDC913"
    },
    login: {
        paddingLeft: 50,
        paddingTop: 10
    }

})