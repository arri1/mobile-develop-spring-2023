import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App({text}) {
    return (
        <View style={styles.todo}>
            <Text style={{color:'#575757',fontSize:25}}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    todo:
    {
      backgroundColor:'white',
      width:'90%',
      height:80,
      marginTop:10,
      padding:20,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:30,
      borderWidth:1
    }
}
)