import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import tailwind from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import NumericInput from 'react-native-numeric-input'
import TableParts from './TableParts';

import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    Modal,
    Pressable,
    StyleSheet,
    TextInput,
    ScrollView
} from "react-native";

import Svg, {
    Path,
    Circle
} from 'react-native-svg';

const Parts = ({ route }) => {
    const { register, handleSubmit } = useForm();
    const { row } = route.params;
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");

    async function añadirDatos() {
        let data = new FormData();

        data.append("order_id", row.id);
        data.append("qty", quantity);
        data.append("description", description);

        fetch('https://slogan.com.bo/vulcano/ordersParts/addMobile',
            {
                method: "POST",
                body: data,
            }
        )
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    console.log(data.data);
                    // getDatos();
                } else {
                    console.error(data.error)
                }
            })
    }
    function Enviar(data) {
        console.log('onSubmit data: ' + data);
        añadirDatos();
    };


    return (
        <View
            style={tailwind.style("flex-1 justify-between h-full  bg-[#F6F6FA] pt-5")}
            onSubmit={handleSubmit(Enviar)}
        >
            <StatusBar translucent style='auto' />
            <View style={tailwind.style("flex mt-[5px] ")}>
                <TouchableOpacity
                    style={tailwind.style("ml-[30px]")}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="left" size={25} color="#2B83F2" />
                </TouchableOpacity>
            </View>
            <View style={tailwind.style(
                "flex flex-row justify-between items-end ml-[30px] mr-[18px]"
            )}>
                <Text style={tailwind.style(
                    "font-700 text-[22px]"
                )}>
                    Parts
                </Text>
            </View>
            <View style={tailwind.style(
                "flex-1 justify-start items-center mt-3"
            )}>
                <ScrollView>
                    <TableParts row={row} />
                </ScrollView>
            </View>
            <View
                onSubmit={handleSubmit(Enviar)}
            >
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={tailwind.style("flex-1 justify-center items-center")}>
                        <View
                            onSubmit={handleSubmit(Enviar)}
                            style={styles.modalView}
                        >
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
                            <View style={tailwind.style("flex justify-center items-center pt-4")}>
                                <NumericInput
                                    name="quantity"
                                    type='up-down' {...register('quantity')}
                                    totalWidth={240}
                                    totalHeight={50}
                                    iconSize={25}
                                    rounded
                                    valueType='real'
                                    iconStyle={{ color: '#2B83F2' }}
                                    inputStyle={{ fontSize: 35 }}
                                    rightButtonBackgroundColor='#FF0000'
                                    leftButtonBackgroundColor='#FF0'
                                    onChange={(value) => setQuantity(value)}
                                // onChangeText={value}
                                // onChange={(e) => setQuantity(e.target.value)}
                                />
                            </View>
                            <View style={tailwind.style(
                                "flex-1 pr-[20px] pl-[20px] pb-[20px] pt-[20px]"
                            )}>
                                <TextInput
                                    style={tailwind.style(
                                        "flex justify-center items-center text-[17px] w-full h-full border-[1px] border-[#CECBCA] rounded-lg p-[8px]"
                                    )}
                                    name="description"
                                    type="up-down" {...register('description')}
                                    textAlignVertical="top"
                                    placeholder="Description"
                                    editable
                                    multiline
                                    onChangeText={(value) => setDescription(value)}
                                    // onChange={(e) => setDescription(e)}
                                    // onChange={(value) => setDescription(value)}
                                />
                            </View>
                            <View style={tailwind.style("flex justify-end items-end mb-[15px] ml-[22px] mr-[18px] ")}>
                                <TouchableOpacity
                                    style={tailwind.style(
                                        "flex justify-center items-center w-[120px] h-[30px] bg-[#2B83F2] rounded-lg"
                                    )}
                                    type="button"
                                    onPress={() => {
                                        añadirDatos();
                                    }}
                                >
                                    <Text style={tailwind.style("text-[#FFFFFF] text-[16px] ")}>
                                        Añadir
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    onPress={() => setModalVisible()}
                    style={tailwind.style(
                        "flex justify-center items-center bg-[#2B83F2] w-full h-[45px] rounded-t-3xl"
                    )}
                >
                    <Text style={tailwind.style("text-[20px] text-[#FFFFFF] font-bold")}>
                        ADD NEW
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Parts;

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 350,
        height: 350,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4,
        elevation: 5,
    }
});