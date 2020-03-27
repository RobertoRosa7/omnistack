import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity,FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './style';

export default function Incidents(){
    // property
    const navigation = useNavigation();
    let totalcases = 0;

    // function
    function navigationToDetail(){
        navigation.navigate('detail'); // mesmo nome dado na rota
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{totalcases} casos</Text>
                </Text>
            </View>
            
            <Text style={styles.headerWelcome}>Bem vindo(a)</Text>
            <Text style={styles.headerDescription}>Escolha um dos casos abaixo e salve o dia</Text>

            <FlatList
                data={[1,2,3]}
                style={styles.incidentsContainer}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                <View style={styles.incidents}>
                       
                        <Text style={styles.incidentsProperty}>ONG:</Text>
                        <Text style={styles.incidentsValue}>APAD:</Text>
                        
                        <Text style={styles.incidentsProperty}>CASO:</Text>
                        <Text style={styles.incidentsValue}>Cachorro atropelado</Text>

                        <Text style={styles.incidentsProperty}>VALOR:</Text>
                        <Text style={styles.incidentsValue}>R$ 1.200,00</Text>

                        <TouchableOpacity style={styles.incidentsButton} onPress={navigationToDetail}>
                            <Text style={styles.incidentsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041"/>
                        </TouchableOpacity>
                </View>
                )}
            />
        </View>
    );
}