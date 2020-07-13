import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import styles from './style';
import logoImg from '../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const messageMail = `
        Olá ${incident.nome}! Estou entrando em contato pois gostaria de ajudar no caso ${incident.titulo},
        com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.valor)}
    `;
  function navigationBack() {
    navigation.goBack();
  }
  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso ${incident.titulo}`,
      recipients: [incident.email],
      body: messageMail
    });
  }
  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whataspp}&text=${messageMail}`);
  }
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigationBack}>
          <Feather name="arrow-left" size={25} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incidents}>
        <Text style={styles.incidentsProperty}>ONG:</Text>
        <Text style={styles.incidentsValue}>{incident.nome}: {incident.cidade}/{incident.uf}</Text>

        <Text style={styles.incidentsProperty}>CASO:</Text>
        <Text style={styles.incidentsValue}>{incident.descricao}</Text>

        <Text style={styles.incidentsProperty}>VALOR:</Text>
        <Text style={styles.incidentsValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.valor)}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.contactTitle}>Salve o dia!</Text>
        <Text style={styles.contactSubtitle}>Seja o herói deste caso.</Text>
        <Text style={styles.contactDescription}>Entre em contato.</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionsButton} onPress={sendWhatsapp}>
            <Text style={styles.actionsText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionsButton} onPress={sendEmail}>
            <Text style={styles.actionsText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}