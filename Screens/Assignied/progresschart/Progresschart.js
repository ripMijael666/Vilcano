import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import Gauge from "react-native-gauge";

export default function ProgressChart() {
    return (
        // <View style={styles.imagen}>
            <Gauge
                size={75}
                progress={0.5}
                animated={true}
                alwaysUseEndAngle={true}
                endAngle={0}
                unfilledEndAngle={0.5}
                thickness={4}
                borderWidth={1}
                needleWidth={3}
                needleHeight={20}
                needleBorderRadius={25}
            />
        // {/* </View> */}
    )
}

const styles = StyleSheet.create({
    imagen: {
        backgroundColor: "#FF0000"
    }
})