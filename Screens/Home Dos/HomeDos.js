import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Context as AuthContext } from '../../context/AuthContext'
import { useNavigation } from '@react-navigation/native';
import Azul from './Azul';
import Verde from './Verde';
import Rojo from './Rojo';
import Reservas from './Reservas';

import Svg, {
    G,
    Path,
    Rect,
    Defs,
    ClipPath,
} from 'react-native-svg';

function HomeDos() {
    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation();
    return (
        <View
            style={styles.containerGobal}
        >
            <StatusBar translucent backgroundColor='#F6F6FA' />
            <View
                style={styles.contenedorLogo}
            >
                <TouchableOpacity
                    onPress={() => signOut()}
                >
                    <Svg width="152" height="27" viewBox="0 0 152 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G clip-path="url(#clip0_21_62)">
                            <Path d="M6.46518 4.56152L10.8292 19.1075L15.1283 4.56152H21.5624L13.3697 26.7791H8.28428L-0.00471497 4.56152H6.46518Z" fill="#2B83F2" />
                            <Path d="M46.5774 26.7791V4.56152H52.6978V21.4519H62.8037V26.7701L46.5774 26.7791Z" fill="#2B83F2" />
                            <Path d="M63.431 15.4881C63.4411 12.6852 64.518 9.99059 66.4441 7.94825C67.5174 6.8137 68.8173 5.91583 70.26 5.31247C71.7027 4.70911 73.2562 4.41366 74.8205 4.44515C76.9756 4.44515 78.8425 4.89169 80.4212 5.78477C81.9184 6.58777 83.1461 7.81131 83.9518 9.3035L79.2764 12.6191C79.0923 12.1215 78.8096 11.6659 78.4453 11.2794C78.1129 10.9362 77.7252 10.651 77.2982 10.4355C76.8876 10.2264 76.4494 10.0761 75.9966 9.98894C75.5667 9.90789 75.1303 9.86604 74.6928 9.86391C73.9486 9.83884 73.2094 9.99514 72.5395 10.3192C71.8696 10.6433 71.2891 11.1254 70.8485 11.7237C70.4348 12.2902 70.1267 12.9262 69.939 13.6014C69.743 14.2779 69.6428 14.9783 69.641 15.6823C69.6379 16.4356 69.7543 17.1846 69.986 17.9016C70.2016 18.5838 70.5419 19.2204 70.9896 19.7793C71.4292 20.3223 71.9809 20.7647 72.6071 21.0765C73.274 21.4073 74.0107 21.5742 74.7555 21.5632C75.1888 21.5621 75.6207 21.5142 76.0437 21.4203C76.4873 21.3249 76.915 21.167 77.3139 20.9515C77.7239 20.7312 78.0954 20.4462 78.4139 20.1075C78.7515 19.7404 79.0127 19.3101 79.1823 18.8416L84.1714 21.8133C83.8273 22.6354 83.3128 23.3757 82.6614 23.9857C81.972 24.6397 81.1891 25.1882 80.3383 25.6133C79.4508 26.0574 78.5128 26.3932 77.5447 26.6136C76.5903 26.8391 75.6131 26.9544 74.6323 26.9574C73.0655 26.9762 71.515 26.6395 70.098 25.9728C68.7573 25.3391 67.5529 24.4519 66.5517 23.3606C65.561 22.2825 64.7787 21.0312 64.2442 19.6699C63.7104 18.3397 63.4345 16.9207 63.431 15.4881Z" fill="#2B83F2" />
                            <Path d="M91.7726 4.56152H97.3598L105.08 26.7702H98.8653L97.5211 22.4231L94.555 13.0458L91.5889 22.4231L90.2694 26.7702H84.019L91.7726 4.56152Z" fill="#2B83F2" />
                            <Path d="M113.051 15.8634V26.7791H106.93V4.56152H111.702L120.647 15.8545V4.56152H126.768V26.7701H121.902L113.051 15.8634Z" fill="#2B83F2" />
                            <Path d="M40.6631 18.0313C40.401 17.482 40.4615 17.1136 40.7998 16.6269C45.3229 10.094 41.0238 0.801535 33.1313 0.0245564C32.9073 0.00446212 32.6833 0.0111635 32.2532 0C32.9432 1.42669 33.5839 2.72835 34.2067 4.03894C34.8041 5.30265 35.3955 6.56784 35.981 7.83453C36.4873 8.93078 36.2856 9.79707 35.2193 10.3463C33.6108 11.1739 31.9679 11.9345 30.2907 12.6281C29.2109 13.0747 28.3954 12.6527 27.8846 11.5631C26.8093 9.26643 25.737 6.96749 24.6676 4.66633C24.5354 4.38501 24.392 4.10817 24.2061 3.73084C23.3519 4.79596 22.7175 6.01898 22.3396 7.32947C21.9616 8.63997 21.8475 10.012 22.0039 11.3667C22.249 13.8255 23.3438 16.1231 25.1011 17.8663C26.8583 19.6094 29.1688 20.6898 31.6371 20.9226C31.8638 20.9248 32.0843 20.9971 32.2681 21.1295C32.4518 21.2618 32.5899 21.4478 32.6631 21.6616C33.9289 24.4413 33.5301 24.1712 34.8451 26.9911C35.1095 26.8839 45.1504 26.7678 45.3744 26.6763" fill="#2B83F2" />
                            <Path d="M151.2 11.6079C150.675 10.268 149.904 9.03754 148.926 7.97975C147.926 6.90395 146.724 6.03327 145.389 5.41662C143.943 4.75489 142.367 4.42308 140.776 4.44539C139.204 4.42755 137.645 4.74261 136.204 5.36973C134.853 5.95532 133.627 6.79356 132.593 7.83909C131.58 8.86733 130.777 10.0802 130.225 11.4114C129.663 12.7494 129.374 14.1854 129.376 15.6357C129.376 17.072 129.653 18.4948 130.193 19.8264C130.723 21.1626 131.5 22.3879 132.483 23.4389C133.487 24.5116 134.691 25.3797 136.027 25.9954C137.473 26.6563 139.049 26.9874 140.64 26.9644C142.211 26.9812 143.768 26.6614 145.205 26.0266C146.548 25.4317 147.764 24.5876 148.79 23.5394C149.794 22.5078 150.593 21.2956 151.144 19.9671C151.707 18.6358 151.996 17.2053 151.993 15.7607C151.993 14.3391 151.724 12.9303 151.2 11.6079ZM144.255 21.856H137.1L133.516 15.6759L137.1 9.49353H144.269L147.853 15.6759L144.255 21.856Z" fill="#2B83F2" />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_21_62">
                                <Rect width="152" height="27" fill="white" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                </TouchableOpacity>


                <TouchableOpacity style={styles.campana}>
                    <Svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G clip-path="url(#clip0_21_150)">
                            <Path d="M13.3106 0C13.3798 0.0364011 13.4474 0.0752353 13.5182 0.107592C14.0011 0.334897 14.2764 0.706997 14.2951 1.24007C14.309 1.64453 14.3065 2.04898 14.2951 2.45344C14.2951 2.62574 14.3432 2.69611 14.5248 2.73008C18.3107 3.41362 21.1325 6.12025 21.9151 9.855C22.0478 10.4908 22.0779 11.1541 22.0942 11.8069C22.13 13.1675 22.0665 14.5329 22.152 15.8903C22.297 18.2111 23.3011 20.1476 25.0406 21.6991C25.5422 22.1464 25.9274 22.6463 25.9877 23.3315C26.1057 24.6929 25.1546 25.7647 23.7734 25.8391C23.692 25.8432 23.6105 25.8391 23.5291 25.8391C16.511 25.8391 9.49284 25.8391 2.47471 25.8391C1.66523 25.8391 0.979545 25.5916 0.4722 24.9445C-0.283524 23.9802 -0.126353 22.6569 0.856577 21.801C1.70999 21.0653 2.41543 20.1758 2.93563 19.1794C3.58496 17.919 3.91825 16.5214 3.90716 15.1057C3.90716 13.8648 3.89332 12.6231 3.91612 11.3847C3.99756 7.13704 7.20938 3.43949 11.4237 2.74221C11.668 2.70257 11.7291 2.61604 11.7136 2.3952C11.6973 2.15253 11.7299 1.90985 11.7063 1.66718C11.6297 0.866355 11.9335 0.300109 12.7006 0.00161941L13.3106 0Z" fill="#2B83F2" />
                            <Path d="M17.7489 27.1416C17.5046 28.8241 15.788 30.9702 13.0542 31.0001C10.4213 31.0284 8.54994 29.0037 8.26003 27.1416H17.7489Z" fill="#2B83F2" />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_21_150">
                                <Rect width="26" height="31" fill="white" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View
                    style={styles.busqueda}
                >
                    <View
                        style={styles.vistaInput}
                    >
                        <TextInput
                            style={styles.input}
                            placeholder="Placa/VIN"
                        />
                        <TouchableOpacity style={styles.lupa}>
                            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M12.9726 15.3224C12.356 15.6111 11.7938 15.9248 11.1967 16.1462C6.25046 17.9784 0.853281 14.7651 0.0899118 9.54661C-0.218873 7.44866 0.28576 5.3122 1.50105 3.57233C2.71635 1.83247 4.5509 0.620053 6.63109 0.182001C11.1619 -0.789648 15.6844 2.24259 16.5194 6.81628C16.9028 8.9192 16.5257 10.8847 15.4123 12.7059C15.3044 12.8821 15.3197 12.9731 15.4631 13.1146C16.8015 14.4402 18.1343 15.7707 19.4615 17.106C20.25 17.8993 20.1574 19.0875 19.2737 19.7045C18.6049 20.1702 17.7323 20.0814 17.1165 19.4671C16.0935 18.4539 15.0743 17.4359 14.0588 16.4134C13.683 16.0407 13.3121 15.6652 12.9726 15.3224ZM14.1653 8.3376C14.1746 7.56821 14.0308 6.80462 13.7422 6.09102C13.4536 5.37743 13.026 4.728 12.4841 4.18033C11.9422 3.63265 11.2968 3.19761 10.5852 2.90038C9.87362 2.60315 9.10997 2.44963 8.33849 2.44871C7.567 2.44779 6.80299 2.59949 6.09069 2.89503C5.37838 3.19057 4.7319 3.62407 4.1887 4.17046C3.64549 4.71684 3.21633 5.36524 2.92606 6.07815C2.63578 6.79106 2.49017 7.55431 2.49763 8.32373C2.49206 11.5454 5.11479 14.1703 8.33736 14.1675C11.5488 14.1647 14.1653 11.5468 14.1653 8.3376Z" fill="#B6B6B6" />
                            </Svg>
                        </TouchableOpacity>

                    </View>


                    <View
                        style={styles.seleccionar}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Orders")}
                            style={styles.botonseleccionar}
                        >
                            <Text
                                style={styles.textoSeleccionar}
                            >
                                Seleccionar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text
                    style={styles.TituloAuto}
                >
                    ESTADO OTS
                </Text>

                <View
                    style={styles.margin}
                >
                    <View
                        style={styles.ContenedorDos}
                    >
                        <View
                            style={styles.contenedorAzul}
                        >
                            <View
                                style={styles.circuloCentroAzul}
                            >
                                <Svg width="32" height="25" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G clip-path="url(#clip0_22_192)">
                                        <Path d="M24 22.4307C23.8141 22.8749 23.4916 23.0005 23.0565 22.9998C17.0889 22.9896 11.122 22.993 5.15435 22.993C4.51139 22.993 4.26785 22.7262 4.26723 22.0199C4.26723 21.332 4.26723 20.6442 4.26723 19.927H4.55897C9.33894 19.927 14.1195 19.9222 18.8995 19.9318C19.5969 19.9331 20.1729 19.6868 20.6712 19.1607C22.0379 17.7174 23.034 16.0033 23.8091 14.1239C23.8692 13.9786 23.9361 13.8367 24 13.6934V22.4307Z" fill="white" />
                                        <Path d="M24 4.5987H4.28663C4.27912 4.52978 4.26785 4.47382 4.26785 4.41718C4.2666 3.72729 4.26472 3.03807 4.26785 2.34817C4.27035 1.84798 4.55584 1.53476 5.01349 1.5334C6.07528 1.53067 7.13771 1.53272 8.1995 1.53272C8.28402 1.53272 8.36917 1.53272 8.48499 1.53272C8.48499 1.28228 8.48311 1.04754 8.48499 0.812793C8.49125 0.335119 8.78174 6.52125e-05 9.18805 6.52125e-05C9.59436 6.52125e-05 9.88486 0.334437 9.89112 0.812793C9.89425 1.04139 9.89112 1.27 9.89112 1.51566H13.4064C13.4064 1.27614 13.4039 1.04071 13.4064 0.804605C13.4133 0.331025 13.7101 -0.00402914 14.117 6.52125e-05C14.5146 0.00415956 14.8044 0.333072 14.8126 0.795051C14.817 1.03184 14.8132 1.26795 14.8132 1.51839H18.3755C18.3755 1.29115 18.3736 1.05709 18.3755 0.822347C18.3792 0.340579 18.6635 0.00484195 19.0685 6.52125e-05C19.4849 -0.00539392 19.776 0.33239 19.781 0.827806C19.7829 1.0489 19.781 1.27 19.781 1.53272H20.0333C21.0488 1.53272 22.0642 1.54841 23.0791 1.52521C23.5104 1.51566 23.8209 1.65828 23.9994 2.09432V4.59802L24 4.5987Z" fill="white" />
                                        <Path d="M23.9693 6.1499C23.9242 7.90911 23.692 9.61236 23.2431 11.2774C22.6026 13.6501 21.5997 15.8119 20.059 17.6516C20.0539 17.6578 20.0477 17.6639 20.0433 17.6707C19.6595 18.2139 19.1818 18.4145 18.5276 18.4111C12.6314 18.3825 6.73452 18.3934 0.838292 18.3968C0.527141 18.3968 0.266074 18.3163 0.100168 18.0099C-0.0663641 17.7021 -0.0244181 17.3391 0.222876 17.075C2.28825 14.8654 3.397 12.1229 3.93165 9.076C4.08817 8.18548 4.13199 7.27107 4.22778 6.36758C4.23467 6.30071 4.2403 6.23384 4.24844 6.1499H23.9693Z" fill="white" />
                                    </G>
                                    <Defs>
                                        <ClipPath id="clip0_22_192">
                                            <Rect width="24" height="23" fill="white" />
                                        </ClipPath>
                                    </Defs>
                                </Svg>

                            </View>
                            <Text
                                style={styles.NumeroColorAzul}
                            >
                                <Azul />
                            </Text>

                            <Text
                                style={styles.TextoColorAzul}
                            >
                                Reservas
                            </Text>
                            <Text
                                style={styles.TextoColorAzul}
                            >
                                para hoy
                            </Text>
                        </View>

                        <View
                            style={styles.contenedorVerde}
                        >
                            <View
                                style={styles.circuloCentroVerde}
                            >
                                <Svg width="32" height="25" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M25.5364 1.11263C26.6401 1.58657 27.4608 2.3271 27.8135 3.43954C28.2536 4.83504 27.9078 6.07255 26.8496 7.12246C24.3839 9.57115 21.9077 12.0166 19.4385 14.462C17.6573 16.2261 15.8238 17.9474 14.109 19.7642C12.5129 21.4592 10.1624 21.7554 8.31841 20.3401C5.96446 18.0494 3.60702 15.762 1.25657 13.468C-0.150905 12.1054 -0.391887 10.315 0.613952 8.82733C1.92713 6.88549 4.81543 6.54978 6.55469 8.16908C7.90629 9.42634 9.21947 10.7198 10.5257 12.0198C10.826 12.3193 10.9727 12.2766 11.2451 12.0001C14.4862 8.77467 17.7586 5.57886 20.9822 2.34027C22.2674 1.05009 23.7308 0.576154 25.5364 1.11592V1.11263Z" fill="#FDFEFE" />
                                </Svg>

                            </View>
                            <Text
                                style={styles.NumeroColorVerde}
                            >
                                <Verde />
                            </Text>

                            <Text
                                style={styles.TextoColorVerde}
                            >
                                Reservas
                            </Text>
                            <Text
                                style={styles.TextoColorVerde}
                            >
                                confirmadas
                            </Text>
                        </View>

                        <View
                            style={styles.contenedorRojo}
                        >
                            <View
                                style={styles.circuloCentroRojo}
                            >
                               <Svg width="45" height="25" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M10.5563 4.70469C11.7793 3.53849 12.9766 2.40289 14.1641 1.26117C14.8207 0.63062 15.5867 0.232701 16.52 0.0765944C18.4832 -0.250923 20.588 1.16628 20.9228 3.06098C21.1641 4.42003 20.7361 5.55563 19.7287 6.51675C18.6216 7.56971 17.5113 8.62572 16.4041 9.67868C16.3011 9.77969 16.2014 9.88376 16.0759 10.0062C16.211 10.1409 16.3205 10.2541 16.4331 10.3643C17.6143 11.4938 18.834 12.5927 19.9733 13.7619C21.6211 15.4546 21.2253 18.1268 19.188 19.3818C17.7205 20.2878 15.7894 20.1776 14.4988 19.0328C13.2726 17.9462 12.1108 16.7922 10.9264 15.6658C10.8106 15.5556 10.7172 15.424 10.5917 15.274C10.4018 15.4424 10.2731 15.5556 10.1476 15.6719C9.01793 16.7433 7.90759 17.8299 6.76184 18.8859C4.52184 20.9428 0.914024 20.0215 0.138392 17.1932C-0.247815 15.7852 0.157702 14.5578 1.21977 13.5293C2.33655 12.4488 3.46299 11.3744 4.60552 10.3153C4.86943 10.0705 4.85655 9.92967 4.59908 9.69092C3.45012 8.62266 2.30437 7.54828 1.18759 6.44635C-0.975171 4.3129 -0.0225276 0.887736 2.94161 0.140874C4.42207 -0.232558 5.71586 0.146995 6.79724 1.15404C7.91724 2.19781 9.01471 3.25994 10.1251 4.3129C10.2506 4.43227 10.3825 4.54553 10.5563 4.70469Z" fill="white"/>
</Svg>
                            </View>
                            <Text
                                style={styles.NumeroColorRojo}
                            >
                                <Rojo />
                            </Text>

                            <Text
                                style={styles.TextoColorRojo}
                            >
                                Reservas
                            </Text>
                            <Text
                                style={styles.TextoColorRojo}
                            >
                                canceladas
                            </Text>
                        </View>


                    </View>
                </View>

                <Text style={styles.TituloAuto}>
                    RESERVAS DEL DÍA
                </Text>

                {/* <View
                        styles={styles.derecha}
                    >
                        <View
                            style={styles.ContenedorReservaAzul}
                        >
                            <View
                                style={styles.ContenedorReservaBlanco}
                            >
                                <View
                                    style={styles.ContenedorDosReserva}
                                >

                                    <View
                                        style={styles.contenedorAuto}
                                    >
                                        <Image
                                            style={styles.logoAuto}
                                            source={require("../../assets/logoAuto.png")}
                                        />
                                    </View>

                                    <View
                                        style= {styles.contenedorDatosUno}
                                    >
                                        <Text
                                            style={styles.titulo}
                                        >
                                            OT 523673
                                        </Text>

                                        <Text
                                            style={styles.subtitulo}
                                        >
                                            Modelo
                                        </Text>

                                        <Text
                                            style= {styles.datos}
                                        >
                                            Mercedes Benz
                                        </Text>

                                        <Text
                                            style={styles.subtitulo}
                                        >
                                            Cliente
                                        </Text>
                                        
                                        <Text
                                            style= {styles.datos}
                                        >
                                            Pericle Robles
                                        </Text>
                                    </View>

                                    <View
                                        style={styles.contenedorDatosDos}
                                    >
                                        <Text
                                            style={styles.subtituloHora}
                                        >
                                            Hora
                                        </Text>

                                        <View
                                            style={styles.ContenedorDosHora}
                                        >
                                            <Ionicons name="md-time-outline" size={18} color="#B6B6B6" />

                                            <Text
                                                style={styles.datosHora}
                                            >
                                                15:40, 05 de Agosto
                                            </Text>
                                        </View>

                                        <View
                                            style={styles.ContenedorDosHora}
                                        >
                                            <Text
                                                style={styles.subtituloHora}
                                            >
                                                Estado
                                            </Text>

                                            <View
                                                style={styles.contenedorEstado}
                                            >
                                                <Text
                                                   style={styles.TextoColorAzul} 
                                                >
                                                    Hoy
                                                </Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity>
                                            <Text
                                                style={styles.verDetalles} 
                                            >
                                                Ver detalles
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <View
                            style={styles.ContenedorReservaVerde}
                        >
                            <View
                                style={styles.ContenedorReservaBlancoVerde}
                            >
                                <View
                                    style={styles.ContenedorDosReserva}
                                >

                                    <View
                                        style={styles.contenedorAuto}
                                    >
                                        <Image
                                            style={styles.logoAuto}
                                            source={require("../../assets/logoAuto.png")}
                                        />
                                    </View>

                                    <View
                                        style= {styles.contenedorDatosUno}
                                    >
                                        <Text
                                            style={styles.titulo}
                                        >
                                            OT 523673
                                        </Text>

                                        <Text
                                            style={styles.subtitulo}
                                        >
                                            Modelo
                                        </Text>

                                        <Text
                                            style= {styles.datos}
                                        >
                                            Mercedes Benz
                                        </Text>

                                        <Text
                                            style={styles.subtitulo}
                                        >
                                            Cliente
                                        </Text>
                                        
                                        <Text
                                            style= {styles.datos}
                                        >
                                            Pericle Robles
                                        </Text>
                                    </View>

                                    <View
                                        style={styles.contenedorDatosDos}
                                    >
                                        <Text
                                            style={styles.subtituloHora}
                                        >
                                            Hora
                                        </Text>

                                        <View
                                            style={styles.ContenedorDosHora}
                                        >
                                            <Ionicons name="md-time-outline" size={18} color="#B6B6B6" />

                                            <Text
                                                style={styles.datosHora}
                                            >
                                                15:40, 05 de Agosto
                                            </Text>
                                        </View>

                                        <View
                                            style={styles.ContenedorDosHora}
                                        >
                                            <Text
                                                style={styles.subtituloHora}
                                            >
                                                Estado
                                            </Text>

                                            <View
                                                style={styles.contenedorEstadoVerde}
                                            >
                                                <Text
                                                   style={styles.TextoColorVerde} 
                                                >
                                                    Confirmado
                                                </Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity>
                                            <Text
                                                style={styles.verDetalles} 
                                            >
                                                Ver detalles
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <View
                            style={styles.ContenedorReservaRojo}
                        >
                            <View
                                style={styles.ContenedorReservaBlancoRojo}
                            >
                                <View
                                    style={styles.ContenedorDosReserva}
                                >

                                    <View
                                        style={styles.contenedorAuto}
                                    >
                                        <Image
                                            style={styles.logoAuto}
                                            source={require("../../assets/logoAuto.png")}
                                        />
                                    </View>

                                    <View
                                        style= {styles.contenedorDatosUno}
                                    >
                                        <Text
                                            style={styles.titulo}
                                        >
                                            OT 523673
                                        </Text>

                                        <Text
                                            style={styles.subtitulo}
                                        >
                                            Modelo
                                        </Text>

                                        <Text
                                            style= {styles.datos}
                                        >
                                            Mercedes Benz
                                        </Text>

                                        <Text
                                            style={styles.subtitulo}
                                        >
                                            Cliente
                                        </Text>
                                        
                                        <Text
                                            style= {styles.datos}
                                        >
                                            Pericle Robles
                                        </Text>
                                    </View>

                                    <View
                                        style={styles.contenedorDatosDos}
                                    >
                                        <Text
                                            style={styles.subtituloHora}
                                        >
                                            Hora
                                        </Text>

                                        <View
                                            style={styles.ContenedorDosHora}
                                        >
                                            <Ionicons name="md-time-outline" size={18} color="#B6B6B6" />

                                            <Text
                                                style={styles.datosHora}
                                            >
                                                15:40, 05 de Agosto
                                            </Text>
                                        </View>

                                        <View
                                            style={styles.ContenedorDosHora}
                                        >
                                            <Text
                                                style={styles.subtituloHora}
                                            >
                                                Estado
                                            </Text>

                                            <View
                                                style={styles.contenedorEstadoRojo}
                                            >
                                                <Text
                                                   style={styles.TextoColorRojo} 
                                                >
                                                    Cancelado
                                                </Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity>
                                            <Text
                                                style={styles.verDetalles} 
                                            >
                                                Ver detalles
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View> */}


                {/* <Reservas /> */}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    verDetalles: {
        color: '#2B83F2',
        marginTop: 8,
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 78,
    },
    contenedorEstado: {
        borderColor: '#2B83F2',
        borderWidth: 1,
        width: 85,
        height: 22,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorEstadoVerde: {
        borderColor: '#74C343',
        borderWidth: 1,
        width: 85,
        height: 22,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorEstadoRojo: {
        borderColor: '#EA3F3F',
        borderWidth: 1,
        width: 85,
        height: 22,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ContenedorDosHora: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    contenedorDatosDos: {
        marginTop: 27,
        marginLeft: -45
    },
    datosHora: {
        color: '#B6B6B6',
        fontWeight: '700',
    },
    datos: {
        color: '#B6B6B6',
        fontWeight: '700',
        marginLeft: -15
    },
    subtitulo: {
        color: '#000000',
        fontWeight: '700',
        marginLeft: -15
    },
    subtituloHora: {
        color: '#000000',
        fontWeight: '700',
        // marginLeft: -15
    },
    ContenedorDosReserva: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // marginLeft: 12
    },
    contenedorDatosUno: {
        marginTop: 8,
        marginLeft: -38
    },
    titulo: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '700',
        marginLeft: -15
    },
    ContenedorReservaBlanco: {
        backgroundColor: '#FFFF',
        width: 410,
        height: 125,
        borderRadius: 12,
        borderColor: '#2B83F2',
        borderWidth: 1,
        marginLeft: 20
    },
    ContenedorReservaBlancoVerde: {
        backgroundColor: '#FFFF',
        width: 410,
        height: 125,
        borderRadius: 12,
        borderColor: '#74C343',
        borderWidth: 1,
        marginLeft: 20
    },
    ContenedorReservaBlancoRojo: {
        backgroundColor: '#FFFF',
        width: 410,
        height: 125,
        borderRadius: 12,
        borderColor: '#EA3F3F',
        borderWidth: 1,
        marginLeft: 20
    },
    ContenedorReservaRojo: {
        backgroundColor: '#EA3F3F',
        width: 410,
        height: 125,
        borderRadius: 12,
        marginTop: 25,
        marginLeft: 16
    },
    ContenedorReservaVerde: {
        backgroundColor: '#74C343',
        width: 410,
        height: 125,
        borderRadius: 12,
        marginTop: 25,
        marginLeft: 16
    },
    ContenedorReservaAzul: {
        backgroundColor: '#2B83F2',
        width: 410,
        height: 125,
        borderRadius: 12,
        marginTop: 25,
        marginLeft: 16
    },
    derecha: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    logoAuto: {
        width: 38,
        height: 36,
    },
    contenedorAuto: {
        borderColor: '#BBBABA',
        borderWidth: 1,
        width: 60,
        height: 60,
        borderRadius: 12,
        marginTop: 28,
        marginLeft: -58,
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 17
    },
    TextoColorVerde: {
        color: '#60BB29',
        marginTop: -3,
        fontSize: 12,
        fontWeight: '500'
    },
    NumeroColorVerde: {
        color: '#60BB29',
        fontSize: 21,
        fontWeight: '700',
        paddingVertical: 5
    },
    TextoColorRojo: {
        color: '#DC2A2A',
        marginTop: -3,
        fontSize: 12,
        fontWeight: '500'
    },
    NumeroColorRojo: {
        color: '#DC2A2A',
        fontSize: 21,
        fontWeight: '700',
        paddingVertical: 5
    },
    TextoColorAzul: {
        color: '#2B83F2',
        marginTop: -3,
        fontSize: 12,
        fontWeight: '500'
    },
    NumeroColorAzul: {
        color: '#2B83F2',
        fontSize: 21,
        fontWeight: '700',
        paddingVertical: 5
    },
    ContenedorDos: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    circuloCentroVerde: {
        width: 55,
        height: 55,
        backgroundColor: '#60BB29',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circuloCentroRojo: {
        width: 55,
        height: 55,
        backgroundColor: '#DC2A2A',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circuloCentroAzul: {
        width: 55,
        height: 55,
        backgroundColor: '#2B83F2',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorVerde: {
        borderColor: '#60BB29',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 105,
        height: 150,
        justifyContent: 'center',
        marginHorizontal: 6,
        alignItems: 'center',
    },
    contenedorRojo: {
        borderColor: '#DC2A2A',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 105,
        height: 150,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorAzul: {
        borderColor: '#2B83F2',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 105,
        height: 150,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerGobal: {
        flex: 1,
        backgroundColor: '#F6F6FA',
        paddingTop: 5,
    },
    contenedorLogo: {
        // marginTop: 5,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logoAzul: {
        width: 135,
        height: 24
    },
    campana: {
        width: 28,
        height: 35,
        marginRight: 15
    },
    busqueda: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35
    },
    vistaInput: {
        fontSize: 16,
        borderRadius: 12,
        width: 245,
        height: 45,
        borderWidth: 1,
        borderColor: '#BBBABA',
        color: '#000000',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15
    },
    input: {
        fontSize: 16,
        borderRadius: 12,
        width: 200,
        height: 45,
        padding: 5,
        justifyContent: 'center'
    },
    lupa: {
        marginLeft: -105
    },
    seleccionar: {
        width: 120,
        height: 45,
        backgroundColor: '#2B83F2',
        marginRight: 15,
        borderRadius: 8,
    },
    textoSeleccionar: {
        color: '#FFFF',
        fontSize: 20,
        fontWeight: '400',
    },
    botonseleccionar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TituloAuto: {
        fontSize: 22,
        marginTop: 28,
        marginLeft: 18,
        color: '#000000',
        fontWeight: '600'
    },
    margin: {
        marginTop: 24
    },
});

export default HomeDos;