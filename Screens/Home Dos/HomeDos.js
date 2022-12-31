import React, { useContext } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";

function HomeDos() {
    return (
        <View style={styles.containerGobal}>
            <View style={styles.container}>
                <View
                    style={styles.contenedorLogo}
                >
                    <TouchableOpacity
                        onPress={() => signOut()}
                    >
                        <Image
                            style={styles.logoAzul}
                            source={require("../../assets/logo_azul.png")}
                        />
                    </TouchableOpacity>

                    <View style={styles.usuarioTextConstainer}>
                        <View>
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
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerGobal: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        alignItems: 'center',
        marginRight: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        // backgroundColor: '#EAEBEC',
        borderRadius: 40,
        width: 420,
        // height: 650,
        marginTop: 25,
        marginHorizontal: 37
    },
    contenedorLogo: {
        // marginTop: 5,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    campana: {
        width: 28,
        height: 35,
        marginRight: 15
    },
    usuarioTextConstainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'flex-end',
        justifyContent:'flex-end'
    },
    textUser: {
        textAlign: 'right',
        // alignItems: 'center',
    },
    textTipo: {
        textAlign: 'right',
        // alignItems: 'center',
    },
    textSingOut: {
        textAlign: 'right',
        // alignItems: 'center',
    },
    usuarioImage: {
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        width: 51,
        height: 51,
        marginRight: 15
    },
});

export default HomeDos;