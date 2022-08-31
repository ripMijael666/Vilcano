import React from 'react';
import { Context as AuthContext } from '../context/AuthContext'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    ScrollView
} from 'react-native';


function Login() {
    const [email, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { signIn } = React.useContext(AuthContext);
    return (
        <SafeAreaView
            style={{
                flex: 1
            }}
        >
            <ScrollView>
                <View
                    style={styles.container}
                >

                    <View
                        style={styles.logo}
                    >
                        <Image
                            style={styles.logoImagen}
                            source={require("../assets/Logo.png")}
                        />
                    </View>

                    <View
                        style={styles.contenedorSignUp}
                    >
                        <Text
                            style={styles.signUp}
                        >
                            SIGN UP
                        </Text>
                    </View>


                    <View
                        style={styles.contenedorRegistro}
                    >

                        <Text
                            style={styles.texto}
                        >
                            USUARIO
                        </Text>
                        <View
                            style={styles.vistaInput}
                        >
                            <Image
                                source={require("../assets/usuario.png")}
                            />

                            <TextInput
                                value={email}
                                onChangeText={setUsername}
                                style={styles.input}
                                placeholder="Name/email"

                            />
                        </View>
                        <View
                            style={styles.contenedorContraseña}
                        >
                            <Text
                                style={styles.texto}
                            >
                                CONTRASEÑA
                            </Text>
                            <View
                                style={styles.vistaInput}
                            >
                                <Image
                                    source={require("../assets/contraseña.png")}
                                />

                                <TextInput
                                    value={password}
                                    onChangeText={setPassword}
                                    style={styles.input}
                                    placeholder="Password"
                                    secureTextEntry
                                />
                            </View>
                        </View>
                    </View>

                    <View
                        style={styles.top}
                    >
                        <TouchableOpacity>
                            <Text
                                style={styles.textP}
                            >
                                ¿olvidaste tu contraseña?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={styles.boton}
                    >
                        <TouchableOpacity
                            title="Sign in"
                            onPress={() => signIn({ email, password })}
                        >
                            <Text
                                style={styles.textoBoton}
                            >
                                INGRESAR
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={styles.top}
                    >
                        <Text
                            style={styles.textP}
                        >
                            continuar con
                        </Text>
                    </View>

                    <View
                        style={styles.ContenedorDos}
                    >
                        <View
                            style={styles.GGFB}
                        >
                            <TouchableOpacity>

                                <Image
                                    style={styles.google}
                                    source={require("../assets/google.png")}
                                />
                            </TouchableOpacity>

                        </View>

                        <View
                            style={styles.GGFB}
                        >
                            <TouchableOpacity>

                                <Image
                                    style={styles.facebook}
                                    source={require("../assets/facebook.png")}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View
                        style={styles.dos}
                    >
                        <Text
                            style={styles.textP}
                        >
                            ¿No tienes una cuenta?
                        </Text>

                        <TouchableOpacity>
                            <Text
                                style={styles.registrar}
                            >
                                Regístrate
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        marginTop: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
        backgroundColor: '#2B83F2',
        width: 250,
        height: 250,
    },
    logoImagen: {
        width: 168,
        height: 30
    },
    contenedorSignUp: {
        marginTop: 40
    },
    contenedorRegistro: {
        marginTop: 45,
    },
    signUp: {
        color: '#000000',
        fontSize: 40,
        fontWeight: '500'
    },
    texto: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'left',
        fontWeight: '500'
    },
    vistaInput: {
        fontSize: 16,
        borderRadius: 12,
        width: 300,
        height: 45,
        borderWidth: 1,
        borderColor: '#BBBABA',
        color: '#000000',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        fontSize: 16,
        borderRadius: 12,
        width: 300,
        height: 45,
        padding: 5,
        justifyContent: 'center'
    },
    contenedorContraseña: {
        marginTop: 35,
    },
    top: {
        marginTop: 20
    },
    textP: {
        color: '#B6B6B6',
        fontWeight: '400'
    },
    textoBoton: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFFFFF',
    },
    boton: {
        backgroundColor: "#2B83F2",
        padding: 5,
        marginTop: 35,
        width: 300,
        height: 60,
        borderRadius: 8,
    },
    ContenedorDos: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 12
    },
    dos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 35
    },
    GGFB: {
        borderWidth: 1,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        width:155,
        height: 90,
        borderRadius: 12,
        borderColor: '#BBBABA',
        marginLeft: 10,
        marginRight:10
    },
    google: {
        height: 27,
        width: 85,
    },
    facebook: {
        width: 130,
        height: 14
    },
    registrar: {
        color: '#2B83F2',
        fontWeight: '700',
        marginHorizontal: 10
    },
});


export default Login;