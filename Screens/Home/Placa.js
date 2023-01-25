import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

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

export default function Placa() {
    const [showDots, setShowDots] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(function () {
            fetch('https://slogan.com.bo/vulcano/orders/all/abierto')
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

    const [fontsLoaded] = useFonts({
        Dosis_200ExtraLight,
        Dosis_300Light,
        Dosis_400Regular,
        Dosis_500Medium,
        Dosis_600SemiBold,
        Dosis_700Bold,
        Dosis_800ExtraBold,
    });

    if (!fontsLoaded) {
        return (
            <ActivityIndicator size="large" />
        );
    };

    return (

        showDots ?
            <ActivityIndicator />
            :
            <View>
                
                <Table data={data} />
            </View>
    )
}

const Table = (props) => {
    const { data } = props;
    return (
            <View>
                {data.map(row => <TableRow key={data.id} row={row} />)}
            </View>
    );
};

class TableRow extends React.Component {
    render() {
        let row = this.props.row;
        let key = this.props.key;
        return (
            <View key={key}>
                <Text
                    style={styles.TextoUno}
                >
                    {row.car.cars_models_version.cars_model.name} {row.code}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TextoUno: {
        color: '#000000',
        fontSize: 18,
        fontFamily: "Dosis_500Medium"
    },
})