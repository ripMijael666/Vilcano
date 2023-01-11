import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
} from "react-native";

import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

import TableOrdersAll from './TableOrdersAll';

export default function Ver() {
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
                    Orders status
                </Text>
            </View>
            <View>
                <SafeAreaView>
                    <ScrollView scrollEnabled={true}>
                        <TableOrdersAll />
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
        marginLeft: 20,
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