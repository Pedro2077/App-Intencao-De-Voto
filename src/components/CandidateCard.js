import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const CandidateCard = ({ candidate, onVote }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{candidate.name}</Title>
        <Paragraph>{candidate.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={() => onVote(candidate.name)}>
          Votar em {candidate.name}
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
  },
});

export default CandidateCard;
