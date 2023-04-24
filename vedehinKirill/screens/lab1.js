import {
  SafeAreaView, View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';

function Lab1() { // eslint error "Function component is not a function declaration" (???)
  const win = 'Вы победили!';
  const lose = 'Вы проиграли!';
  const draw = 'Ничья!';

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(checkResult(playerChoice, computerChoice));
  }, [playerChoice, computerChoice]);

  const checkResult = () => {
    if (playerChoice === computerChoice) {
      return draw;
    }
    if (playerChoice === 1) {
      return computerChoice === 2 ? win : lose;
    }
    if (playerChoice === 2) {
      return computerChoice === 3 ? win : lose;
    }
    if (playerChoice === 3) {
      return computerChoice === 1 ? win : lose;
    }
    return '';
  };

  const play = (player) => {
    setPlayerChoice(player);
    setComputerChoice(Math.floor(Math.random() * 3) + 1); // 1, 2, 3 : камень, ножницы, бумага
  };

  const choiceWord = (choice) => {
    switch (choice) {
      case 1:
        return 'Камень';
      case 2:
        return 'Ножницы';
      case 3:
        return 'Бумага';
      default:
        return '';
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.mainContainer}>

        <View style={styles.gameResult}>
          <Text style={styles.gameResultText}>{result}</Text>
        </View>

        <View style={styles.gameField}>
          <View style={styles.column}>
            <Text>{choiceWord(playerChoice)}</Text>
            <Text style={styles.playerName}>вы</Text>
          </View>

          <View style={styles.column}>
            <Text>{choiceWord(computerChoice)}</Text>
            <Text style={styles.playerName}>компьютер</Text>
          </View>
        </View>

        <View style={styles.gameButtons}>
          <TouchableOpacity style={styles.button} onPress={() => play(1)}>
            <Text style={styles.whiteText}>Камень</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => play(2)}>
            <Text style={styles.whiteText}>Ножницы</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => play(3)}>
            <Text style={styles.whiteText}>Бумага</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#787878',
    paddingTop: Constants.statusBarHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  blackText: {
    color: '#000',
  },
  playerName: {
    fontSize: 20,
  },

  gameResult: {
    height: 120,
    justifyContent: 'flex-end',

    alignItems: 'center',
  },
  gameResultText: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  gameField: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  col: {
    flex: 1,
    justifyContent: '',
    alignItems: 'center',
  },

  gameButtons: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#36bed9',
    borderRadius: 20,
  },
});

export default Lab1;
