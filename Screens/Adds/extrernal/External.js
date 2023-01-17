import React, { useState } from 'react';
import tailwind from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import TableExternal from './TableExternal';

import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    Modal,
    Pressable,
    StyleSheet,
    TextInput
} from "react-native";

import Svg, {
    Path,
    Circle
} from 'react-native-svg';

export default function External({ route }) {
    const { row } = route.params;
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={tailwind.style(
            "flex-1 justify-between h-full  bg-[#F6F6FA] pt-5"
        )}>
            <StatusBar translucent style='auto' />
            <View style={tailwind.style(
                "flex flex-row justify-between items-end ml-[18px] mr-[18px]"
            )}>
                <Text style={tailwind.style(
                    "font-700 text-[22px]"
                )}>
                    External Jobs
                </Text>
            </View>
            <View style={tailwind.style(
                "flex-1 justify-start items-center mt-3"
            )}>
                <TableExternal row={row} />
            </View>
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={tailwind.style("flex-1 justify-center items-center")}>
                        <View style={styles.modalView}>
                            <View style={tailwind.style("flex-row justify-between ml-[22px] mr-[18px] mt-[20px] ")}>
                                <Text style={tailwind.style("text-[#000000] font-bold text-[18px]")}>
                                    Description
                                </Text>
                                <Pressable
                                    style={tailwind.style("")}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Feather name="x" size={24} color="#2B83F2" />
                                </Pressable>
                            </View>
                            <View style={tailwind.style(
                                "flex-1 pr-[20px] pl-[20px] pb-[20px] pt-[20px]"
                            )}>
                                <TextInput
                                    style={tailwind.style(
                                        "flex justify-center items-center text-[17px] w-full h-full border-[1px] border-[#CECBCA] rounded-lg p-[8px]"
                                    )}
                                    textAlignVertical="top"
                                    placeholder="Description"
                                    editable
                                    multiline
                                />
                            </View>
                            <View style={tailwind.style("flex justify-end items-end mb-[15px] ml-[22px] mr-[18px] ")}>
                                <TouchableOpacity style={tailwind.style("flex justify-center items-center w-[120px] h-[30px] bg-[#2B83F2] rounded-lg")}>
                                    <Text style={tailwind.style("text-[#FFFFFF] text-[16px] ")}>
                                        Añadir
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={tailwind.style("flex justify-center items-center bg-[#2B83F2] w-full h-[45px] rounded-t-3xl")}
                    onPress={() => setModalVisible(true)}>
                    <Text style={tailwind.style("text-[20px] text-[#FFFFFF] font-bold")}>
                        ADD NEW
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 350,
        height: 350,
        // alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});