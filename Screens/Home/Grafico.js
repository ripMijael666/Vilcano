import React, { useEffect, useState, useContext } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator
} from "react-native";

import { BarChart } from 'react-native-chart-kit'
import { Dimensions } from "react-native";


function Grafico() {
    const [showDots, setShowDots] = useState(true);

    //const [data, setData] = useState([]); ([]);
    const [dataGraph, setDataGraph] = useState([]);
    
    const screenWidth = Dimensions.get("window").width;


    const getDatos = () => {

        fetch('https://slogan.com.bo/vulcano/orders/yearlyGraph')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // console.log(data.data);
                    // setData(data.data)
                    // console.log(data.data.labels);
                    
                    const graph = {
                        labels: data.data.labels,
                        datasets: [
                        {
                            data: data.data.data
                        }
                        ]
                    };

                    console.warn(graph);
                    setDataGraph(
                       graph
                    );
                    setShowDots(false);
                } else {
                    console.error(data.error)
                }
            })
    }
    // console.log(labels);
    // console.log(datasets);
    useEffect(() => {
        getDatos();
    }, []);

    return (

        showDots ?
            <ActivityIndicator />
            :
            <BarChart
                data={dataGraph}
                width={screenWidth}
                height={220}
                chartConfig={{
                    backgroundColor: "#2B83F2",
                    backgroundGradientFrom: "#2B83F2",
                    backgroundGradientTo: "#2B83F2",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 20,
                    },
                    propsForDots: {
                        r: "4",
                        strokeWidth: "1",
                        stroke: "#ffa726"
                    }
                }}
                yAxisLabel="$"
                verticalLabelRotation={30}
            />
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
                {dataGraph != null ?
                    <BarChart
                        data={row.data}
                        width={
                            Dimensions.get("window").width
                        }
                        height={210}
                        yAxisSuffix="kg"
                        yAxisInterval={1}
                        chartConfig={{
                            backgroundColor: "#2B83F2",
                            backgroundGradientFrom: "#2B83F2",
                            backgroundGradientTo: "#2B83F2",
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 20,
                            },
                            propsForDots: {
                                r: "4",
                                strokeWidth: "1",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 5,
                            borderRadius: 12,
                            marginTop: 15,
                            borderColor: '#2B83F2',
                            borderWidth: 1.5,
                        }}
                    /> : <></>
                }
            </View>
        )
    }
}

// const styles = StyleSheet.create({

// })

export default Grafico;