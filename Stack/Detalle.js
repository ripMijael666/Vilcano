import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Text,
    FlatList
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';


function Detalle() {
    const navigation = useNavigation();
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
                    <AntDesign name="left" size={30} color="#2B83F2" />
                </TouchableOpacity>

                <Image
                    style={styles.campana}
                    source={require("../assets/campana.png")}
                />
            </View>

            <View
                style={styles.contenedorDatos}
            >
                <Text
                    style={styles.TituloAuto}
                >
                    Datos de vehículo
                </Text>
                <View
                
                >
                    <View
                        // style={styles.}
                    >
                        <Text>
                            OT 124142
                        </Text>

                        <Text>
                            BMWM4 2020
                        </Text>

                        <Text>
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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorHeader: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    atras:{
        marginRight:150
    },
    campana: {
        width: 28,
        height: 35,
        marginLeft: 150,
    },
    contenedorDatos:{
        backgroundColor: '#EAEBEC',
        borderRadius: 40,
        width: 340,
        height: 700,
        marginTop: 25
    },
    logoAuto: {
        width: 40,
        height: 40
    },
    contenedorAuto: {
        backgroundColor: '#FDFDFD',
        width: 50,
        height:50,
    },
    TituloAuto: {
        fontSize: 25,
        marginTop: 28,
        marginLeft: 28,
        color: '#000000',
        fontWeight: '600'
    },
})

export default Detalle;