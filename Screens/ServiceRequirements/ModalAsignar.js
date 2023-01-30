import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    TextInput,
    Pressable,
    Modal,
    Dimensions,
    ActivityIndicator
} from "react-native";
import tailwind from "twrnc";
import Tooltip from 'react-native-walkthrough-tooltip';
import { useNavigation } from "@react-navigation/native";

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

import Svg, {
    Path,
    Circle
} from 'react-native-svg';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 221;

export default function ModalAsignar(props) {

    return (

        <TouchableOpacity
            disabled={true}
            style={[
                { flex: 1 },
                tailwind.style("justify-center items-center")
            ]}
        >
            <View
                style={[{ width: WIDTH - 80, height: HEIGHT_MODAL },
                tailwind.style("flex justify-end items-start  bg-[#F6F6FA] rounded-5")
                ]}
            >
                <Text
                    style={[
                        { fontFamily: "Dosis_600SemiBold" },
                        tailwind.style("text-[18px] ml-3")
                    ]}
                >
                    Assign/Reassign mechanic
                </Text>
                <View style={[
                    {},
                    tailwind.style("flex-row justify-evenly items-center p-2 bg-[#FFFFFF] w-full h-[30px] mt-4")
                ]}>
                    <View style={[
                        {},
                        tailwind.style("flex-row flex-1 ml-[15px] justify-start items-center")
                    ]}>
                        <Svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M12.4021 7.29102C12.4549 7.01562 12.4549 6.73438 12.4021 6.45898L12.9262 6.16797C12.9872 6.13477 13.0136 6.06641 12.9932 6.00195C12.8571 5.58008 12.6235 5.19727 12.3188 4.88086C12.2721 4.83203 12.1969 4.82031 12.136 4.85352L11.6118 5.14453C11.3904 4.96289 11.1365 4.82227 10.8622 4.72852V4.14648C10.8622 4.08008 10.8135 4.02148 10.7464 4.00781C10.2934 3.91016 9.83229 3.91406 9.40162 4.00781C9.33458 4.02148 9.28582 4.08008 9.28582 4.14648V4.72852C9.01158 4.82227 8.75764 4.96289 8.53621 5.14453L8.01209 4.85352C7.95318 4.82031 7.87599 4.83203 7.82926 4.88086C7.52454 5.19727 7.29093 5.58008 7.15482 6.00195C7.1345 6.06641 7.16294 6.13477 7.22186 6.16797L7.74597 6.45898C7.69315 6.73438 7.69315 7.01562 7.74597 7.29102L7.22186 7.58203C7.16091 7.61523 7.1345 7.68359 7.15482 7.74805C7.29093 8.16992 7.52454 8.55078 7.82926 8.86914C7.87599 8.91797 7.95115 8.92969 8.01209 8.89648L8.53621 8.60547C8.75764 8.78711 9.01158 8.92773 9.28582 9.02148V9.60352C9.28582 9.66992 9.33458 9.72852 9.40162 9.74219C9.85463 9.83984 10.3158 9.83594 10.7464 9.74219C10.8135 9.72852 10.8622 9.66992 10.8622 9.60352V9.02148C11.1365 8.92773 11.3904 8.78711 11.6118 8.60547L12.136 8.89648C12.1949 8.92969 12.2721 8.91797 12.3188 8.86914C12.6235 8.55273 12.8571 8.16992 12.9932 7.74805C13.0136 7.68359 12.9851 7.61523 12.9262 7.58203L12.4021 7.29102ZM10.0761 7.82227C9.53163 7.82227 9.0908 7.39648 9.0908 6.875C9.0908 6.35352 9.53366 5.92773 10.0761 5.92773C10.6185 5.92773 11.0613 6.35352 11.0613 6.875C11.0613 7.39648 10.6205 7.82227 10.0761 7.82227ZM4.55048 5C5.98672 5 7.15075 3.88086 7.15075 2.5C7.15075 1.11914 5.98672 0 4.55048 0C3.11423 0 1.95021 1.11914 1.95021 2.5C1.95021 3.88086 3.11423 5 4.55048 5ZM8.63779 9.42383C8.59106 9.40039 8.54434 9.37305 8.49965 9.34766L8.33916 9.4375C8.21727 9.50391 8.07913 9.54102 7.94099 9.54102C7.71956 9.54102 7.50626 9.45117 7.3539 9.29492C6.98214 8.9082 6.69774 8.4375 6.53725 7.93555C6.42552 7.58984 6.57585 7.22461 6.90088 7.04297L7.06137 6.95312C7.05934 6.90234 7.05934 6.85156 7.06137 6.80078L6.90088 6.71094C6.57585 6.53125 6.42552 6.16406 6.53725 5.81836C6.55553 5.76172 6.58194 5.70508 6.60226 5.64844C6.52506 5.64258 6.4499 5.625 6.37067 5.625H6.03142C5.58043 5.82422 5.07866 5.9375 4.55048 5.9375C4.0223 5.9375 3.52256 5.82422 3.06954 5.625H2.73029C1.22294 5.625 0 6.80078 0 8.25V9.0625C0 9.58008 0.436765 10 0.975103 10H8.12586C8.33103 10 8.52199 9.9375 8.67842 9.83398C8.65404 9.75977 8.63779 9.68359 8.63779 9.60352V9.42383Z" fill="#B6B6B6" />
                        </Svg>
                        <Text style={[
                            { fontFamily: "Dosis_400Regular" },
                            tailwind.style("text-[#B6B6B6] text-[14px] font-light ml-[5px]")
                        ]}>
                            Henry Mccormick
                        </Text>
                    </View>
                    <TouchableOpacity style={[
                        {},
                        tailwind.style("mr-[15px]")
                    ]}>
                        <Svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M8 14L0.205771 0.500001L15.7942 0.5L8 14Z" fill="#D9D9D9" />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <Text
                    style={[
                        { fontFamily: "Dosis_600SemiBold" },
                        tailwind.style("text-[18px] ml-3 mt-[10px]")
                    ]}
                >
                    Priority
                </Text>
                <View style={[
                    {},
                    tailwind.style("flex-row justify-center items-center ml-3 mr-3 mt-[10px]")
                ]}>
                    <TouchableOpacity style={[
                        {},
                        tailwind.style("flex justify-center items-center bg-[#DC2A2A] w-[85px] h-[35px] rounded-[8px] m-4")
                    ]}>
                        <Text
                            style={[
                                { fontFamily: "Dosis_400Regular" },
                                tailwind.style("text-[#FFFF] text-[18px]")
                            ]}>
                            HIGH
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[
                        {},
                        tailwind.style("flex justify-center items-center bg-[#EBB733] w-[85px] h-[35px] rounded-[8px] m-4")
                    ]}>
                        <Text
                            style={[
                                { fontFamily: "Dosis_400Regular" },
                                tailwind.style("text-[#FFFF] text-[18px]")
                            ]}>
                            MEDIUM
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[
                        {},
                        tailwind.style("flex justify-center items-center bg-[#71AD46] w-[85px] h-[35px] rounded-[8px] m-4")
                    ]}>
                        <Text
                            style={[
                                { fontFamily: "Dosis_400Regular" },
                                tailwind.style("text-[#FFFF] text-[18px]")
                            ]}>
                            LOW
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[
                    {},
                    tailwind.style("flex justify-center items-center bg-[#2B83F2] w-full h-[30px] rounded-[12px]")
                ]}>
                    <Text style={[
                        { fontFamily: "Dosis_600SemiBold" },
                        tailwind.style("text-[#FFFF] text-[22px]")
                    ]}>
                        SAVE
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};