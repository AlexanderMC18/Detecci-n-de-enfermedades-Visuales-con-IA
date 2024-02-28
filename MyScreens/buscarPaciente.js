import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image, Button, StatusBar , textStyle} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome'; 


export default function buscarPaciente({navigation}) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Texto de búsqueda:', searchText);
  };

  const handleButton1 = () => {
    console.log('Botón 1 presionado');
  };

  const handleButton2 = () => {
    console.log('Botón 2 presionado');
  };

  const tableHead = ['Folio', 'Nombre', 'Edad', 'Enfermedad', 'Observaciones'];
  const tableData = [
    ['202023618', 'Irving Daniel Ventura Hernández', '21', 'Cataratas', '-------'],
    ['202023618', 'Irving Daniel Ventura Hernández', '21', 'Cataratas', '-------'],
    // Puedes agregar más filas según sea necesario....PERFIL
  ];

  return (
    <View style={styles.outerContainer}>
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

      {/* Contenido fuera del borde */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el nombre del paciente o folio"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Button title="Buscar" onPress={handleSearch} color='#4d82bc' />
      </View>

      {/* Tabla */}
      <Table borderStyle={{ borderWidth: 2, borderColor: '#4d82bc' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>

      {/* Botones adicionales */}
      <View style={styles.buttonContainer}>
        <Button title="Ver Perfil" onPress={() => {navigation.jumpTo('perfilPacienteS');}} color='#4d82bc'/>
        <Button title="Agregar Paciente" onPress={() => {navigation.jumpTo('Registrar Pacientes');}} color='#4d82bc' />
  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    borderWidth: 1,
    borderColor: '#4d82bc',
    borderRadius: 1,
    padding: 1,
    backgroundColor: '#4d82bc',
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
  head: { 
    height: 55, 
    backgroundColor: '#BAE8FF' },
  text: { margin: 1 },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 270,
    marginLeft: 95,
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
    width: 40,
    height: 40,
    marginRight: 160,
    marginTop: 28,
    resizeMode: 'stretch',
    borderRadius: 30,
    bottom: 0,
    right: 0,
    left: 20,
  },
});


