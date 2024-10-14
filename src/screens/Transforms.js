import { View, FlatList,  Image } from "react-native";
import Cardtransforms from "../components/Cardtransforms";

// Array com os alunos
const gokuTransforms = [
  {
    id: "1",
    nome: "Super sayajin 1",
    foto: require("../../img/baixados (2).jpg"),
    descricao:
      "Goku atingiu o Super Saiyajin 1 ao presenciar a morte de seu amigo Kuririn pelas mãos de Freeza. Essa raiva intensa despertou seu poder latente.",
  },
  {
    id: "2",
    nome: "Super sayajin 2",
    foto: require("../../img/baixados (3).jpg"),
    descricao:
      "Goku atingiu o Super Saiyajin 2 durante a batalha contra Cell, ao superar seus limites com um treinamento intenso e ver Gohan em perigo. Isso liberou um poder ainda maior.",
  },
  {
    id: "3",
    nome: "Super sayajin 3",
    foto: require("../../img/Goku SSJ3.jpg"),
    descricao:
      "Goku alcançou o Super Saiyajin 3 durante seu treinamento no Outro Mundo, superando limites para enfrentar Majin Buu. Essa forma demanda enorme energia e resistência.",
  },
  {
    id: "4",
    nome: "Super sayajin 4",
    foto: require("../../img/Goku ssj4 icon.jpg"),
    descricao:
      "Goku atingiu o Super Saiyajin 4 em Dragon Ball GT ao se transformar em um Golden Oozaru e depois concentrar sua energia e emoções para alcançar essa forma. Esse processo envolveu uma combinação de poder Saiyajin e controle emocional. ",
  },
  {
    id: "5",
    nome: "super sayajin DEUS",
    foto: require("../../img/@revertcash.jpg"),
    descricao:
      "Goku atingiu o Super Saiyajin Deus ao realizar um ritual onde cinco Saiyajins de coração puro transferiram seu poder para ele. Isso concedeu a Goku uma nova forma divina com um poder colossal. ",
  },

  {
    id: "6",
    nome: "Super sayajin BLUE",
    foto: require("../../img/baixados (5).jpg"),
    descricao:
      "Goku atingiu o Super Saiyajin Blue após dominar o poder do Super Saiyajin Deus e combiná-lo com a transformação Super Saiyajin. Essa forma combina a força dos deuses com a energia dos Saiyajins.",
  },
  {
    id: "7",
    nome: "INSTINTO SUPERIOR",
    foto: require("../../img/baixados (6).jpg"),
    descricao:
      "Goku atingiu o Instinto Superior durante o Torneio do Poder ao abssorver uma imensa quantidade de ki através da explosão da genki-dama, especialmente contra Jiren. Esse estado permite reflexos automáticos e movimentos perfeitos sem pensar.",
  },
  {
    id: "8",
    nome: "INSTINTO SUPERIOR COMPLETO",
    foto: require("../../img/baixados (7).jpg"),
    descricao:
      "Goku atingiu o Instinto Superior Completo após uma 'quase derrota' no Torneio do Poder, ele desbloqueou essa forma ao dominar completamente o Instinto Superior, permitindo reflexos automáticos e movimentos perfeitos com um poder ainda maior. ",
  },
];

export default function Transforms() {
    return (
        <View>
            <FlatList
                data={gokuTransforms}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Cardtransforms transforms={item}/>
                )}
            />
        </View>
    );
}