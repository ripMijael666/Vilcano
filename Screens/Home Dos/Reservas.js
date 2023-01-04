// import React, { useEffect, useState, useContext } from 'react';
// import {
//     View,
//     StyleSheet,
//     Text,
//     Image,
//     TouchableOpacity,
//     ActivityIndicator
// } from "react-native";

// import { Ionicons } from '@expo/vector-icons';

// function Reservas() {
//     const [showDots, setShowDots] = useState(true);
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         setTimeout(function () {
//             fetch('https://slogan.com.bo/vulcano/orders/all/abierto')
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.status) {
//                         // console.log(data.data);
//                         setData(data.data)
//                     } else {
//                         // console.error(data.error)
//                     }
//                 })
//                 .then(setShowDots(false))
//         }, 1000);
//     }, [])

//     return (

//         showDots ?
//             <ActivityIndicator />
//             :
//             <View>

//                 <Table data={data} />
//             </View>
//     )
// }

// const Table = (props) => {

//     const { data } = props;

//     return (
//         <View>
//             {data.map(row => <TableRow key={data.id} row={row} />)}
//         </View>
//     );
// };

// class TableRow extends React.Component {
//     render() {
//         let row = this.props.row;
//         return (
//             <View
//                 styles={styles.derecha}
//             >
//                 <View
//                     style={styles.ContenedorReservaAzul}
//                 >
//                     <View
//                         style={styles.ContenedorReservaBlanco}
//                     >
//                         <View
//                             style={styles.ContenedorDosReserva}
//                         >
//                             <View
//                                 style={styles.contenedorAuto}
//                             >
//                                 <Image
//                                     style={styles.logoAuto}
//                                     source={require("../../assets/logoAuto.png")}
//                                 />
//                             </View>

//                             <View
//                                 style={styles.contenedorDatosUno}
//                             >
//                                 <Text
//                                     style={styles.titulo}
//                                 >
//                                     {row.code}
//                                 </Text>

//                                 <Text
//                                     style={styles.subtitulo}
//                                 >
//                                     Modelo
//                                 </Text>

//                                 <Text
//                                     style={styles.datos}
//                                 >
//                                     {row.car.cars_models_version.cars_model.catalogues_record.name}
//                                 </Text>

//                                 <Text
//                                     style={styles.subtitulo}
//                                 >
//                                     Cliente
//                                 </Text>

//                                 <Text
//                                     style={styles.datos}
//                                 >
//                                     {row.contact_name}
//                                 </Text>
//                             </View>

//                             <View
//                                 style={styles.contenedorDatosDos}
//                             >
//                                 <Text
//                                     style={styles.subtituloHora}
//                                 >
//                                     Hora
//                                 </Text>

//                                 <View
//                                     style={styles.ContenedorDosHora}
//                                 >
//                                     <Ionicons name="md-time-outline" size={18} color="#B6B6B6" />

//                                     <Text
//                                         style={styles.datosHora}
//                                     >
//                                         {row.modified}
//                                     </Text>
//                                 </View>

//                                 <View
//                                     style={styles.ContenedorDosHora}
//                                 >
//                                     <Text
//                                         style={styles.subtituloHora}
//                                     >
//                                         Estado
//                                     </Text>

//                                     <View
//                                         style={styles.contenedorEstado}
//                                     >
//                                         <Text
//                                             style={styles.TextoColorAzul}
//                                         >
//                                             {row.status}
//                                         </Text>
//                                     </View>
//                                 </View>

//                                 <TouchableOpacity>
//                                     <Text
//                                         style={styles.verDetalles}
//                                     >
//                                         Ver detalles
//                                     </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 </View>


//                 <View
//                     style={styles.ContenedorReservaVerde}
//                 >
//                     <View
//                         style={styles.ContenedorReservaBlancoVerde}
//                     >
//                         <View
//                             style={styles.ContenedorDosReserva}
//                         >

//                             <View
//                                 style={styles.contenedorAuto}
//                             >
//                                 <Image
//                                     style={styles.logoAuto}
//                                     source={require("../../assets/logoAuto.png")}
//                                 />
//                             </View>

//                             <View
//                                 style={styles.contenedorDatosUno}
//                             >
//                                 <Text
//                                     style={styles.titulo}
//                                 >
//                                    {row.code}
//                                 </Text>

//                                 <Text
//                                     style={styles.subtitulo}
//                                 >
//                                     Modelo
//                                 </Text>

//                                 <Text
//                                     style={styles.datos}
//                                 >
//                                      {row.car.cars_models_version.cars_model.catalogues_record.name}
//                                 </Text>

//                                 <Text
//                                     style={styles.subtitulo}
//                                 >
//                                     Cliente
//                                 </Text>

//                                 <Text
//                                     style={styles.datos}
//                                 >
//                                     {row.contact_name}
//                                 </Text>
//                             </View>

//                             <View
//                                 style={styles.contenedorDatosDos}
//                             >
//                                 <Text
//                                     style={styles.subtituloHora}
//                                 >
//                                     Hora
//                                 </Text>

//                                 <View
//                                     style={styles.ContenedorDosHora}
//                                 >
//                                     <Ionicons name="md-time-outline" size={18} color="#B6B6B6" />

//                                     <Text
//                                         style={styles.datosHora}
//                                     >
//                                         {row.modified}
//                                     </Text>
//                                 </View>

//                                 <View
//                                     style={styles.ContenedorDosHora}
//                                 >
//                                     <Text
//                                         style={styles.subtituloHora}
//                                     >
//                                         Estado
//                                     </Text>

//                                     <View
//                                         style={styles.contenedorEstadoVerde}
//                                     >
//                                         <Text
//                                             style={styles.TextoColorVerde}
//                                         >
//                                             {row.status}
//                                         </Text>
//                                     </View>
//                                 </View>

//                                 <TouchableOpacity>
//                                     <Text
//                                         style={styles.verDetalles}
//                                     >
//                                         Ver detalles
//                                     </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 </View>


//                 <View
//                     style={styles.ContenedorReservaRojo}
//                 >
//                     <View
//                         style={styles.ContenedorReservaBlancoRojo}
//                     >
//                         <View
//                             style={styles.ContenedorDosReserva}
//                         >

//                             <View
//                                 style={styles.contenedorAuto}
//                             >
//                                 <Image
//                                     style={styles.logoAuto}
//                                     source={require("../../assets/logoAuto.png")}
//                                 />
//                             </View>

//                             <View
//                                 style={styles.contenedorDatosUno}
//                             >
//                                 <Text
//                                     style={styles.titulo}
//                                 >
//                                     OT 523673
//                                 </Text>

//                                 <Text
//                                     style={styles.subtitulo}
//                                 >
//                                     Modelo
//                                 </Text>

//                                 <Text
//                                     style={styles.datos}
//                                 >
//                                    {row.car.cars_models_version.cars_model.catalogues_record.name}
//                                 </Text>

//                                 <Text
//                                     style={styles.subtitulo}
//                                 >
//                                     Cliente
//                                 </Text>

//                                 <Text
//                                     style={styles.datos}
//                                 >
//                                      {row.contact_name}
//                                 </Text>
//                             </View>

//                             <View
//                                 style={styles.contenedorDatosDos}
//                             >
//                                 <Text
//                                     style={styles.subtituloHora}
//                                 >
//                                     Hora
//                                 </Text>

//                                 <View
//                                     style={styles.ContenedorDosHora}
//                                 >
//                                     <Ionicons name="md-time-outline" size={18} color="#B6B6B6" />

//                                     <Text
//                                         style={styles.datosHora}
//                                     >
//                                         {row.modified}
//                                     </Text>
//                                 </View>

//                                 <View
//                                     style={styles.ContenedorDosHora}
//                                 >
//                                     <Text
//                                         style={styles.subtituloHora}
//                                     >
//                                         Estado
//                                     </Text>

//                                     <View
//                                         style={styles.contenedorEstadoRojo}
//                                     >
//                                         <Text
//                                             style={styles.TextoColorRojo}
//                                         >
//                                             {row.status}
//                                         </Text>
//                                     </View>
//                                 </View>

//                                 <TouchableOpacity>
//                                     <Text
//                                         style={styles.verDetalles}
//                                     >
//                                         Ver detalles
//                                     </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     verDetalles: {
//         color: '#2B83F2',
//         marginTop: 8,
//         fontSize: 12,
//         fontWeight: '600',
//         marginLeft: 78,
//     },
//     contenedorEstado: {
//         borderColor: '#2B83F2',
//         borderWidth: 1,
//         width: 85,
//         height: 22,
//         borderRadius: 5,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     contenedorEstadoVerde: {
//         borderColor: '#74C343',
//         borderWidth: 1,
//         width: 85,
//         height: 22,
//         borderRadius: 5,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     contenedorEstadoRojo: {
//         borderColor: '#EA3F3F',
//         borderWidth: 1,
//         width: 85,
//         height: 22,
//         borderRadius: 5,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     ContenedorDosHora: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//     },
//     contenedorDatosDos: {
//         marginTop: 27,
//         marginLeft: -45
//     },
//     datosHora: {
//         color: '#B6B6B6',
//         fontWeight: '700',
//     },
//     datos: {
//         color: '#B6B6B6',
//         fontWeight: '700',
//         marginLeft: -15
//     },
//     subtitulo: {
//         color: '#000000',
//         fontWeight: '700',
//         marginLeft: -15
//     },
//     subtituloHora: {
//         color: '#000000',
//         fontWeight: '700',
//         // marginLeft: -15
//     },
//     ContenedorDosReserva: {
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         // alignItems: 'flex-start'
//     },
//     contenedorDatosUno: {
//         marginTop: 8,
//         marginLeft: -38
//     },
//     titulo: {
//         fontSize: 16,
//         color: '#000000',
//         fontWeight: '700',
//         marginLeft: -15
//     },
//     ContenedorReservaBlanco: {
//         backgroundColor: '#FFFF',
//         width: 410,
//         height: 125,
//         borderRadius: 12,
//         borderColor: '#2B83F2',
//         borderWidth: 1,
//         marginLeft: 20
//     },
//     ContenedorReservaBlancoVerde: {
//         backgroundColor: '#FFFF',
//         width: 410,
//         height: 125,
//         borderRadius: 12,
//         borderColor: '#74C343',
//         borderWidth: 1,
//         marginLeft: 20
//     },
//     ContenedorReservaBlancoRojo: {
//         backgroundColor: '#FFFF',
//         width: 410,
//         height: 125,
//         borderRadius: 12,
//         borderColor: '#EA3F3F',
//         borderWidth: 1,
//         marginLeft: 20
//     },
//     ContenedorReservaRojo: {
//         backgroundColor: '#EA3F3F',
//         width: 410,
//         height: 125,
//         borderRadius: 12,
//         marginTop: 25,
//         marginLeft: 16
//     },
//     ContenedorReservaVerde: {
//         backgroundColor: '#74C343',
//         width: 410,
//         height: 125,
//         borderRadius: 12,
//         marginTop: 25,
//         marginLeft: 16,
//         // paddingBottom: 90
//     },
//     ContenedorReservaAzul: {
//         backgroundColor: '#2B83F2',
//         width: 410,
//         height: 125,
//         borderRadius: 12,
//         marginTop: 25,
//         marginLeft: 16
//     },
//     derecha: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 25
//     },
//     logoAuto: {
//         width: 38,
//         height: 36,
//     },
//     contenedorAuto: {
//         borderColor: '#BBBABA',
//         borderWidth: 1,
//         width: 60,
//         height: 60,
//         borderRadius: 15,
//         marginTop: 28,
//         marginLeft: -50,
//         marginHorizontal: 5,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     TextoColorVerde: {
//         color: '#60BB29',
//         marginTop: -3,
//         fontSize: 12,
//         fontWeight: '500'
//     },
//     NumeroColorVerde: {
//         color: '#60BB29',
//         fontSize: 21,
//         fontWeight: '700',
//         paddingVertical: 5
//     },
//     TextoColorRojo: {
//         color: '#DC2A2A',
//         marginTop: -3,
//         fontSize: 12,
//         fontWeight: '500'
//     },
//     NumeroColorRojo: {
//         color: '#DC2A2A',
//         fontSize: 21,
//         fontWeight: '700',
//         paddingVertical: 5
//     },
//     TextoColorAzul: {
//         color: '#2B83F2',
//         marginTop: -3,
//         fontSize: 12,
//         fontWeight: '500'
//     },
//     NumeroColorAzul: {
//         color: '#2B83F2',
//         fontSize: 21,
//         fontWeight: '700',
//         paddingVertical: 5
//     },
//     ContenedorDos: {
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//     },
//     circuloCentroVerde: {
//         width: 55,
//         height: 55,
//         backgroundColor: '#60BB29',
//         borderRadius: 100,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     circuloCentroRojo: {
//         width: 55,
//         height: 55,
//         backgroundColor: '#DC2A2A',
//         borderRadius: 100,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     circuloCentroAzul: {
//         width: 55,
//         height: 55,
//         backgroundColor: '#2B83F2',
//         borderRadius: 100,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     contenedorVerde: {
//         borderColor: '#60BB29',
//         borderWidth: 1.5,
//         borderRadius: 12,
//         width: 105,
//         height: 150,
//         justifyContent: 'center',
//         marginHorizontal: 6,
//         alignItems: 'center',
//     },
//     contenedorRojo: {
//         borderColor: '#DC2A2A',
//         borderWidth: 1.5,
//         borderRadius: 12,
//         width: 105,
//         height: 150,
//         marginHorizontal: 6,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     contenedorAzul: {
//         borderColor: '#2B83F2',
//         borderWidth: 1.5,
//         borderRadius: 12,
//         width: 105,
//         height: 150,
//         marginHorizontal: 6,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     containerGobal: {
//         flex: 1,
//         backgroundColor: '#FDFDFD',
//         alignItems: 'center',
//     },
//     container: {
//         flex: 1,
//         backgroundColor: '#FDFDFD',
//         // backgroundColor: '#EAEBEC',
//         borderRadius: 40,
//         width: 420,
//         // height: 650,
//         marginTop: 25,
//         marginHorizontal: 37
//     },
//     contenedorLogo: {
//         // marginTop: 5,
//         marginLeft: 15,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     logoAzul: {
//         width: 135,
//         height: 24
//     },
//     campana: {
//         width: 28,
//         height: 35,
//         marginRight: 15
//     },
//     busqueda: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 35
//     },
//     vistaInput: {
//         fontSize: 16,
//         borderRadius: 12,
//         width: 240,
//         height: 45,
//         borderWidth: 1,
//         borderColor: '#BBBABA',
//         color: '#000000',
//         padding: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginLeft: 15
//     },
//     input: {
//         fontSize: 16,
//         borderRadius: 12,
//         width: 220,
//         height: 45,
//         padding: 5,
//         justifyContent: 'center'
//     },
//     lupa: {
//         marginLeft: -105
//     },
//     seleccionar: {
//         width: 120,
//         height: 45,
//         backgroundColor: '#2B83F2',
//         marginRight: 15,
//         borderRadius: 8,
//     },
//     textoSeleccionar: {
//         color: '#FFFF',
//         fontSize: 20,
//         fontWeight: '400',
//     },
//     botonseleccionar: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     TituloAuto: {
//         fontSize: 22,
//         marginTop: 28,
//         marginLeft: 18,
//         color: '#000000',
//         fontWeight: '600'
//     },
//     margin: {
//         marginTop: 24
//     },
// });


// export default Reservas;