import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <div>
    <View style={styles.container}>
      {/* <p>, <h1>, <span> */}
      <Text style={styles.hello}>Hello World</Text>
      {/* Emoji sorrindo */}
      <Text style={styles.emoji}>😀</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // <div style="display: flex;">
    backgroundColor: '#fff',
    // <div style="background-color: #fff;">
    alignItems: 'center',
    // <div style="align-items: center;">
    justifyContent: 'center',
  },
  hello: {
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 40,
  },
  emoji: {
    fontSize: 50,
  },
});