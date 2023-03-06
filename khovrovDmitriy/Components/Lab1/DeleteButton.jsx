import { StyleSheet, Text, TouchableOpacity} from 'react-native';



const DeleteButton = ({setTodos})=>
{
  return (
    <TouchableOpacity 
    style={styles.deleteButton}
    onPress = {() => {setTodos([]);}}
    >
      <Text style={{fontSize:20, color:'white'}}>Удалить</Text>
    </TouchableOpacity>
    );
}

export default DeleteButton;

const styles = StyleSheet.create({
    deleteButton:
    {
      backgroundColor:'#ff6161',
      width:"90%",
      height:40,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      marginTop:10
    }
  });
  