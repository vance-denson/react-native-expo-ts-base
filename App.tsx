import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import MainLayout from './layouts/MainLayout';

export default function App() {
  const [stateText, setStateText] = useState(`Welcome`);

  const stateHandler = () => {
    setStateText(`Handler Clicked`);
  };

  return (
    <MainLayout>
      <Text style={styles.splashButtons}>Listen to the Podcast</Text>
      <Button
        title={`Change State`}
        onPress={() => {
          stateHandler();
        }}
      />
      <Text style={[styles.splashButtons, { marginTop: '4rem' }]}>
        {stateText}
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
