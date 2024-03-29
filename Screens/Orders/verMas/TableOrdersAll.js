import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import tailwind from 'twrnc';

import {
    View,
    ActivityIndicator,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

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

export default function TableOrdersAll() {
    const [showDots, setShowDots] = useState(true);
    const [data, setData] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        fetch('https://slogan.com.bo/vulcano/orders/all/')
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    // console.log(data.data);s
                    setData(data.data)
                } else {
                    console.error(data.error)
                }
            })
            .then(setShowDots(false))
    }, []);

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
        showDots ?
            <ActivityIndicator />
            :
            <View>
                <Table data={data} navigation={navigation} />
            </View>
    )
}

const Table = (props) => {
    const { data, navigation } = props;
    return (
        <View>
            {data.map(row => <TableRow key={data.id} row={row} navigation={navigation} />)}
        </View>
    );
};

class TableRow extends React.Component {
    render() {
        let row = this.props.row;
        let key = this.props.key;
        let navigation = this.props.navigation
        let imagen = row.car.cars_models_version.cars_model.catalogues_record.additional_info
        return (
            <View key={key}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Detalle", { row: row })}
                >
                    <View style={styles.contenedorLatestOrders}>
                        <View style={styles.contenedorCirculos}>
                            <View style={styles.contenedorLogoAuto}>
                                <Image
                                    style={styles.imagenLogo}
                                    source={{
                                        uri: imagen
                                    }}
                                />
                            </View>
                            <View style={styles.contenedorCircleAzul}>
                                <Text style={styles.textOt}>OT</Text>
                                <Text style={styles.textAge}>1904</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorDatosLatersOrders}>
                            <View style={styles.contenedorEstado}>
                                <Text style={[
                                    { fontFamily: "Dosis_500Medium" },
                                    tailwind.style(
                                        row.status == "ABIERTO" ?
                                            "text-[#FFFF] bg-[#3682F7] border-[#3682F7] w-full h-full justify-center items-center text-center font-normal rounded-[12px]"
                                            : row.status == "EN PAUSA" ?
                                                "text-[#FFFF] bg-[#D6312D] border-[#D6312D] w-full h-full justify-center items-center text-center font-normal rounded-[12px]"
                                                : row.status == "EN CURSO" ?
                                                    "text-[#FFFF] bg-[#84CC16] border-[#84CC16] w-full h-full justify-center items-center text-center font-normal rounded-[12px]"
                                                    : row.status == "FINALIZADO" ?
                                                        "text-[#FFFF] bg-[#4ADE80] border-[#4ADE80] w-full h-full justify-center items-center text-center font-normal rounded-[12px]"
                                                        : row.status == "CERRADO" ?
                                                            "text-[#FFFF] bg-[#F1CA7B] border-[#F1CA7B] w-full h-full justify-center items-center text-center font-normal rounded-[12px]"
                                                            : row.status == "ENTREGADO" ?
                                                                "text-[#FFFF] bg-[#5EE592] border-[#5EE592] w-full h-full justify-center items-center text-center font-normal rounded-[12px]"
                                                                : null
                                    )]}>
                                    {row.status}
                                </Text>
                            </View>
                            <Text style={styles.textName}>
                                {row.client.name}
                            </Text>
                            <View style={styles.contenedorDatos}>
                                <Text style={styles.datosAuto}>
                                    {row.car.cars_models_version.cars_model.catalogues_record.name}
                                </Text>
                                <Text style={styles.textName}>
                                    •
                                </Text>
                                <Text style={styles.datosAuto}>
                                    {row.car.cars_models_version.cars_model.name}
                                </Text>
                                <Text style={styles.textName}>
                                    •
                                </Text>
                                <Text style={styles.datosAuto}>
                                    {row.car.plate}
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contenedorLatestOrders: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10
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
        fontSize: 10,
        fontFamily: "Dosis_400Regular"
    },
    textAge: {
        color: '#FFFFFF',
        fontSize: 12,
        lineHeight: 14,
        fontFamily: "Dosis_700Bold"
    },
    contenedorDatosLatersOrders: {
        marginLeft: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    contenedorEstado: {
        padding: 2,
        width: 85,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
    },
    textEstado: {
        color: '#FFFFFF',
        fontSize: 14
    },
    textName: {
        color: '#000000',
        fontFamily: "Dosis_700Bold",
        fontSize: 16
    },
    datosAuto: {
        color: '#000000',
        fontFamily: "Dosis_400Regular",
        fontSize: 16
    },
    contenedorDatos: {
        flexDirection: 'row'
    },
    imagenLogo: {
        width: 35,
        height: 35,
    }
});