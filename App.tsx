import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import MainLayout from './layouts/MainLayout';
import ToDo from './screens/ToDo';
import Splash from './screens/Splash';

export default function App() {
  return (
    <MainLayout>
      <Splash />
    </MainLayout>
  );
}

const styles = StyleSheet.create({});
