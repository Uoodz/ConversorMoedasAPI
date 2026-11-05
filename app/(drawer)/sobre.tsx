import { StyleSheet, Text, View, ScrollView} from "react-native";
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Conteudo from '../../components/conteudo';

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Conteudo titulos='Conversão de Moedas' descricao='A conversão de moedas é um processo que permite transformar o valor de uma moeda em outra, utilizando como referência a taxa de câmbio. Ela é muito útil para quem deseja viajar para outros países, realizar compras internacionais ou simplesmente acompanhar o valor do dinheiro em diferentes regiões do mundo.'/>
            <Conteudo titulos='Como funciona ?' descricao='Cada moeda possui um valor de mercado em relação às demais. Esse valor é definido pela taxa de câmbio, que pode variar diariamente de acordo com fatores econômicos, políticos e financeiros. Por exemplo, se 1 dólar americano equivale a R$ 5,00, significa que 10 dólares correspondem a R$ 50,00. Para realizar a conversão, basta multiplicar o valor desejado pela cotação da moeda.'/>
            <Conteudo titulos='Como utilizar o conversor?' descricao='Utilizar um conversor de moedas é simples:' lista1='1 - Selecione a moeda de origem, ou seja, aquela que você possui.' lista2='2 - Escolha a moeda de destino, para a qual deseja converter o valor.' lista3='3 - Informe a quantia que deseja converter.' lista4='4 - Clique no botão de conversão para visualizar o resultado.'/>
          </View>
          <View style={styles.observacao}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>Importante:</Text>
          </View>
          <View>
            <Text style={styles.texto}>As taxas de câmbio podem mudar constantemente. Além disso, bancos e casas de câmbio podem aplicar tarifas e valores diferentes da cotação apresentada em um conversor</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  observacao: {
    marginTop: '10%',
    marginStart: '3%',
  },

  texto: {
    fontSize: 12,
    marginStart: '3%',
    marginEnd: '5%',
  }
});
