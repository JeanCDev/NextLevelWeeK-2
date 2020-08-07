import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

function Favorites() {
    const {goBack} = useNavigation();

    return ( 
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos"/>
        </View>
    )
}

export default Favorites;