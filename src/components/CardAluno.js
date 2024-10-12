import { Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardAluno({ aluno }) {
    const navigation = useNavigation();
    
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Detalhes do aluno", { aluno })}
        style={styles.aluno}>
        <Image source={aluno.emoji} />
        <Text style={styles.emoji}>{aluno.emoji}</Text>
        <Text>{aluno.nome}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    aluno: {
        flexDirection: 'row',
        // Margin x 10
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    emoji: {
        fontSize: 40,
        marginRight: 15,
    }
});
    