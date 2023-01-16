import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    ScrollView
} from "react-native";

import Svg, {
    Path,
    G,
    Rect,
    Defs,
    ClipPath,
} from 'react-native-svg';

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import DatosVehiculo from "./DatosVehiculo";
import DatosCliente from "./DatosCliente";

export default function Detalle({ route }) {
    const navigation = useNavigation();
    const { row } = route.params;
    const Estado = (props) => {
        const { estado } = props;
        return (
            <View>
                {estado == "ABIERTO" ?
                    <View style={styles.ContenedorDosEstado}>
                        <BarraEstado name="ABIERTO" status={true}></BarraEstado>
                        <View style={styles.barraLargaGris} />
                        <BarraEstado name="FINALIZADO" status={false}></BarraEstado>
                        <View style={styles.barraLargaGris} />
                        <BarraEstado name="CERRADO" status={false}></BarraEstado>
                        <View style={styles.barraLargaGris} />
                        <BarraEstado name="ENTREGADO" status={false}></BarraEstado>
                    </View>
                    : <></>
                }
                {estado == "FINALIZADO" ?
                    <View
                        style={styles.ContenedorDosEstado}
                    >
                        <BarraEstado name="ABIERTO" status={true}></BarraEstado>
                        <View style={styles.barraLargaAzul} />
                        <BarraEstado name="FINALIZADO" status={true}></BarraEstado>
                        <View style={styles.barraLargaGris} />
                        <BarraEstado name="CERRADO" status={false}></BarraEstado>
                        <View style={styles.barraLargaGris} />
                        <BarraEstado name="ENTREGADO" status={false}></BarraEstado>
                    </View>
                    : <></>
                }
                {estado == "CERRADO" ?
                    <View
                        style={styles.ContenedorDosEstado}
                    >
                        <BarraEstado name="ABIERTO" status={true}></BarraEstado>
                        <View style={styles.barraLargaAzul} />
                        <BarraEstado name="FINALIZADO" status={true}></BarraEstado>
                        <View style={styles.barraLargaAzul} />
                        <BarraEstado name="CERRADO" status={true}></BarraEstado>
                        <View style={styles.barraLargaGris} />
                        <BarraEstado name="ENTREGADO" status={false}></BarraEstado>
                    </View>
                    : <></>
                }
                {estado == "ENTREGADO" ?
                    <View
                        style={styles.ContenedorDosEstado}
                    >
                        <BarraEstado name="ABIERTO" status={true}></BarraEstado>
                        <View style={styles.barraLargaAzul} />
                        <BarraEstado name="FINALIZADO" status={true}></BarraEstado>
                        <View style={styles.barraLargaAzul} />
                        <BarraEstado name="CERRADO" status={true}></BarraEstado>
                        <View style={styles.barraLargaAzul} />
                        <BarraEstado name="ENTREGADO" status={true}></BarraEstado>
                    </View>
                    : <></>
                }
            </View>
        );
    }

    const BarraEstado = (props) => {
        const { name, status } = props;
        return (
            <View style={styles.ContenedorDosEstado}>
                <View style={styles.centroCirculoTexto}>
                    {status ? <View style={styles.circulo} /> : <View style={styles.circuloGris} />}
                    {status ? <Text style={styles.letraAzul}> {name} </Text> : <Text style={styles.letraGris}> {name} </Text>}
                </View>
            </View>
        );
    }

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
                <Image
                    style={styles.campana}
                    source={require("../../assets/campana.png")}
                />
            </View>
            <ScrollView>
                <View style={styles.contenedorDatos}>
                    <Text style={styles.TituloAuto}>
                        DATOS DEL VEHÍCULO
                    </Text>
                    <View style={styles.ContenedorDos}>
                        <View style={styles.contenedorCaracteristicas}>
                            <Text style={styles.OT}>
                                OT {row.id}
                            </Text>
                            <Text style={styles.marcaauto}>
                                {row.car.cars_models_version.cars_model.catalogues_record.name}&nbsp; {row.car.year}
                            </Text>
                            <Text style={styles.placaVIN}>
                                {row.car.plate}&nbsp; /&nbsp; {row.car.vin}
                            </Text>
                        </View>
                        <View style={styles.contenedorAuto}>
                            <Image
                                style={styles.logoAuto}
                                source={require("../../assets/logoAuto.png")}
                            />
                        </View>
                    </View>
                    <View style={styles.contenedorImagenGrande}>
                        <Image
                            style={styles.imagenAutoGrande}
                            source={require("../../assets/autos/auto_2.png")}
                        />
                    </View>
                    <View>
                        <DatosVehiculo row={row} />
                    </View>
                </View>
                <View style={styles.containerCliente}>
                    <Text style={styles.Cliente}>
                        DATOS DEL CLIENTE
                    </Text>
                    <DatosCliente row={row} />
                    <Text style={styles.estadoOt}>
                        ESTADO OT
                    </Text>
                    <View style={styles.ContenedorDosEstado}>
                        <Estado estado={row.status}></Estado>
                    </View>
                    <View style={styles.circuloDos}>
                        <View style={styles.finalizacion}>
                            <Text style={styles.TituloAutoFinalizacion}>
                                FINALIZACIÓN
                            </Text>

                            <Text style={styles.TituloAutoFinalizacion}>
                                DE SR'S
                            </Text>
                        </View>
                        <Text style={styles.porcentaje}>
                            68%
                        </Text>
                    </View>
                    <View style={styles.contenedorImagenGigante}>
                        <Image
                            style={styles.imagenGigante}
                            source={require("../../assets/autos/auto_1.1.png")}
                        />
                    </View>
                    <Text style={styles.completadoPorcentaje}>
                        COMPLETADO 68%
                    </Text>
                    <Progress.Bar
                        progress={0.6}
                        width={330}
                        unfilledColor={'#BBBABA'}
                    />
                    <View style={styles.contenedorVerTodo}>
                        <TouchableOpacity >
                            <Text style={styles.verTodo}>
                                VER TODO
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ContenedorDosAzul}>
                        <TouchableOpacity onPress={() => navigation.navigate("Parts", { row: row })}>
                            <View style={styles.contenedorAzul}>
                                <View style={styles.circuloDos}>
                                    <Svg width="58" height="58" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G clip-path="url(#clip0_17_33)">
                                            <Path d="M0.131318 36.9632C0.390029 35.6628 1.15441 35.855 2.03442 35.957C2.44013 34.994 2.83799 34.0486 3.23782 33.0954C2.14613 31.7088 2.13634 31.3459 3.17118 30.2947C4.86065 28.5765 4.99589 28.555 6.62068 29.7769C7.08322 29.5572 7.54381 29.316 8.02203 29.1179C8.46498 28.9335 8.92752 28.7923 9.36067 28.6373C9.59586 26.7388 10.7895 26.7094 12.7161 26.8663C14.1429 26.982 14.0665 27.5017 14.2468 28.0058C14.3487 28.2941 14.3742 28.6648 14.6172 28.7864C15.3404 29.1453 16.1087 29.4121 16.8849 29.7259C18.6469 28.602 18.8997 28.655 20.5735 30.532C21.332 31.3832 21.2771 31.8676 20.2677 33.0778C20.644 33.9878 21.0243 34.9096 21.4143 35.853C23.3056 36.2218 24.1994 37.9046 23.3017 39.6972C23.09 40.1189 22.4041 40.2994 21.9396 40.5955C21.7044 40.7465 21.3692 40.8583 21.2634 41.076C20.8969 41.8331 20.6127 42.6294 20.2893 43.4316C21.4574 45.1066 21.4143 45.3302 19.5445 47.0522C18.6586 47.8681 18.2137 47.825 16.9496 46.7992C16.1401 47.1248 15.3169 47.4209 14.5349 47.7975C14.3193 47.9014 14.1312 48.2349 14.0861 48.4898C13.9018 49.5588 13.4844 49.9648 12.4162 49.9961C12.1889 50.002 11.9615 49.9961 11.7342 49.9961C9.84869 49.9961 9.59194 49.7745 9.37439 47.9603C8.45518 47.5778 7.53205 47.1914 6.59716 46.8011C4.98413 48.0015 4.84889 47.9779 3.11238 46.1912C2.15201 45.2007 2.16965 44.8143 3.24174 43.4551L2.25981 41.1035C1.3112 40.4778 0.725179 41.029 0.36063 40.4013C-0.0979953 39.6149 -0.0411571 37.8556 0.137197 36.9612L0.131318 36.9632ZM7.45953 38.2184C7.43405 40.5759 9.33127 42.5353 11.6695 42.5706C14.0704 42.6059 16.0323 40.6818 16.0421 38.2831C16.0499 35.9335 14.1351 33.9976 11.7832 33.98C9.43319 33.9623 7.48501 35.8727 7.45953 38.2184Z" fill="white" />
                                            <Path d="M41.2214 0.645396C47.3188 2.51061 50.8878 8.79077 49.806 15.218C48.779 21.3138 43.2363 25.8386 36.8841 25.768C30.675 25.6974 25.3263 21.0098 24.4052 14.8277C23.3586 7.79834 28.0232 1.35736 35.0261 0.158988C35.2123 0.127607 37.8209 -0.396066 41.2234 0.645396H41.2214ZM37.1448 3.11078C31.7804 3.1049 27.3901 7.47276 27.3725 12.835C27.3549 18.2051 31.7079 22.6103 37.0664 22.6416C42.466 22.673 46.8955 18.2659 46.8896 12.8644C46.8837 7.4963 42.5091 3.11862 37.1448 3.11078Z" fill="white" />
                                            <Path d="M15.1993 23.4183C11.352 23.5654 8.31406 19.9899 9.15291 16.5085C9.39594 15.4985 9.94865 15.32 10.7287 16.0221C11.4284 16.6537 12.0948 17.3225 12.7984 17.9501C13.504 18.5817 14.1821 18.562 14.8603 17.9168C15.1425 17.6481 15.4149 17.3656 15.6736 17.0754C16.3008 16.3712 16.291 15.7044 15.6129 15.0277C14.9465 14.3609 14.237 13.7352 13.5706 13.0703C12.8337 12.3329 13.0061 11.7464 14.0136 11.4895C17.5512 10.5853 21.1967 13.4332 21.1183 17.095C21.1007 17.8874 21.3261 18.3973 21.8964 18.9347C25.2087 22.0591 28.4857 25.2188 31.7549 28.3883C32.1842 28.8041 32.582 28.9688 33.2014 28.9257C36.398 28.7021 39.1341 31.0459 39.4536 34.2075C39.7789 37.4319 37.4191 40.4229 34.1304 40.9564C31.116 41.4448 28.1388 39.4188 27.4607 36.414C27.4117 36.1924 27.3509 35.9551 27.3745 35.7413C27.4999 34.6292 26.9178 33.676 26.0495 32.862C22.9626 29.973 19.9326 27.0232 16.8947 24.0832C16.3596 23.5654 16.2381 23.181 15.2013 23.4183H15.1993ZM33.5091 32.3913C32.0156 32.407 30.9023 33.4112 30.918 34.7312C30.9376 36.3375 31.9529 37.481 33.3444 37.4653C34.8849 37.4476 36.0296 36.4768 36.0178 35.196C36.0002 33.3445 35.1319 32.3737 33.5091 32.3913Z" fill="white" />
                                            <Path d="M41.4801 19.8133C41.0431 18.966 40.6609 18.2226 40.2513 17.4283C39.7828 17.6558 39.3614 17.8618 38.8773 18.0991C39.2615 18.8875 39.628 19.6407 39.9925 20.3938C38.6265 21.2902 35.9453 21.3176 34.2578 20.4331C34.6184 19.6858 34.9829 18.9366 35.3749 18.1226C34.9359 17.8873 34.5204 17.6656 34.0285 17.4028C33.6188 18.1932 33.221 18.9621 32.7819 19.8074C30.5652 18.3305 29.3364 16.3496 28.9816 13.6763H31.6354V12.1308H28.9895C29.3011 9.43985 30.5456 7.47068 32.7682 5.95261C33.1935 6.75676 33.5933 7.51579 34.0226 8.3317L35.3887 7.657C35.0065 6.87248 34.638 6.11933 34.2205 5.26811C36.1628 4.46397 38.0483 4.49731 40.0396 5.24654C39.6417 6.07029 39.2811 6.82148 38.8871 7.63543C39.3262 7.86883 39.7417 8.09046 40.2356 8.35523C40.6413 7.56874 41.0372 6.79794 41.4782 5.94477C43.7027 7.42361 44.912 9.41631 45.2824 12.0837H42.6228V13.6312H45.2687C44.9473 16.3162 43.7164 18.2952 41.4743 19.8172L41.4801 19.8133ZM41.0333 12.8937C41.047 10.748 39.3007 8.98482 37.1506 8.97305C35.0025 8.96128 33.2386 10.7108 33.2308 12.8565C33.2249 15.01 34.9692 16.7752 37.1114 16.7811C39.2556 16.787 41.0215 15.0394 41.0333 12.8937Z" fill="white" />
                                            <Path d="M37.1095 10.5381C35.8669 10.5479 34.8222 11.5795 34.7968 12.825C34.7693 14.1077 35.8257 15.2002 37.1075 15.2139C38.3874 15.2276 39.4693 14.1587 39.4693 12.8779C39.4693 11.5933 38.3952 10.5302 37.1114 10.54L37.1095 10.5381ZM38.1757 12.9682V12.8838C38.1953 12.8995 38.2129 12.9152 38.2325 12.9329C38.2129 12.9446 38.1953 12.9564 38.1757 12.9701V12.9682Z" fill="white" />
                                        </G>
                                        <Defs>
                                            <ClipPath id="clip0_17_33">
                                                <Rect width="50" height="50" fill="white" />
                                            </ClipPath>
                                        </Defs>
                                    </Svg>
                                    <Text style={styles.textoPartes}>
                                        PARTES
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("External", { row: row })}>
                            <View style={styles.contenedorAzul}>
                                <View style={styles.circuloDos}>
                                    <Svg width="52" height="32" viewBox="0 0 49 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G clip-path="url(#clip0_18_52)">
                                            <Path d="M0 19.4235C0.260876 18.9865 0.659862 18.8853 1.13976 18.8923C2.33533 18.9106 3.53229 18.898 4.72785 18.898C4.89526 18.898 5.06406 18.898 5.28029 18.898C3.94243 16.9249 3.98289 15.1528 5.34307 13.9442C6.68093 12.7554 8.56147 12.7652 9.86306 13.9681C11.2135 15.216 11.2456 16.9713 9.92165 18.8558H22.6822C21.3597 16.8364 21.4155 15.1444 22.8259 13.9105C24.1205 12.7764 25.9355 12.7764 27.2343 13.9133C28.6391 15.1416 28.6949 16.8532 27.3696 18.8628H34.1901V18.2614C34.1901 13.0884 34.1901 7.91407 34.1929 2.74113C34.1929 2.48677 34.2082 2.22538 34.2612 1.97805C34.3686 1.46933 34.8444 1.118 35.3438 1.1461C35.86 1.17421 36.2896 1.54802 36.3608 2.06377C36.3984 2.33218 36.3887 2.60762 36.3943 2.88025C36.3998 3.15007 36.3943 3.41989 36.3943 3.76419H36.9941C40.0242 3.76419 43.0543 3.76419 46.0857 3.76419C47.0051 3.76419 47.1627 3.88364 47.3162 4.79709C47.877 8.13611 48.4266 11.4751 48.9777 14.8155C49.0014 14.9575 48.9972 15.1036 48.9972 15.2484C48.9972 17.546 49 19.8437 48.9972 22.1414C48.9972 22.927 48.7405 23.1898 47.9718 23.1926C46.7456 23.1968 45.5193 23.1926 44.2317 23.1926C44.2415 24.8832 43.6458 26.28 42.2786 27.2708C41.4681 27.8582 40.5432 28.1407 39.5373 28.1083C38.2469 28.0676 37.1601 27.5645 36.2785 26.6159C35.394 25.6631 35.0731 24.4953 35.0494 23.2123H16.2636C16.2524 24.8522 15.6958 26.2337 14.3663 27.2216C13.5028 27.8624 12.5262 28.1589 11.4506 28.1027C8.92697 27.9706 7.38125 26.2632 7.05341 23.1926C6.73115 23.1926 6.40052 23.1926 6.0699 23.1926C4.90502 23.1926 3.73875 23.149 2.57807 23.2038C1.2988 23.2657 0.426888 22.7808 0.00139506 21.5441V19.4235H0ZM36.4208 18.867H47.4068C47.4068 17.5236 47.5185 16.1998 47.3803 14.9027C47.1795 13.0238 46.7986 11.1645 46.4903 9.29689C46.2741 7.98714 46.0509 6.6788 45.829 5.36765H36.4194V18.867H36.4208ZM11.6613 20.4803C10.0067 20.486 8.64099 21.8674 8.65075 23.5228C8.66191 25.1839 10.0388 26.5611 11.6808 26.5555C13.3284 26.5485 14.6941 25.1614 14.6844 23.5031C14.6746 21.8266 13.3214 20.4747 11.6613 20.4803ZM36.6412 23.527C36.6482 25.1965 38.0153 26.5667 39.6643 26.5555C41.3063 26.5442 42.6874 25.1403 42.6734 23.4989C42.6595 21.8322 41.2909 20.4733 39.635 20.4803C37.9721 20.4874 36.6342 21.8505 36.6412 23.527ZM16.597 20.4958C17.1201 20.9005 17.5387 21.2364 17.9725 21.5498C18.0646 21.6158 18.2111 21.6285 18.3325 21.6285C23.942 21.6327 29.5515 21.6327 35.1624 21.6257C35.2866 21.6257 35.4624 21.5779 35.5251 21.4893C35.7442 21.1844 35.9227 20.8513 36.1376 20.4944H16.597V20.4958ZM8.15132 20.5211H1.57083C1.51085 21.5189 1.61548 21.6327 2.54598 21.6327C4.05822 21.6327 5.57186 21.6397 7.0841 21.6228C7.25848 21.6214 7.48588 21.5343 7.59469 21.405C7.80674 21.1535 7.95322 20.8443 8.15132 20.5197V20.5211ZM7.58074 18.1869C8.55589 18.1911 9.35107 17.4111 9.36642 16.4344C9.38037 15.4564 8.54891 14.6132 7.57795 14.6244C6.61257 14.6342 5.82855 15.4367 5.82995 16.4148C5.82995 17.4013 6.60281 18.1841 7.58214 18.1883L7.58074 18.1869ZM25.0469 18.1869C26.022 18.1798 26.8005 17.3887 26.7977 16.4063C26.7949 15.4367 25.9955 14.6272 25.0357 14.623C24.0606 14.6188 23.2431 15.4549 23.2584 16.4415C23.2737 17.4196 24.0689 18.1939 25.0469 18.1869ZM47.4208 20.5183H44.427C45.2306 21.4388 46.1778 21.9053 47.4208 21.554V20.5183Z" fill="white" />
                                            <Path d="M31.8185 12.3C32.0849 12.3 32.3221 12.2874 32.5579 12.3028C33.1173 12.3394 33.4005 12.6275 33.4061 13.1952C33.4158 14.2393 33.4172 15.2835 33.4061 16.3276C33.4005 16.8673 33.1173 17.1792 32.5858 17.1919C31.7097 17.2144 30.8308 17.213 29.9547 17.1947C29.3953 17.1821 29.1358 16.8926 29.0911 16.256C29.0116 15.1345 28.6112 14.1592 27.77 13.4102C26.4935 12.2719 25.019 11.9979 23.4607 12.657C21.8564 13.3357 21.0542 14.6469 20.9677 16.3909C20.8896 17.9634 20.8896 17.9718 19.3034 17.9718C17.1188 17.9718 14.9327 17.9718 12.748 17.9718C11.9222 17.9718 11.6585 17.7133 11.6697 16.8729C11.6934 15.1177 11.0921 13.6983 9.51011 12.8228C6.98226 11.4245 3.84338 13.1137 3.55879 16.0156C3.45695 17.0528 3.29234 17.2003 2.24186 17.2017C1.87496 17.2017 1.50806 17.2088 1.14116 17.2003C0.48827 17.1863 0.195308 16.9038 0.193913 16.2588C0.188332 14.3461 0.186937 12.4349 0.193913 10.5223C0.196703 9.93067 0.48548 9.63977 1.07001 9.60604C1.29322 9.59339 1.51643 9.60323 1.73964 9.60323C1.94471 9.60323 2.14978 9.60323 2.37578 9.60323C2.83057 7.9014 3.27839 6.2319 3.7248 4.56099C3.98149 3.60116 4.234 2.63993 4.49488 1.6801C4.66089 1.06036 4.86875 0.897348 5.50908 0.897348C10.103 0.894537 14.6969 0.900158 19.2909 0.888916C19.754 0.888916 20.0679 1.06598 20.3427 1.42574C21.7183 3.21751 23.1022 5.00225 24.4986 6.77716C24.6451 6.96266 24.8767 7.12427 25.0999 7.19594C26.813 7.74963 28.5289 8.29348 30.2546 8.80361C30.7917 8.96241 31.093 9.24207 31.2074 9.80278C31.3748 10.6193 31.6008 11.4231 31.8185 12.3014V12.3ZM16.8997 8.95679C18.3018 8.95679 19.7038 8.95398 21.1044 8.95819C21.4881 8.95819 21.8466 8.91463 22.0391 8.52114C22.2275 8.13468 22.0712 7.81849 21.8313 7.50792C20.9245 6.32886 20.0219 5.14559 19.1304 3.9553C18.8486 3.57727 18.5138 3.40442 18.0353 3.40863C16.2831 3.4269 14.5309 3.41425 12.7787 3.41706C11.9808 3.41706 11.7199 3.67705 11.7157 4.48369C11.7087 5.60653 11.7101 6.73078 11.7157 7.85362C11.7185 8.71508 11.9654 8.95538 12.8401 8.95819C14.1947 8.961 15.5479 8.95819 16.9025 8.95819L16.8997 8.95679ZM10.23 6.16725C10.23 5.55735 10.2411 4.94885 10.2272 4.33895C10.2132 3.71921 9.91746 3.4255 9.31061 3.41706C8.56286 3.40723 7.81372 3.41988 7.06597 3.41285C6.58049 3.40723 6.27915 3.6377 6.16476 4.10285C5.85645 5.34515 5.54675 6.58744 5.25937 7.83395C5.09335 8.55206 5.40724 8.94133 6.14941 8.95117C7.19989 8.96522 8.25037 8.96522 9.30085 8.95117C9.94397 8.94273 10.2188 8.65043 10.23 7.99415C10.2397 7.38565 10.2327 6.77575 10.2314 6.16585L10.23 6.16725Z" fill="white" />
                                            <Path d="M39.2095 10.9805C39.2095 9.82389 39.2039 8.66732 39.2095 7.51075C39.2137 6.7575 39.4718 6.50595 40.2251 6.50455C41.4695 6.50174 42.7125 6.50174 43.9569 6.50455C44.646 6.50595 44.8776 6.69427 44.9906 7.366C45.3017 9.20134 45.6309 11.0325 45.9016 12.8748C45.9909 13.4875 45.9462 14.1269 45.9169 14.7509C45.896 15.2062 45.5919 15.476 45.1217 15.4788C43.4156 15.4901 41.708 15.4915 40.0019 15.4788C39.4787 15.4746 39.2179 15.1739 39.2123 14.5977C39.1997 13.3934 39.2081 12.1876 39.2081 10.9833L39.2095 10.9805ZM44.3475 13.9007C44.4368 13.4889 44.3824 13.2008 44.0085 12.9423C43.0375 12.2705 42.1014 11.5454 41.15 10.8441C41.044 10.7654 40.9268 10.7008 40.7929 10.6151V13.8993H44.3489L44.3475 13.9007Z" fill="white" />
                                            <Path d="M13.0089 23.5327C12.9964 24.2733 12.3937 24.8565 11.6515 24.8467C10.9107 24.8383 10.3276 24.2368 10.3388 23.492C10.3499 22.7542 10.961 22.1555 11.692 22.1682C12.423 22.1808 13.0215 22.8006 13.0089 23.5327Z" fill="white" />
                                            <Path d="M40.9742 23.5214C40.9714 24.2774 40.3827 24.8564 39.628 24.848C38.9095 24.8395 38.3194 24.2507 38.3069 23.5298C38.2957 22.8032 38.9151 22.1708 39.6434 22.1694C40.3799 22.1666 40.977 22.7737 40.9742 23.5228V23.5214Z" fill="white" />
                                            <Path d="M7.60864 15.2611C8.24479 15.2695 8.74562 15.7979 8.72888 16.443C8.71213 17.0557 8.19596 17.5728 7.59469 17.5756C6.98924 17.5784 6.4354 17.0191 6.43819 16.4064C6.44098 15.7782 6.97808 15.2527 7.60864 15.2611Z" fill="white" />
                                            <Path d="M23.8918 16.3404C23.935 15.6925 24.4707 15.2231 25.1138 15.2681C25.7277 15.3117 26.2062 15.8513 26.1741 16.4626C26.1392 17.0936 25.57 17.6164 24.9687 17.57C24.3326 17.5208 23.8485 16.9685 23.8918 16.3404Z" fill="white" />
                                        </G>
                                        <Defs>
                                            <ClipPath id="clip0_18_52">
                                                <Rect width="49" height="27.2222" fill="white" transform="translate(0 0.888916)" />
                                            </ClipPath>
                                        </Defs>
                                    </Svg>
                                    <View>
                                        <Text style={styles.texoExternos}>
                                            TRABAJOS
                                        </Text>

                                        <Text style={styles.texoExternos}>
                                            EXTERNOS
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.circuloDos}>
                        <TouchableOpacity onPress={() => navigation.navigate("Observations", { row: row })}>
                            <View style={styles.contenedorAzul}>
                                <Svg width="50" height="45" viewBox="0 0 38 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G clip-path="url(#clip0_18_40)">
                                        <Path d="M0 11.0875C1.00442 10.1043 1.86996 9.23688 2.75812 8.3919C5.03502 6.21039 7.4088 4.14454 10.1572 2.55741C16.3743 -1.03454 22.5494 -0.748594 28.6566 2.8305C31.9347 4.75177 34.625 7.36701 37.1474 10.1654C37.4316 10.4802 37.7093 10.7983 38.0032 11.1324C34.8705 14.2971 31.7732 17.4457 27.8363 19.579C21.0928 23.232 14.5431 22.7886 8.25497 18.4673C5.65834 16.6842 3.48479 14.4192 1.27571 12.1991C0.897841 11.82 0.465069 11.4891 0.00322964 11.0907L0 11.0875ZM19.042 3.16142C14.7078 3.16784 11.1681 6.6891 11.1649 11.0007C11.1617 15.3348 14.7143 18.8657 19.0711 18.8593C23.4052 18.8529 26.9449 15.3284 26.9482 11.0168C26.9482 6.68268 23.402 3.15499 19.0388 3.1582L19.042 3.16142Z" fill="white" />
                                        <Path d="M18.9806 6.35166C18.2475 7.82956 18.2895 9.25285 19.4554 10.4769C20.6859 11.7653 22.1651 11.8585 23.7379 11.097C23.8412 13.2849 21.9034 15.6946 19.1583 15.7363C16.3775 15.7781 14.1717 13.5291 14.3332 10.7468C14.5076 7.7878 17.1333 6.20387 18.9774 6.34845L18.9806 6.35166Z" fill="white" />
                                    </G>
                                    <Defs>
                                        <ClipPath id="clip0_18_40">
                                            <Rect width="38" height="22.04" fill="white" />
                                        </ClipPath>
                                    </Defs>
                                </Svg>
                                <Text style={styles.textoObservaciones}>
                                    OBSERVACIONES
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("Advices", { row: row })}>
                            <View style={styles.contenedorAzul}>
                                <Svg width="40" height="40" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M16.9341 0C21.9818 0.155009 26.6133 2.13845 30.0361 6.55565C33.8061 11.4186 33.987 18.1542 30.5393 23.2491C30.355 23.5218 30.3256 23.7424 30.4285 24.0581C31.2042 26.4421 31.9596 28.8328 32.716 31.2236C32.9863 32.0779 32.6448 32.8371 31.86 32.9819C31.531 33.043 31.1228 32.957 30.8175 32.8054C28.5209 31.666 26.2379 30.4995 23.9606 29.3228C23.6214 29.1474 23.3477 29.1304 22.9802 29.2639C16.7079 31.528 10.8268 30.8072 5.56544 26.6446C1.71634 23.5965 -0.217254 19.4995 0.0190745 14.5494C0.242964 9.84252 2.45925 6.13927 6.20431 3.35137C9.24379 1.08846 12.7073 0.0565727 16.9341 0ZM12.5965 15.2645C12.601 14.5777 12.0334 13.9984 11.347 13.9882C10.6618 13.978 10.076 14.5426 10.0613 15.2282C10.0455 15.9297 10.6312 16.5283 11.3323 16.526C12.0175 16.5249 12.5931 15.9512 12.5976 15.2645H12.5965ZM16.4015 16.526C17.0867 16.5294 17.6657 15.9592 17.6747 15.2735C17.6838 14.5878 17.1195 14.0029 16.4331 13.9882C15.7321 13.9735 15.135 14.5596 15.1384 15.2622C15.1418 15.9478 15.7151 16.5238 16.4003 16.5272L16.4015 16.526ZM22.7541 15.2633C22.7586 14.5777 22.1898 13.9972 21.5035 13.9882C20.8182 13.9791 20.2336 14.5437 20.2189 15.2294C20.2042 15.9309 20.7899 16.5283 21.491 16.526C22.1763 16.5238 22.7507 15.9501 22.7552 15.2633H22.7541Z" fill="white" />
                                </Svg>
                                <Text style={styles.textoRecomendaciones}>
                                    RECOMENDACIONES
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    // circuloDosNuevo: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // },
    ContenedorDosEstado: {
        flex: 1,
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    centroCirculoTexto: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: -35
    },
    circulo: {
        backgroundColor: '#2B83F2',
        borderRadius: 100,
        width: 20,
        height: 20,
        marginTop: 35,
        zIndex: 10
    },
    circuloGris: {
        backgroundColor: '#BBBABA',
        borderColor: '#BBBABA',
        borderRadius: 100,
        width: 20,
        height: 20,
        marginTop: 34,
        zIndex: 10
    },
    circuloDos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop: 25
    },
    letraAzul: {
        color: '#2B83F2',
        fontSize: 12,
        fontWeight: '500',
        width: 80,
        // height:35
        // marginHorizontal: 12
    },
    letraGris: {
        color: '#BBBABA',
        fontSize: 12,
        fontWeight: '500',
        width: 80,
        // height:35
        // marginHorizontal: 12
    },
    barraLargaGris: {
        backgroundColor: '#BBBABA',
        width: 85,
        // marginHorizontal: -9,
        height: 5,
        marginTop: 42,
        zIndex: 1
    },
    barraLargaAzul: {
        backgroundColor: '#2B83F2',
        width: 85,
        // marginHorizontal: -9,
        height: 5,
        marginTop: 42,
        zIndex: 1
    },
    finalizacion: {
        marginTop: 15
    },
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        alignItems: 'center',
    },
    contenedorHeader: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    atras: {
        marginRight: 150
    },
    campana: {
        width: 23,
        height: 27,
        marginLeft: 150,
    },
    contenedorDatos: {
        backgroundColor: '#EAEBEC',
        borderRadius: 40,
        width: 340,
        height: 650,
        marginTop: 25,
        marginHorizontal: 37
    },
    containerCliente: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 420,
        marginTop: 25,
        marginBottom: 30
    },
    logoAuto: {
        width: 38,
        height: 36,
    },
    contenedorAuto: {
        backgroundColor: '#FDFDFD',
        width: 52,
        height: 52,
        borderRadius: 100,
        marginTop: 28,
        marginRight: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 17
    },
    TituloAutoFinalizacion: {
        fontSize: 22,
        marginLeft: 28,
        color: '#000000',
        fontWeight: '600'
    },
    Cliente: {
        fontSize: 22,
        marginTop: 5,
        color: '#000000',
        marginLeft: -140,
        color: '#000000',
        fontWeight: '600'
    },
    TituloAuto: {
        fontSize: 22,
        marginTop: 38,
        marginLeft: 50,
        color: '#000000',
        fontWeight: '600'
    },
    estadoOt: {
        fontSize: 22,
        marginTop: 38,
        marginLeft: -220,
        color: '#000000',
        fontWeight: '600'
    },
    ContenedorDos: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    ContenedorDosAzul: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 8
    },
    OT: {
        fontSize: 28,
        fontWeight: '600'
    },
    marcaauto: {
        fontSize: 18,
        fontWeight: '500',
    },
    placaVIN: {
        color: '#B6B6B6',
        fontSize: 12,
        fontWeight: '400'
    },
    contenedorCaracteristicas: {
        marginTop: 28,
        marginLeft: 28,
        marginHorizontal: 17
    },
    imagenAutoGrande: {
        width: 290,
        height: 195,
    },
    contenedorImagenGrande: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoTresNegro: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 5
    },
    contenedorTresClaro: {
        fontSize: 14,
        fontWeight: '500',
        color: '#B6B6B6',
        marginLeft: 5,
    },
    contenedorBlanco: {
        backgroundColor: '#FFFFFF',
        width: 100,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
    },
    contenedorTransparente: {
        width: 245,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#BBBABA',
        borderWidth: 1,
        marginHorizontal: 5
    },
    contenedorTransparenteTelefono: {
        width: 93,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#BBBABA',
        borderWidth: 1,
        marginHorizontal: 5
    },
    contenedorTransparenteLargo: {
        width: 350,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#BBBABA',
        borderWidth: 1
    },
    contenedorBlancoLargo: {
        backgroundColor: '#FFFFFF',
        width: 205,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
    },
    contenedorBlancoLargoKilo: {
        backgroundColor: '#FFFFFF',
        width: 315,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
    },
    porcentaje: {
        fontSize: 45,
        color: '#2B83F2',
        marginTop: 15,
        fontWeight: '600',
        paddingHorizontal: 65
    },
    imagenGigante: {
        width: 330,
        height: 235,
        zIndex: 10,
        marginLeft: 80
    },
    contenedorImagenGigante: {
        width: '100%',
        marginLeft: 60,
    },
    completadoPorcentaje: {
        marginTop: 24,
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: -190,
        padding: 5
    },
    verTodo: {
        color: '#FFFF',
        fontSize: 20,
        fontWeight: '400',
    },
    contenedorVerTodo: {
        width: 100,
        height: 40,
        backgroundColor: '#2B83F2',
        marginRight: 15,
        borderRadius: 8,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 235
    },
    contenedorAzul: {
        width: 160,
        height: 95,
        backgroundColor: '#2B83F2',
        marginRight: 15,
        borderRadius: 12,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    partes: {
        width: 61,
        height: 60
    },
    textoPartes: {
        color: '#FFFF',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 12
    },
    externos: {
        width: 68,
        height: 39
    },
    texoExternos: {
        color: '#FFFF',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 12
    },
    observaciones: {
        width: 67,
        height: 40
    },
    textoObservaciones: {
        color: '#FFFF',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 5
    },
    recomendaciones: {
        width: 42,
        height: 40
    },
    textoRecomendaciones: {
        color: '#FFFF',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 12
    },
});

