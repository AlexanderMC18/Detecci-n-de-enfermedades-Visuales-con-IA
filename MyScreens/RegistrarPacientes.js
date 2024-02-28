import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,KeyboardAvoidingView, ScrollView, TextInput} from 'react-native';
{/* <a href="https://www.flaticon.com/free-icons/home" title="home icons">Home icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/homepage" title="homepage icons">Homepage icons created by Md Tanvirul Haque - Flaticon</a> */}


const PlaceholderImage = require('../icons/logo.png');
const icono = require('../icons/home.png');


export default function RegistrarPacientes({navigation}) {
  return (
    
      
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
          {/* textLayout */}
          <View style={styles.textLayout}   >
              {/* Scroll */}
              <ScrollView>
                {/* <TextInput style={styles.input} onChangeText={this.onChangeNumber} maxLength={12} placeholder="Folio"/> */}
                <TextInput style={styles.input} onChangeText={this.onChangeNumber} maxLength={50} placeholder="Nombre Completo"/>
                <TextInput style={styles.input} onChangeText={this.onChangeNumber} placeholder="Fecha Nacimiento" />
                <TextInput style={styles.input} onChangeText={this.onChangeNumber} maxLength={3} keyboardType="numeric" placeholder="Edad"/>
                <TextInput style={styles.input} onChangeText={this.onChangeNumber} maxLength={15} placeholder="Género"/>
                <TextInput style={styles.input} onChangeText={this.onChangeNumber} maxLength={100} placeholder="Dirección"/>
                <TextInput style={styles.input} onChangeText={this.onChangeNumber} maxLength={16} keyboardType="numeric" placeholder="Número de Telefono" />
                <TextInput style={styles.input} onChangeText={this.onChangeNumber} maxLength={120} placeholder="Observaciones"/>
                <TextInput style={styles.input} onChangeText={this.onChangeNumber} maxLength={50} placeholder="Correo Electrónico (opcional)"/>
              </ScrollView>
          </View>

          {/* ButtonLayout */}
          <View style={styles.buttonLayout} >
            <TouchableOpacity onPress={() => {navigation.jumpTo('perfilPacienteS');}}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Ver Perfil</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._onPressRevisar}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Agregar Paciente</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* <StatusBar style="auto" /> */}

      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  headerLayout:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: '#4D82BC',
    width:'100%',
    height:'10%'
  },
  textLayout:{
    flex: 6, 
    
  },
  buttonLayout:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },



  image: {
      width:'40%',
      height: '47%',
      margin:1
  },
  tinyLogo: {
    width: 25,
    height:25, 
    margin: 15
  },

  circleButtonContainer: {
    width: 50,
    height: 50,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 180,
    padding: 3,
  },
  circleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 360,
    margin:10,
    backgroundColor: '#fff',
  },


  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:45,
    textAlign:'center'
  },


  button: {
    marginBottom: 3,
    width: 120,
    height:60,
    margin:20,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#4D82BC',
    borderRadius:45,
  },
  buttonText: {
    textAlign: 'center',
    padding:10,
    color: 'white',
    fontSize:18
  },
});

