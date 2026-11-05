import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="index" options={{ title: 'Início' }}/>
      <Drawer.Screen name="sobre" options={{ title: 'Sobre' }}/>
      <Drawer.Screen name="moedas" options={{ title: 'Moedas' }}/>
    </Drawer>
  );
}