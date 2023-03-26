import { useState } from "react";
import { Button, View, Text } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import {defaultMode, darkMode} from '../../features/darkmode/DarkModeSlice'

const DarkModeButton = ()=>
{
    const [isDarkMode, SetIsDarkMode] = useState(false);
    const DarkModeHandler = ()=>
    {
        if (!isDarkMode)
            dispatch(darkMode());
        else
            dispatch(defaultMode());
        
        SetIsDarkMode(!isDarkMode);
    }

    const darkModeState = useSelector(state=>state.darkMode.value)
    const dispatch = useDispatch()
    return(
        <View>
            <Button 
            title='Dark mode'
            onPress={DarkModeHandler}
            />
            <Text>{darkModeState}</Text>
        </View>
    );
}

export default DarkModeButton;