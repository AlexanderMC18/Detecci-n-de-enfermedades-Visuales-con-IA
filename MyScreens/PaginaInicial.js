import 'react-native-gesture-handler';
import React, { useState } from 'react';
import RegistrarPacientes from '../MyScreens/RegistrarPacientes';
import {Button,  StyleSheet,  Text,  Image,  TouchableOpacity,  View,} from 'react-native';

const PlaceholderImage2 = require('../icons/Recurso3.png');


export default function PaginaInicial({navigation}) {
  return (
    <View style={styles.container}>

      {/* Container 1 */}
      <View style={styles.container3}>
      <Image source={PlaceholderImage2} style={styles.image} />
      </View>

      <TouchableOpacity onPress={() => {navigation.jumpTo('Analisis');}}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Analizar</Text>
            </View>
          </TouchableOpacity>
          
      

      {/* Container 1 */}
      <View style={styles.container3}>
        <Text>
        
        </Text>
        <Text>
        
        </Text>
        <Text>
        
        </Text>
        <Text>
        
        </Text>
      </View>

    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  image: {
    width:'90%',
    height:'140%',
    margin:60,
    marginTop:50,
    marginBottom:50    
  },
  button: {
    marginBottom: 20,
    width: 300,
    height:80,
    alignItems: 'center',
    backgroundColor: '#4D82BC',
    borderRadius:45
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontSize:25
  },
  container3: {
    flex:1,
    margin:60,
    padding:20,
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems:'center'
    }

});
