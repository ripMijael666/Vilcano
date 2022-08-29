import React, {useRef, useContext, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';

import {Context as AuthContext} from '../context/AuthContext'
import { useNavigation } from '@react-navigation/native';


const _colors = {
    inactive: `#BBBABA`,
    active: `#2B83F2`
}

function Home() {

    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation();

    const ref = useRef<FlatList>(null);
    const [index, setIndex] = React.useState(0);
    React.useEffect (() => {
        ref.current?.scrollToIndex({
            index,
            animated: true
        })
    }, [index])

    const listaAutos = [
        {
            id: '0',
            marca: 'BMW M4 2020',
            placa: 'Placa/VIN'
        },
        {
            id: '1',
            marca: 'BMW M4 2020',
            placa: 'Placa/VIN'
        },
        {
            id: '2',
            marca: 'BMW M4 2020',
            placa: 'Placa/VIN'
        },
        {
            id: '3',
            marca: 'BMW M4 2020',
            placa: 'Placa/VIN'
        },
        {
            id: '4',
            marca: 'BMW M4 2020',
            placa: 'Placa/VIN'
        },
        {
            id: '5',
            marca: 'BMW M4 2020',
            placa: 'Placa/VIN'
        },
        {
            id: '6',
            marca: 'BMW M4 2020',
            placa: 'Placa/VIN'
        },
    ];
    return (
        <View style={styles.container}>
            <View
                style={styles.contenedorLogo}
            >
                <TouchableOpacity
                    onPress={() => signOut()}
                >
                    <Image
                        style={styles.logoAzul}
                        source={require("../assets/logo_azul.png")}
                    />
                </TouchableOpacity>

                <Image
                    style={styles.campana}
                    source={require("../assets/campana.png")}
                />
            </View>

            <View
                style={styles.busqueda}
            >
                <View
                    style={styles.vistaInput}
                >
                    <TextInput
                        style={styles.input}
                        placeholder="Placa/VIN"
                    />
                    <Image
                        style={styles.lupa}
                        source={require("../assets/lupa.png")}
                    />
                </View>


                <View
                    style={styles.seleccionar}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Detalle")}
                        style={styles.botonseleccionar}
                    >
                        <Text
                            style={styles.textoSeleccionar}
                        >
                            Seleccionar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={styles.SeleccionAuto}
            >
                <Text
                    style={styles.TexoSeleccionAuto}
                >
                    SELECCIONA EL AUTO
                </Text>
            </View>

            <View
                style={styles.contenedorAutos}
            >
                <FlatList
                    horizontal
                    // ref={ref}
                    initialScrollIndex={index}
                    data={listaAutos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index: fIndex}) =>
                        <View
                            style={styles.contenedorAutos}
                        >
                            <TouchableOpacity>

                                <View
                                    style={styles.InputAuto}
                                >
                                    <Image
                                        style={styles.ImagenAuto}
                                        source={require("../assets/autos/auto_2.png")}
                                    />
                                    <View
                                        style={styles.TextoAuto}
                                    >
                                        <Text
                                            style={styles.TextoUno}
                                        >
                                            {item.marca}
                                        </Text>



                                        <Text
                                            style={styles.TextoDos}
                                        >
                                            {item.placa}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contenedorLogo: {
        marginTop: 40,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logoAzul: {
        width: 135,
        height: 24
    },
    busqueda: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35
    },
    campana: {
        width: 28,
        height: 35,
        marginRight: 15
    },
    vistaInput: {
        fontSize: 16,
        borderRadius: 12,
        width: 240,
        height: 45,
        borderWidth: 1,
        borderColor: '#BBBABA',
        color: '#000000',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15
    },
    input: {
        fontSize: 16,
        borderRadius: 12,
        width: 220,
        height: 45,
        padding: 5,
        justifyContent: 'center'
    },
    lupa: {
        marginLeft: -105
    },
    seleccionar: {
        width: 120,
        height: 45,
        backgroundColor: '#2B83F2',
        marginRight: 15,
        borderRadius: 8,
    },
    textoSeleccionar: {
        color: '#FFFF',
        fontSize: 20,
        fontWeight: '400',
    },
    botonseleccionar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SeleccionAuto: {
        marginTop: 35,
        marginLeft: 15,
    },
    TexoSeleccionAuto: {
        fontSize: 20,
        fontWeight: '500'
    },
    contenedorAutos: {
        marginTop: 15,
    },
    ImagenAuto: {
        width: 190,
        height: 150
    },
    InputAuto: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: _colors.inactive,
        // backgroundColor:
        //     (fIndex === index ? _colors.inactive: _colors.active),
        borderWidth: 1,
        borderRadius: 12,
        padding: 15,
        marginLeft: 25,
        marginRight: 25,
        width: 175,
        height: 250
    },
    TextoAuto: {
        marginTop: 20,
    },
    TextoUno: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '600'
    },
    TextoDos: {
        color: '#B6B6B6',
        fontSize: 18,
        fontWeight: '600'
    },
});

export default Home;