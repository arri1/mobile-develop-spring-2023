import { View, Text } from "react-native"
import { useEffect, useState } from "react";

const SecondSquare = () => {
    const [position, setPosition] = useState({ x: 0, y: 100 });
    const [direction, setDirection] = useState(10);
    const [timesRun, setTimesRun] = useState(0);
    const [inter, setInter] = useState();
    
    let textValue = ""

    const importantCalculation = () => {
        let t = 0;
        for (let i = 0; i < 30_000_000; i++) { t = i; }
        return 42;
    }

    const importantNumber = importantCalculation();

    useEffect(() => {
        setInter(setInterval(() => {
            setTimesRun(prev => prev + 1);
            setPosition((position) => {
                if (position.x > 300) {
                    return { x: 0, y: position.y}
                }
                return { x: position.x + direction, y: position.y }
            });
        }, 100))
    }, []);

    if (timesRun === 5) {
        textValue = "stop";
        clearInterval(inter);
    }

    return (
        <View
            style={{
                width: 50,
                height: 50,
                backgroundColor: "blue",
                position: "absolute",
                left: position.x,
                top: position.y,
                justifyContent: "center",
            }}
        >
            <Text
                style={{
                    textAlign: "center",
                    color: "white",
                }}
            >
                {textValue}
            </Text>
        </View>   
    )
}

export default SecondSquare
