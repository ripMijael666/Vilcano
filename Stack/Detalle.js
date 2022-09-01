import React, { useState, useEffect } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Text,
    FlatList,
    ScrollView
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';


function Detalle() {
    const navigation = useNavigation();
    
    // const [abierto, setAbierto] = useState(true);
    // const [finalizado, setFinalizado] = useState(true);
    // const [cerrado, setCerrado] = useState(true);
    // const [entrega, setEntrega] = useState(true);

    const Estado = (props) => {
        const [abierto, setAbierto] = useState(false);
        const [finalizado, setFinalizado] = useState(false);
        const [cerrado, setCerrado] = useState(false);
        const [entrega, setEntrega] = useState(false);
        return (
            {abierto, finalizado, cerrado, entrega}
        );
    }



    const BarraEstado = (props) => {

        const {name, status }= props;
        
        console.log('status'+ status);
        console.log('name'+ name);

        // const nombres= ['ABIERTO', 'FINALIZADO', 'CERRADO', 'PROMESA ENTREGA'];
        // console.log(nombres);

        return (
            <View
                style={styles.centroCirculoTexto}
            >
                {status ? <View style={styles.circulo} /> : <View style={styles.circuloGris} /> }
                {status ? <Text style={styles.letraAzul}> {Estado} </Text> : <Text style={styles.letraGris}> {Estado} </Text> }

                {status ? <View style={styles.barraLargaAzul} /> : <View style={styles.barraLargaGris} /> }
            </View>
        );
    }

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
                    <AntDesign name="left" size={25} color="#2B83F2" />
                </TouchableOpacity>

                <Image
                    style={styles.campana}
                    source={require("../assets/campana.png")}
                />
            </View>

            <ScrollView>
                <View
                    style={styles.contenedorDatos}
                >
                    <Text
                        style={styles.TituloAuto}
                    >
                        DATOS DEL VEHÍCULO
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
                                Año
                            </Text>

                            <Text
                                style={styles.contenedorTresClaro}
                            >
                                43534
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
                                Color
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
                                4534634
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
                                Automática
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
                                4346346343634634346
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
                                5634624523523
                            </Text>
                        </View>
                    </View>


                </View>

                <View
                    style={styles.containerCliente}
                >

                    <Text
                        style={styles.Cliente}
                    >
                        DATOS DEL CLIENTE
                    </Text>

                    <View
                        style={styles.ContenedorDos}
                    >
                        <View
                            style={styles.contenedorTransparente}
                        >
                            <Text
                                style={styles.textoTresNegro}
                            >
                                NOMBRE
                            </Text>

                            <Text
                                style={styles.contenedorTresClaro}
                            >
                                Pericle Robles
                            </Text>
                        </View>

                        <View
                            style={styles.contenedorTransparenteTelefono}
                        >
                            <Text
                                style={styles.textoTresNegro}
                            >
                                TELÉFONO
                            </Text>

                            <Text
                                style={styles.contenedorTresClaro}
                            >
                                6856856895
                            </Text>
                        </View>
                    </View>
                    <View
                        style={styles.ContenedorDos}
                    >
                        <View
                            style={styles.contenedorTransparenteLargo}
                        >
                            <Text
                                style={styles.textoTresNegro}
                            >
                                EMAIL
                            </Text>

                            <Text
                                style={styles.contenedorTresClaro}
                            >
                                Pericle Robles.gmail.com
                            </Text>
                        </View>
                    </View>

                    <Text
                        style={styles.estadoOt}
                    >
                        ESTADO OT
                    </Text>

                    <View
                        style={styles.ContenedorDosEstado}
                    >
                        <BarraEstado name='ABIERTO' status={true}/>
                        {/* <estado ></estado> 
                        <BarraEstado name='ABIERTO' />
                        <BarraEstado name= 'FINALIZADO' status={true} />
                        <BarraEstado name= 'CERRADO' status={true} />
                        <BarraEstado name= 'PROMESA ENTREGA' status={false} /> */}
                    </View>

                    <View
                        style={styles.circuloDos}
                    >
                        <View
                            style={styles.finalizacion}
                        >
                            <Text
                                style={styles.TituloAutoFinalizacion}
                            >
                                FINALIZACIÓN
                            </Text>

                            <Text
                                style={styles.TituloAutoFinalizacion}
                            >
                                DE SR'S
                            </Text>
                        </View>
                        <Text
                            style={styles.porcentaje}
                        >
                            68%
                        </Text>
                    </View>

                    <View
                        style={styles.contenedorImagenGigante}
                    >
                        <Image
                            style={styles.imagenGigante}
                            source={require("../assets/autos/auto_1.1.png")}
                        />
                    </View>

                    <Text
                        style={styles.completadoPorcentaje}
                    >
                        COMPLETADO 68%
                    </Text>

                    <Progress.Bar
                        progress={0.6}
                        width={330}
                        unfilledColor={'#BBBABA'}
                    />
                    <View
                        style={styles.contenedorVerTodo}
                    >
                        <TouchableOpacity>
                            <Text
                                style={styles.verTodo}
                            >
                                VER TODO
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={styles.ContenedorDosAzul}
                    >
                        <TouchableOpacity>
                            <View
                                style={styles.contenedorAzul}
                            >
                                <View
                                    style={styles.circuloDos}
                                >
                                    <Image
                                        style={styles.partes}
                                        source={require("../assets/partes.png")}
                                    />

                                    <Text
                                        style={styles.textoPartes}
                                    >
                                        PARTES
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View
                                style={styles.contenedorAzul}
                            >
                                <View
                                    style={styles.circuloDos}
                                >
                                    <Image
                                        style={styles.externos}
                                        source={require("../assets/externos.png")}
                                    />
                                    <View>
                                        <Text
                                            style={styles.texoExternos}
                                        >
                                            TRABAJOS
                                        </Text>

                                        <Text
                                            style={styles.texoExternos}
                                        >
                                            EXTERNOS
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={styles.circuloDos}
                    >
                        <TouchableOpacity>
                            <View
                                style={styles.contenedorAzul}
                            >

                                <Image
                                    style={styles.observaciones}
                                    source={require("../assets/observaciones.png")}
                                />

                                <Text
                                    style={styles.textoObservaciones}
                                >
                                    OBSERVACIONES
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View
                                style={styles.contenedorAzul}
                            >

                                <Image
                                    style={styles.recomendaciones}
                                    source={require("../assets/recomendaciones.png")}
                                />
                                <Text
                                    style={styles.textoRecomendaciones}
                                >
                                    RECOMENDACIONES
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    ContenedorDosEstado: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
    },
    centroCirculoTexto: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: -35
    },
    circulo: {
        backgroundColor: '#2B83F2',
        borderRadius: 100,
        width: 20,
        height: 20,
        marginTop: 24,
        zIndex: 10
    },
    circuloGris: {
        backgroundColor: '#BBBABA',
        borderColor: '#BBBABA',
        borderRadius: 100,
        width: 20,
        height: 20,
        marginTop: 24,
        zIndex: 10
    },
    circuloDos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    letraAzul: {
        color: '#2B83F2',
        fontSize: 14,
        fontWeight: '500',
        marginHorizontal: 12
    },
    letraGris: {
        color: '#BBBABA',
        fontSize: 14,
        fontWeight: '500',
        marginHorizontal: 12
    },
    barraLargaGris: {
        backgroundColor: '#BBBABA',
        width: 85,
        // marginHorizontal: -9,
        height: 5,
        // marginTop: 49,
        zIndex: 1
    },
    barraLargaAzul: {
        backgroundColor: '#2B83F2',
        width: 85,
        // marginHorizontal: -9,
        height: 5,
        // marginTop: -20,
        zIndex: 1
    },
    finalizacion: {
        marginTop: 15
    },
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        alignItems: 'center',
    },
    contenedorHeader: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    atras: {
        marginRight: 150
    },
    campana: {
        width: 23,
        height: 27,
        marginLeft: 150,
    },
    contenedorDatos: {
        backgroundColor: '#EAEBEC',
        borderRadius: 40,
        width: 340,
        height: 650,
        marginTop: 25,
        marginHorizontal: 37
    },
    containerCliente: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 420,
        marginTop: 25,
        marginBottom: 30
    },
    logoAuto: {
        width: 38,
        height: 36,
    },
    contenedorAuto: {
        backgroundColor: '#FDFDFD',
        width: 52,
        height: 52,
        borderRadius: 100,
        marginTop: 28,
        marginRight: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 17
    },
    TituloAutoFinalizacion: {
        fontSize: 22,
        marginLeft: 28,
        color: '#000000',
        fontWeight: '600'
    },
    Cliente: {
        fontSize: 22,
        marginTop: 5,
        color: '#000000',
        marginLeft: -140,
        color: '#000000',
        fontWeight: '600'
    },
    TituloAuto: {
        fontSize: 22,
        marginTop: 38,
        marginLeft: 50,
        color: '#000000',
        fontWeight: '600'
    },
    estadoOt: {
        fontSize: 22,
        marginTop: 38,
        marginLeft: -220,
        color: '#000000',
        fontWeight: '600'
    },
    ContenedorDos: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    ContenedorDosAzul: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 8
    },
    OT: {
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
        marginLeft: 28,
        marginHorizontal: 17
    },
    imagenAutoGrande: {
        width: 290,
        height: 195,
    },
    contenedorImagenGrande: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoTresNegro: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 5
    },
    contenedorTresClaro: {
        fontSize: 14,
        fontWeight: '500',
        color: '#B6B6B6',
        marginLeft: 5,
    },
    contenedorBlanco: {
        backgroundColor: '#FFFFFF',
        width: 100,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
    },
    contenedorTransparente: {
        width: 245,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#BBBABA',
        borderWidth: 1,
        marginHorizontal: 5
    },
    contenedorTransparenteTelefono: {
        width: 93,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#BBBABA',
        borderWidth: 1,
        marginHorizontal: 5
    },
    contenedorTransparenteLargo: {
        width: 350,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#BBBABA',
        borderWidth: 1
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
    porcentaje: {
        fontSize: 45,
        color: '#2B83F2',
        marginTop: 15,
        fontWeight: '600',
        paddingHorizontal: 65
    },
    imagenGigante: {
        width: 330,
        height: 235,
        zIndex: 10,
        marginLeft: 80
    },
    contenedorImagenGigante: {
        width: '100%',
        marginLeft: 60,
    },
    completadoPorcentaje: {
        marginTop: 24,
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: -190,
        padding: 5
    },
    verTodo: {
        color: '#FFFF',
        fontSize: 20,
        fontWeight: '400',
    },
    contenedorVerTodo: {
        width: 100,
        height: 40,
        backgroundColor: '#2B83F2',
        marginRight: 15,
        borderRadius: 8,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 235
    },
    contenedorAzul: {
        width: 160,
        height: 95,
        backgroundColor: '#2B83F2',
        marginRight: 15,
        borderRadius: 12,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    partes: {
        width: 61,
        height: 60
    },
    textoPartes: {
        color: '#FFFF',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 12
    },
    externos: {
        width: 68,
        height: 39
    },
    texoExternos: {
        color: '#FFFF',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 12
    },
    observaciones: {
        width: 67,
        height: 40
    },
    textoObservaciones: {
        color: '#FFFF',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 5
    },
    recomendaciones: {
        width: 42,
        height: 40
    },
    textoRecomendaciones: {
        color: '#FFFF',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 12
    },
});

export default Detalle;