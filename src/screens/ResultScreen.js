import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = () => {
  
  const results = {
    candidato1: 40,
    candidato2: 35,
    candidato3: 25,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados parciais:</Text>
      <Text>Candidato 1: {results.candidato1}%</Text>
      <Text>Candidato 2: {results.candidato2}%</Text>
      <Text>Candidato 3: {results.candidato3}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ResultScreen;
