import React, { useState, createRef } from 'react'
import { View, Text, TextInput, StyleSheet, Keyboard, TouchableOpacity, StatusBar } from 'react-native'
import { RadioButton, useTheme } from 'react-native-paper'
import { color } from 'react-native-reanimated'
import Icon1 from 'react-native-vector-icons/Ionicons'

const SavingsAccount = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()

    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [ifsc, setIfsc] = useState('');

    const [errortext, setErrortext] = useState('');

    const accountnumberInputRef = createRef();
    const accountnameInputRef = createRef();
    const ifscInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!accountNumber) {
            alert('Please Enter the Account Number');
            return;
        }
        if (!accountName) {
            alert('Please Enter the Name');
            return;
        }
        if (!ifsc) {
            alert('Please Enter the IFSC Code');
            return;
        }


        var dataToSend = {
            accnum: accountNumber,
            accname: accountName,
            ifsc: ifsc

        };

        // fetch("http://192.168.1.8:4000/login", {
        //     method: 'POST',
        //     mode: "cors",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',

        //     },
        //     body: JSON.stringify(dataToSend),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data)
        //         if (data.result.status === 200) {
        //             console.log('Login Successful');
        //             console.log(data.result.record._id);

        //             values.isLoginSuccess = true
        //             navigation.navigate('verify', { id: data.result.record._id })


        //         } else {
        //             console.log('Login Unsuccessful');
        //             navigation.navigate('Signup')

        //         }

        //     }).catch((error) => {
        //         console.log(error);
        //     });
        navigation.navigate("Profile")
    }

    return (
        <View style={styles.container}>
            <View style={styles.registercontainer}>
                <TouchableOpacity>
                    <Icon1 name="arrow-back" size={30} color="#FDC913" onPress={()=>navigation.goBack()} style={styles.menu} />
                </TouchableOpacity>
                <Text style={[styles.text,{color:colors.text}]}>Savings Account</Text>
            </View>
            <View style={styles.inputcontainer}>

                <View style={styles.padcontainer}>
                    <View style={styles.textinput}>
                        <Text style={[styles.textstyle,{color:colors.text}]}>Account Number</Text>
                        <TextInput
                            keyboardType="phone-pad"
                            onChangeText={(accountNumber) => setAccountNumber(accountNumber)}
                            style={{color:colors.text}}
                            returnKeyType="next"
                            ref={accountnumberInputRef}
                            onSubmitEditing={() =>
                                accountnameInputRef.current &&
                                accountnameInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                        <View style={[styles.line,{borderBottomColor:colors.text}]}></View>
                    </View>
                    <View style={styles.textinput}>
                        <Text style={[styles.textstyle,{color:colors.text}]}>Account Holder Name</Text>
                        <TextInput
                            keyboardType="default"
                            onChangeText={(accountName) => setAccountName(accountName)}
                            maxLength={10}
                            style={{color:colors.text}}
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            ref={accountnameInputRef}
                            onSubmitEditing={() =>
                                accountnameInputRef.current &&
                                accountnameInputRef.current.focus()
                            }

                            blurOnSubmit={false} />
                        <View style={[styles.line,{borderBottomColor:colors.text}]}></View>
                    </View>
                    <View style={styles.textinput}>
                        <Text style={[styles.textstyle,{color:colors.text}]}>IFSC Code</Text>
                        <TextInput
                            keyboardType="default"
                            onChangeText={(ifsc) => setIfsc(ifsc)}
                            maxLength={10}
                            style={{color:colors.text}}
                            returnKeyType="next"
                            ref={ifscInputRef}
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false} />
                        <View style={[styles.line,{borderBottomColor:colors.text}]}></View>
                    </View>
                </View>
                <View style={styles.padbutton}>
                    <TouchableOpacity style={[styles.inputButton,{backgroundColor:colors.primary}]}>
                        <Text
                            style={styles.button}
                            onPress={handleSubmitPress}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default SavingsAccount

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "white",
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10

    },
   
    text: {
        fontFamily: 'OpenSansBold',
        alignSelf: 'center',
        fontSize: 25,
        color: '#696969'
    },

    textinput: {
        paddingBottom: 20
    },

    textstyle: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 16,
        paddingBottom: 10,
        color: '#696969'
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#696969'
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
        paddingTop: 10,
        paddingBottom: 20
    },
    registercontainer: {
        paddingBottom:50,
        flexDirection:'row'
    },
    menu: {
        paddingRight: 50,
        paddingTop: 5
    },

})