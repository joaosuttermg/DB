import { Text, View, Image,  StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";


export default function TransformsDetalhes() {
    const route = useRoute();
    const { transforms } = route.params || {};
    return (
      <View style={styles.caixa}>
        <Text style={styles.titulo}>Detalhes da transformação</Text>
        <Image source={transforms.foto} style={styles.image} />
        <Text style={styles.nome}>Nome: {transforms.nome}</Text>
        <Text style={styles.descricao}>descrição: {transforms.descricao}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    caixa: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    titulo: {
      fontSize: 30,
      marginBottom: 20,
      color: 'orange',
      fontWeight: 'bold',
    },
    descricao: {
      marginTop: 10,
      marginBottom: 20,
      fontSize: 26,
      color: 'black',
      backgroundColor: 'lightgray',
      padding: 10,
      borderRadius: 10
    },
    nome: {
      marginTop: 10,
      marginBottom: 20,
      fontSize: 26,
      color: 'black',
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
      borderRadius: 100,
    }
   
   
});
