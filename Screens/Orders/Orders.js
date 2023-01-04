import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";

import { useNavigation } from '@react-navigation/native';

function Orders() {
    const navigation = useNavigation();
    return (
        <View style={styles.containerGobal}>
            <View style={styles.contenedorLogo}>
                <TouchableOpacity
                    onPress={() => signOut()}
                >
                    <Image
                        style={styles.logoAzul}
                        source={require("../../assets/logo_azul.png")}
                    />
                </TouchableOpacity>

                <View style={styles.usuarioTextConstainer}>
                    <View style={styles.datos}>
                        <Text style={styles.textUser}>
                            Henry T.
                        </Text>
                        <Text style={styles.textTipo}>
                            Shop Manager
                        </Text>
                        <Text style={styles.textSingOut}>
                            Sign out
                        </Text>
                    </View>
                    <View style={styles.usuarioImage}></View>
                </View>
            </View>

            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Search order"
                />
                <View style={styles.contenedorLupaAzul}>
                    <Image
                        source={require("../../assets/lupa_blanca.png")}
                    />
                </View>
            </View>

            <View style={styles.contenedorOrdersEstatus}>
                <Text style={styles.tituloOrdersEstatus}>
                    Orders status
                </Text>
            </View>

            <View style={styles.containerOrders}>
                <View style={styles.blancoOrders}>
                    <View style={styles.typeStatus}>
                        <Text style={styles.textOrders}>Open</Text>
                        <Image
                            source={require("../../assets/orders/open.png")}
                        />
                    </View>
                    <Text style={styles.numberOrders}>
                        177
                    </Text>
                </View>
                <View style={styles.blancoOrders}>
                    <View style={styles.typeStatus}>
                        <Text style={styles.textOrders}>Assigned</Text>
                        <Image
                            source={require("../../assets/orders/assigned.png")}
                        />
                    </View>
                    <Text style={styles.numberOrders}>
                        3490
                    </Text>
                </View>
                <View style={styles.blancoOrders}>
                    <View style={styles.typeStatus}>
                        <Text style={styles.textOrders}>Ongoing</Text>
                        <Image
                            source={require("../../assets/orders/ongoing.png")}
                        />
                    </View>
                    <Text style={styles.numberOrders}>
                        22
                    </Text>
                </View>
            </View>
            <View style={styles.containerOrders}>
                <View style={styles.blancoOrders}>
                    <View style={styles.typeStatus}>
                        <Text style={styles.textOrders}>Paused</Text>
                        <Image
                            source={require("../../assets/orders/paused.png")}
                        />
                    </View>
                    <Text style={styles.numberOrders}>
                        4
                    </Text>
                </View>
                <View style={styles.blancoOrders}>
                    <View style={styles.typeStatus}>
                        <Text style={styles.textOrders}>Finalized</Text>
                        <Image
                            source={require("../../assets/orders/finalized.png")}
                        />
                    </View>
                    <Text style={styles.numberOrders}>
                        80
                    </Text>
                </View>
                <View style={styles.blancoOrders}>
                    <View style={styles.typeStatus}>
                        <Text style={styles.textOrders}>Closed</Text>
                        <Image
                            source={require("../../assets/orders/closed.png")}
                        />
                    </View>
                    <Text style={styles.numberOrders}>
                        27
                    </Text>
                </View>
            </View>
            <View style={styles.contenedorPorcentaje}>
                <View style={styles.contenedorOrdersEntered}>
                    <View>
                        <Text style={styles.titleBar}>
                            Orders entered
                        </Text>
                        <Text style={styles.textEntered}>
                            Waiting Mechanic Assignment
                        </Text>
                    </View>
                    <View style={styles.porcentaje}>
                        <View style={styles.porcentajeAzul}>
                            <TouchableOpacity
                                style={styles.porcentajeAzul}
                                onPress={() => navigation.navigate("Assigned")}
                            >
                                <Text style={styles.textSeeAll}>
                                    See all
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.contenedorOrdersWork}>
                    <View>
                        <Text style={styles.titleBar}>
                            Orders with work done
                        </Text>
                        <Text style={styles.textEntered}>
                            Waiting Quality Control
                        </Text>
                    </View>
                    <View style={styles.porcentaje}>
                        <View style={styles.porcentajeAzul}>
                            <View style={styles.porcentajeAzul}>
                                <TouchableOpacity
                                    style={styles.porcentajeAzul}
                                    onPress={() => navigation.navigate("Assigned")}
                                >
                                    <Text style={styles.textSeeAll}>
                                        See all
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.contenedorTitleLatest}>
                <Text style={styles.textLatest}>
                    Latest orders
                </Text>
                <Text style={styles.textLatestDelgado}>
                    / En espera de Control de Calidad
                </Text>
            </View>
            <View style={styles.contenedorLatestOrders}>
                <View style={styles.contenedorLogoAuto}>
                    <Image
                        source={require("../../assets/logo_auto.png")}
                    />
                </View>
                <View style={styles.contenedorDatosLatersOrders}>
                    <View style={styles.contenedorEstado}>
                        <Text style={styles.textEstado}>
                            FINALIZED
                        </Text>
                    </View>
                    <Text style={styles.textName}>
                        HENRY MCCORMIK
                    </Text>
                    <View style={styles.contenedorDatos}>
                        <Text style={styles.datosAuto}>
                            FORD
                        </Text>
                        <Text style={styles.textName}>
                            •
                        </Text>
                        <Text style={styles.datosAuto}>
                            FIESTA SE
                        </Text>
                        <Text style={styles.textName}>
                            •
                        </Text>
                        <Text style={styles.datosAuto}>
                            4477EED
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerGobal: {
        flex: 1,
        backgroundColor: '#F6F6FA',
        // alignItems: 'center',
        paddingTop: 5,
        // justifyContent: 'center',
        // marginLeft: 35,
        // marginRight: 35
    },
    contenedorLogo: {
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    usuarioTextConstainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
    },
    datos: {
        marginTop: 6,
        marginRight: 10
    },
    textUser: {
        textAlign: 'right',
        fontSize: 18,
        color: '#000000',
        fontWeight: '800',
    },
    textTipo: {
        textAlign: 'right',
        fontSize: 16,
        color: '#000000',
        fontWeight: '400',
    },
    textSingOut: {
        fontSize: 14,
        color: '#000000',
        fontWeight: '400',
        color: '#2B83F2',
        textAlign: 'right',
    },
    usuarioImage: {
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        width: 51,
        height: 51,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorLogoAuto: {
        backgroundColor: '#F6F6FA',
        borderRadius: 100,
        width: 46,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    input: {
        flex: 1,
        // backgroundColor: '#ff0000',
        fontSize: 16,
        borderRadius: 12,
        height: 45,
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#fff000',
        borderBottomLeftRadius: 12,
        borderTopLeftRadius: 12,
        marginTop: 16,
        marginLeft: 25,
        marginRight: 25,
    },
    contenedorLupaAzul: {
        backgroundColor: '#2B83F2',
        width: 48,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
    },
    blancoOrders: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: 103,
        height: 69,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15
    },
    typeStatus: {
        flexDirection: 'row',
    },
    containerOrders: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorPorcentaje: {
        flexDirection: 'row',
        marginRight: 15,
        marginLeft: 15,
        marginTop: 15,
        // backgroundColor: '#ff0'
    },
    porcentaje: {
        backgroundColor: '#FFFFFF',
        width: 180,
        height: 150,
        borderRadius: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 15
    },
    porcentajeAzul: {
        backgroundColor: '#3682F7',
        width: 180,
        height: 25,
        // borderRadius: 20,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
    },
    contenedorLatestOrders: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15
    },
    contenedorEstado: {
        backgroundColor: '#71AD46',
        width: 85,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        fontWeight: '300'
    },
    textEstado: {
        color: '#FFFFFF',
    },
    contenedorDatos: {
        flexDirection: 'row'
    },
    tituloOrdersEstatus: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '700'
    },
    contenedorOrdersEstatus: {
        marginTop: 14,
        marginLeft: 15
    },
    numberOrders: {
        fontSize: 28,
        color: '#000000',
        fontWeight: '400',
        marginRight: 40
    },
    textOrders: {
        fontSize: 15,
        fontWeight: '300',
        marginRight: 40
    },
    titleBar: {
        fontSize: 20,
        fontWeight: '800'
    },
    textEntered: {
        fontSize: 12,
        fontWeight: '400'
    },
    contenedorOrdersEntered: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // backgroundColor: '#fd5580',
        marginRight: 15,
    },
    contenedorOrdersWork: {
        justifyContent: 'flex-start',
        // backgroundColor: '#ff0000',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    textSeeAll: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '300'
    },
    textLatest: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '700'
    },
    textLatestDelgado: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '300'
    },
    contenedorTitleLatest: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 15,
        marginLeft: 15
    },
    textName: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 16
    },
    datosAuto: {
        color: '#000000',
        fontWeight: '300',
        fontSize: 16
    },
    contenedorDatosLatersOrders: {
        marginLeft: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
});

export default Orders;