import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function DatosVehiculo(props) {
    const { row } = props;
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
                    <View style={styles.contenedorBlanco}>
                        <Text style={styles.textoTresNegro}>
                            Marca
                        </Text>
                        <Text style={styles.contenedorTresClaro}>
                            {row.car.cars_models_version.cars_model.catalogues_record.name}
                        </Text>
                    </View>

                    <View style={styles.contenedorBlanco}>
                        <Text style={styles.textoTresNegro}>
                            Modelo
                        </Text>
                        <Text style={styles.contenedorTresClaro}>
                            {row.car.cars_models_version.cars_model.name}
                        </Text>
                    </View>

                    <View
                        style={styles.contenedorBlanco}
                    >
                        <Text
                            style={styles.textoTresNegro}
                        >
                            Versión
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            {row.car.cars_models_version.name}
                        </Text>
                    </View>
                </View>

                <View
                    style={styles.ContenedorDos}
                >
                    <View
                        style={styles.contenedorBlanco}
                    >
                        <Text
                            style={styles.textoTresNegro}
                        >
                            Año
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            {row.car.year}
                        </Text>
                    </View>

                    <View
                        style={styles.contenedorBlanco}
                    >
                        <Text
                            style={styles.textoTresNegro}
                        >
                            Color
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            {row.car.color_id}
                        </Text>
                    </View>

                    <View
                        style={styles.contenedorBlanco}
                    >
                        <Text
                            style={styles.textoTresNegro}
                        >
                            Placa
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            {row.car.plate}
                        </Text>
                    </View>
                </View>

                <View
                    style={styles.ContenedorDos}
                >
                    <View
                        style={styles.contenedorBlanco}
                    >
                        <Text
                            style={styles.textoTresNegro}
                        >
                            Transmisión
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            {row.car.transmission}
                        </Text>
                    </View>

                    <View
                        style={styles.contenedorBlancoLargo}
                    >
                        <Text
                            style={styles.textoTresNegro}
                        >
                            VIN
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            {row.car.vin}
                        </Text>
                    </View>
                </View>

                <View
                    style={styles.ContenedorDos}
                >
                    <View
                        style={styles.contenedorBlancoLargoKilo}
                    >
                        <Text
                            style={styles.textoTresNegro}
                        >
                            Kilometraje
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            {row.modified}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contenedorTresClaro: {
        fontSize: 14,
        fontWeight: '500',
        color: '#B6B6B6',
        marginLeft: 5,
    },
    ContenedorDos: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    contenedorBlanco: {
        backgroundColor: '#FFFFFF',
        width: 100,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
    },
    textoTresNegro: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 5
    },
    contenedorBlancoLargo: {
        backgroundColor: '#FFFFFF',
        width: 205,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
    },
    contenedorBlancoLargoKilo: {
        backgroundColor: '#FFFFFF',
        width: 315,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
    },
}
);