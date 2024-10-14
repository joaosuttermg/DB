import { StyleSheet, Image, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Initial() {
  const navigation = useNavigation(); // Adicione essa linha

  return (
    <View style={styles.container}>
      <Text style={styles.hello}>GOKU TRANSFORMATIONS</Text>
      <Image
        style={styles.emoji}
        source={require("../../img/icons8-son-goku-64.png")}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Lista de transformações")}
      >
        <Text style={styles.seguirlista}>Ir para lista de Transformações</Text>
      </TouchableOpacity>
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
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    FontFace: 'Helvetica'
  },
  seguirlista: {
    color: 'white',
    fontSize: 20,
  },
  
});
