import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

import {
    useFonts,
    Dosis_200ExtraLight,
    Dosis_300Light,
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_600SemiBold,
    Dosis_700Bold,
    Dosis_800ExtraBold,
} from '@expo-google-fonts/dosis';


export default function Naranja() {
    const [showDots, setShowDots] = useState(true);
    const [data, setData] = useState([]);


    useEffect(() => {
        setTimeout(function () {
            fetch('https://slogan.com.bo/vulcano/orders/total/abierto')
                .then(response => response.json())
                .then(data => {
                    if (data.status) {
                        // console.log(data.data);
                        setData(data.data)
                    } else {
                        console.error(data.error)
                    }
                })
                .then(setShowDots(false))
        }, 1000);
    }, [])

    return (

        showDots ?
            <ActivityIndicator />
            :
            <View>
                <Text
                style={styles.NumeroColorNaranja}
                >
                    {data}
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    NumeroColorNaranja: {
        color: '#EA981E',
        fontSize: 20,
        fontWeight: '900',
    },
})