import { View, Text, StyleSheet } from 'react-native';
import { Moeda } from '../types/Moeda';


export function ItemMoeda({ item, index }: { item: Moeda, index: number }) {
  return (
    <View style={styles.linhaMoeda}>
      <Text style={styles.textoCodigo}>{item.codigo}</Text>
      <Text style={styles.textoNome}>{item.nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  linhaMoeda: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 5,
    marginBottom: 5,
  },

  textoCodigo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },

  textoNome: {
    fontSize: 12,
    color: '#6f6f70',
  },
});