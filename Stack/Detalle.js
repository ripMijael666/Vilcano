import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Text,
    FlatList
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';


function Detalle() {
    const navigation = useNavigation();
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.contenedorHeader}
            >
                <TouchableOpacity
                    style={styles.atras}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="left" size={30} color="#2B83F2" />
                </TouchableOpacity>

                <Image
                    style={styles.campana}
                    source={require("../assets/campana.png")}
                />
            </View>

            <View
                style={styles.contenedorDatos}
            >
                <Text
                    style={styles.TituloAuto}
                >
                    Datos de vehículo
                </Text>
                <View
                    style={styles.ContenedorDos}

                >
                    <View
                        style={styles.contenedorCaracteristicas}
                    >
                        <Text
                            style={styles.OT}
                        >
                            OT 124142
                        </Text>

                        <Text
                            style={styles.marcaauto}
                        >
                            BMWM4 2020
                        </Text>

                        <Text
                            style={styles.placaVIN}
                        >
                            Placa/VIN
                        </Text>
                    </View>

                    <View
                        style={styles.contenedorAuto}
                    >
                        <Image
                            style={styles.logoAuto}
                            source={require("../assets/logoAuto.png")}
                        />
                    </View>
                </View>

                <View
                    style={styles.contenedorImagenGrande}
                >
                    <Image 
                        style={styles.imagenAutoGrande}
                        source={require("../assets/autos/auto_2.png")}
                    />
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
                            Marca
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            Mercedes Benz
                        </Text>
                    </View>

                    <View
                        style={styles.contenedorBlanco}
                    >
                        <Text
                        style={styles.textoTresNegro}
                        >
                            Modelo
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            Modelo
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
                            Versión
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
                            Marca
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            Mercedes Benz
                        </Text>
                    </View>

                    <View
                        style={styles.contenedorBlanco}
                    >
                        <Text
                        style={styles.textoTresNegro}
                        >
                            Modelo
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            Modelo
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
                            Versión
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorHeader: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    atras: {
        marginRight: 150
    },
    campana: {
        width: 28,
        height: 35,
        marginLeft: 150,
    },
    contenedorDatos: {
        backgroundColor: '#EAEBEC',
        borderRadius: 40,
        width: 340,
        height: 700,
        marginTop: 25
    },
    logoAuto: {
        width: 48,
        height: 46,
    },
    contenedorAuto: {
        backgroundColor: '#FDFDFD',
        width: 62,
        height:62,
        borderRadius: 100,
        marginTop: 28,
        marginRight: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TituloAuto: {
        fontSize: 22,
        marginTop: 28,
        marginLeft: 28,
        color: '#000000',
        fontWeight: '600'
    },
    ContenedorDos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    OT:{
        fontSize: 28,
        fontWeight: '600'
    },
    marcaauto: {
        fontSize: 18,
        fontWeight: '500',
    },
    placaVIN: {
        color: '#B6B6B6',
        fontSize: 12,
        fontWeight: '300'
    },
    contenedorCaracteristicas: {
        marginTop: 28,
        marginLeft: 28
    },
    imagenAutoGrande: {
        width: 290,
        height: 195,

    },
    contenedorImagenGrande:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoTresNegro: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft:5
    },
    contenedorTresClaro: {
        fontSize: 14,
        fontWeight: '500',
        color: '#B6B6B6',
        marginLeft:5,
    },
    contenedorBlanco: {
        backgroundColor: '#FFFFFF',
        width: 105,
        height:55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
    },
});

export default Detalle;