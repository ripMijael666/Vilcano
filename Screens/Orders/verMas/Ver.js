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

import Svg, {
    G,
    Path,
    Rect,
    Defs,
    ClipPath,
} from 'react-native-svg';

export default function Ver() {
    return (
        <View style={styles.contenedorLatestOrders}>
            <View style={styles.contenedorCirculos}>
                <View style={styles.contenedorLogoAuto}>
                    <Image
                        source={require("../../../assets/logo_auto.png")}
                    />
                </View>
                <View style={styles.contenedorCircleAzul}>
                    <Text style={styles.textOt}>OT</Text>
                    <Text style={styles.textAge}>1904</Text>
                </View>
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
    )
}

const styles = StyleSheet.create({
    contenedorLatestOrders: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15
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
        alignItems: 'flex-start'
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
    contenedorDatos: {
        flexDirection: 'row'
    },
    contenedorDatosLatersOrders: {
        marginLeft: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    datosAuto: {
        color: '#000000',
        fontWeight: '300',
        fontSize: 16
    },

})