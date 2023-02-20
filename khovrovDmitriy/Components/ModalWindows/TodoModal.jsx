import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Stars from '../Stars/Stars';


const TodoModal = ({activeModal, SetActiveModal, choosedTodo,todos,SetTodos})=>
{
    const BackTouchEvent = ()=>
    {
        SetActiveModal(false)
    }

    return(
        <View 
        style={activeModal?styles.backModal:styles.backModalHide}
        onTouchStart={BackTouchEvent}
        >
            <View 
            style={activeModal?styles.modalWindow:styles.modalWindowHide}
            onTouchStart={(e) => {
                e.stopPropagation();
            }}>
                    <Stars 
                    todos={todos}
                    SetTodos={SetTodos}
                    id={choosedTodo.id}
                    priority={choosedTodo.priority}
                    />
            </View>
        </View>
    );
}

export default TodoModal;


const styles = StyleSheet.create({
    backModal:
    {
        backgroundColor:'rgba(191, 191, 191,0.4)',
        position:'absolute',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        zIndex:1
    },
    modalWindow:
    {
        backgroundColor:'white',
        width:300,
        height:150,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'     
    },
    backModalHide:{display:'none'},
    modalWindowHide:{}
})