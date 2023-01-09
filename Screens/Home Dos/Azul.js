import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';


export default function Azul() {
    const [showDots, setShowDots] = useState(true);
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://slogan.com.bo/vulcano/orders/total/abierto')
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    // console.log(data.data);
                    setData(data.data)
                } else {
                    // console.error(data.error)
                }
            })
            .then(setShowDots(false))
    }, [])

    return (

        showDots ?
            <ActivityIndicator />
            :
            <View>
                <Text
                    style={styles.TextoColorAzul}
                >
                    {data}
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    TextoColorAzul: {
        color: '#2B83F2',
        marginTop: -6,
        fontSize: 20,
        fontWeight: '800'
    },
})