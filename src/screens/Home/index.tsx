import { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
    const [participantName, setParticipantName] = useState('');
    const [participants, setParticipants] = useState<string[]>([]);

    function handleParticipantAdd() {
      if (participants.includes(participantName)) {
        Alert.alert(`${participantName} já está na lista`);
      
        setParticipantName('');

        return;
      }
      
      setParticipants(prevState => [...prevState, participantName]);

      setParticipantName('');
    }
    
    function handleParticipantRemove(name: string) {
      Alert.alert('Remover', `Remover o participante ${name}`, [
        {
          text: 'Sim',
          onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
        },
        {
          text: 'Não',
          style: 'cancel'
        },
      ]);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.eventName}>
          Sociedade do Anel
        </Text>
        <Text style={styles.eventDate}>
          Sexta, 04 de novembro de 2022
        </Text>
        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder='Nome do participante'
                placeholderTextColor='#6B6B6B'
                value={participantName}
                onChangeText={setParticipantName}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleParticipantAdd}
            >
                <Text 
                style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        <FlatList
        showsVerticalScrollIndicator={false}
          data={participants}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Participant 
              key={item}
              name={item} 
              onRemove={() => handleParticipantRemove(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ainda não chegou ninguém? Adicione pessoas à sua lista de presença!
            </Text>
          )}
        />
      </View>
    );
  }
