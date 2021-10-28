import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { t } from 'react-native-tailwindcss';

interface MainLayoutProps {
  children: any;
}

// const Footer = styled.View`
//   //   ${[t.bgGray600, t.h19, t.text4xl]}
// `;

const SView = styled.View(t.bgBlue500);

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Text style={styles.header}>Hold On, Momma Needs A Drink!</Text>
      <View style={styles.container}>{children}</View>
      <SView>
        <Text style={styles.header}>Footer</Text>
      </SView>
      {/* <Footer>Footer</Footer> */}
      {/* <Footer>Footer</Footer> */}
    </>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'grid',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
  },
  //   footer: {
  //     display: 'grid',
  //     // grid: '2',
  //     fontSize: '3rem',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     height: '10%',
  //   },
});
