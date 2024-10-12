import { Text, View, StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";

const route = useRoute();
const { aluno } = route.params;

export default function AlunoDetalhes( { aluno }) {
    return (
      <View style={styles.caixa}>
        <Text style={styles.titulo}>Detalhes das transformações</Text>
        <Text style={styles.emoji}>{aluno.emoji}</Text>
        <Text>Nome: {aluno.nome}</Text>
        <Text>descrição: {aluno.descricao}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    
});
