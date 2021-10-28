import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <MainLayout>
      <Text style={styles.splashButtons}>Listen to the Podcast</Text>
      <Text style={[styles.splashButtons, { marginTop: '4rem' }]}>
        About Us
      </Text>
      <StatusBar style="auto" />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  splashButtons: {
    height: '40%',
    width: '80%',
    backgroundColor: '#FC2',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    display: 'grid',
    fontSize: '2rem',
    // flex: 1,
  },
});
