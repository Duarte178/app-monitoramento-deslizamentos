import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento de Riscos de Deslizamento</Text>
      <Text style={styles.subtitle}>Bem-vindo! Este app ajuda a monitorar condições ambientais para prevenir deslizamentos de terra.</Text>
      <Button title="Iniciar Monitoramento" onPress={() => navigation.navigate('Inserir Dados')} />
      <Button title="Ver Histórico" onPress={() => navigation.navigate('Histórico')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 24 }
});
