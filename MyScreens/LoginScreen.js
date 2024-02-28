import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';

// Inicializa Firebase con tu configuración
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      // Utiliza la función de inicio de sesión de Firebase
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Inicio de sesión exitoso');
      navigation.navigate('Inicio');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      alert('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>INICIO DE SESIÓN</Text>

        {/* Campo de correo electrónico con ícono de carta */}
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#00004d" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            onChangeText={setEmail}
          />
        </View>

        {/* Campo de contraseña con ícono de candado cerrado o abierto */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#00004d" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
          />
        </View>

        {/* Enlaces de texto */}
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Verificar')}>
            <Text style={[styles.linkText, { color: '#4D82BC'}]}>
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Botón de inicio de sesión */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
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
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#0000b3',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    height: 40,
    flex: 1,
    color: '#00004d',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  linkText: {
    fontSize: 16,
    marginHorizontal: 50, 
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#4D82BC',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
