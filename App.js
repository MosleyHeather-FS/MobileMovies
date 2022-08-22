import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, StyleSheet, Text, View, Button, Platform } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Network from 'expo-network';

import Categories from './Categories';
import Details from './Details';
import Heading from './components/Heading';
import ListContainer from './components/ListContainer';
import styles from './Appstyles'

function HomeScreen({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  Network.getNetworkStateAsync().then(data => {
    console.log({data})
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.largeHeading, styles.font]}>Home</Text>
      <Heading>This is a Heading</Heading>
      {/* {
        Platform.OS === 'ios'
        ? <Text style={[styles.largeHeading, styles.font]}>I am IOS</Text>
        : <Text style={[styles.largeHeading, styles.font]}> I am NOT on IOS</Text>
      } */}
      <Button title='Go to Details' onPress={() => navigation.navigate('Details')} />
      <ListContainer />
      <Switch 
        trackColor={{false: "#767577", true: "#81b0ff"}}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
    />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  
  // https://crudmovieapi.herokuapp.com/
  fetch(`https://crudmovieapi.herokuapp.com/api/v1/movies`)
  .then(res => res.json())
  .then(data => console.log({data}))

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'My Movies'}}/>
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
