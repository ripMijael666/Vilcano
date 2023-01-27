import React, { useState, useEffect } from 'react';
import tailwind from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";

import Svg, {
    Path,
    Circle
} from 'react-native-svg';

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

export default function TableObservations(props) {
    const { row, modalVisible } = props;
    const [data, setData] = useState([]);
    const navigation = useNavigation();
    const [showDots, setShowDots] = useState(true);

    useEffect(() => {
        getDatos()
    }, [modalVisible]);

    function getDatos() {
        fetch('https://slogan.com.bo/vulcano/ordersObservations/getByOrderId/' + row.id)
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    // console.log(data.data);
                    setData(data.data)
                } else {
                    // console.error(data.error)
                }
            })
            .then(setShowDots(false))
    };

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
            <ActivityIndicator size="large" />
        );
    };

    return (
        <View
            style={tailwind.style(
                "flex justify-center items-center mb-4"
            )}
        >
            <FlatList
                data={data}
                extraData={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={tailwind.style(
                        "flex flex-row items-center w-[380px] h-[90px] bg-[#FFFFFF] rounded-5 pl-[12px] pr-[12px] mt-4"
                    )}>
                        <View style={tailwind.style("flex w-[65px]")}>
                            <View style={tailwind.style("flex justify-center items-center bg-[#F6F6FA] w-[50px] h-[50px] rounded-full")}>
                                <Svg width="35" height="25" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M0 9.57773C0.867709 8.72842 1.61545 7.97902 2.38271 7.24906C4.34971 5.36447 6.4004 3.5798 8.77474 2.20869C14.1456 -0.894359 19.4802 -0.647337 24.7562 2.44461C27.5881 4.10438 29.9122 6.36366 32.0913 8.78115C32.3368 9.05315 32.5768 9.32793 32.8306 9.61659C30.1243 12.3505 27.4486 15.0705 24.0475 16.9135C18.2219 20.0692 12.5636 19.6862 7.1314 15.9531C4.88819 14.4127 3.01048 12.456 1.10207 10.5381C0.775637 10.2106 0.401769 9.92467 0.00279006 9.5805L0 9.57773ZM16.4502 2.73049C12.7059 2.73604 9.64803 5.77802 9.64524 9.50279C9.64245 13.247 12.7115 16.2973 16.4753 16.2917C20.2196 16.2862 23.2775 13.2414 23.2803 9.51667C23.2803 5.77247 20.2168 2.72494 16.4474 2.72771L16.4502 2.73049Z" fill="#B6B6B6" />
                                    <Path d="M16.3973 5.48646C15.764 6.76321 15.8003 7.99277 16.8075 9.05025C17.8705 10.1632 19.1483 10.2437 20.5071 9.58593C20.5964 11.4761 18.9223 13.5577 16.5508 13.5938C14.1486 13.6299 12.2429 11.687 12.3824 9.28339C12.5331 6.72713 14.8014 5.35879 16.3946 5.48369L16.3973 5.48646Z" fill="#B6B6B6" />
                                </Svg>
                            </View>
                        </View>
                        <View style={tailwind.style("flex flex-col w-[280px]")}>
                            <View style={tailwind.style("flex justify-start")}>
                                <Text style={[
                                    { fontFamily: "Dosis_700Bold" },
                                    tailwind.style("text-[#000000] text-[18px]")
                                ]}>
                                    {item.description}
                                </Text>
                                <View style={tailwind.style("flex flex-row items-center")}>
                                    <Svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M12.4021 7.29102C12.4549 7.01562 12.4549 6.73438 12.4021 6.45898L12.9262 6.16797C12.9872 6.13477 13.0136 6.06641 12.9932 6.00195C12.8571 5.58008 12.6235 5.19727 12.3188 4.88086C12.2721 4.83203 12.1969 4.82031 12.136 4.85352L11.6118 5.14453C11.3904 4.96289 11.1365 4.82227 10.8622 4.72852V4.14648C10.8622 4.08008 10.8135 4.02148 10.7464 4.00781C10.2934 3.91016 9.83229 3.91406 9.40162 4.00781C9.33458 4.02148 9.28582 4.08008 9.28582 4.14648V4.72852C9.01158 4.82227 8.75764 4.96289 8.53621 5.14453L8.01209 4.85352C7.95318 4.82031 7.87599 4.83203 7.82926 4.88086C7.52454 5.19727 7.29093 5.58008 7.15482 6.00195C7.1345 6.06641 7.16294 6.13477 7.22186 6.16797L7.74597 6.45898C7.69315 6.73438 7.69315 7.01562 7.74597 7.29102L7.22186 7.58203C7.16091 7.61523 7.1345 7.68359 7.15482 7.74805C7.29093 8.16992 7.52454 8.55078 7.82926 8.86914C7.87599 8.91797 7.95115 8.92969 8.01209 8.89648L8.53621 8.60547C8.75764 8.78711 9.01158 8.92773 9.28582 9.02148V9.60352C9.28582 9.66992 9.33458 9.72852 9.40162 9.74219C9.85463 9.83984 10.3158 9.83594 10.7464 9.74219C10.8135 9.72852 10.8622 9.66992 10.8622 9.60352V9.02148C11.1365 8.92773 11.3904 8.78711 11.6118 8.60547L12.136 8.89648C12.1949 8.92969 12.2721 8.91797 12.3188 8.86914C12.6235 8.55273 12.8571 8.16992 12.9932 7.74805C13.0136 7.68359 12.9851 7.61523 12.9262 7.58203L12.4021 7.29102ZM10.0761 7.82227C9.53163 7.82227 9.0908 7.39648 9.0908 6.875C9.0908 6.35352 9.53366 5.92773 10.0761 5.92773C10.6185 5.92773 11.0613 6.35352 11.0613 6.875C11.0613 7.39648 10.6205 7.82227 10.0761 7.82227ZM4.55048 5C5.98672 5 7.15075 3.88086 7.15075 2.5C7.15075 1.11914 5.98672 0 4.55048 0C3.11423 0 1.95021 1.11914 1.95021 2.5C1.95021 3.88086 3.11423 5 4.55048 5ZM8.63779 9.42383C8.59106 9.40039 8.54434 9.37305 8.49965 9.34766L8.33916 9.4375C8.21727 9.50391 8.07913 9.54102 7.94099 9.54102C7.71956 9.54102 7.50626 9.45117 7.3539 9.29492C6.98214 8.9082 6.69774 8.4375 6.53725 7.93555C6.42552 7.58984 6.57585 7.22461 6.90088 7.04297L7.06137 6.95312C7.05934 6.90234 7.05934 6.85156 7.06137 6.80078L6.90088 6.71094C6.57585 6.53125 6.42552 6.16406 6.53725 5.81836C6.55553 5.76172 6.58194 5.70508 6.60226 5.64844C6.52506 5.64258 6.4499 5.625 6.37067 5.625H6.03142C5.58043 5.82422 5.07866 5.9375 4.55048 5.9375C4.0223 5.9375 3.52256 5.82422 3.06954 5.625H2.73029C1.22294 5.625 0 6.80078 0 8.25V9.0625C0 9.58008 0.436765 10 0.975103 10H8.12586C8.33103 10 8.52199 9.9375 8.67842 9.83398C8.65404 9.75977 8.63779 9.68359 8.63779 9.60352V9.42383Z" fill="#B6B6B6" />
                                    </Svg>
                                    <Text style={[
                                        { fontFamily: "Dosis_400Regular" },
                                        tailwind.style("text-[#B6B6B6] text-[14px] font-light ml-[5px]")
                                    ]}>
                                        {item.user.username}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={tailwind.style("flex mb-8")}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("ServiceTimer")}
                            >
                                <Svg width="6" height="25" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle cx="2.58622" cy="2.41379" r="2.41379" fill="#D9D9D9" />
                                    <Circle cx="2.58622" cy="9.99998" r="2.41379" fill="#D9D9D9" />
                                    <Circle cx="2.58622" cy="17.5862" r="2.41379" fill="#D9D9D9" />
                                </Svg>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}