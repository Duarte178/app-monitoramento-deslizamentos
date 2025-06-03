import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryScreen({ navigation }) {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const fetchHistorico = async () => {
      const data = await AsyncStorage.getItem('historico');
      setHistorico(data ? JSON.parse(data) : []);
    };
    const unsubscribe = navigation.addListener('focus', fetchHistorico);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Monitoramento</Text>
      <FlatList
        data={historico}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Data: {item.data}</Text>
            <Text>Umidade: {item.umidade}%</Text>
            <Text>Inclinação: {item.inclinacao}°</Text>
            <Text>Risco: {item.risco}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>Nenhum registro ainda.</Text>}
      />
      <Button title="Voltar" onPress={() => navigation.navigate('Boas-vindas')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  item: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginBottom: 10 }
});
