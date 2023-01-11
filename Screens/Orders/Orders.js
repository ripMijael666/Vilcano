import React from 'react';
import tailwind from 'twrnc';
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

import { useNavigation } from '@react-navigation/native';

function Orders() {
    const navigation = useNavigation();
    return (
        <View style={styles.containerGobal}>
            <View style={styles.contenedorLogo}>
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
                    Orders status
                </Text>
            </View>

            <View style={styles.containerOrders}>
                <View style={styles.blancoOrders}>
                    <View style={styles.typeStatus}>
                        <Text style={styles.textOrders}>Open</Text>
                        <Svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M11.0645 2.14816H8.61121C8.61121 1.06566 7.7311 0.185547 6.64859 0.185547C5.56609 0.185547 4.68598 1.06566 4.68598 2.14816H2.2327C1.42006 2.14816 0.760742 2.80748 0.760742 3.62013V14.4145C0.760742 15.2272 1.42006 15.8865 2.2327 15.8865H11.0645C11.8771 15.8865 12.5364 15.2272 12.5364 14.4145V3.62013C12.5364 2.80748 11.8771 2.14816 11.0645 2.14816ZM6.64859 1.41218C7.05645 1.41218 7.38457 1.74031 7.38457 2.14816C7.38457 2.55602 7.05645 2.88415 6.64859 2.88415C6.24074 2.88415 5.91261 2.55602 5.91261 2.14816C5.91261 1.74031 6.24074 1.41218 6.64859 1.41218ZM10.3653 8.52053L5.98008 12.869C5.83595 13.0131 5.60289 13.01 5.45876 12.8659L2.92575 10.3114C2.78162 10.1673 2.78469 9.93423 2.92882 9.7901L3.79973 8.92532C3.94386 8.78119 4.17692 8.78426 4.32105 8.92839L5.73168 10.3513L8.98227 7.12524C9.1264 6.98111 9.35946 6.98417 9.50359 7.1283L10.3684 7.99922C10.5125 8.14641 10.5094 8.3764 10.3653 8.52053Z" fill="#3682F7" />
                        </Svg>

                    </View>
                    <Text style={styles.numberOrders}>
                        177
                    </Text>
                </View>
                <View style={styles.blancoOrders}>
                    <View style={styles.typeStatus}>
                        <Text style={styles.textOrders}>Assigned</Text>
                        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6.6261 1.82422C5.83045 1.82422 5.06739 2.14029 4.50478 2.7029C3.94217 3.26551 3.6261 4.02857 3.6261 4.82422C3.6261 5.61987 3.94217 6.38293 4.50478 6.94554C5.06739 7.50815 5.83045 7.82422 6.6261 7.82422C7.42175 7.82422 8.18481 7.50815 8.74742 6.94554C9.31003 6.38293 9.6261 5.61987 9.6261 4.82422C9.6261 4.02857 9.31003 3.26551 8.74742 2.7029C8.18481 2.14029 7.42175 1.82422 6.6261 1.82422ZM2.1261 4.82422C2.1261 3.63074 2.6002 2.48615 3.44412 1.64224C4.28803 0.798324 5.43262 0.324219 6.6261 0.324219C7.81957 0.324219 8.96417 0.798324 9.80808 1.64224C10.652 2.48615 11.1261 3.63074 11.1261 4.82422C11.1261 6.01769 10.652 7.16229 9.80808 8.0062C8.96417 8.85011 7.81957 9.32422 6.6261 9.32422C5.43262 9.32422 4.28803 8.85011 3.44412 8.0062C2.6002 7.16229 2.1261 6.01769 2.1261 4.82422ZM13.3761 7.07422C13.575 7.07422 13.7658 7.15324 13.9064 7.29389C14.0471 7.43454 14.1261 7.62531 14.1261 7.82422V8.57422H14.8761C15.075 8.57422 15.2658 8.65324 15.4064 8.79389C15.5471 8.93454 15.6261 9.12531 15.6261 9.32422C15.6261 9.52313 15.5471 9.7139 15.4064 9.85455C15.2658 9.9952 15.075 10.0742 14.8761 10.0742H14.1261V10.8242C14.1261 11.0231 14.0471 11.2139 13.9064 11.3545C13.7658 11.4952 13.575 11.5742 13.3761 11.5742C13.1772 11.5742 12.9864 11.4952 12.8458 11.3545C12.7051 11.2139 12.6261 11.0231 12.6261 10.8242V10.0742H11.8761C11.6772 10.0742 11.4864 9.9952 11.3458 9.85455C11.2051 9.7139 11.1261 9.52313 11.1261 9.32422C11.1261 9.12531 11.2051 8.93454 11.3458 8.79389C11.4864 8.65324 11.6772 8.57422 11.8761 8.57422H12.6261V7.82422C12.6261 7.62531 12.7051 7.43454 12.8458 7.29389C12.9864 7.15324 13.1772 7.07422 13.3761 7.07422ZM4.0011 12.3242C3.0561 12.3242 2.1261 13.234 2.1261 14.5742C2.1261 14.7731 2.04708 14.9639 1.90643 15.1045C1.76578 15.2452 1.57501 15.3242 1.3761 15.3242C1.17719 15.3242 0.986421 15.2452 0.845769 15.1045C0.705116 14.9639 0.626099 14.7731 0.626099 14.5742C0.626099 12.6002 2.04585 10.8242 4.0011 10.8242H9.2511C11.2063 10.8242 12.6261 12.6002 12.6261 14.5742C12.6261 14.7731 12.5471 14.9639 12.4064 15.1045C12.2658 15.2452 12.075 15.3242 11.8761 15.3242C11.6772 15.3242 11.4864 15.2452 11.3458 15.1045C11.2051 14.9639 11.1261 14.7731 11.1261 14.5742C11.1261 13.234 10.1961 12.3242 9.2511 12.3242H4.0011Z" fill="#2B83F2" />
                        </Svg>

                    </View>
                    <Text style={styles.numberOrders}>
                        3490
                    </Text>
                </View>
                <View style={styles.blancoOrders}>
                    <View style={styles.typeStatus}>
                        <Text style={styles.textOrders}>Ongoing</Text>
                        <Svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M13.2875 6.76853L2.4931 0.386959C1.61605 -0.131295 0.272888 0.371626 0.272888 1.65346V14.4135C0.272888 15.5635 1.52099 16.2566 2.4931 15.68L13.2875 9.30153C14.2504 8.73421 14.2535 7.33585 13.2875 6.76853Z" fill="#3682F7" />
                        </Svg>

                    </View>
                    <Text style={styles.numberOrders}>
                        22
                    </Text>
                </View>
            </View>
            <View style={styles.containerOrders}>
                <View style={styles.blancoOrders}>
                    <View style={styles.typeStatus}>
                        <Text style={styles.textOrders}>Paused</Text>
                        <Svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M4.54858 14.1827H1.60465C0.792007 14.1827 0.13269 13.5233 0.13269 12.7107V1.9163C0.13269 1.10365 0.792007 0.444336 1.60465 0.444336H4.54858C5.36122 0.444336 6.02054 1.10365 6.02054 1.9163V12.7107C6.02054 13.5233 5.36122 14.1827 4.54858 14.1827ZM13.871 12.7107V1.9163C13.871 1.10365 13.2117 0.444336 12.399 0.444336H9.45512C8.64247 0.444336 7.98316 1.10365 7.98316 1.9163V12.7107C7.98316 13.5233 8.64247 14.1827 9.45512 14.1827H12.399C13.2117 14.1827 13.871 13.5233 13.871 12.7107Z" fill="#3682F7" />
                        </Svg>
                    </View>
                    <Text style={styles.numberOrders}>
                        4
                    </Text>
                </View>
                <View style={styles.blancoOrders}>
                    <View style={styles.typeStatus}>
                        <Text style={styles.textOrders}>Finalized</Text>
                        <Svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M5.58133 11.831L0.478521 6.72815C0.171954 6.42159 0.171954 5.92452 0.478521 5.61793L1.58872 4.5077C1.89529 4.2011 2.39238 4.2011 2.69895 4.5077L6.13644 7.94516L13.4992 0.582464C13.8057 0.275897 14.3028 0.275897 14.6094 0.582464L15.7196 1.69269C16.0262 1.99926 16.0262 2.49632 15.7196 2.80292L6.69155 11.831C6.38496 12.1376 5.88789 12.1376 5.58133 11.831Z" fill="#3682F7" />
                        </Svg>

                    </View>
                    <Text style={styles.numberOrders}>
                        80
                    </Text>
                </View>
                <View style={styles.blancoOrders}>
                    <View style={styles.typeStatus}>
                        <Text style={styles.textOrders}>Closed</Text>
                        <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M15.7364 5.82991L14.522 4.61554C14.2338 4.32729 13.7677 4.32729 13.4825 4.61554L6.13798 11.96L2.7218 8.54078C2.43354 8.25252 1.96742 8.25252 1.68223 8.54078L0.464791 9.75821C0.176531 10.0465 0.176531 10.5126 0.464791 10.8009L5.61666 15.9558C5.90492 16.244 6.37104 16.244 6.65623 15.9558L15.7333 6.87255C16.0216 6.58123 16.0216 6.11511 15.7364 5.82991ZM5.79146 9.0805C5.98158 9.27369 6.29438 9.27369 6.48451 9.0805L12.863 2.69586C13.0531 2.50267 13.0531 2.19294 12.863 2.00281L11.4769 0.613646C11.2868 0.420451 10.974 0.420451 10.7839 0.613646L6.13798 5.25953L4.43909 3.55757C4.24896 3.36438 3.93617 3.36438 3.74604 3.55757L2.35688 4.94674C2.16675 5.13993 2.16675 5.44966 2.35688 5.63979L5.79146 9.0805Z" fill="#3682F7" />
                        </Svg>

                    </View>
                    <Text style={styles.numberOrders}>
                        27
                    </Text>
                </View>
            </View>
            <View style={styles.contenedorPorcentaje}>
                <View style={styles.contenedorOrdersEntered}>
                    <View>
                        <Text style={styles.titleBar}>
                            Orders entered
                        </Text>
                        <Text style={styles.textEntered}>
                            Waiting Mechanic Assignment
                        </Text>
                    </View>
                    <View style={styles.porcentaje}>
                        <View style={styles.porcentajeAzul}>

                            <View>

                            </View>

                            <TouchableOpacity
                                style={styles.porcentajeAzul}
                                onPress={() => navigation.navigate("Assigned")}
                            >
                                <Text style={styles.textSeeAll}>
                                    See all
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.contenedorOrdersWork}>
                    <View>
                        <Text style={styles.titleBar}>
                            Orders with work done
                        </Text>
                        <Text style={styles.textEntered}>
                            Waiting Quality Control
                        </Text>
                    </View>
                    <View style={styles.porcentaje}>
                        <View style={styles.porcentajeAzul}>
                            <View style={styles.porcentajeAzul}>
                                <TouchableOpacity
                                    style={styles.porcentajeAzul}
                                    onPress={() => navigation.navigate("Assigned")}
                                >
                                    <Text style={styles.textSeeAll}>
                                        See all
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.contenedorTitleLatest}>
                <Text style={styles.textLatest}>
                    Latest orders
                </Text>
                <Text style={styles.textLatestDelgado}>
                    / En espera de Control de Calidad
                </Text>
            </View>
            <View style={styles.contenedorLatestOrders}>
                <View style={styles.contenedorLogoAuto}>
                    <Image
                        source={require("../../assets/logo_auto.png")}
                    />
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
                    onPress={() => navigation.navigate("Ver")}
                >
                    <Text style={tailwind.style("text-[#3682F7] text-[16px] font-normal")}>
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
        textAlign: 'right',
        fontSize: 18,
        color: '#000000',
        fontWeight: '800',
    },
    textTipo: {
        textAlign: 'right',
        fontSize: 16,
        color: '#000000',
        fontWeight: '400',
    },
    textSingOut: {
        fontSize: 14,
        color: '#000000',
        fontWeight: '400',
        color: '#2B83F2',
        textAlign: 'right',
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
    contenedorLogoAuto: {
        backgroundColor: '#F6F6FA',
        borderRadius: 100,
        width: 46,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    input: {
        flex: 1,
        // backgroundColor: '#ff0000',
        fontSize: 16,
        borderRadius: 12,
        height: 45,
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
        // backgroundColor: '#ff0'
    },
    porcentaje: {
        backgroundColor: '#FFFFFF',
        width: 180,
        height: 150,
        borderRadius: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 15
    },
    porcentajeAzul: {
        backgroundColor: '#3682F7',
        width: 180,
        height: 25,
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
        marginRight: 15
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
    },
    contenedorDatos: {
        flexDirection: 'row'
    },
    tituloOrdersEstatus: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '700'
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
        fontWeight: '300'
    },
    textLatest: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '700'
    },
    textLatestDelgado: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '300'
    },
    contenedorTitleLatest: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 15,
        marginLeft: 15
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
    contenedorDatosLatersOrders: {
        marginLeft: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
});

export default Orders;