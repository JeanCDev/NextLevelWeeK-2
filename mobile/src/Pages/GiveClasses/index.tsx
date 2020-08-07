import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';
import giveClasesBGImg from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClases() {
    const {goBack} = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return ( 
        <View style={styles.container}>
            <ImageBackground 
                style={styles.content} 
                source={giveClasesBGImg}
                resizeMode='contain'>
                    <Text style={styles.title}>Quer ser um Proffy</Text>
                    <Text style={styles.description}>
                        Para começa, você precisa se cadastrar como professor na nossa plataforma web.
                    </Text>

                    <RectButton 
                        style={styles.okButton}
                        onPress={handleNavigateBack}>
                        <Text style={styles.okButtonText}>Tudo Bem</Text>
                    </RectButton>
                </ImageBackground>
        </View>
    )
}

export default GiveClases;