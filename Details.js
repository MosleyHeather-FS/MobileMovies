import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, StyleSheet, Text, View, Button } from 'react-native';
import styles from './Appstyles'

export default function Details({navigation}) {
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.largeHeading, styles.font]}>Details</Text>
      <Button title='Go to Home Page' onPress={() => navigation.navigate('Home')} />
      <Button title='Go to Categories Page' onPress={() => navigation.navigate('Categories')} />
    </SafeAreaView>
  );
}
