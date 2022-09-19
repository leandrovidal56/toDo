import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface ItemWrapperProps {
  index: number;
  children: ReactNode;
}

export function ItemWrapper({ index, children }: ItemWrapperProps) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    padding: 12,
    width: 327,
    height: 64,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 8
  },

})