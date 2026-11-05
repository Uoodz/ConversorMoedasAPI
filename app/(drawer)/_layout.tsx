import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="index" options={{ title: 'Início', drawerIcon: () => <Ionicons name='home-outline' size={20}/>, drawerStyle: {width: '60%'}}}/>
      <Drawer.Screen name="sobre" options={{ title: 'Sobre', drawerIcon: () => <Ionicons name='information-circle-outline' size={20}/>, drawerStyle: { width: '60%'}}}/>
      <Drawer.Screen name="moedas" options={{ title: 'Moedas', drawerIcon: () => <Ionicons name='logo-bitcoin' size={20}/>, drawerStyle: {width: '60%' }}}/>
    </Drawer>
  );
}