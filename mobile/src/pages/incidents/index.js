import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './style';
import api from '../../services/api';

export default function Incidents() {
  // property
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // function
  useEffect(() => {
    getIncidents();
  }, []);
  async function getIncidents() {
    if (loading) return;
    if (total > 0 && incidents.length === total) return;
    try {
      setLoading(true);
      const response = await api.get('/incidents', { params: { page } });
      // adicionando dois vetores dentro do react native - somando os arrays
      setIncidents([...incidents, ...response.data]);
      setTotal(response.headers['x-total-count']);
      setPage(page + 1);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  }
  function navigationToDetail(incident) {
    navigation.navigate('detail', { incident }); // mesmo nome dado na rota
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>

      <Text style={styles.headerWelcome}>Bem vindo(a)</Text>
      <Text style={styles.headerDescription}>Escolha um dos casos abaixo e salve o dia</Text>

      <FlatList
        data={incidents}
        style={styles.incidentsContainer}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={getIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incidents}>

            <Text style={styles.incidentsProperty}>ONG:</Text>
            <Text style={styles.incidentsValue}>{incident.nome}</Text>

            <Text style={styles.incidentsProperty}>CASO:</Text>
            <Text style={styles.incidentsValue}>{incident.descricao}</Text>

            <Text style={styles.incidentsProperty}>VALOR:</Text>
            {/* <Text style={styles.incidentsValue}>{incident.valor}</Text> */}
            <Text style={styles.incidentsValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.valor)}</Text>

            <TouchableOpacity style={styles.incidentsButton} onPress={() => navigationToDetail(incident)}>
              <Text style={styles.incidentsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}