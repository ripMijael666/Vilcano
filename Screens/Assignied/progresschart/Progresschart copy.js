import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Gauge from "react-native-gauge";

export default function ProgressChart() {
    const [label, setLabel] = useState("hooa")
    return (
        <View>
            <Gauge
                emptyColor="#C1C1C1"
                colors={['cyan', 'magenta', 'yellow', 'red', 'white']}
                sweepAngle={250}
                strokeWidth={10}
                fillProgress={60}
                renderLabel={() => {
                    return (
                        <Text>
                            {label()}
                        </Text>
                    )

                }}
                size={200}
                thickness={60}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imagen: {
        backgroundColor: "#FF0000"
    }
})
