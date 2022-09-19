import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';


export default function Naranja() {
    const [showDots, setShowDots] = useState(true);
    const [data, setData] = useState([]);


    useEffect(() => {
        setTimeout(function () {
            fetch('https://slogan.com.bo/vulcano/orders/total/abierto')
                .then(response => response.json())
                .then(data => {
                    if (data.status) {
                        console.log(data.data);
                        setData(data.data)
                    } else {
                        console.error(data.error)
                    }
                })
                .then(setShowDots(false))
        }, 4000);
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