import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { t } from 'react-native-tailwindcss';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: any;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <View style={t.hFull}>
      <Header />
      <View style={[styles.container]}>{children}</View>
      {/* <Footer /> */}
    </View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {},
});
