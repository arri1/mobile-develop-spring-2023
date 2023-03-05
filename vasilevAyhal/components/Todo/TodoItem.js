import React, { useState, useRef } from "react";
import { Animated, View, Text, Easing } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import StylesContainers from '../style/containers'
import StylesTexts from '../style/texts'
import StylesTodo from './styles/todo'

import IconDelete from '../../assets/svg/delete';
import IconEdit from '../../assets/svg/edit';
import IconDone from '../../assets/svg/done';
import IconUndone from '../../assets/svg/undone';

const TodoItem = (props) => {
    // const translateX = new Animated.Value(0);
    // const translateY = new Animated.Value(0);
    // const swipe = Animated.event(
    //     [ { nativeEvent: { translationX: translateX } }, ],
    //     { useNativeDriver: true }
    // );
    const iconSize = 30

    const animValue = new Animated.Value(1)

    const animStart = () => {
        Animated.timing(animValue, {
            toValue: 0,
            duration: 200,
            easing: Easing.cubic,
            useNativeDriver: true,
        }).start(() => props.setDelete())
    };

    const refSwipeable = useRef(null)
    
    const swipeLeft = () => {
        return (
            <View
                style={[
                    StylesTodo.TodoItemSwipe,
                    {alignItems: 'flex-start'},
                    props.isComplete ? {backgroundColor: '#F7F19E'} : {backgroundColor: '#B2F7C1'}
                ]}>
                {
                    props.isComplete ?
                        <View style={{ alignItems: 'center' }}>
                            <IconUndone size={iconSize}/>
                            <Text style={StylesTexts.small}> Undone </Text>
                        </View>
                        :
                        <View style={{ alignItems: 'center' }}>
                            <IconDone size={iconSize}/>
                            <Text style={StylesTexts.small}> Done </Text>
                        </View>
                }
            </View>
        );
    };

    const swipeRight = () => {
        return (
            <View
                style={[
                    StylesTodo.TodoItemSwipe,
                    {alignItems: 'flex-end', backgroundColor: '#FFA9A1'}
                ]}>
                <View style={{ alignItems: 'center' }}>
                    <IconDelete size={iconSize}/>
                    <Text style={StylesTexts.small}> Delete </Text>
                </View>
            </View>
        );
    };

    return (
        <Animated.View style={[StylesTodo.TodoItemContainer, {transform: [{scale: animValue}], opacity: animValue}]}>
            <Swipeable
                ref={refSwipeable}
                renderLeftActions={swipeLeft}
                renderRightActions={swipeRight}
                onSwipeableOpen={
                    (direction) => {
                        if (direction == 'right') {
                            animStart()
                        }
                        else {
                            refSwipeable.current.close()
                            props.setComplete()
                        }
                    }
                }
                containerStyle={{flex: 1}}
                childrenContainerStyle={{flex: 1}}
            >
                <View style={StylesTodo.TodoItem}>
                    <Text
                        style={[StylesTexts.default, {borderBottomWidth: 1}, props.isComplete ? {textDecorationLine: 'line-through'} : '']}
                    > 
                        {props.title}
                    </Text>

                    <Text
                        style={[StylesTexts.small, props.isComplete ? {textDecorationLine: 'line-through'} : '']}
                        numberOfLines={5}
                    >
                        {props.description}
                    </Text>
                </View>
            </Swipeable>
        </Animated.View>
    );
};

export default TodoItem;