import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';


export default function Rojo() {
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
        }, 1000);
    }, [])

    return (

        showDots ?
            <ActivityIndicator />
            :
            <View>
                <Text
                style={styles.NumeroColorRojo}
                >
                    {data}
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    NumeroColorRojo: {
        color: '#DC2A2A',
        fontSize: 20,
        fontWeight: '900',
    },
})