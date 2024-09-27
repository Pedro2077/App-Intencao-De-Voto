import React, { useEffect } from 'react';
import { View, Text, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      navigation.replace('Home');
    });
  }, []);

  return (
    <View>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text>Bem-vindo à Pesquisa de Intenção de Voto!</Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
