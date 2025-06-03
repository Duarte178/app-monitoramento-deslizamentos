import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MitigationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ações de Mitigação</Text>
      <Text style={styles.text}>• Afaste-se de áreas de risco imediatamente.</Text>
      <Text style={styles.text}>• Avise as autoridades locais.</Text>
      <Text style={styles.text}>• Não tente atravessar áreas alagadas ou instáveis.</Text>
      <Text style={styles.text}>• Monitore sempre as condições do terreno.</Text>
      <Button title="Voltar ao Início" onPress={() => navigation.navigate('Boas-vindas')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, marginBottom: 8 }
});
