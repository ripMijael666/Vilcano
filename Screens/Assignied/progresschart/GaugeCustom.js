import React, { useState } from "react";
import { VictoryPie } from "victory";

import Svg, {
    G,
    Path,
    Rect,
    Defs,
    ClipPath,
} from 'react-native-svg';

const WIDTH = 300;
const HEIGHT = 300;

const getColor = (x) => {
    switch (x) {
        case 1:
            return 'orange';
        case 2:
            return 'yellow';
        case 3:
            return 'green';
        default:
            return "blue";
    }
}

const GaugeCustom = () => {
    const [data, setData] = useState(
        [
            { x: 1, y: 0 },
            { x: 2, y: 1 },
            { x: 3, y: 2 },
        ]);
    return (
        <div style={{ height: HEIGHT, width: WIDTH }}>
            <Svg style={{ height: '100%', width: '100%' }}>
                <VictoryPie
                    data={data}
                    height={HEIGHT}
                    width={WIDTH}
                    padAngle={2}
                    innerRadius={WIDTH / 2 - 20}
                    startAngle={130}
                    endAngle={-130}
                    style={{
                        data: {
                            fill: ({ datum }) => getColor(datum.x),
                        },
                    }}

                    // minuto 9:17
                />
            </Svg>
        </div>
    );
};
export default App;