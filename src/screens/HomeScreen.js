import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import CandidateCard from '../components/CandidateCard';

const HomeScreen = ({ navigation }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const candidates = [
    {
      name: 'João da Silva',
      description: 'Engenheiro civil com 20 anos de experiência, focado em infraestrutura urbana.',
    },
    {
      name: 'Maria de Souza',
      description: 'Professora e ativista comunitária, defensora de políticas educacionais inclusivas.',
    },
    {
      name: 'Carlos Ferreira',
      description: 'Empresário e defensor do empreendedorismo local, com foco em desenvolvimento econômico.',
    },
  ];

  // Função de votação
  const handleVote = (candidateName) => {
    setSelectedCandidate(candidateName);
    navigation.navigate('Confirmation', { candidate: candidateName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seu candidato:</Text>
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.name}
          candidate={candidate}
          onVote={handleVote}
        />
      ))}
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

export default HomeScreen;
