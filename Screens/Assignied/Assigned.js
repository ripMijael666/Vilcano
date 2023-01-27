import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import tailwind from 'twrnc';
import ProgressChart from './progresschart/Progresschart';

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

function Assigned() {
    const navigation = useNavigation();
    return (
        <View style={styles.containerGobal}>
            <StatusBar translucent backgroundColor='#F6F6FA' />
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
                    <TouchableOpacity>
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M12.9726 15.3224C12.356 15.6111 11.7938 15.9248 11.1967 16.1462C6.25046 17.9784 0.853281 14.7651 0.0899118 9.54661C-0.218873 7.44866 0.28576 5.3122 1.50105 3.57233C2.71635 1.83247 4.5509 0.620053 6.63109 0.182001C11.1619 -0.789648 15.6844 2.24259 16.5194 6.81628C16.9028 8.9192 16.5257 10.8847 15.4123 12.7059C15.3044 12.8821 15.3197 12.9731 15.4631 13.1146C16.8015 14.4402 18.1343 15.7707 19.4615 17.106C20.25 17.8993 20.1574 19.0875 19.2737 19.7045C18.6049 20.1702 17.7323 20.0814 17.1165 19.4671C16.0935 18.4539 15.0743 17.4359 14.0588 16.4134C13.683 16.0407 13.3121 15.6652 12.9726 15.3224ZM14.1653 8.3376C14.1746 7.56821 14.0308 6.80462 13.7422 6.09102C13.4536 5.37743 13.026 4.728 12.4841 4.18033C11.9422 3.63265 11.2968 3.19761 10.5852 2.90038C9.87362 2.60315 9.10997 2.44963 8.33849 2.44871C7.567 2.44779 6.80299 2.59949 6.09069 2.89503C5.37838 3.19057 4.7319 3.62407 4.1887 4.17046C3.64549 4.71684 3.21633 5.36524 2.92606 6.07815C2.63578 6.79106 2.49017 7.55431 2.49763 8.32373C2.49206 11.5454 5.11479 14.1703 8.33736 14.1675C11.5488 14.1647 14.1653 11.5468 14.1653 8.3376Z" fill="white" />
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.contenedorOrdersEstatus}>
                <Text style={styles.tituloOrdersEstatus}>
                    Assigned tasks status
                </Text>
            </View>


            <View style={styles.contenedorPorcentaje}>
                <View style={styles.porcentaje}>
                    <ProgressChart />
                    <View style={styles.porcentajeAzul}>
                        <Text style={styles.textSeeAll}>
                            See all
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.contenedorTitleLatest}>
                <Text style={styles.tituloOrdersEstatus}>
                    Assigned orders
                </Text>
                <Text style={styles.textLatestDelgado}>
                    / En espera de Control de Calidad
                </Text>
            </View>
            <View style={styles.contenedorLatestOrders}>
                <View style={styles.contenedorCirculos}>
                    <View style={styles.contenedorLogoAuto}>
                        <Image
                            source={require("../../assets/logo_auto.png")}
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
            <View style={tailwind.style("justify-end items-end mr-[18px] mt-2 ")}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("VerTodo")}
                >
                    <Text style={[
                        { fontFamily: "Dosis_400Regular" },
                        tailwind.style("text-[#3682F7] text-[16px] font-normal"),
                    ]}>
                        Ver todo
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerGobal: {
        flex: 1,
        backgroundColor: '#F6F6FA',
        paddingTop: 5,
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
        textAlign: "center",
        fontSize: 22,
        color: '#000000',
        fontFamily: "Dosis_700Bold",
    },
    textTipo: {
        textAlign: 'right',
        fontSize: 16,
        color: '#000000',
        fontFamily: "Dosis_500Medium",
    },
    textSingOut: {
        fontSize: 14,
        textAlign: 'right',
        color: '#000000',
        fontWeight: '400',
        color: '#2B83F2',
        fontFamily: "Dosis_400Regular",
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
    input: {
        flex: 1,
        // backgroundColor: '#ff0000',
        fontSize: 16,
        borderRadius: 12,
        height: 45,
        fontFamily: "Dosis_500Medium",
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
        // backgroundColor: '#ff0',
        justifyContent: 'center',
    },
    porcentaje: {
        backgroundColor: '#FFFFFF',
        width: 350,
        height: 250,
        borderRadius: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 15
    },
    porcentajeAzul: {
        backgroundColor: '#3682F7',
        width: 350,
        height: 30,
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
        marginRight: 15,
        marginTop: 5
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
        fontSize: 14,
        fontFamily: "Dosis_500Medium",
    },
    contenedorDatos: {
        flexDirection: 'row'
    },
    tituloOrdersEstatus: {
        color: '#000000',
        fontSize: 24,
        fontFamily: "Dosis_700Bold"
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
        fontFamily: "Dosis_400Regular",
    },
    textLatest: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '700'
    },
    textLatestDelgado: {
        color: '#000000',
        fontSize: 18,
        fontFamily: "Dosis_500Medium",
    },
    contenedorTitleLatest: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 15,
        marginLeft: 15
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
    contenedorDatosLatersOrders: {
        marginLeft: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
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
});

export default Assigned;