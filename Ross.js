// import React, { useEffect, useState } from 'react';
// import { View, ActivityIndicator, Text } from 'react-native';

// export default function Datos() {
//     const [showDots, setShowDots] = useState(true);
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         setTimeout(function () {
//             fetch('https://slogan.com.bo/vulcano/orders/total/abierto')
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.status) {
//                         console.log(data.data);
//                         setData(data.data)
//                     } else {
//                         console.error(data.error)
//                     }
//                 })
//                 .then(setShowDots(false))
//         }, 4000);
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
//             <View>
//                 {data.map(row => <TableRow key={data.id} row={row} />)}
//             </View>
//     );
// };

// class TableRow extends React.Component {
//     render() {
//         let row = this.props.row;
//         return (
//             <View>
//                 <Text>
//                     {row.data}
//                 </Text>
//             </View>
//         )
//     }
// }