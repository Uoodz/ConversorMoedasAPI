import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from "react-native";
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.tituloPrincipal}> O objetivo desse aplicativo é ajudar você a converter moedas facilmente !</Text>
            <Image style={styles.imagemMoeda} source={require('../../assets/moeda.jpg')}/>
          </View>

          <View style={styles.viewTextos}>
            <Text style={styles.textos}>Quer converter suas moedas para outra sem nenhuma dificuldade ? Estamos aqui para ajudar.</Text>
            <Text style={styles.textos}>A conversão de moedas permite transformar o valor de uma moeda em outra, facilitando compras internacionais,
              viagens e transações financeiras. Com ela, é possível acompanhar as taxas de câmbio e descobrir quanto seu dinheiro vale em diferentes países,
                tornando as operações mais práticas e acessíveis.</Text>
            <Text style={styles.textos}>Basta clicar no botão abaixo e você será redirecionado para a página de conversão</Text>
          </View>

          <View>
            <Link href="/(drawer)/tabMoedas" asChild>
              <TouchableOpacity style={styles.botao}>
                <Text style={{color: 'white', fontSize: 17}}>Converter</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  tituloPrincipal: {
    marginTop: '7%',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  imagemMoeda: {
    marginTop: '10%',
    alignSelf: 'center',
    height: 200,
    width: '90%', 
    borderRadius: 15,
  },

  viewTextos: {
    marginStart: '5%',
    marginEnd: '5%',
  },

  textos: {
    marginTop: '7%',
    fontSize: 13,
    textAlign: 'justify',
  },

  botao: {
    width: '90%',
    height: '25%',
    marginTop: '20%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'blue',
  },
});
