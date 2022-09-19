import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface CountResume {
    create: number;
    finished: number;
}

export function Resume({ create, finished}: CountResume) {
  return (
    <View style={styles.container}>
        <View style={styles.line}> 
            <Text style={styles.create}>Criadas</Text>
            <View style={styles.count}>
                <Text style={styles.countText}>{create}</Text>
            </View>
        </View>
        <View  style={styles.line}>
            <Text style={styles.finish} >Concluídas</Text>
            <View style={styles.count}>
                <Text style={styles.countText}>{finished}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
        width: 327,
        marginTop: 35,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    line: {
        flexDirection: 'row'
    },
    create: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold'
    },
    finish: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold'
    },
    count: {
      backgroundColor: '#333333',
      width: 24,
      height: 19,
      borderRadius: 999,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 8,
    },
    countText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});