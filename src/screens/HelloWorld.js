import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Olá turma linda</Text>
      <Text style={styles.emoji}>😀</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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