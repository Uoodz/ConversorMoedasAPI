import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function moedasTab () {
  return(
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name='index' options={{title: 'Moedas', tabBarIcon: () => <Ionicons name='cash-outline' size={20}/>}}/>
      <Tabs.Screen name='favoritas' options={{title: 'Favoritas', tabBarIcon: () => <Ionicons name='star-outline' size={20}/>}}/>
      <Tabs.Screen name='converter' options={{title: 'Converter', tabBarIcon: () => <Ionicons name='albums-outline' size={20}/>}}/>
    </Tabs>
  )
}