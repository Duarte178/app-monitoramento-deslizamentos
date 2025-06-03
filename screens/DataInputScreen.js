import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DataInputScreen({ navigation }) {
  const [umidade, setUmidade] = useState('');
  const [inclinacao, setInclinacao] = useState('');

  const handleSubmit = async () => {
    if (!umidade || !inclinacao) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    const umidadeNum = parseFloat(umidade);
    const inclinacaoNum = parseFloat(inclinacao);

    // Simples lógica de risco
    let risco = 'Baixo';
    if (umidadeNum > 80 || inclinacaoNum > 30) {
      risco = 'Alto';
    } else if (umidadeNum > 60 || inclinacaoNum > 20) {
      risco = 'Médio';
    }

    const registro = {
      data: new Date().toLocaleString(),
      umidade: umidadeNum,
      inclinacao: inclinacaoNum,
      risco,
    };

    // Salvar no histórico
    try {
      const historico = JSON.parse(await AsyncStorage.getItem('historico')) || [];
      historico.push(registro);
      await AsyncStorage.setItem('historico', JSON.stringify(historico));
    } catch (e) {
      console.log('Erro ao salvar:', e);
    }

    navigation.navigate('Risco', { registro });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Umidade do Solo (%)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={umidade}
        onChangeText={setUmidade}
        placeholder="Digite a umidade"
      />

      <Text style={styles.label}>Inclinação do Terreno (°)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inclinacao}
        onChangeText={setInclinacao}
        placeholder="Digite a inclinação"
      />

      <Button title="Analisar Risco" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  label: { fontSize: 16, marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 16, padding: 8, borderRadius: 6 }
});
