import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image, Button, StatusBar, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function perfilPaciente({navigation}) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Acciones relacionadas con la búsqueda......MY-APP
    console.log('Texto de búsqueda:', searchText);
  };

  const handleButton1 = () => {
    // Acciones cuando se presiona el primer botón
    console.log('Botón 1 presionado');
  };

  const handleButton2 = () => {
    // Acciones cuando se presiona el segundo botón
    console.log('Botón 2 presionado');
  };

  const handleButton3 = () => {
    // Acciones cuando se presiona el segundo botón
    console.log('Botón 3 presionado');
  };
  return (
    
    <View style={styles.outerContainer}>
    
      {/* Barra de estado */}
      <StatusBar style="auto" />

      {/* Contenido del borde */}
      <View style={styles.container}>
        <Image
          source={require('../icons/Recurso2.png')}
          style={styles.image1}
        />
        <Image
          source={require('../icons/logohouse.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>Irving Daniel Ventura Hernández.</Text>
         {/* Contenido fuera del borde */}
      <View style={styles.searchContainer}>
      <Text style={styles.text}>Fecha</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={searchText}
          onChangeText={setSearchText}
        />
        
        <Button title="Buscar" onPress={handleSearch} color="#4d82bc"/>
      </View>

      {/* Botones adicionales */}
      <View style={styles.buttonContainer}>
      <Button title="Nuevo Escaneo" onPress={() => {navigation.jumpTo('Analisis');}} color="#4d82bc" />
        <Button title="Imprimir" onPress={handleButton1} color="#4d82bc" />
        <Button title="Ver" onPress={handleButton2} color="#4d82bc" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {//Borde
    borderWidth: 0,        // Ancho del borde
    borderColor: '#4d82bc',  // Color del borde
    borderRadius: 1,      // Radio de la esquina (opcional)
    padding: 1,           // Relleno del contenido (opcional)
    backgroundColor: '#4d82bc',  // Color de fondo del contenido
    marginTop: 0,
    flexDirection: 'row',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#fff',
    marginTop: 30,
    marginLeft: 5,
    
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#4d82bc',
    borderRadius: 25,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 390,
    marginLeft: 50, // Espaciado entre el icono y el texto del botón
  },
  image1: {
    width: 105,
    height: 105,
    marginRight: 160,
    resizeMode: 'stretch',
    borderRadius: 30,
    bottom: 0,
    right: 0,
    left: 20,
  },
  image: {
    width: 40,// Ajusta el ancho según tus necesidades
    height: 40,
    marginRight: 160,// Espaciado entre el icono y el texto del botón
    marginTop: 28,
    resizeMode: 'stretch',
    borderRadius: 30,
    bottom: 0,
    right: 0,
    left: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 10,
    marginLeft: 5,
    marginBottom: 5,
    backgroundColor: '#4d82bc',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
  },
});
