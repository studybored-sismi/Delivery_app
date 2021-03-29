import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { useTheme, Avatar, Drawer } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from 'react-native-vector-icons/AntDesign'


export function DrawerContent(props) {

  const { colors} = useTheme()
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={styles.drawerContent}
      >
        <View style={styles.userInfoSection}>
          <View style={styles.arrow}>
            <Avatar.Image
              source={{
                uri:
                  'https://images-na.ssl-images-amazon.com/images/I/91BDAgAQiXL.png',
              }}
              size={50}
            />

            <TouchableOpacity onPress={()=>props.navigation.navigate("Profile")}>
              <AntDesign name="arrowright" size={20} style={{color:colors.border}}/>
            </TouchableOpacity>

          </View>
          <View style={styles.text}>
          <Text style={[styles.title,{color:colors.text}]}>Lionel Messi</Text>
          <Text style={[styles.title1,{color:colors.text}]}>Active</Text>
          </View>
          <Text style={[styles.caption,,{color:colors.text}]}>ID</Text>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Earnings"
            labelStyle={[styles.drawer,{color:colors.text}]}
            onPress={() => { props.navigation.navigate("Earnings")}}
          />
          <DrawerItem
            label="Performance"
            labelStyle={[styles.drawer,{color:colors.text}]}
            onPress={() => {props.navigation.navigate("Performance") }}
          />
          <DrawerItem
            label="Refer a friend"
            labelStyle={[styles.drawer,{color:colors.text}]}
            onPress={() => {props.navigation.navigate("ReferFriend2") }}
          />
          <DrawerItem
            label="Settings"
            labelStyle={[styles.drawer,{color:colors.text}]}
            onPress={() => props.navigation.navigate("Settings") }
          />
        </Drawer.Section>

      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop:10,
  
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    marginTop: 20,
    fontFamily:'OpenSansSemiBold',
    marginBottom:10,
    fontSize:18,
  
  },
  title1: {
    marginTop: 20,
    fontFamily:'OpenSansRegular',
    fontSize:18
  },
  caption: {
    fontSize: 12,
    fontFamily:'OpenSansRegular',
    fontSize:15
  },
  drawerSection: {
    marginTop: 15,
  },
  arrow: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  text:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  drawer:{
    fontFamily:'OpenSansSemiBold',
    color:'grey',
    fontSize:15
  }
});