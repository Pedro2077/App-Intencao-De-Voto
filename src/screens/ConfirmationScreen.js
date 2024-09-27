import React, { useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const ConfirmationScreen = ({ route, navigation }) => {
  const { candidate } = route.params;
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Result');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.text}>Voto para {candidate} registrado com sucesso!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConfirmationScreen;
