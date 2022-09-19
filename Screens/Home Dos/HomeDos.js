import React, { useContext } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput
} from "react-native";

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Context as AuthContext } from '../../context/AuthContext'
import { useNavigation } from '@react-navigation/native';
import Azul from './Azul';
import Verde from './Verde';
import Rojo from './Rojo';

function HomeDos() {
    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation();
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
                            source={require("../../assets/logo_azul.png")}
                        />
                    </TouchableOpacity>

                    <Image
                        style={styles.campana}
                        source={require("../../assets/campana.png")}
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
                                    <MaterialIcons name="calendar-today" size={30} color="#FFFF" />
                                </View>
                                <Text
                                    style={styles.NumeroColorAzul}
                                >
                                    <Azul />
                                </Text>

                                <Text
                                    style={styles.TextoColorAzul}
                                >
                                    Reservas
                                </Text>
                                <Text
                                    style={styles.TextoColorAzul}
                                >
                                    para hoy
                                </Text>
                            </View>

                            <View
                                style={styles.contenedorVerde}
                            >
                                <View
                                    style={styles.circuloCentroVerde}
                                >
                                    <Entypo name="check" size={35} color="#FFFF" />

                                </View>
                                <Text
                                    style={styles.NumeroColorVerde}
                                >
                                    <Verde />
                                </Text>

                                <Text
                                    style={styles.TextoColorVerde}
                                >
                                    Reservas
                                </Text>
                                <Text
                                    style={styles.TextoColorVerde}
                                >
                                    confirmadas
                                </Text>
                            </View>

                            <View
                                style={styles.contenedorRojo}
                            >
                                <View
                                    style={styles.circuloCentroRojo}
                                >
                                    <Ionicons name="close" size={38} color="#FFFF" />

                                </View>
                                <Text
                                    style={styles.NumeroColorRojo}
                                >
                                    <Rojo />
                                </Text>

                                <Text
                                    style={styles.TextoColorRojo}
                                >
                                    Reservas
                                </Text>
                                <Text
                                    style={styles.TextoColorRojo}
                                >
                                    canceladas
                                </Text>
                            </View>


                        </View>
                    </View>

                    <Text
                        style={styles.TituloAuto}
                    >
                        RESERVAS DEL DÍA
                    </Text>

                    <View
                        styles={styles.derecha}
                    >
                        <View
                            style={styles.ContenedorReservaAzul}
                        >
                            <View
                                style={styles.ContenedorReservaBlanco}
                            >
                                <View
                                    style={styles.ContenedorDosReserva}
                                >

                                    <View
                                        style={styles.contenedorAuto}
                                    >
                                        <Image
                                            style={styles.logoAuto}
                                            source={require("../../assets/logoAuto.png")}
                                        />
                                    </View>

                                    <View
                                        style= {styles.contenedorDatosUno}
                                    >
                                        <Text
                                            style={styles.titulo}
                                        >
                                            OT 523673
                                        </Text>

                                        <Text
                                            style={styles.subtitulo}
                                        >
                                            Modelo
                                        </Text>

                                        <Text
                                            style= {styles.datos}
                                        >
                                            Mercedes Benz
                                        </Text>

                                        <Text
                                            style={styles.subtitulo}
                                        >
                                            Cliente
                                        </Text>
                                        
                                        <Text
                                            style= {styles.datos}
                                        >
                                            Pericle Robles
                                        </Text>
                                    </View>

                                    <View
                                        style={styles.contenedorDatosDos}
                                    >
                                        <Text
                                            style={styles.subtituloHora}
                                        >
                                            Hora
                                        </Text>

                                        <View
                                            style={styles.ContenedorDosHora}
                                        >
                                            <Ionicons name="md-time-outline" size={18} color="#B6B6B6" />

                                            <Text
                                                style={styles.datosHora}
                                            >
                                                15:40, 05 de Agosto
                                            </Text>
                                        </View>

                                        <View
                                            style={styles.ContenedorDosHora}
                                        >
                                            <Text
                                                style={styles.subtituloHora}
                                            >
                                                Estado
                                            </Text>

                                            <View
                                                style={styles.contenedorEstado}
                                            >
                                                <Text
                                                   style={styles.TextoColorAzul} 
                                                >
                                                    Hoy
                                                </Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity>
                                            <Text
                                                style={styles.verDetalles} 
                                            >
                                                Ver detalles
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <View
                            style={styles.ContenedorReservaVerde}
                        >
                            <View
                                style={styles.ContenedorReservaBlancoVerde}
                            >
                                <View
                                    style={styles.ContenedorDosReserva}
                                >

                                    <View
                                        style={styles.contenedorAuto}
                                    >
                                        <Image
                                            style={styles.logoAuto}
                                            source={require("../../assets/logoAuto.png")}
                                        />
                                    </View>

                                    <View
                                        style= {styles.contenedorDatosUno}
                                    >
                                        <Text
                                            style={styles.titulo}
                                        >
                                            OT 523673
                                        </Text>

                                        <Text
                                            style={styles.subtitulo}
                                        >
                                            Modelo
                                        </Text>

                                        <Text
                                            style= {styles.datos}
                                        >
                                            Mercedes Benz
                                        </Text>

                                        <Text
                                            style={styles.subtitulo}
                                        >
                                            Cliente
                                        </Text>
                                        
                                        <Text
                                            style= {styles.datos}
                                        >
                                            Pericle Robles
                                        </Text>
                                    </View>

                                    <View
                                        style={styles.contenedorDatosDos}
                                    >
                                        <Text
                                            style={styles.subtituloHora}
                                        >
                                            Hora
                                        </Text>

                                        <View
                                            style={styles.ContenedorDosHora}
                                        >
                                            <Ionicons name="md-time-outline" size={18} color="#B6B6B6" />

                                            <Text
                                                style={styles.datosHora}
                                            >
                                                15:40, 05 de Agosto
                                            </Text>
                                        </View>

                                        <View
                                            style={styles.ContenedorDosHora}
                                        >
                                            <Text
                                                style={styles.subtituloHora}
                                            >
                                                Estado
                                            </Text>

                                            <View
                                                style={styles.contenedorEstadoVerde}
                                            >
                                                <Text
                                                   style={styles.TextoColorVerde} 
                                                >
                                                    Confirmado
                                                </Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity>
                                            <Text
                                                style={styles.verDetalles} 
                                            >
                                                Ver detalles
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <View
                            style={styles.ContenedorReservaRojo}
                        >
                            <View
                                style={styles.ContenedorReservaBlancoRojo}
                            >
                                <View
                                    style={styles.ContenedorDosReserva}
                                >

                                    <View
                                        style={styles.contenedorAuto}
                                    >
                                        <Image
                                            style={styles.logoAuto}
                                            source={require("../../assets/logoAuto.png")}
                                        />
                                    </View>

                                    <View
                                        style= {styles.contenedorDatosUno}
                                    >
                                        <Text
                                            style={styles.titulo}
                                        >
                                            OT 523673
                                        </Text>

                                        <Text
                                            style={styles.subtitulo}
                                        >
                                            Modelo
                                        </Text>

                                        <Text
                                            style= {styles.datos}
                                        >
                                            Mercedes Benz
                                        </Text>

                                        <Text
                                            style={styles.subtitulo}
                                        >
                                            Cliente
                                        </Text>
                                        
                                        <Text
                                            style= {styles.datos}
                                        >
                                            Pericle Robles
                                        </Text>
                                    </View>

                                    <View
                                        style={styles.contenedorDatosDos}
                                    >
                                        <Text
                                            style={styles.subtituloHora}
                                        >
                                            Hora
                                        </Text>

                                        <View
                                            style={styles.ContenedorDosHora}
                                        >
                                            <Ionicons name="md-time-outline" size={18} color="#B6B6B6" />

                                            <Text
                                                style={styles.datosHora}
                                            >
                                                15:40, 05 de Agosto
                                            </Text>
                                        </View>

                                        <View
                                            style={styles.ContenedorDosHora}
                                        >
                                            <Text
                                                style={styles.subtituloHora}
                                            >
                                                Estado
                                            </Text>

                                            <View
                                                style={styles.contenedorEstadoRojo}
                                            >
                                                <Text
                                                   style={styles.TextoColorRojo} 
                                                >
                                                    Cancelado
                                                </Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity>
                                            <Text
                                                style={styles.verDetalles} 
                                            >
                                                Ver detalles
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    verDetalles: {
        color: '#2B83F2',
        marginTop: 8,
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 78,
    },
    contenedorEstado: {
        borderColor: '#2B83F2',
        borderWidth: 1,
        width: 85,
        height:22,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorEstadoVerde: {
        borderColor: '#74C343',
        borderWidth: 1,
        width: 85,
        height:22,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorEstadoRojo: {
        borderColor: '#EA3F3F',
        borderWidth: 1,
        width: 85,
        height:22,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ContenedorDosHora:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    contenedorDatosDos: {
        marginTop: 27,
        marginLeft: -45
    },
    datosHora: {
        color : '#B6B6B6',
        fontWeight: '700',
    },
    datos: {
        color : '#B6B6B6',
        fontWeight: '700',
        marginLeft: -15
    },
    subtitulo: {
        color: '#000000',
        fontWeight: '700',
        marginLeft: -15
    },
    subtituloHora: {
        color: '#000000',
        fontWeight: '700',
        // marginLeft: -15
    },
    ContenedorDosReserva: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // marginLeft: 12
    },
    contenedorDatosUno: {
        marginTop: 8,
        marginLeft: -38
    },
    titulo: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '700',
        marginLeft: -15
    },
    ContenedorReservaBlanco: {
        backgroundColor: '#FFFF',
        width: 410,
        height: 125,
        borderRadius: 12,
        borderColor: '#2B83F2',
        borderWidth: 1,
        marginLeft: 20
    },
    ContenedorReservaBlancoVerde: {
        backgroundColor: '#FFFF',
        width: 410,
        height: 125,
        borderRadius: 12,
        borderColor: '#74C343',
        borderWidth: 1,
        marginLeft: 20
    },
    ContenedorReservaBlancoRojo: {
        backgroundColor: '#FFFF',
        width: 410,
        height: 125,
        borderRadius: 12,
        borderColor: '#EA3F3F',
        borderWidth: 1,
        marginLeft: 20
    },
    ContenedorReservaRojo: {
        backgroundColor: '#EA3F3F',
        width: 410,
        height: 125,
        borderRadius: 12,
        marginTop: 25,
        marginLeft: 16
    },
    ContenedorReservaVerde: {
        backgroundColor: '#74C343',
        width: 410,
        height: 125,
        borderRadius: 12,
        marginTop: 25,
        marginLeft: 16
    },
    ContenedorReservaAzul: {
        backgroundColor: '#2B83F2',
        width: 410,
        height: 125,
        borderRadius: 12,
        marginTop: 25,
        marginLeft: 16
    },
    derecha: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    logoAuto: {
        width: 38,
        height: 36,
    },
    contenedorAuto: {
        borderColor: '#BBBABA',
        borderWidth: 1,
        width: 60,
        height: 60,
        borderRadius: 12,
        marginTop: 28,
        marginLeft: -58,
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 17
    },
    TextoColorVerde: {
        color: '#60BB29',
        marginTop: -3,
        fontSize: 12,
        fontWeight: '500'
    },
    NumeroColorVerde: {
        color: '#60BB29',
        fontSize: 21,
        fontWeight: '700',
        paddingVertical: 5
    },
    TextoColorRojo: {
        color: '#DC2A2A',
        marginTop: -3,
        fontSize: 12,
        fontWeight: '500'
    },
    NumeroColorRojo: {
        color: '#DC2A2A',
        fontSize: 21,
        fontWeight: '700',
        paddingVertical: 5
    },
    TextoColorAzul: {
        color: '#2B83F2',
        marginTop: -3,
        fontSize: 12,
        fontWeight: '500'
    },
    NumeroColorAzul: {
        color: '#2B83F2',
        fontSize: 21,
        fontWeight: '700',
        paddingVertical: 5
    },
    ContenedorDos: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    circuloCentroVerde: {
        width: 55,
        height: 55,
        backgroundColor: '#60BB29',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circuloCentroRojo: {
        width: 55,
        height: 55,
        backgroundColor: '#DC2A2A',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circuloCentroAzul: {
        width: 55,
        height: 55,
        backgroundColor: '#2B83F2',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorVerde: {
        borderColor: '#60BB29',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 105,
        height: 150,
        justifyContent: 'center',
        marginHorizontal: 6,
        alignItems: 'center',
    },
    contenedorRojo: {
        borderColor: '#DC2A2A',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 105,
        height: 150,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorAzul: {
        borderColor: '#2B83F2',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 105,
        height: 150,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerGobal: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        alignItems: 'center',
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
        // marginTop: 5,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logoAzul: {
        width: 135,
        height: 24
    },
    campana: {
        width: 28,
        height: 35,
        marginRight: 15
    },
    busqueda: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35
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
    TituloAuto: {
        fontSize: 22,
        marginTop: 28,
        marginLeft: 18,
        color: '#000000',
        fontWeight: '600'
    },
    margin: {
        marginTop: 24
    },
});

export default HomeDos;