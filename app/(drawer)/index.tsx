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
            <Link href="/(drawer)/moedas" asChild>
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
    marginTop: 15,
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  imagemMoeda: {
    marginTop: 15,
    alignSelf: 'center',
    height: 150,
    width: '90%', 
    borderRadius: 15,
  },

  viewTextos: {
    marginStart: 15,
    marginEnd: 15,
  },

  textos: {
    marginTop: 15,
    fontSize: 13,
    textAlign: 'justify',
  },

  botao: {
    width: '90%',
    height: '25%',
    marginTop: 75,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'blue',
  },
});
