import { View, Text } from "react-native"
import { useEffect, useMemo, useState } from "react";

const FirstSquare = () => {
    const [position, setPosition] = useState({ x: 0, y: 150 });
    const [direction, setDirection] = useState(10);

    const importantCalculation = () => {
        let t = 0;
        for (let i = 0; i < 30_000_000; i++) { t = i; }
        return 42;
    }

    const importantNumber = useMemo(importantCalculation, [direction])

    useEffect(() => {
        setInterval(() => {
            setPosition((position) => {
                if (position.x > 300) {
                    return { x: 0, y: position.y}
                }
                return { x: position.x + direction, y: position.y }
            });
        }, 50);
    }, []);

    return (
        <View
            style={{
                width: 50,
                height: 50,
                backgroundColor: "#C8DDDB",
                position: "absolute",
                left: position.x,
                top: position.y,
                justifyContent: "center",
            }}
        />
    )
}

export default FirstSquare
