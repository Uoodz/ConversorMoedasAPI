import { StyleSheet, Text, View, ActivityIndicator, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { Moeda } from '../../../src/types/Moeda';
import { ItemMoeda } from "../../../src/components/ItemMoeda";
import { useState, useEffect} from 'react';

const URL = 'https://v6.exchangerate-api.com/v6/4333908f664586781ce603e2/codes';

export default function Page() {

  const [moedas, setMoedas] = useState<Moeda[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const converterMoeda = (item: string[]): Moeda => {
  return {
    codigo: item[0],
    nome: item[1]
  };
};

  const listarMoedas = () => {
    fetch(URL)
      .then(data => data.json())
      .then(data => {setMoedas(data.supported_codes.map(converterMoeda))})
      .catch(erro => console.log('Deu erro na busca'))
      .finally(() => setLoading(false));
  }

  useEffect(() =>{
    listarMoedas();
  }, [] );

  if (loading) {
    return (
      <SafeAreaView style={styles.areaCarregamento}>
        <ActivityIndicator size="large"/>
        <Text style={styles.textoCarregamento}>Carregando moedas ...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList style={styles.lista} data={moedas} keyExtractor={(item) => item.codigo} renderItem={({ item, index }) => <ItemMoeda item={item} index={index} />}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  areaCarregamento: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoCarregamento: {
    marginTop: 10,
  },

  lista: {
    marginStart: 15,
    marginEnd: 15,
  }
});
