import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Gauge } from '@wz-mobile/rn-gauge';


export default function ProgressChart() {
    const Label = () => (
        <View>
            <Text
                style={{
                    color: 'darkgray',
                    fontWeight: 'bold',
                    fontSize: 30,
                    top: 50,
                }}
            >
                Km/h
            </Text>
        </View>
    );

    return (
        <View>
            <Gauge
                emptyColor="#C1C1C1"
                colors={['cyan', 'magenta', 'yellow', 'red', 'white']}
                sweepAngle={250}
                strokeWidth={10}
                fillProgress={60}
                renderLabel={Label}
                size={200}
                thickness={60}
            />;
        </View>
    );
};

const styles = StyleSheet.create({
    imagen: {
        backgroundColor: "#FF0000"
    }
})