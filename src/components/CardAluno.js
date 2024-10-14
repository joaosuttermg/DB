import { Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardAluno({ aluno }) {
    const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detalhes da transformação", { aluno })}
      style={styles.aluno}
    >
      <Image source={aluno.foto} style={styles.image} />
      <Text style={styles.foto}>{aluno.foto}</Text>
      <Text>{aluno.nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  aluno: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "lightblue",
    
  },
  foto: {
    fontSize: 0,
    marginRight: 15,
    
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 5,
    
  },
});