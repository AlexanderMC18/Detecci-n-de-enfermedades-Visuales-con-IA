import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PasswordInput = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleVerifyPassword = () => {
    if (password === confirmPassword) {
      // Contraseñas coinciden
      alert('Contraseña confirmada correctamente');
      
      // Después de verificar, navega a la pantalla 'LoginScreen'
      navigation.navigate('IAOpti-x');
    } else {
      // Contraseñas no coinciden
      alert('Las contraseñas no coinciden');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>NUEVA CONTRASEÑA</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#00004d" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nueva contraseña"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#00004d" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
            <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={handleVerifyPassword}
        >
          <Text style={styles.buttonText}>CONFIRMAR CONTRASEÑA</Text>
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
  eyeIcon: {
    position: 'absolute',
    right: 10,
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

export default PasswordInput;




