import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Gauge } from '@wz-mobile/rn-gauge';
import LabelDOS from './LabelDOS';

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
                emptyColor="#FF0000"
                colors={['cyan', 'magenta', 'yellow', 'red', 'white']}
                sweepAngle={250}
                strokeWidth={10}
                fillProgress={60}
                renderLabel={() =>
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
                            {Label}
                            <LabelDOS />
                        </Text>
                    </View>
                }
                size={200}
                thickness={60}
            />;
        </View>
    );
};