import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function DatosCliente() {
    const [showDots, setShowDots] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(function () {
            fetch('https://slogan.com.bo/vulcano/orders/all/abierto')
                .then(response => response.json())
                .then(data => {
                    if (data.status) {
                        console.log(data.data);
                        setData(data.data)
                    } else {
                        console.error(data.error)
                    }
                })
                .then(setShowDots(false))
        }, 1000);
    }, [])

    return (

        showDots ?
            <ActivityIndicator />
            :
            <View>

                <Table data={data} />
            </View>
    )
}

const Table = (props) => {

    const { data } = props;

    return (
        <View>
            {data.map(row => <TableRow key={data.id} row={row} />)}
        </View>
    );
};

class TableRow extends React.Component {
    render() {
        let row = this.props.row;
        return (
            <View>
                <View
                    style={styles.ContenedorDos}
                >
                    <View
                        style={styles.contenedorTransparente}
                    >
                        <Text
                            style={styles.textoTresNegro}
                        >
                            NOMBRE
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            {row.contact_name}
                        </Text>
                    </View>

                    <View
                        style={styles.contenedorTransparenteTelefono}
                    >
                        <Text
                            style={styles.textoTresNegro}
                        >
                            TELÉFONO
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            {row.contact_phone}
                        </Text>
                    </View>
                </View>
                <View
                    style={styles.ContenedorDos}
                >
                    <View
                        style={styles.contenedorTransparenteLargo}
                    >
                        <Text
                            style={styles.textoTresNegro}
                        >
                            EMAIL
                        </Text>

                        <Text
                            style={styles.contenedorTresClaro}
                        >
                            {row.client.email}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ContenedorDos: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    contenedorTransparente: {
        width: 245,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#BBBABA',
        borderWidth: 1,
        marginHorizontal: 5
    },
    textoTresNegro: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 5
    },
    contenedorTresClaro: {
        fontSize: 14,
        fontWeight: '500',
        color: '#B6B6B6',
        marginLeft: 5,
    },     
    textoTresNegro: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 5
    },
    contenedorTransparenteLargo: {
        width: 350,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#BBBABA',
        borderWidth: 1
    },
    contenedorTransparenteTelefono: {
        width: 93,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#BBBABA',
        borderWidth: 1,
        marginHorizontal: 5
    },
});