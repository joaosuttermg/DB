import { View, FlatList,  Image } from "react-native";
import CardAluno from "../components/CardAluno";

// Array com os alunos
const meusAlunos = [
  {
    id: "1",
    nome: "Super sayajin 1",
    emoji: require("../../img/baixados (2).jpg"),
    descricao:
      "Goku atingiu o Super Saiyajin 1 ao presenciar a morte de seu amigo Kuririn pelas mãos de Freeza. Essa raiva intensa despertou seu poder latente.",
  },
  {
    id: "2",
    nome: "Super sayajin 2",
    emoji: require("../../img/baixados (3).jpg"),
    descricao:
      "Goku atingiu o Super Saiyajin 2 durante a batalha contra Cell, ao superar seus limites com um treinamento intenso e ver Gohan em perigo. Isso liberou um poder ainda maior.",
  },
  {
    id: "3",
    nome: "Super sayajin 3",
    emoji: require("../../img/baixados (2).jpg"),
    descricao:
      "Goku alcançou o Super Saiyajin 3 durante seu treinamento no Outro Mundo, superando limites para enfrentar Majin Buu. Essa forma demanda enorme energia e resistência.",
  },

];

export default function Alunos() {
    return (
        <View>
            <FlatList
                data={meusAlunos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardAluno aluno={item}/>
                )}
            />
        </View>
    );
}