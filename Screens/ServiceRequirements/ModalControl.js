import React, { useState, useEffect } from "react";
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
import { Feather } from '@expo/vector-icons';
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

export default function ModalControl(props) {

    const [passed, setpassed] = useState(true);
    const [notpassed, setNotpassed] = useState(false);

    const tabsEnabler = (tabIndex) => {
        switch (tabIndex) {
            case 0:
                setpassed(true);
                setNotpassed(false);
                break;
            case 1:
                setpassed(false);
                setNotpassed(true);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        tabsEnabler(0);
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
        <TouchableOpacity
            disabled={true}
            style={[
                { flex: 1 },
                tailwind.style("justify-center items-center")
            ]}
        >
            <View
                style={[{ width: WIDTH - 80, height: HEIGHT_MODAL },
                tailwind.style("flex justify-end items-center  bg-[#F6F6FA] rounded-5")
                ]}
            >
                <View
                    style={[
                        { flex: 1 },
                        tailwind.style("w-full")
                    ]}
                >
                    <Text
                        style={[
                            { fontFamily: "Dosis_600SemiBold" },
                            tailwind.style("text-[18px] ml-3 mt-4")
                        ]}
                    >
                        Quality control
                    </Text>
                </View>
                <View style={[
                    {},
                    tailwind.style("flex justify-center items-center mb-5")
                ]}>
                    <TouchableOpacity
                        onPress={() => {
                            tabsEnabler(0);
                        }}
                    >
                        {passed ? (
                            <View
                                style={[
                                    {},
                                    tailwind.style("flex justify-center items-center bg-[#71AD46] p-2 h-[45px] rounded-3 m-2")
                                ]}
                            >
                                <View
                                    style={[
                                        { flex: 1 },
                                        tailwind.style("flex-row justify-center items-center pl-2 pr-2")
                                    ]}
                                >
                                    <Svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M42.9681 1.2803C44.7993 2.04427 46.1611 3.23798 46.7464 5.0312C47.4766 7.28067 46.9029 9.27549 45.147 10.9679C41.0557 14.9151 36.9471 18.857 32.85 22.7989C29.8945 25.6425 26.8522 28.4173 24.0068 31.3458C21.3585 34.0781 17.4585 34.5556 14.3987 32.2743C10.4929 28.5817 6.58123 24.8945 2.68119 21.1967C0.345799 19.0002 -0.0540564 16.1141 1.61491 13.7161C3.79383 10.5859 8.5863 10.0448 11.4722 12.655C13.7149 14.6817 15.8938 16.7667 18.0611 18.8623C18.5595 19.3451 18.8029 19.2761 19.2549 18.8305C24.6327 13.6312 30.0626 8.47968 35.4114 3.2592C37.544 1.1795 39.9721 0.415525 42.9681 1.28561V1.2803Z" fill="#FDFEFE" />
                                    </Svg>

                                    <Text
                                        style={[
                                            { fontFamily: "Dosis_400Regular" },
                                            tailwind.style("text-[32px] text-[#FFFFFF] ml-4")
                                        ]}
                                    >
                                        PASSED
                                    </Text>
                                </View>
                            </View>
                        ) : (
                            <View
                                style={[
                                    {},
                                    tailwind.style("flex justify-center items-center bg-[#B6B6B6] p-2 h-[45px] rounded-3 m-2")
                                ]}
                            >
                                <View
                                    style={[
                                        { flex: 1 },
                                        tailwind.style("flex-row justify-center items-center pl-2 pr-2")
                                    ]}
                                >
                                    <Svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M42.9681 1.2803C44.7993 2.04427 46.1611 3.23798 46.7464 5.0312C47.4766 7.28067 46.9029 9.27549 45.147 10.9679C41.0557 14.9151 36.9471 18.857 32.85 22.7989C29.8945 25.6425 26.8522 28.4173 24.0068 31.3458C21.3585 34.0781 17.4585 34.5556 14.3987 32.2743C10.4929 28.5817 6.58123 24.8945 2.68119 21.1967C0.345799 19.0002 -0.0540564 16.1141 1.61491 13.7161C3.79383 10.5859 8.5863 10.0448 11.4722 12.655C13.7149 14.6817 15.8938 16.7667 18.0611 18.8623C18.5595 19.3451 18.8029 19.2761 19.2549 18.8305C24.6327 13.6312 30.0626 8.47968 35.4114 3.2592C37.544 1.1795 39.9721 0.415525 42.9681 1.28561V1.2803Z" fill="#FDFEFE" />
                                    </Svg>

                                    <Text
                                        style={[
                                            { fontFamily: "Dosis_400Regular" },
                                            tailwind.style("text-[32px] text-[#FFFFFF] ml-4")
                                        ]}
                                    >
                                        PASSED
                                    </Text>
                                </View>
                            </View>
                        )}

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            tabsEnabler(1);
                        }}
                    >
                        {notpassed ? (
                            <View
                                style={[
                                    {},
                                    tailwind.style("flex justify-center items-center bg-[#DC2A2A] p-2 h-[45px] rounded-3 m-2")
                                ]}
                            >
                                <View
                                    style={[
                                        { flex: 1 },
                                        tailwind.style("flex-row justify-center items-center pl-2 pr-2")
                                    ]}
                                >
                                    <Svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M2.81217 25.2721C2.49971 25.2721 2.16493 25.1939 1.80783 25.0377C1.45072 24.8815 1.14942 24.6695 0.903913 24.4016C0.658406 24.1338 0.535652 23.8437 0.535652 23.5312C0.535652 23.308 0.613768 23.0737 0.77 22.8282L6.52826 12.9186L0.937391 3.07598C0.758841 2.76351 0.669565 2.47337 0.669565 2.20554C0.669565 1.89308 0.78116 1.61409 1.00435 1.36858C1.22754 1.12308 1.50652 0.933366 1.8413 0.799453C2.19841 0.665541 2.54435 0.598584 2.87913 0.598584C3.21391 0.598584 3.48174 0.699019 3.68261 0.899889C3.9058 1.07844 4.08435 1.31279 4.21826 1.60293L8.87174 10.1734L13.5252 1.60293C13.6815 1.31279 13.8712 1.07844 14.0944 0.899889C14.3175 0.699019 14.5742 0.598584 14.8644 0.598584C15.1991 0.598584 15.5339 0.665541 15.8687 0.799453C16.2258 0.933366 16.5159 1.12308 16.7391 1.36858C16.9846 1.61409 17.1074 1.89308 17.1074 2.20554C17.1074 2.47337 17.0181 2.76351 16.8396 3.07598L11.2152 12.9186L17.007 22.8282C17.1409 23.0737 17.2078 23.308 17.2078 23.5312C17.2078 23.8437 17.0851 24.1338 16.8396 24.4016C16.5941 24.6695 16.2928 24.8815 15.9357 25.0377C15.6009 25.1939 15.2661 25.2721 14.9313 25.2721C14.6858 25.2721 14.4626 25.1939 14.2617 25.0377C14.0609 24.8592 13.9046 24.6695 13.793 24.4686L8.87174 15.5634L3.95044 24.4686C3.83884 24.6695 3.68261 24.8592 3.48174 25.0377C3.30319 25.1939 3.08 25.2721 2.81217 25.2721Z" fill="white" />
                                    </Svg>

                                    <Text
                                        style={[
                                            { fontFamily: "Dosis_400Regular" },
                                            tailwind.style("text-[32px] text-[#FFFFFF] ml-4")
                                        ]}
                                    >
                                        NOT PASSED
                                    </Text>
                                </View>
                            </View>
                        ) : (
                            <View
                                style={[
                                    {},
                                    tailwind.style("flex justify-center items-center bg-[#B6B6B6] p-2 h-[45px] rounded-3 m-2")
                                ]}
                            >
                                <View
                                    style={[
                                        { flex: 1 },
                                        tailwind.style("flex-row justify-center items-center pl-2 pr-2")
                                    ]}
                                >
                                    <Svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M2.81217 25.2721C2.49971 25.2721 2.16493 25.1939 1.80783 25.0377C1.45072 24.8815 1.14942 24.6695 0.903913 24.4016C0.658406 24.1338 0.535652 23.8437 0.535652 23.5312C0.535652 23.308 0.613768 23.0737 0.77 22.8282L6.52826 12.9186L0.937391 3.07598C0.758841 2.76351 0.669565 2.47337 0.669565 2.20554C0.669565 1.89308 0.78116 1.61409 1.00435 1.36858C1.22754 1.12308 1.50652 0.933366 1.8413 0.799453C2.19841 0.665541 2.54435 0.598584 2.87913 0.598584C3.21391 0.598584 3.48174 0.699019 3.68261 0.899889C3.9058 1.07844 4.08435 1.31279 4.21826 1.60293L8.87174 10.1734L13.5252 1.60293C13.6815 1.31279 13.8712 1.07844 14.0944 0.899889C14.3175 0.699019 14.5742 0.598584 14.8644 0.598584C15.1991 0.598584 15.5339 0.665541 15.8687 0.799453C16.2258 0.933366 16.5159 1.12308 16.7391 1.36858C16.9846 1.61409 17.1074 1.89308 17.1074 2.20554C17.1074 2.47337 17.0181 2.76351 16.8396 3.07598L11.2152 12.9186L17.007 22.8282C17.1409 23.0737 17.2078 23.308 17.2078 23.5312C17.2078 23.8437 17.0851 24.1338 16.8396 24.4016C16.5941 24.6695 16.2928 24.8815 15.9357 25.0377C15.6009 25.1939 15.2661 25.2721 14.9313 25.2721C14.6858 25.2721 14.4626 25.1939 14.2617 25.0377C14.0609 24.8592 13.9046 24.6695 13.793 24.4686L8.87174 15.5634L3.95044 24.4686C3.83884 24.6695 3.68261 24.8592 3.48174 25.0377C3.30319 25.1939 3.08 25.2721 2.81217 25.2721Z" fill="white" />
                                    </Svg>

                                    <Text
                                        style={[
                                            { fontFamily: "Dosis_400Regular" },
                                            tailwind.style("text-[32px] text-[#FFFFFF] ml-4")
                                        ]}
                                    >
                                        NOT PASSED
                                    </Text>
                                </View>
                            </View>
                        )}

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