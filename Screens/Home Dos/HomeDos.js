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

function HomeDos() {
    return (
        <View style={styles.containerGobal}>
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

                <View>
                    <Text>
                        Orders status
                    </Text>
                </View>

                <View style={styles.containerOrders}>
                    <View style={styles.blancoOrders}>
                        <View style={styles.typeStatus}>
                            <Text>Open</Text>
                            <Image
                                source={require("../../assets/orders/open.png")}
                            />
                        </View>
                        <Text>
                            177
                        </Text>
                    </View>
                    <View style={styles.blancoOrders}>
                        <View style={styles.typeStatus}>
                            <Text>Assigned</Text>
                            <Image
                                source={require("../../assets/orders/assigned.png")}
                            />
                        </View>
                        <Text>
                            3490
                        </Text>
                    </View>
                    <View style={styles.blancoOrders}>
                        <View style={styles.typeStatus}>
                            <Text>Ongoing</Text>
                            <Image
                                source={require("../../assets/orders/ongoing.png")}
                            />
                        </View>
                        <Text>
                            22
                        </Text>
                    </View>
                </View>
                <View style={styles.containerOrders}>
                    <View style={styles.blancoOrders}>
                        <View style={styles.typeStatus}>
                            <Text>Paused</Text>
                            <Image
                                source={require("../../assets/orders/paused.png")}
                            />
                        </View>
                        <Text>
                            4
                        </Text>
                    </View>
                    <View style={styles.blancoOrders}>
                        <View style={styles.typeStatus}>
                            <Text>Finalized</Text>
                            <Image
                                source={require("../../assets/orders/finalized.png")}
                            />
                        </View>
                        <Text>
                            80
                        </Text>
                    </View>
                    <View style={styles.blancoOrders}>
                        <View style={styles.typeStatus}>
                            <Text>Closed</Text>
                            <Image
                                source={require("../../assets/orders/closed.png")}
                            />
                        </View>
                        <Text>
                            27
                        </Text>
                    </View>
                </View>
                <View style={styles.contenedorPorcentaje}>
                    <View>
                        <View>
                            <Text>
                                Orders entered
                            </Text>
                            <Text>
                                Waiting Mechanic Assignment
                            </Text>
                        </View>
                        <View style={styles.porcentaje}>
                            <View style={styles.porcentajeAzul}>
                                <Text>
                                    See all
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text>
                                Orders with work done
                            </Text>
                            <Text>
                                Waiting Quality Control
                            </Text>
                        </View>
                        <View style={styles.porcentaje}>
                            <View style={styles.porcentajeAzul}>
                                <Text>
                                    See all
                                </Text>
                            </View>
                        </View>
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
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#F6F6FA',
        borderRadius: 40,
        width: 420,
        marginTop: 25,
        marginHorizontal: 37
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
    },
    textTipo: {
        textAlign: 'right',
    },
    textSingOut: {
        color: '#2B83F2',
        textAlign: 'right',
    },
    usuarioImage: {
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        width: 51,
        height: 51,
        marginRight: 15
    },
    input: {
        fontSize: 16,
        borderRadius: 12,
        width: 220,
        height: 45,
        justifyContent: 'center',
        marginTop: 22,
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contenedorLupaAzul: {
        backgroundColor: '#2B83F2',
        width: 41,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    blancoOrders: {
        backgroundColor: '#FFFFFF',
        width: 103,
        height: 69,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15
    },
    typeStatus: {
        flexDirection: 'row'
    },
    containerOrders: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorPorcentaje: {
        flexDirection: 'row',
    },
    porcentaje: {
        backgroundColor: '#FFFFFF',
        width: 150,
        height: 130,
        borderRadius: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    porcentajeAzul: {
        backgroundColor: '#3682F7',
        width: 150,
        height: 25,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
    }
});

export default HomeDos;