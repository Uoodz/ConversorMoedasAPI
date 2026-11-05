import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>teste2</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
});
