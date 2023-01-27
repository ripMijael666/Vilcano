import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

import TableOrdersAll from './TableOrdersAll';

import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    ActivityIndicator
} from "react-native";

import {
    useFonts,
    Dosis_200ExtraLight,
    Dosis_300Light,
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_600SemiBold,
    Dosis_700Bold,
    Dosis_800ExtraBold,
} from '@expo-google-fonts/dosis';

export default function Ver() {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        Dosis_200ExtraLight,
        Dosis_300Light,
        Dosis_400Regular,
        Dosis_500Medium,
        Dosis_600SemiBold,
        Dosis_700Bold,
        Dosis_800ExtraBold,
    });

    if (!fontsLoaded) {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <ActivityIndicator size="large" />
            </View>
        );
    };

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
        fontFamily: "Dosis_700Bold"
    },
})