import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RiskScreen({ route, navigation }) {
  const { registro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado da Análise</Text>
      <Text style={styles.label}>Umidade: {registro.umidade}%</Text>
      <Text style={styles.label}>Inclinação: {registro.inclinacao}°</Text>
      <Text style={[styles.risk, registro.risco === 'Alto'
        ? styles.high
        : registro.risco === 'Médio'
          ? styles.medium
          : styles.low]}>
        Risco: {registro.risco}
      </Text>
      {registro.risco === 'Alto' && (
        <Button title="Ver Ações de Mitigação" onPress={() => navigation.navigate('Mitigação')} />
      )}
      <Button title="Voltar ao Início" onPress={() => navigation.navigate('Boas-vindas')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 10 },
  risk: { fontSize: 20, fontWeight: 'bold', marginVertical: 16 },
  high: { color: 'red' },
  medium: { color: 'orange' },
  low: { color: 'green' },
});
