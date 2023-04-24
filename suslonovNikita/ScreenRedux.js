import React, {useMemo, useState} from "react"
import { View, Text, Button } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/CounterSlice'
const ScreenRedux = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return(
        <View>
            <Text>{count}</Text>
            <Button title='+' onPress={() => dispatch(increment())}/>
            <Button title='-' onPress={() => dispatch(decrement())}/>
        </View>
    )
}
export default ScreenRedux