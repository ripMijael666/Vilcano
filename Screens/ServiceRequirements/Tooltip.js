import React, { useState, useEffect } from "react";
import tailwind from "twrnc";
import Tooltip from 'react-native-walkthrough-tooltip';

import { useNavigation } from "@react-navigation/native";

import ModalAsignar from "./ModalAsignar";

import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Modal,
    Pressable
} from "react-native";

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


export default function TooltipPayment() {
    const [toolTip, setToolTip] = useState(false);
    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [chooseData, setchooseData] = useState();
    const changeModalVisible = (bool) => {
        setIsModalVisible(bool);
    }

    const setData = (data) => {
        setchooseData(data);
    }


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
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Tooltip
                isVisible={toolTip}
                content={
                    <View style={tailwind.style("")}>
                        <TouchableOpacity
                        onPress={() => changeModalVisible(true)}
                        >
                            <Text style={[
                                { fontFamily: "Dosis_500Medium" },

                            ]}>
                                Asignar Mecánico
                            </Text>
                        </TouchableOpacity>
                        <Modal
                            transparent={true}
                            animationType='fade'
                            visible={isModalVisible}
                            nRequestClose={() => changeModalVisible(false)}
                        >
                            <ModalAsignar
                                changeModalVisible={changeModalVisible}
                                setData={setData}

                            />
                        </Modal>

                        {/* <TouchableOpacity style={tailwind.style("mt-5")}>
                            <Text style={[
                                { fontFamily: "Dosis_500Medium" },

                            ]}>
                                Control de Calidad
                            </Text>
                        </TouchableOpacity>
                        <Modal
                            transparent={true}
                            animationType='fade'
                            visible={isModalVisible}
                            nRequestClose={() => changeModalVisible(false)}
                        >
                        </Modal> */}
                    </View>
                }
                placement="bottom"
                onClose={() => setToolTip(false)}
                arrowSize={{ width: 10, height: 8 }}
                backgroundColor={'rgba(0,0,0,0.5)'}
            >
                <TouchableOpacity onPress={() => setToolTip(true)}>
                    <Svg width="6" height="25" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Circle cx="2.58622" cy="2.41379" r="2.41379" fill="#D9D9D9" />
                        <Circle cx="2.58622" cy="9.99998" r="2.41379" fill="#D9D9D9" />
                        <Circle cx="2.58622" cy="17.5862" r="2.41379" fill="#D9D9D9" />
                    </Svg>
                </TouchableOpacity>
            </Tooltip>
        </View>
    );
};