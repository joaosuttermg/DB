import { Text, View, StyleSheet } from 'react-native';

export default function AlunoDetalhes( { aluno }) {
    return (
        <View style={styles.caixa} >
            <Text style={styles.titulo}>Detalhes do aluno</Text>
            <Text style={styles.emoji}>'😎'</Text>
            <Text>Nome: Yuri</Text>
            <Text>Idade: 20</Text>
            <Text>Curso: Sistemas de Informação</Text>
            <Text>Endereço: Rua dos Yuri, nº 0</Text>
            <Text>Telefone: (99) 99999-9999</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
});
