import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, StyleSheet, Text, View, Button } from 'react-native';
import styles from './Appstyles'

export default function Categories({navigation}) {
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.largeHeading, styles.font]}>Categories</Text>
      <Button title='Go to Home Page' onPress={() => navigation.navigate('Home')} />
      <Button title='Go to Details Page' onPress={() => navigation.navigate('Details')} />
    </SafeAreaView>
  );
}
