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

export default function DatosCliente(props) {
    const { row } = props;
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
            <View style={{
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <ActivityIndicator size="large" />
            </View>
        );
    };

    return (
        <View>
            <Table row={row} />
        </View>
    )
}

const Table = (props) => {
    const { row } = props;
    return (
        <View>
            <TableRow row={row} />
        </View>
    );
};

class TableRow extends React.Component {
    render() {
        let row = this.props.row;
        return (
            <View>
                <View style={styles.ContenedorDos}>
                    <View style={styles.contenedorTransparente}>
                        <Text style={styles.textoTresNegro}>
                            NOMBRE
                        </Text>
                        <Text style={styles.contenedorTresClaro}>
                            {row.contact_name}
                        </Text>
                    </View>
                    <View style={styles.contenedorTransparenteTelefono}>
                        <Text style={styles.textoTresNegro}>
                            TELÉFONO
                        </Text>
                        <Text style={styles.contenedorTresClaro}>
                            {row.contact_phone}
                        </Text>
                    </View>
                </View>
                <View style={styles.ContenedorDos}>
                    <View style={styles.contenedorTransparenteLargo}>
                        <Text style={styles.textoTresNegro}>
                            EMAIL
                        </Text>
                        <Text style={styles.contenedorTresClaro}>
                            {row.client.email}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ContenedorDos: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    contenedorTransparente: {
        width: 245,
        height: 55,
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#BBBABA',
        borderWidth: 1,
        marginHorizontal: 5
    },
    textoTresNegro: {
        fontSize: 14,
        marginLeft: 5,
        fontFamily: "Dosis_600SemiBold"
    },
    contenedorTresClaro: {
        fontSize: 14,
        fontFamily: "Dosis_600SemiBold",
        color: '#B6B6B6',
        marginLeft: 5,
    },
    contenedorTransparenteLargo: {
        width: 350,
        height: 55,
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#BBBABA',
        borderWidth: 1
    },
    contenedorTransparenteTelefono: {
        width: 93,
        height: 55,
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#BBBABA',
        borderWidth: 1,
        marginHorizontal: 5
    },
});