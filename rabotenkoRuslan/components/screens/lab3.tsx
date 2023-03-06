import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type operatorType = '+' | '-' | '*' |'/';
type ButtonType = OperatorType | 'AC' | '.' | '=' | number;

const Lab3: React.FC<CalculatorProps> = () => {
  const [result, setResult] = useState<string>('0');
  const [history, setHistory] = useState<string>('');

  const operators = ['+', '-', '*', '/'];

  const handleNumberClick = (num: number) => {
    if (result === '0'|| result === 'Error') {
      setResult(num.toString());
    } else {
      setResult(prevResult => prevResult + num.toString());
    }
  };

  const handleOperatorClick = (operator: OperatorType | '.') => {
    if (result !== 'Error') {
      setResult(prevResult => prevResult + operator);
    }
  };

  const handleEqualClick = () => {
    try {
      const evalResult = eval(result);
      const newHistoryItem = `${result}=${evalResult}`;
      setHistory(prevHistory =>
        prevHistory === '' ? newHistoryItem : `${prevHistory}\n${newHistoryItem}`
      );
      setResult(evalResult.toString());
    } catch (err) {
      setResult('Error');
    }
  };

  const handleClearClick = () => {
    setResult('0');
  };

  const handleHistoryClearClick = () => {
    setResult('0');
    setHistory('');
  };

  const memorizedHistory = useMemo(() => 
    history.split('\n').map((item, index) => (
      <View style={styles.historyItem} key={index}>
        <Text style={styles.historyText}>{item}</Text>
      </View>
      )), 
    [history]
  );

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberClick('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberClick('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberClick('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorClick('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberClick('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberClick('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberClick('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorClick('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberClick('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberClick('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberClick('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorClick('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorClick('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberClick('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEqualClick()}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorClick('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => handleClearClick()}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clearHistoryButton}
            onPress={() => handleHistoryClearClick()}>
            <Text style={styles.buttonText}>HC</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.historyContainer}>{memorizedHistory}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 20,
    marginBottom: 20,
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f00',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  clearHistoryButton: {
    width: 140,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#21c6df',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  historyContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  historyText: {
    fontSize: 20,
    marginRight: 10,
  },
});

export default Lab3;