import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity,  } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from './styles';

import AppLoading from 'expo-app-loading';
import { 
  useFonts, 
  Inter_300Light, 
  Inter_500Medium, 
  Inter_700Bold } 
from '@expo-google-fonts/inter';


type Props = {};
export default function App() {
  const EBT = ({
    homem: '75',
    mulher: '65',
    gestante: '80',
    prematuro: '95',
    recemNascido: '85',

  });
 
  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_500Medium,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      
      <View style={styles.container}>
        <StatusBar style="auto" />
      <View style={styles.content}>
        <Image style={styles.logo} source={require('./assets/blood.png')} />
        <Text style={styles.title}>CALCULE SEU VOLUME 
              SANGUÍNEO</Text>
        
        <Text style={styles.subTitle}>Preencha os campos e clique em calcular.</Text>

        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder='PESO'
            keyboardType='numeric'
          />
          <TextInput 
            style={styles.input}
            placeholder='ALTURA'
            keyboardType='numeric'
          />
      <ModalDropdown 
        style={{ 
        alignSelf: 'center',
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: '#FF7E75',
        width: 320, 
        height: 62,  
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
       }}
        textStyle={{fontSize: 18, alignSelf: 'center', color: '#CCC' }}
        dropdownStyle={{ width: 322, marginStart: -91,}}
        dropdownTextStyle={{fontSize: 18, alignItems: 'center', textAlign: 'center', alignSelf: 'center',  }}
        options={['Recém-Nascidos', 'Homens', 'Mulheres', 'Infantis', 'Prematuros', 'Gestantes']}
        
        defaultValue='Selecione o Sexo'
      />
        </View>
       <View>
        <TouchableOpacity style={styles.calculo}>
          <Text style={{color: '#FFF', textAlign: 'center', fontFamily: 'Inter_500Medium'}}>Calcular</Text>
        </TouchableOpacity>

       </View>
       <View>

       <Text style={styles.resultado}
         >Volume Sanguíneo</Text>
       <Text
       style={styles.resultado}
       >0.000 LITROS</Text>
       </View>
    </View>
    </View>
  )
 }
}
