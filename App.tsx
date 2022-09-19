import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <>
    <StatusBar 
      barStyle="light-content" 
      translucent 
      backgroundColor="transparent" 
      />
    <Home />
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
