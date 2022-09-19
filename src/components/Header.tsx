import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Logo from '../assets/Logo.png';

export function Header(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true) + 16,
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});