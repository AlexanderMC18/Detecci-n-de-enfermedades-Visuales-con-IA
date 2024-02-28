// CerrarSesionScreen.js
import React from 'react';
import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function cerrarSesion(navigation) {
  try {
    // Elimina el token de sesión almacenado
    await AsyncStorage.removeItem('token');

    // Navegar a la pantalla de inicio de sesión (Login)
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });

    console.log('Sesión cerrada correctamente');
  } catch (error) {
    console.error('Error al cerrar sesión:', error.message);
  }
}

const CerrarSesionScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Agrega un botón para cerrar sesión */}
      <Button title="Cerrar Sesión" onPress={() => cerrarSesion(navigation)} />
    </View>
  );
}

export default CerrarSesionScreen;

