import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, Switch, StyleSheet, Text, View, Button } from 'react-native';
import * as Network from 'expo-network';
import styles from '../Appstyles'
import cinema from '../assets/cinema.jpeg'

export default function Recommend({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  Network.getNetworkStateAsync().then(data => {
    console.log({data})
  });

  return (
    <ImageBackground source={cinema} resizeMode="cover" style={[styles.image, styles.container]}>
    <SafeAreaView>
      <Text style={[styles.largeHeading, styles.font]}>Your Recommendations</Text>
      <Button color="white" title='Go to Home Page' onPress={() => navigation.navigate('Home')} />
      <Button color="white" title='Go to My Movies Page' onPress={() => navigation.navigate('Movies')} />
      <Switch 
        trackColor={{false: "#767577", true: "#81b0ff"}}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
    />
      <StatusBar style="auto" />
    </SafeAreaView>
    </ImageBackground>
  );
}
