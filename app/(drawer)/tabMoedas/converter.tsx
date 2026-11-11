import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Modal, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Moeda } from '../../../src/types/Moeda';

export default function Page() {
  const [moedaOrigem, setMoedaOrigem] = useState<string>('Escolha a moeda de origem aqui ...');
  const [moedaDestino, setMoedaDestino] = useState<string>('Escolha a moeda de destino aqui ... ');
  const [valorConversao, setValorConversao] = useState<string>('');
  const [taxaConversao, setTaxaConversao] = useState<number>();
  const [resultado, setResultado] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);

  const [moedas, setMoedas] = useState<Moeda[]>([]);
  const [modalVisivel, setModalVisivel] = useState<boolean>(false);
  const [tipoSelecao, setTipoSelecao] = useState<'origem' | 'destino'>('origem');

    const converterMoeda = (item: string[]): Moeda => {
      return {
        codigo: item[0],
        nome: item[1]
      };
    };

  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/4333908f664586781ce603e2/codes')
      .then(res => res.json())
      .then(data => {setMoedas(data.supported_codes.map(converterMoeda))})
      .catch(erro => console.log('Erro ao carregar lista:', erro));
  }, [] );


  const processarCalculo = (data: any) => {
    const taxa = data.conversion_rates[moedaDestino];
    const valorNumerico = Number(valorConversao);
    const calculo = valorNumerico * taxa;
    
    setTaxaConversao(taxa);
    setResultado(calculo);
  };

  const realizarConversao = () => {
    if (valorConversao === '') 
      return;
    setLoading(true);

    const url = 'https://v6.exchangerate-api.com/v6/4333908f664586781ce603e2/latest/' + moedaOrigem;

    fetch(url)
      .then(data => data.json())
      .then(data => processarCalculo(data))
      .catch(erro => console.log('Erro ao converter:', erro))
      .finally(() => setLoading(false));
  };

  const abrirModal = (tipo: 'origem' | 'destino') => {
    setTipoSelecao(tipo);
    setModalVisivel(true);
  };

  const selecionarMoeda = (codigo: string) => {
    if (tipoSelecao === 'origem') {
      setMoedaOrigem(codigo);
    } else {
      setMoedaDestino(codigo);
    }
    setModalVisivel(false);
  };

  const renderItemMoeda = ({ item }: { item: Moeda }) => (
    <TouchableOpacity style={styles.itemMoeda} onPress={() => selecionarMoeda(item.codigo)}>
      <Text style={styles.textoCodigoLista}>{item.codigo}</Text>
      <Text style={styles.textoNomeLista}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.cardEntrada}>
          
          <Text style={styles.titulos}>Moeda de Origem:</Text>
          <TouchableOpacity style={styles.botaoSelecao} onPress={() => abrirModal('origem')}>
            <Text style={styles.textoBotaoSelecao}>{moedaOrigem}</Text>
            <Text style={styles.textoBotaoSelecao}>⬇</Text>
          </TouchableOpacity>

          <Text style={styles.titulos}>Moeda de Destino:</Text>
          <TouchableOpacity style={styles.botaoSelecao} onPress={() => abrirModal('destino')}>
            <Text style={styles.textoBotaoSelecao}>{moedaDestino}</Text>
            <Text style={styles.textoBotaoSelecao}>⬇</Text>
          </TouchableOpacity>

          <Text style={styles.titulos}>Valor para converter:</Text>
          <TextInput style={styles.input} value={valorConversao} onChangeText={setValorConversao} keyboardType="numeric" placeholder="Digite o valor para converter aqui ..."/>
          <TouchableOpacity style={styles.botao} onPress={realizarConversao}>
            {loading ? <ActivityIndicator color="#fff"/> : <Text style={styles.textoBotao}>Fazer Conversão</Text>}
          </TouchableOpacity>
        </View>

        {resultado ? (
          <View style={styles.cardResultado}>
            <Text style={styles.textoResultadoFinal}>{resultado.toFixed(2)} {moedaDestino}</Text>
            <Text style={styles.textoTaxa}>1 {moedaOrigem} = {taxaConversao} {moedaDestino}</Text>
          </View>
        ) : null}

        <Modal visible={modalVisivel} animationType="slide">
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.cabecalhoModal}>
              <Text style={styles.tituloModal}>Selecione a Moeda</Text>
              <TouchableOpacity onPress={() => setModalVisivel(false)} style={styles.botaoFechar}>
                <Text style={styles.textoFechar}>Cancelar</Text>
              </TouchableOpacity>
            </View>

            <FlatList data={moedas} keyExtractor={(item) => item.codigo} renderItem={renderItemMoeda}/>
          </SafeAreaView>
        </Modal>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 25,
  },

  cardEntrada: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    marginTop: '10%',
  },

  titulos: {
    fontSize: 15,
    color: 'black',
    marginBottom: 8,
    marginTop: 10,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 15,
  },

  botaoSelecao: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textoBotaoSelecao: {
    alignItems: 'center',
    fontSize: 14,
    color: '#333',
  },

  botao: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  cardResultado: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },

  textoResultadoFinal: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'blue',
  },

  textoTaxa: {
    fontSize: 14,
    color: 'black',
    marginTop: 8,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  cabecalhoModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },

  tituloModal: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  botaoFechar: {
    padding: 8,
  },

  textoFechar: {
    color: 'blue',
    fontSize: 16,
  },

  itemMoeda: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray'
  },

  textoCodigoLista: {
    fontWeight: 'bold',
    fontSize: 15,
    width: 60,
  },

  textoNomeLista: {
    fontSize: 15,
    color: 'gray',
  },
});