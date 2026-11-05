import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const URL = 'https://v6.exchangerate-api.com/v6/4333908f664586781ce603e2/latest/USD';

export default function Page() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>testeeee1</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
});
