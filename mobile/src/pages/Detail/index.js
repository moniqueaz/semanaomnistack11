import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';

const Detail = () => {
  const navigation = useNavigation();
  const message = 'Entrando em contato sobre a ajuda no valor de R$ 120,00.';

  const navigateBack = () => {
    navigation.goBack()
  };

  const sendMail = (pMessage) => {
    MailComposer.composeAsync({
      subject: 'Heroi do caso: Cadelinha atropelada',
      recipients: ['moniqueaz.si@gmail.com'],
      body: pMessage,
    })
  }

  const sendWhatsapp = (pMessage) => {
    Linking.openURL(`whatsapp://send?phone=5521980581161&text=${pMessage}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041"/>
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={styles.incidentProperty, { marginTop: 0 }}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>
        
        <Text style={styles.incidentProperty}>CASOS:</Text>
        <Text style={styles.incidentValue}>Cadelinha atropelas</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => sendWhatsapp(message)}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={() => sendMail(message)}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Detail;