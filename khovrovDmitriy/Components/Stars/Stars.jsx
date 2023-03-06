import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Star from "./Star";


const countStars = 5;
const stars = [];



const Stars = ({todos,SetTodos,id,priority}) =>
{
    const [starsModel, SetStarsModel] = useState([]);
    

    const TouchStar = (choosed_priority) =>
    {
        const newStars = starsModel.map(star =>
            star.id <= choosed_priority ? star={...star,active:true} : star={...star,active:false}
        );
        SetStarsModel(newStars);
        
        const newTodos = todos;
        
        for (let i=0;i<todos.length;i++)
        {
            if (newTodos[i].id === id)
                newTodos[i].priority = choosed_priority;
        }

        SetTodos(newTodos);
    }

    useEffect(()=>
    {
        const newStars = starsModel.map(star =>
            star.id <= priority ? star={...star,active:true} : star={...star,active:false}
        );
        SetStarsModel(newStars);
    },[priority])

    useEffect(()=>
    {
        stars.length = 0;
        for (let i=0;i<countStars;i++)
        {
            if (i == 0)
                stars.push({id:i,active:true});
            else
                stars.push({id:i,active:false});
        }
        SetStarsModel(stars);
    },[])



    return (
        <View style={styles.container}>
            {starsModel.map((star)=><Star key={star.id} star={star} TouchStar={TouchStar}/>)}
        </View>
    );
}

export default Stars;

const styles=StyleSheet.create({
    container:
    {
        flexDirection:"row",
        justifyContent:'center'
    }
});