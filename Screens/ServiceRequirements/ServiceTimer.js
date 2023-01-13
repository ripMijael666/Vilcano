import React from 'react';
import tailwind from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";

import Svg, {
    G,
    Path,
    Rect,
    Defs,
    ClipPath,
    Circle
} from 'react-native-svg';

export default function ServiceTimer() {
    const navigation = useNavigation();
    return (
        <View style={tailwind.style(
            "flex-1 bg-[#F6F6FA] pt-5"
        )}>
            <StatusBar translucent style='auto' />
            <View style={tailwind.style(
                "flex flex-row justify-between items-end ml-[18px] mr-[18px]"
            )}>
                <Text style={tailwind.style(
                    "font-700 text-[22px]"
                )}>
                    Service Requirement Timer
                </Text>
            </View>
            <View style={tailwind.style(
                "flex justify-center items-center"
            )}>
                <View style={tailwind.style("flex justify-center items-center")}>
                    <Text style={tailwind.style("text-[120px] text-[#000000] font-bold")}>
                        77
                    </Text>
                    <Text style={tailwind.style("text-[20px] text-[#000000] mt-[-10px] font-normal ")}>
                        Minutes Elapsed
                    </Text>
                </View>
            </View>
            <View style={tailwind.style(
                "flex flex-row justify-center items-center mt-[18px]"
            )}>
                <View style={tailwind.style(
                    "flex flex-row mr-[12px] ml-[12px] justify-between items-center w-[98px] h-[30px] bg-[#71AD46] rounded-lg pl-[15px] pr-[15px]"
                )}>
                    <Svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M19.1717 0.913735C19.9694 1.24653 20.5627 1.76651 20.8176 2.54765C21.1357 3.52753 20.8858 4.39649 20.1209 5.13371C18.3387 6.85313 16.549 8.57024 14.7642 10.2874C13.4768 11.5261 12.1516 12.7348 10.9121 14.0105C9.75848 15.2006 8.0596 15.4086 6.72675 14.4149C5.02534 12.8064 3.32141 11.2002 1.62253 9.58942C0.605222 8.63264 0.431043 7.37543 1.15805 6.33084C2.1072 4.96732 4.19483 4.73159 5.45196 5.86863C6.42887 6.75145 7.37803 7.65969 8.32213 8.57255C8.53922 8.78286 8.64525 8.75282 8.84214 8.55869C11.1847 6.29386 13.55 4.04983 15.88 1.77576C16.809 0.869825 17.8667 0.537034 19.1717 0.916046V0.913735Z" fill="#FDFEFE" />
                    </Svg>
                    <Text style={tailwind.style(
                        "text-[#FFFFFF] text-[16px]"
                    )}>
                        START
                    </Text>
                </View>
                <View style={tailwind.style(
                    "flex flex-row mr-[12px] ml-[12px] justify-between items-center w-[98px] h-[30px] bg-[#B6B6B6] rounded-lg pl-[15px] pr-[15px]"
                )}>
                    <Svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M1.25 0C1.58152 0 1.89946 0.131696 2.13388 0.366117C2.3683 0.600537 2.5 0.918479 2.5 1.25V13.75C2.5 14.0815 2.3683 14.3995 2.13388 14.6339C1.89946 14.8683 1.58152 15 1.25 15C0.918479 15 0.600537 14.8683 0.366117 14.6339C0.131696 14.3995 0 14.0815 0 13.75V1.25C0 0.918479 0.131696 0.600537 0.366117 0.366117C0.600537 0.131696 0.918479 0 1.25 0ZM8.75 0C9.08152 0 9.39946 0.131696 9.63388 0.366117C9.8683 0.600537 10 0.918479 10 1.25V13.75C10 14.0815 9.8683 14.3995 9.63388 14.6339C9.39946 14.8683 9.08152 15 8.75 15C8.41848 15 8.10054 14.8683 7.86612 14.6339C7.6317 14.3995 7.5 14.0815 7.5 13.75V1.25C7.5 0.918479 7.6317 0.600537 7.86612 0.366117C8.10054 0.131696 8.41848 0 8.75 0Z" fill="white" />
                    </Svg>

                    <Text style={tailwind.style(
                        "text-[#FFFFFF] text-[16px]"
                    )}>
                        PAUSE
                    </Text>
                </View>
                <View style={tailwind.style(
                    "flex flex-row mr-[12px] ml-[12px] justify-between items-center w-[98px] h-[30px] bg-[#B6B6B6] rounded-lg pl-[8px] pr-[8px]"
                )}>
                    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M3.25 7H0.75C0.335781 7 0 7.33578 0 7.75V15.25C0 15.6642 0.335781 16 0.75 16H3.25C3.66422 16 4 15.6642 4 15.25V7.75C4 7.33578 3.66422 7 3.25 7ZM2 14.75C1.58578 14.75 1.25 14.4142 1.25 14C1.25 13.5858 1.58578 13.25 2 13.25C2.41422 13.25 2.75 13.5858 2.75 14C2.75 14.4142 2.41422 14.75 2 14.75ZM12 2.54538C12 3.87088 11.1884 4.61438 10.9601 5.5H14.1389C15.1826 5.5 15.9951 6.36706 16 7.31556C16.0026 7.87612 15.7642 8.47959 15.3925 8.85297L15.3891 8.85641C15.6964 9.58569 15.6465 10.6076 15.0982 11.3398C15.3695 12.149 15.096 13.1431 14.5863 13.676C14.7206 14.2259 14.6564 14.6939 14.3941 15.0707C13.7563 15.9871 12.1755 16 10.8387 16L10.7498 16C9.24085 15.9994 8.00588 15.45 7.01357 15.0086C6.51491 14.7867 5.86291 14.5121 5.36822 14.503C5.16385 14.4993 5 14.3325 5 14.1281V7.44775C5 7.34775 5.04007 7.25178 5.11119 7.18147C6.34913 5.95822 6.88144 4.66312 7.8961 3.64675C8.35872 3.18325 8.52697 2.48312 8.68963 1.80606C8.8286 1.22791 9.11929 0 9.75001 0C10.5 0 12 0.25 12 2.54538Z" fill="white" />
                    </Svg>

                    <Text style={tailwind.style(
                        "text-[#FFFFFF] text-[16px]"
                    )}>
                        FINALIZE
                    </Text>
                </View>
            </View>
            <View style={tailwind.style(
                "flex justify-center items-center mt-6"
            )}>
                <View style={tailwind.style(
                    "flex flex-row items-center w-[380px] h-[90px] bg-[#FFFFFF] rounded-t-5 pl-[12px] pr-[12px]"
                )}>
                    <View style={tailwind.style("flex w-[65px]")}>
                        <View style={tailwind.style("flex justify-center items-center bg-[#F6F6FA] w-[50px] h-[50px] rounded-full")}>
                            <Svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M24.7916 5.95598C24.6823 5.51506 24.1305 5.36565 23.8092 5.68694L20.1783 9.3178L16.8639 8.76555L16.3116 5.4511L19.9425 1.82024C20.2657 1.497 20.11 0.946217 19.6661 0.835865C17.3527 0.262623 14.8053 0.880299 12.9972 2.68792C11.0616 4.62346 10.5289 7.42913 11.3346 9.87542L0.915161 20.2949C-0.305054 21.5151 -0.305054 23.4936 0.915161 24.7138C2.13538 25.934 4.11389 25.934 5.33411 24.7138L15.7448 14.3032C18.192 15.1191 20.9923 14.5805 22.9406 12.6323C24.7506 10.8222 25.3673 8.27092 24.7916 5.95598V5.95598ZM3.12512 23.6757C2.47815 23.6757 1.95325 23.1508 1.95325 22.5038C1.95325 21.8564 2.47815 21.332 3.12512 21.332C3.77209 21.332 4.297 21.8564 4.297 22.5038C4.297 23.1508 3.77209 23.6757 3.12512 23.6757Z" fill="#B6B6B6" />
                            </Svg>
                        </View>
                    </View>
                    <View style={tailwind.style("flex flex-col w-[280px]")}>
                        <View style={tailwind.style("flex justify-center items-center bg-[#71AD46] rounded-lg w-[85px] h-[16px]")}>
                            <Text style={tailwind.style("text-[#FFFFFF] text-[12px] font-light")}>
                                FINALIZED
                            </Text>
                        </View>
                        <View style={tailwind.style("flex justify-start")}>
                            <Text style={tailwind.style("text-[#000000] text-[18px] font-bold ")}>
                                BRAKES
                            </Text>
                            <Text style={tailwind.style("text-[#000000] text-[16px] font-semibold ")}>
                                Check braking system
                            </Text>
                            <View style={tailwind.style("flex flex-row items-center")}>
                                <Svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M12.4021 7.29102C12.4549 7.01562 12.4549 6.73438 12.4021 6.45898L12.9262 6.16797C12.9872 6.13477 13.0136 6.06641 12.9932 6.00195C12.8571 5.58008 12.6235 5.19727 12.3188 4.88086C12.2721 4.83203 12.1969 4.82031 12.136 4.85352L11.6118 5.14453C11.3904 4.96289 11.1365 4.82227 10.8622 4.72852V4.14648C10.8622 4.08008 10.8135 4.02148 10.7464 4.00781C10.2934 3.91016 9.83229 3.91406 9.40162 4.00781C9.33458 4.02148 9.28582 4.08008 9.28582 4.14648V4.72852C9.01158 4.82227 8.75764 4.96289 8.53621 5.14453L8.01209 4.85352C7.95318 4.82031 7.87599 4.83203 7.82926 4.88086C7.52454 5.19727 7.29093 5.58008 7.15482 6.00195C7.1345 6.06641 7.16294 6.13477 7.22186 6.16797L7.74597 6.45898C7.69315 6.73438 7.69315 7.01562 7.74597 7.29102L7.22186 7.58203C7.16091 7.61523 7.1345 7.68359 7.15482 7.74805C7.29093 8.16992 7.52454 8.55078 7.82926 8.86914C7.87599 8.91797 7.95115 8.92969 8.01209 8.89648L8.53621 8.60547C8.75764 8.78711 9.01158 8.92773 9.28582 9.02148V9.60352C9.28582 9.66992 9.33458 9.72852 9.40162 9.74219C9.85463 9.83984 10.3158 9.83594 10.7464 9.74219C10.8135 9.72852 10.8622 9.66992 10.8622 9.60352V9.02148C11.1365 8.92773 11.3904 8.78711 11.6118 8.60547L12.136 8.89648C12.1949 8.92969 12.2721 8.91797 12.3188 8.86914C12.6235 8.55273 12.8571 8.16992 12.9932 7.74805C13.0136 7.68359 12.9851 7.61523 12.9262 7.58203L12.4021 7.29102ZM10.0761 7.82227C9.53163 7.82227 9.0908 7.39648 9.0908 6.875C9.0908 6.35352 9.53366 5.92773 10.0761 5.92773C10.6185 5.92773 11.0613 6.35352 11.0613 6.875C11.0613 7.39648 10.6205 7.82227 10.0761 7.82227ZM4.55048 5C5.98672 5 7.15075 3.88086 7.15075 2.5C7.15075 1.11914 5.98672 0 4.55048 0C3.11423 0 1.95021 1.11914 1.95021 2.5C1.95021 3.88086 3.11423 5 4.55048 5ZM8.63779 9.42383C8.59106 9.40039 8.54434 9.37305 8.49965 9.34766L8.33916 9.4375C8.21727 9.50391 8.07913 9.54102 7.94099 9.54102C7.71956 9.54102 7.50626 9.45117 7.3539 9.29492C6.98214 8.9082 6.69774 8.4375 6.53725 7.93555C6.42552 7.58984 6.57585 7.22461 6.90088 7.04297L7.06137 6.95312C7.05934 6.90234 7.05934 6.85156 7.06137 6.80078L6.90088 6.71094C6.57585 6.53125 6.42552 6.16406 6.53725 5.81836C6.55553 5.76172 6.58194 5.70508 6.60226 5.64844C6.52506 5.64258 6.4499 5.625 6.37067 5.625H6.03142C5.58043 5.82422 5.07866 5.9375 4.55048 5.9375C4.0223 5.9375 3.52256 5.82422 3.06954 5.625H2.73029C1.22294 5.625 0 6.80078 0 8.25V9.0625C0 9.58008 0.436765 10 0.975103 10H8.12586C8.33103 10 8.52199 9.9375 8.67842 9.83398C8.65404 9.75977 8.63779 9.68359 8.63779 9.60352V9.42383Z" fill="#B6B6B6" />
                                </Svg>
                                <Text style={tailwind.style("text-[#B6B6B6] text-[14px] font-light ml-[5px]")}>
                                    Henry Mccormick
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={tailwind.style(
                    "flex justify-center items-center w-[380px] h-[30px] bg-[#DC2A2A] rounded-b-6"
                )}>
                    <Text style={tailwind.style("text-[#FFFFFF] text-[17px] font-light")}>
                        HIGH PRIORITY
                    </Text>
                </View>
            </View>
            <View style={tailwind.style(
                "flex flex-row justify-between items-end ml-[18px] mr-[18px] mt-[12px]"
            )}>
                <Text style={tailwind.style(
                    "font-700 text-[22px]"
                )}>
                    Tracking
                </Text>
            </View>
            <View style={tailwind.style(
                "flex justify-center items-center mt-4"
            )}>
                <View style={tailwind.style(
                    "flex flex-row items-center w-[380px] h-[90px] bg-[#FFFFFF] rounded-[12px]pr-[12px]"
                )}>
                    <View style={tailwind.style("flex justify-center items-center w-[70px]")}>
                        <View style={tailwind.style(
                            "flex justify-center items-center w-[45px] h-[45px] bg-[#2B83F2] rounded-full"
                        )}>
                            <Svg width="18" height="18" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M12.4021 7.29102C12.4549 7.01562 12.4549 6.73438 12.4021 6.45898L12.9262 6.16797C12.9872 6.13477 13.0136 6.06641 12.9932 6.00195C12.8571 5.58008 12.6235 5.19727 12.3188 4.88086C12.2721 4.83203 12.1969 4.82031 12.136 4.85352L11.6118 5.14453C11.3904 4.96289 11.1365 4.82227 10.8622 4.72852V4.14648C10.8622 4.08008 10.8135 4.02148 10.7464 4.00781C10.2934 3.91016 9.83229 3.91406 9.40162 4.00781C9.33458 4.02148 9.28582 4.08008 9.28582 4.14648V4.72852C9.01158 4.82227 8.75764 4.96289 8.53621 5.14453L8.01209 4.85352C7.95318 4.82031 7.87599 4.83203 7.82926 4.88086C7.52454 5.19727 7.29093 5.58008 7.15482 6.00195C7.1345 6.06641 7.16294 6.13477 7.22186 6.16797L7.74597 6.45898C7.69315 6.73438 7.69315 7.01562 7.74597 7.29102L7.22186 7.58203C7.16091 7.61523 7.1345 7.68359 7.15482 7.74805C7.29093 8.16992 7.52454 8.55078 7.82926 8.86914C7.87599 8.91797 7.95115 8.92969 8.01209 8.89648L8.53621 8.60547C8.75764 8.78711 9.01158 8.92773 9.28582 9.02148V9.60352C9.28582 9.66992 9.33458 9.72852 9.40162 9.74219C9.85463 9.83984 10.3158 9.83594 10.7464 9.74219C10.8135 9.72852 10.8622 9.66992 10.8622 9.60352V9.02148C11.1365 8.92773 11.3904 8.78711 11.6118 8.60547L12.136 8.89648C12.1949 8.92969 12.2721 8.91797 12.3188 8.86914C12.6235 8.55273 12.8571 8.16992 12.9932 7.74805C13.0136 7.68359 12.9851 7.61523 12.9262 7.58203L12.4021 7.29102ZM10.0761 7.82227C9.53163 7.82227 9.0908 7.39648 9.0908 6.875C9.0908 6.35352 9.53366 5.92773 10.0761 5.92773C10.6185 5.92773 11.0613 6.35352 11.0613 6.875C11.0613 7.39648 10.6205 7.82227 10.0761 7.82227ZM4.55048 5C5.98672 5 7.15075 3.88086 7.15075 2.5C7.15075 1.11914 5.98672 0 4.55048 0C3.11423 0 1.95021 1.11914 1.95021 2.5C1.95021 3.88086 3.11423 5 4.55048 5ZM8.63779 9.42383C8.59106 9.40039 8.54434 9.37305 8.49965 9.34766L8.33916 9.4375C8.21727 9.50391 8.07913 9.54102 7.94099 9.54102C7.71956 9.54102 7.50626 9.45117 7.3539 9.29492C6.98214 8.9082 6.69774 8.4375 6.53725 7.93555C6.42552 7.58984 6.57585 7.22461 6.90088 7.04297L7.06137 6.95312C7.05934 6.90234 7.05934 6.85156 7.06137 6.80078L6.90088 6.71094C6.57585 6.53125 6.42552 6.16406 6.53725 5.81836C6.55553 5.76172 6.58194 5.70508 6.60226 5.64844C6.52506 5.64258 6.4499 5.625 6.37067 5.625H6.03142C5.58043 5.82422 5.07866 5.9375 4.55048 5.9375C4.0223 5.9375 3.52256 5.82422 3.06954 5.625H2.73029C1.22294 5.625 0 6.80078 0 8.25V9.0625C0 9.58008 0.436765 10 0.975103 10H8.12586C8.33103 10 8.52199 9.9375 8.67842 9.83398C8.65404 9.75977 8.63779 9.68359 8.63779 9.60352V9.42383Z" fill="#FFFFFF" />
                            </Svg>
                        </View>
                    </View>
                    <View>
                        <Text style={tailwind.style("text-[#000000] text-[16px] font-light")}>
                            02/02/2023 17:25
                        </Text>
                        <Text style={tailwind.style(
                            "text-[#000000] text-[18px] font-bold"
                        )}>
                            ASSIGNED
                        </Text>
                        <View style={tailwind.style("flex flex-row")}>
                            <Text style={tailwind.style("text-[#000000] text-[16px] font-light")}>
                                To: Henry Mccormick &nbsp;
                            </Text>
                            <Text style={tailwind.style("text-[#000000] text-[18px] font-bold")}>• &nbsp;</Text>
                            <Text style={tailwind.style("text-[#000000] text-[16px] font-light")}>
                                By: Duncan Sheik
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={tailwind.style("flex ml-[55px] mt-[10px] w-[2px] h-[17px] bg-[#2B83F2]")}></View>

            <View style={tailwind.style(
                "flex justify-center items-center mt-[10px]"
            )}>
                <View style={tailwind.style(
                    "flex flex-row items-center w-[380px] h-[90px] bg-[#FFFFFF] rounded-[12px]pr-[12px]"
                )}>
                    <View style={tailwind.style("flex justify-center items-center w-[70px]")}>
                        <View style={tailwind.style(
                            "flex justify-center items-center w-[45px] h-[45px] bg-[#60BB29] rounded-full"
                        )}>
                            <Svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M19.1717 0.913735C19.9694 1.24653 20.5627 1.76651 20.8176 2.54765C21.1357 3.52753 20.8858 4.39649 20.1209 5.13371C18.3387 6.85313 16.549 8.57024 14.7642 10.2874C13.4768 11.5261 12.1516 12.7348 10.9121 14.0105C9.75848 15.2006 8.0596 15.4086 6.72675 14.4149C5.02534 12.8064 3.32141 11.2002 1.62253 9.58942C0.605222 8.63264 0.431043 7.37543 1.15805 6.33084C2.1072 4.96732 4.19483 4.73159 5.45196 5.86863C6.42887 6.75145 7.37803 7.65969 8.32213 8.57255C8.53922 8.78286 8.64525 8.75282 8.84214 8.55869C11.1847 6.29386 13.55 4.04983 15.88 1.77576C16.809 0.869825 17.8667 0.537034 19.1717 0.916046V0.913735Z" fill="#FDFEFE" />
                            </Svg>
                        </View>
                    </View>
                    <View>
                        <Text style={tailwind.style("text-[#000000] text-[16px] font-light")}>
                            02/02/2023 17:25
                        </Text>
                        <Text style={tailwind.style(
                            "text-[#000000] text-[18px] font-bold"
                        )}>
                            ASSIGNED
                        </Text>
                        <View style={tailwind.style("flex flex-row")}>
                            <Text style={tailwind.style("text-[#000000] text-[16px] font-light")}>
                                To: Henry Mccormick &nbsp;
                            </Text>
                            <Text style={tailwind.style("text-[#000000] text-[18px] font-bold")}>• &nbsp;</Text>
                            <Text style={tailwind.style("text-[#000000] text-[16px] font-light")}>
                                By: Duncan Sheik
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={tailwind.style("flex ml-[55px] mt-[10px] w-[2px] h-[17px] bg-[#60BB29]")}></View>

            <View style={tailwind.style(
                "flex justify-center items-center mt-[10px]"
            )}>
                <View style={tailwind.style(
                    "flex flex-row items-center w-[380px] h-[90px] bg-[#FFFFFF] rounded-[12px]pr-[12px]"
                )}>
                    <View style={tailwind.style("flex justify-center items-center w-[70px]")}>
                        <View style={tailwind.style(
                            "flex justify-center items-center w-[45px] h-[45px] bg-[#EBB733] rounded-full"
                        )}>
                            <Svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M1.25 0C1.58152 0 1.89946 0.131696 2.13388 0.366117C2.3683 0.600537 2.5 0.918479 2.5 1.25V13.75C2.5 14.0815 2.3683 14.3995 2.13388 14.6339C1.89946 14.8683 1.58152 15 1.25 15C0.918479 15 0.600537 14.8683 0.366117 14.6339C0.131696 14.3995 0 14.0815 0 13.75V1.25C0 0.918479 0.131696 0.600537 0.366117 0.366117C0.600537 0.131696 0.918479 0 1.25 0ZM8.75 0C9.08152 0 9.39946 0.131696 9.63388 0.366117C9.8683 0.600537 10 0.918479 10 1.25V13.75C10 14.0815 9.8683 14.3995 9.63388 14.6339C9.39946 14.8683 9.08152 15 8.75 15C8.41848 15 8.10054 14.8683 7.86612 14.6339C7.6317 14.3995 7.5 14.0815 7.5 13.75V1.25C7.5 0.918479 7.6317 0.600537 7.86612 0.366117C8.10054 0.131696 8.41848 0 8.75 0Z" fill="white" />
                            </Svg>
                        </View>
                    </View>
                    <View>
                        <Text style={tailwind.style("text-[#000000] text-[16px] font-light")}>
                            02/02/2023 17:25
                        </Text>
                        <Text style={tailwind.style(
                            "text-[#000000] text-[18px] font-bold"
                        )}>
                            ASSIGNED
                        </Text>
                        <View style={tailwind.style("flex flex-row")}>
                            <Text style={tailwind.style("text-[#000000] text-[16px] font-light")}>
                                To: Henry Mccormick &nbsp;
                            </Text>
                            <Text style={tailwind.style("text-[#000000] text-[18px] font-bold")}>• &nbsp;</Text>
                            <Text style={tailwind.style("text-[#000000] text-[16px] font-light")}>
                                By: Duncan Sheik
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={tailwind.style("flex ml-[55px] mt-[10px] w-[2px] h-[17px] bg-[#EBB733]")}></View>
        </View>
    )
}