import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground,SafeAreaView, Switch, StyleSheet, Text, View, Button, Platform } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Network from 'expo-network';

import Recommend from './pages/Recommend';
import Movies from './pages/Movies';
import cinema from './assets/cinema.jpeg'
import styles from './Appstyles'

function HomeScreen({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  Network.getNetworkStateAsync().then(data => {
    console.log({data})
  });

  return (
  <ImageBackground source={cinema} resizeMode="cover" style={[styles.image, styles.container]}>
    <SafeAreaView>
      <Text style={[styles.largeHeading, styles.font]}>Home</Text>
      <Button color="white" title='Go to Movies' onPress={() => navigation.navigate('Movies')} />
      <Switch 
        trackColor={{false: "#767577", true: "#81b0ff"}}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
    />
      <StatusBar style="auto" />
   
      {/* {
        Platform.OS === 'ios'
        ? <Text style={[styles.largeHeading, styles.font]}>I am IOS</Text>
        : <Text style={[styles.largeHeading, styles.font]}> I am NOT on IOS</Text>
      } */}
    </SafeAreaView> 
    </ImageBackground>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'My Movies'}}/>
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Recommend" component={Recommend} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
