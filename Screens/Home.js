import React, { useRef, useContext, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Dimensions
} from 'react-native';

import { Context as AuthContext } from '../context/AuthContext'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit'

const _colors = {
    inactive: `#BBBABA`,
    active: `#2B83F2`
}

function Home() {

    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation();

    const ref = useRef < FlatList > (null);
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
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
        <View
        style={styles.containerGobal}
       >
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

            <ScrollView>
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
                        renderItem={({ item, index: fIndex }) =>
                            <View
                                style={styles.contenedorAutos}
                            >
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("Detalle")}
                                >

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


                <View
                    style={styles.containerDos}
                >
                    <Text
                        style={styles.TituloAuto}
                    >
                        ESTADO OTS
                    </Text>

                    <View
                        style={styles.margin}
                    >
                        <View
                            style={styles.ContenedorDos}
                        >
                            <View
                                style={styles.contenedorAzul}
                            >
                                <View
                                    style={styles.circuloCentroAzul}
                                >
                                    <AntDesign name="caretright" size={18} color="#FFFF" />
                                </View>
                                <Text
                                    style={styles.NumeroColorAzul}
                                >
                                    5645
                                </Text>

                                <Text
                                    style={styles.TextoColorAzul}
                                >
                                    OT En curso
                                </Text>
                            </View>

                            <View
                                style={styles.contenedorNaranja}
                            >
                                <View
                                    style={styles.circuloCentroNaranja}
                                >
                                    <AntDesign name="forward" size={15} color="#FFFF" />
                                </View>
                                <Text
                                    style={styles.NumeroColorNaranja}
                                >
                                    5645
                                </Text>

                                <Text
                                    style={styles.TextoColorNaranja}
                                >
                                    OT En curso
                                </Text>
                            </View>

                            <View
                                style={styles.contenedorRojo}
                            >
                                <View
                                    style={styles.circuloCentroRojo}
                                >
                                    <Ionicons name="md-pause" size={16} color="#FFFF" />

                                </View>
                                <Text
                                    style={styles.NumeroColorRojo}
                                >
                                    5645
                                </Text>

                                <Text
                                    style={styles.TextoColorRojo}
                                >
                                    OT En curso
                                </Text>
                            </View>

                            <View
                                style={styles.contenedorVerde}
                            >
                                <View
                                    style={styles.circuloCentroVerde}
                                >
                                    <Entypo name="check" size={18} color="#FFFF" />
                                </View>
                                <Text
                                    style={styles.NumeroColorVerde}
                                >
                                    5645
                                </Text>

                                <Text
                                    style={styles.TextoColorVerde}
                                >
                                    OT En curso
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View
                        style={styles.mensaje}
                    >
                        <View
                            style={styles.contenedorMensajeAzul}
                        >
                            <Text
                                style={styles.textoBlanco}
                            >
                                INGRESO DE OTS EN EL MES
                            </Text>

                            <View
                                style={styles.lineaBlanca}
                            />
                            <View
                                style={styles.ContenedorDos}
                            >
                                <Image
                                    style={styles.ImagenAutoPng}
                                    source={require("../assets/auto.png")}
                                />
                                <View
                                    style={styles.TextoBlancoDos}
                                >
                                    <Text
                                        style={styles.TextoBlancoGrande}
                                    >
                                        8678
                                    </Text>

                                    <Text
                                        style={styles.TextoBlancoPequeño}
                                    >
                                        OTS EN EL AÑO
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Image
                            style={styles.Triangulo}
                            source={require("../assets/triangulo.png")}
                        />
                    </View>

                    <BarChart
                        data={{
                            labels: [
                                "17/Ene",
                                "23/Feb",
                                "20/Mar",
                                "10/Abr",
                                "15/May",
                                "18/Jun"
                            ],
                            datasets: [{
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                ]
                            }]
                        }}
                        width={
                            Dimensions.get("window").width
                        }
                        height={210}
                        yAxisSuffix="kg"
                        yAxisInterval={1}
                        chartConfig={{
                            backgroundColor: "#2B83F2",
                            backgroundGradientFrom: "#2B83F2",
                            backgroundGradientTo: "#2B83F2",
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 20,
                            },
                            propsForDots: {
                                r: "4",
                                strokeWidth: "1",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 5,
                            borderRadius: 12,
                            marginTop: 15,
                            borderColor: '#2B83F2',
                            borderWidth: 1.5,
                        }}
                    />
                    <View
                        style={styles.verificado}
                    >
                        <View
                            style={styles.ContenedorDos}
                        >
                            <TouchableOpacity>
                                <Text
                                    style={styles.TextoVerificado}
                                >
                                    Verificado
                                </Text>
                            </TouchableOpacity>
                            <Text
                                style={styles.TextoVerificado}
                            >
                                /
                            </Text>
                            
                            <TouchableOpacity>
                                <Text
                                    style={styles.TextoVerificado}
                                >
                                    No verificado
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>


    </View>
    );
}

const styles = StyleSheet.create({
    TextoVerificado: {
        fontSize:16,
        color: '#FDFDFD'
    },
    verificado: {
        backgroundColor: '#2B83F2',
        width: 290,
        height: 32,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22
    },
    TextoBlancoPequeño: {
        fontSize: 12,
        fontWeight: '300',
        color: '#FFFF'
    },
    TextoBlancoGrande: {
        fontSize: 22,
        fontWeight: '700',
        color: '#FFFF'
    },
    TextoBlancoDos: {
        marginTop: 15,
        paddingHorizontal: 15
    },
    ImagenAutoPng: {
        marginTop: 28,
        width: 69,
        height: 25,
    },
    Triangulo: {
        width: 29,
        height: 22,
        marginTop: -5
    },
    textoBlanco: {
        color: '#FFFF',
        fontSize: 18
    },
    lineaBlanca: {
        backgroundColor: '#FFFFFF',
        height: 1,
        width: 226
    },
    mensaje: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        // overflow: 'scroll'
    },
    contenedorMensajeAzul: {
        height: 115,
        width: 270,
        borderRadius: 12,
        backgroundColor: '#2B83F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextoColorVerde: {
        color: '#60BB29',
        marginTop: -6,
        fontSize: 12,
        fontWeight: '500'
    },
    NumeroColorVerde: {
        color: '#60BB29',
        fontSize: 25,
        fontWeight: '700',

    },
    TextoColorRojo: {
        color: '#DC2A2A',
        marginTop: -6,
        fontSize: 12,
        fontWeight: '500'
    },
    NumeroColorRojo: {
        color: '#DC2A2A',
        fontSize: 25,
        fontWeight: '700',

    },
    TextoColorNaranja: {
        color: '#EA981E',
        marginTop: -6,
        fontSize: 12,
        fontWeight: '500'
    },
    NumeroColorNaranja: {
        color: '#EA981E',
        fontSize: 25,
        fontWeight: '700',

    },
    TextoColorAzul: {
        color: '#2B83F2',
        marginTop: -6,
        fontSize: 12,
        fontWeight: '500'
    },
    NumeroColorAzul: {
        color: '#2B83F2',
        fontSize: 25,
        fontWeight: '700',

    },
    circuloCentroVerde: {
        width: 30,
        height: 30,
        backgroundColor: '#60BB29',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circuloCentroRojo: {
        width: 30,
        height: 30,
        backgroundColor: '#DC2A2A',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circuloCentroNaranja: {
        width: 30,
        height: 30,
        backgroundColor: '#EA981E',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circuloCentroAzul: {
        width: 30,
        height: 30,
        backgroundColor: '#2B83F2',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    margin: {
        marginTop: 24
    },
    contenedorVerde: {
        borderColor: '#60BB29',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 80,
        height: 95,
        justifyContent: 'center',
        marginHorizontal: 6,
        alignItems: 'center',
    },
    contenedorRojo: {
        borderColor: '#DC2A2A',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 80,
        height: 95,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorNaranja: {
        borderColor: '#EA981E',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 80,
        height: 95,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorAzul: {
        borderColor: '#2B83F2',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 80,
        height: 95,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ContenedorDos: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    TituloAuto: {
        fontSize: 22,
        marginTop: 28,
        marginLeft: -225,
        color: '#000000',
        fontWeight: '600'
    },
    TexoSeleccionAuto: {
        fontSize: 22,
        fontWeight: '600',
        marginLeft:10
    },
    containerDos: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        justifyContent: 'center',
        alignItems: 'center',
        width: 420,
        marginTop: 25,
        marginBottom: 30
    },
    containerGobal: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        // justifyContent: 'center',
        alignItems: 'center',
        // overflow: 'scroll'
    },
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        // backgroundColor: '#EAEBEC',
        borderRadius: 40,
        width: 420,
        // height: 650,
        marginTop: 25,
        marginHorizontal: 37
    },
    contenedorLogo: {
        marginTop: 20,
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