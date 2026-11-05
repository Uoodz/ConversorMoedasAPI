import { StyleSheet, Text, View} from 'react-native';

export default function Titulo(props) {
    return (
        <View>
            <Text style={styles.titulos}>{props.titulos}</Text>
            <Text style={styles.conteudo}>{props.descricao}</Text>
            <Text style={styles.listas}>{props.lista1}</Text>
            <Text style={styles.listas}>{props.lista2}</Text>
            <Text style={styles.listas}>{props.lista3}</Text>
            <Text style={styles.listas}>{props.lista4}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titulos: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },

    conteudo: {
        fontSize: 13,
        textAlign: 'justify',
        marginTop: 5,
        marginStart: '4%',
        marginEnd: '4%',
    },

    listas: {
        marginStart: '6%',
        marginEnd: '4%',
        fontSize: 12,
        textAlign: 'justify',
    },
});