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

export default function TableAdvices(props) {
    const { row, modalVisible } = props;
    const [data, setData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        getDatos()
    }, [modalVisible]);

    function getDatos() {
        fetch('https://slogan.com.bo/vulcano/ordersAdvices/getByOrderId/' + row.id)
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    console.log(data.data);
                    setData(data.data)
                } else {
                    console.error(data.error)
                }
            })
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
                                <Svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M16.9341 0C21.9818 0.155009 26.6134 2.13845 30.0362 6.55565C33.8061 11.4186 33.987 18.1542 30.5393 23.2491C30.355 23.5218 30.3256 23.7424 30.4285 24.0581C31.2042 26.4421 31.9596 28.8328 32.7161 31.2236C32.9863 32.0779 32.6448 32.8371 31.8601 32.9819C31.531 33.043 31.1228 32.957 30.8175 32.8054C28.521 31.666 26.238 30.4995 23.9606 29.3228C23.6214 29.1474 23.3477 29.1304 22.9802 29.2639C16.7079 31.528 10.8269 30.8072 5.56546 26.6446C1.71637 23.5965 -0.217227 19.4995 0.0191012 14.5494C0.242991 9.84252 2.45927 6.13927 6.20434 3.35137C9.24381 1.08846 12.7073 0.0565727 16.9341 0ZM12.5965 15.2645C12.601 14.5777 12.0334 13.9984 11.347 13.9882C10.6618 13.978 10.0761 14.5426 10.0614 15.2282C10.0455 15.9297 10.6313 16.5283 11.3323 16.526C12.0176 16.5249 12.5931 15.9512 12.5976 15.2645H12.5965ZM16.4015 16.526C17.0867 16.5294 17.6657 15.9592 17.6747 15.2735C17.6838 14.5878 17.1195 14.0029 16.4332 13.9882C15.7321 13.9735 15.1351 14.5596 15.1384 15.2622C15.1418 15.9478 15.7151 16.5238 16.4004 16.5272L16.4015 16.526ZM22.7541 15.2633C22.7586 14.5777 22.1898 13.9972 21.5035 13.9882C20.8182 13.9791 20.2336 14.5437 20.2189 15.2294C20.2042 15.9309 20.79 16.5283 21.491 16.526C22.1763 16.5238 22.7507 15.9501 22.7552 15.2633H22.7541Z" fill="#B6B6B6" />
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
    );
}