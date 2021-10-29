import React, { useState } from 'react';
import { Text, StyleSheet, Button } from 'react-native';

interface SplashProps {}

const Splash = (props: SplashProps) => {
  const [stateText, setStateText] = useState(`Hold On...`);

  const stateHandler = () => {
    setStateText(`Testing Components`);
  };
  return (
    <>
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
      <Text>Splash</Text>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {},
  splashButtons: {
    height: '40%',
    width: '80%',
    backgroundColor: '#FC2',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
