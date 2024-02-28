// MyScreens/Result.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Result = ({ route }) => {
  // Puedes acceder a los parámetros pasados a través de la navegación
  const { apiResult } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resultados</Text>
      <Text style={styles.resultText}>
        Diagnostico del ojo Izquierdo: {apiResult.result1}
      </Text>
      <View>
        <Text>{apiResult && apiResult.result1 && apiResult.result1.predicted_class}</Text>
        <Text>{apiResult && apiResult.result2 && apiResult.result2.predicted_class}</Text>
      </View>
      <Text style={styles.resultText}>
      Diagnostico del ojo Derecho: {apiResult.result2}
      </Text>
      {/* Puedes personalizar cómo se muestra la información de la API en esta pantalla */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Result;
