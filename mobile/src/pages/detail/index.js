import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import logoImg from '../../assets/logo.png'

export default function Detail(){
    const navigation = useNavigation();

    function navigationBack(){
        navigation.goBack();
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
                <Text style={styles.incidentsValue}>APAD:</Text>
                
                <Text style={styles.incidentsProperty}>CASO:</Text>
                <Text style={styles.incidentsValue}>Cachorro atropelado</Text>

                <Text style={styles.incidentsProperty}>VALOR:</Text>
                <Text style={styles.incidentsValue}>R$ 1.200,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.contactTitle}>Salve o dia!</Text>
                <Text style={styles.contactSubtitle}>Seja o herói deste caso.</Text>
                <Text style={styles.contactDescription}>Entre em contato.</Text>
                
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionsButton} onPrsess={() => {}}>
                        <Text style={styles.actionsText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionsButton} onPrsess={() => {}}>
                        <Text style={styles.actionsText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}