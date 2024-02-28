import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const PasswordReset = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    try {
      // Enviar correo electrónico para restablecimiento de contraseña
      await sendPasswordResetEmail(auth, email);

      // Muestra una alerta o mensaje indicando que se ha enviado un correo para restablecimiento de contraseña
      alert(`Se ha enviado un correo para restablecimiento de contraseña a: ${email}`);

      // Después de enviar el correo, navega a la pantalla 'Contrasena' o a la pantalla que desees
      navigation.navigate('IAOpti-x');
    } catch (error) {
      console.error('Error al enviar el correo electrónico para restablecimiento de contraseña:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Restablecer Contraseña</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={20} color="#00004d" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={handlePasswordReset}
        >
          <Text style={styles.buttonText}>ENVIAR CORREO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  loginContainer: {
    borderRadius: 10,
    padding: 16,
    width: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 80,
    marginTop: 80,
    color: '#0000b3',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    height: 40,
    flex: 1,
    color: '#00004d',
  },
  loginButton: {
    backgroundColor: '#4D82BC',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 45,
  },  
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default PasswordReset;
