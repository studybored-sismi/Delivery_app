import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useTheme } from 'react-native-paper'

const Performance = ({ navigation }) => {
    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icons name="arrow-back" size={30}
                            style={{ marginLeft: 20, marginRight: 70, color: "#FDC913" }}></Icons>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24, marginBottom: 2, color:colors.text, fontFamily: "OpenSansBold", }}>Performance</Text>

                </View>
                <Text style={{
                    fontSize: 15, marginLeft: 140, marginBottom: 15, fontFamily: "OpenSansSemiBold",
                    color: colors.text
                }}>22 Feb - 28 Feb</Text>

                <View style={[styles.View1,{backgroundColor:colors.card}]}>
                    <Icon name="like1" size={30} style={{ marginLeft: 130, marginTop: 15, color: colors.border }}></Icon>
                    <Text style={{
                        marginTop: 10, marginLeft: 53, fontSize: 20, fontFamily: "OpenSansSemiBold",
                        color: colors.text
                    }}>No Reports, All Good</Text>

                </View>
                <Text style={{
                    marginLeft: 35, marginTop: 20, fontSize: 20, fontFamily: "OpenSansSemiBold",
                    color: colors.text
                }}>Details</Text>

                <View style={[styles.view6,{backgroundColor:colors.card}]}>
                    <View style={[styles.view4,{backgroundColor:colors.card}]}>
                        <Text style={{
                            marginTop: 20, marginLeft: 20, fontSize: 15, fontFamily: "OpenSansRegular",
                            color: colors.text
                        }}>Order Not Delivered</Text>
                        <Text style={{
                            marginTop: 5, marginLeft: 20, fontSize: 15, fontFamily: "OpenSansRegular",
                            color: colors.text
                        }}>None</Text>
                    </View>

                    <View style={[styles.view4,{backgroundColor:colors.card}]}>
                        <Text style={{
                            marginTop: 20, marginLeft: 20, fontSize: 15, fontFamily: "OpenSansRegular",
                            color: colors.text
                        }}>Order Rejected</Text>
                        <Text style={{
                            marginTop: 5, marginLeft: 20, fontSize: 15, fontFamily: "OpenSansRegular",
                            color: colors.text
                        }}>None</Text>
                    </View>

                    <View style={[styles.view4,{backgroundColor:colors.card}]}>
                        <Text style={{
                            marginTop: 10, marginLeft: 20, fontSize: 15, fontFamily: "OpenSansRegular",
                            color: colors.text
                        }}>Unprofessional Behaviour</Text>
                        <Text style={{
                            marginTop: 5, marginLeft: 20, fontSize: 15, fontFamily: "OpenSansRegular",
                            color: colors.text
                        }}>None</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Performance;

const styles = StyleSheet.create({
    view5: {
        marginBottom: 0,
        marginLeft: 30,
        height: 100,
        width: "36%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // paddingLeft: 120,
        padding: 10,
        marginTop: 20,
        marginRight: 5,

        //flexDirection:'row'

    },
    view4: {
        marginBottom: 10,
        marginLeft: 25,
        height: 100,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // paddingLeft: 120,
        padding: 10,
        marginTop: 20,
        marginRight: 30,
        //flexDirection:'row'

    },
    View1: {
        marginBottom: 10,
        marginLeft: 15,
        height: 120,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // paddingLeft: 120,
        padding: 10,
        marginTop: 20,
        marginRight: 30,
        //flexDirection:'row'

    },
    view6: {
        marginBottom: 20,
        marginLeft: 35,
        height: 420,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // paddingLeft: 120,
        padding: 10,
        marginTop: 20,
        marginRight: 30,
        //flexDirection:'row'

    },

})