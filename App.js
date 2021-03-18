import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PushNotificationIOS, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {useFonts} from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Document from './screens/Document';
import IdPermits from './screens/IdPermits';
import Idcard from  './screens/Idcard';
import Earnings from './screens/Earnings';
import Payout from './screens/Payout'; 
import COD from './screens/COD';
import Summary from './screens/Summary';
import Notification from './screens/Notification';
import Shift from './screens/Shift';
import Problems from './screens/Problems';
import DeliveryTip from './screens/DeliveryTip';
import WeekPayouts from './screens/WeekPayouts';
import OrderProblem from './screens/OrderProblem';
import WeekLogin from './screens/WeekLogin';
import LoginHistory from './screens/LoginHistory';
import ReferFriend from './screens/ReferFriend';
import NewProblem from './screens/NewProblem';
import Settings from './screens/Settings';
import ReferFriend2 from './screens/ReferFriend2';
import Help from './screens/Help';
import ReportProblem from './screens/ReportProblem';
import EarningDetail from './screens/EarningDetail';
import Performance from './screens/Performance';
import Contact from './screens/Contact';
import ProblemDetails from './screens/ProblemDetails';
import PushNotification from './screens/PushNotification';


const Stack = createStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (

    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="IdPermits" component={IdPermits}
          options={
            { headerShown: false }
          } />
        
        <Stack.Screen name="Document" component={Document}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="Idcard" component={Idcard}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="Earnings" component={Earnings}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="Payout" component={Payout}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="COD" component={COD}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="Summary" component={Summary}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="Notification" component={Notification}
          options={
            { headerShown: false }
          } />
     

      <Stack.Screen name="Shift" component={Shift}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="Problems" component={Problems}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="DeliveryTip" component={DeliveryTip}
          options={
            { headerShown: false }
          } />



<Stack.Screen name="WeekPayouts" component={WeekPayouts}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="OrderProblem" component={OrderProblem}
          options={
            { headerShown: false }
          } />


<Stack.Screen name="WeekLogin" component={WeekLogin}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="LoginHistory" component={LoginHistory}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="ReferFriend" component={ReferFriend}
          options={
            { headerShown: false }
          } />
<Stack.Screen name="ReferFriend2" component={ReferFriend2}
          options={
            { headerShown: false }
          } />
<Stack.Screen name="NewProblem" component={NewProblem}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="Settings" component={Settings}
          options={
            { headerShown: false }
          } />
<Stack.Screen name="Help" component={Help}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="ReportProblem" component={ReportProblem}
          options={
            { headerShown: false }
          } />
  
  <Stack.Screen name="EarningDetail" component={EarningDetail}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="Performance" component={Performance}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="Contact" component={Contact}
          options={
            { headerShown: false }
          } />

<Stack.Screen name="ProblemDetails" component={ProblemDetails}
          options={
            { headerShown: false }
          } />
  
  <Stack.Screen name="PushNotification" component={PushNotification}
          options={
            { headerShown: false }
          } />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
