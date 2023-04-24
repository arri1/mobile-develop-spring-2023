import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type operatorType = '+' | '-' | '*' |'/';
type ButtonType = OperatorType | 'AC' | '.' | '=' | number;

const CalculatorButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const Calculator: React.FC = () => {
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
          <CalculatorButton title="7" onPress={() => handleNumberClick('7')} />
          <CalculatorButton title="8" onPress={() => handleNumberClick('8')} />
          <CalculatorButton title="9" onPress={() => handleNumberClick('9')} />
          <CalculatorButton title="/" onPress={() => handleOperatorClick('/')} />
        </View>
        <View style={styles.row}>
          <CalculatorButton title="4" onPress={() => handleNumberClick('4')} />
          <CalculatorButton title="5" onPress={() => handleNumberClick('5')} />
          <CalculatorButton title="6" onPress={() => handleNumberClick('6')} />
          <CalculatorButton title="*" onPress={() => handleOperatorClick('*')} />
        </View>
        <View style={styles.row}>
          <CalculatorButton title="1" onPress={() => handleNumberClick('1')} />
          <CalculatorButton title="2" onPress={() => handleNumberClick('2')} />
          <CalculatorButton title="3" onPress={() => handleNumberClick('3')} />
          <CalculatorButton title="-" onPress={() => handleOperatorClick('-')} />
        </View>
        <View style={styles.row}>
          <CalculatorButton title="." onPress={() => handleOperatorClick('.')} />
          <CalculatorButton title="0" onPress={() => handleNumberClick('0')} />
          <CalculatorButton title="=" onPress={() => handleEqualClick()} />
          <CalculatorButton title="+" onPress={() => handleOperatorClick('+')} />
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

export default Calculator;