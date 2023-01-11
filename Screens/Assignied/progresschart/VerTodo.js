import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";
import Svg, {
    G,
    Path,
    Rect,
    Defs,
    ClipPath,
} from 'react-native-svg';

import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import TableAssignedAll from './TableAssignedAll';

export default function VerTodo() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar translucent style='auto' />
            <View style={styles.contenedorHeader}>
                <TouchableOpacity
                    style={styles.atras}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="left" size={25} color="#2B83F2" />
                </TouchableOpacity>
            </View>

            <View style={styles.contenedorOrdersEstatus}>
                <Text style={styles.tituloOrdersEstatus}>
                    Assigned tasks status
                </Text>
            </View>

            <View>
                <SafeAreaView>
                    <ScrollView scrollEnabled={true}>
                        <TableAssignedAll />
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6FA',
        paddingTop: 2,
        marginLeft: 15,
        marginRight: 15
    },
    contenedorHeader: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    atras: {
        // marginRight: 150,
        marginLeft: 20,
    },
    contenedorCirculos: {
        width: 90,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorLogoAuto: {
        backgroundColor: '#F6F6FA',
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorCircleAzul: {
        backgroundColor: '#3682F7',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        marginStart: 35,
        position: 'absolute',
        bottom: 4,
        right: 5,
    },
    textOt: {
        color: '#FFFFFF',
        fontWeight: '300',
        fontSize: 10,
        // lineHeight: 12
    },
    textAge: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 14
    },
    contenedorDatosLatersOrders: {
        marginLeft: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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
        fontSize: 14
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
    contenedorDatos: {
        flexDirection: 'row'
    },
    contenedorOrdersEstatus: {
        marginTop: 14,
        marginLeft: 15
    },
    tituloOrdersEstatus: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '700'
    },
})