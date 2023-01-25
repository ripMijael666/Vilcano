import React, { useRef, useContext, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Dimensions,
    Text,
} from 'react-native';
import Svg, {
    G,
    Path,
    Rect,
    Defs,
    ClipPath,
} from 'react-native-svg';

import { Context as AuthContext } from '../../context/AuthContext'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit'

import Azul from './Azul';
import Naranja from './Naranja';
import Rojo from './Rojo';
import Verde from './Verde';
import Placa from './Placa';
import Grafico from './Grafico';

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
            marca: <Placa />,
            placa: 'Placa/VIN'
        },
        {
            id: '1',
            marca: <Placa />,
            placa: 'Placa/VIN'
        },
        {
            id: '2',
            marca: <Placa />,
            placa: 'Placa/VIN'
        },
        {
            id: '3',
            marca: <Placa />,
            placa: 'Placa/VIN'
        },
        {
            id: '4',
            marca: <Placa />,
            placa: 'Placa/VIN'
        },
        {
            id: '5',
            marca: <Placa />,
            placa: 'Placa/VIN'
        },
        {
            id: '6',
            marca: <Placa />,
            placa: 'Placa/VIN'
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar translucent style='auto' />
            <View
                style={styles.contenedorLogo}
            >
                <TouchableOpacity
                    onPress={() => signOut()}
                >
                    <Svg width="152" height="27" viewBox="0 0 152 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G clip-path="url(#clip0_21_62)">
                            <Path d="M6.46518 4.56152L10.8292 19.1075L15.1283 4.56152H21.5624L13.3697 26.7791H8.28428L-0.00471497 4.56152H6.46518Z" fill="#2B83F2" />
                            <Path d="M46.5774 26.7791V4.56152H52.6978V21.4519H62.8037V26.7701L46.5774 26.7791Z" fill="#2B83F2" />
                            <Path d="M63.431 15.4881C63.4411 12.6852 64.518 9.99059 66.4441 7.94825C67.5174 6.8137 68.8173 5.91583 70.26 5.31247C71.7027 4.70911 73.2562 4.41366 74.8205 4.44515C76.9756 4.44515 78.8425 4.89169 80.4212 5.78477C81.9184 6.58777 83.1461 7.81131 83.9518 9.3035L79.2764 12.6191C79.0923 12.1215 78.8096 11.6659 78.4453 11.2794C78.1129 10.9362 77.7252 10.651 77.2982 10.4355C76.8876 10.2264 76.4494 10.0761 75.9966 9.98894C75.5667 9.90789 75.1303 9.86604 74.6928 9.86391C73.9486 9.83884 73.2094 9.99514 72.5395 10.3192C71.8696 10.6433 71.2891 11.1254 70.8485 11.7237C70.4348 12.2902 70.1267 12.9262 69.939 13.6014C69.743 14.2779 69.6428 14.9783 69.641 15.6823C69.6379 16.4356 69.7543 17.1846 69.986 17.9016C70.2016 18.5838 70.5419 19.2204 70.9896 19.7793C71.4292 20.3223 71.9809 20.7647 72.6071 21.0765C73.274 21.4073 74.0107 21.5742 74.7555 21.5632C75.1888 21.5621 75.6207 21.5142 76.0437 21.4203C76.4873 21.3249 76.915 21.167 77.3139 20.9515C77.7239 20.7312 78.0954 20.4462 78.4139 20.1075C78.7515 19.7404 79.0127 19.3101 79.1823 18.8416L84.1714 21.8133C83.8273 22.6354 83.3128 23.3757 82.6614 23.9857C81.972 24.6397 81.1891 25.1882 80.3383 25.6133C79.4508 26.0574 78.5128 26.3932 77.5447 26.6136C76.5903 26.8391 75.6131 26.9544 74.6323 26.9574C73.0655 26.9762 71.515 26.6395 70.098 25.9728C68.7573 25.3391 67.5529 24.4519 66.5517 23.3606C65.561 22.2825 64.7787 21.0312 64.2442 19.6699C63.7104 18.3397 63.4345 16.9207 63.431 15.4881Z" fill="#2B83F2" />
                            <Path d="M91.7726 4.56152H97.3598L105.08 26.7702H98.8653L97.5211 22.4231L94.555 13.0458L91.5889 22.4231L90.2694 26.7702H84.019L91.7726 4.56152Z" fill="#2B83F2" />
                            <Path d="M113.051 15.8634V26.7791H106.93V4.56152H111.702L120.647 15.8545V4.56152H126.768V26.7701H121.902L113.051 15.8634Z" fill="#2B83F2" />
                            <Path d="M40.6631 18.0313C40.401 17.482 40.4615 17.1136 40.7998 16.6269C45.3229 10.094 41.0238 0.801535 33.1313 0.0245564C32.9073 0.00446212 32.6833 0.0111635 32.2532 0C32.9432 1.42669 33.5839 2.72835 34.2067 4.03894C34.8041 5.30265 35.3955 6.56784 35.981 7.83453C36.4873 8.93078 36.2856 9.79707 35.2193 10.3463C33.6108 11.1739 31.9679 11.9345 30.2907 12.6281C29.2109 13.0747 28.3954 12.6527 27.8846 11.5631C26.8093 9.26643 25.737 6.96749 24.6676 4.66633C24.5354 4.38501 24.392 4.10817 24.2061 3.73084C23.3519 4.79596 22.7175 6.01898 22.3396 7.32947C21.9616 8.63997 21.8475 10.012 22.0039 11.3667C22.249 13.8255 23.3438 16.1231 25.1011 17.8663C26.8583 19.6094 29.1688 20.6898 31.6371 20.9226C31.8638 20.9248 32.0843 20.9971 32.2681 21.1295C32.4518 21.2618 32.5899 21.4478 32.6631 21.6616C33.9289 24.4413 33.5301 24.1712 34.8451 26.9911C35.1095 26.8839 45.1504 26.7678 45.3744 26.6763" fill="#2B83F2" />
                            <Path d="M151.2 11.6079C150.675 10.268 149.904 9.03754 148.926 7.97975C147.926 6.90395 146.724 6.03327 145.389 5.41662C143.943 4.75489 142.367 4.42308 140.776 4.44539C139.204 4.42755 137.645 4.74261 136.204 5.36973C134.853 5.95532 133.627 6.79356 132.593 7.83909C131.58 8.86733 130.777 10.0802 130.225 11.4114C129.663 12.7494 129.374 14.1854 129.376 15.6357C129.376 17.072 129.653 18.4948 130.193 19.8264C130.723 21.1626 131.5 22.3879 132.483 23.4389C133.487 24.5116 134.691 25.3797 136.027 25.9954C137.473 26.6563 139.049 26.9874 140.64 26.9644C142.211 26.9812 143.768 26.6614 145.205 26.0266C146.548 25.4317 147.764 24.5876 148.79 23.5394C149.794 22.5078 150.593 21.2956 151.144 19.9671C151.707 18.6358 151.996 17.2053 151.993 15.7607C151.993 14.3391 151.724 12.9303 151.2 11.6079ZM144.255 21.856H137.1L133.516 15.6759L137.1 9.49353H144.269L147.853 15.6759L144.255 21.856Z" fill="#2B83F2" />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_21_62">
                                <Rect width="152" height="27" fill="white" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                </TouchableOpacity>
                <TouchableOpacity style={styles.campana}>
                    <Svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G clip-path="url(#clip0_21_150)">
                            <Path d="M13.3106 0C13.3798 0.0364011 13.4474 0.0752353 13.5182 0.107592C14.0011 0.334897 14.2764 0.706997 14.2951 1.24007C14.309 1.64453 14.3065 2.04898 14.2951 2.45344C14.2951 2.62574 14.3432 2.69611 14.5248 2.73008C18.3107 3.41362 21.1325 6.12025 21.9151 9.855C22.0478 10.4908 22.0779 11.1541 22.0942 11.8069C22.13 13.1675 22.0665 14.5329 22.152 15.8903C22.297 18.2111 23.3011 20.1476 25.0406 21.6991C25.5422 22.1464 25.9274 22.6463 25.9877 23.3315C26.1057 24.6929 25.1546 25.7647 23.7734 25.8391C23.692 25.8432 23.6105 25.8391 23.5291 25.8391C16.511 25.8391 9.49284 25.8391 2.47471 25.8391C1.66523 25.8391 0.979545 25.5916 0.4722 24.9445C-0.283524 23.9802 -0.126353 22.6569 0.856577 21.801C1.70999 21.0653 2.41543 20.1758 2.93563 19.1794C3.58496 17.919 3.91825 16.5214 3.90716 15.1057C3.90716 13.8648 3.89332 12.6231 3.91612 11.3847C3.99756 7.13704 7.20938 3.43949 11.4237 2.74221C11.668 2.70257 11.7291 2.61604 11.7136 2.3952C11.6973 2.15253 11.7299 1.90985 11.7063 1.66718C11.6297 0.866355 11.9335 0.300109 12.7006 0.00161941L13.3106 0Z" fill="#2B83F2" />
                            <Path d="M17.7489 27.1416C17.5046 28.8241 15.788 30.9702 13.0542 31.0001C10.4213 31.0284 8.54994 29.0037 8.26003 27.1416H17.7489Z" fill="#2B83F2" />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_21_150">
                                <Rect width="26" height="31" fill="white" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                </TouchableOpacity>
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
                            source={require("../../assets/lupa.png")}
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
                        initialScrollIndex={index}
                        data={listaAutos}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index: fIndex }) =>
                            <View style={styles.contenedorAutos}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("Detalle")}
                                >
                                    <View style={styles.InputAuto}>
                                        <Image
                                            style={styles.ImagenAuto}
                                            source={require("../../assets/autos/auto_2.png")}
                                        />
                                        <View style={styles.TextoAuto}>
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

                <View style={styles.containerDos}>
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
                                    <Azul />
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
                                    <Naranja />
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
                                    <Rojo />
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
                                    <Verde />
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
                                    source={require("../../assets/auto.png")}
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
                            source={require("../../assets/triangulo.png")}
                        />
                    </View>

                    <Grafico />

                    {/* <BarChart
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
                    /> */}
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
    );
}

const styles = StyleSheet.create({
    TextoVerificado: {
        fontSize: 16,
        color: '#FDFDFD',
    },
    verificado: {
        backgroundColor: '#2B83F2',
        width: 290,
        height: 32,
        borderRadius: 8,
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
        height: 105,
        justifyContent: 'center',
        marginHorizontal: 6,
        alignItems: 'center',
    },
    contenedorRojo: {
        borderColor: '#DC2A2A',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 80,
        height: 105,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorNaranja: {
        borderColor: '#EA981E',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 80,
        height: 105,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorAzul: {
        borderColor: '#2B83F2',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 80,
        height: 105,
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
        marginLeft: 10
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
        backgroundColor: '#F6F6FA',
        paddingTop: 5,
    },
    contenedorLogo: {
        // marginTop: 20,
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
        justifyContent: 'center',
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