import { Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cardtransforms({ transforms }) {
    const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detalhes da transformação", { transforms })}
      style={styles.transforms}
    >
      <Image source={transforms.foto} style={styles.image} />
      <Text style={styles.foto}>{transforms.foto}</Text>
      <Text style={styles.nome}>{transforms.nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  transforms: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#E0A13D",
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
  nome: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});