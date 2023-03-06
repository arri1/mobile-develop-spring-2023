import { useState, useMemo } from "react";
import { Text, View } from "react-native";

const Lab3 = () => {
  const [grade, setGrade] = useState(5);
  const countPopulation = (grade) => {
    return grade ** 2;
  };

  const memoizedVal = useMemo(() => countPopulation(grade), []);

  return (
    <View style={{ marginTop: 45 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "purple", fontSize: 14, fontWeight: "800" }}>
          Current Grade: {grade}
          Current Population: {memoizedVal}
        </Text>
      </View>
    </View>
  );
};
export default Lab3;