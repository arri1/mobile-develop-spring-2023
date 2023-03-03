import React, { useState, useRef } from "react";
import { Animated, View, Text, Easing } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import StylesContainers from '../style/containers'
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
            <View style={[StylesTodo.TodoItemSwipe, StylesTodo.TodoItemSwipeLeft]}>
                {
                    props.isComplete ?
                        <IconUndone width={'40'} height={'40%'}/> :
                        <IconDone width={'40'} height={'40%'}/>
                }
            </View>
        );
    };

    const swipeRight = () => {
        return (
            <View style={[StylesTodo.TodoItemSwipe, StylesTodo.TodoItemSwipeRight]}>
                <IconDelete width={'40'} height={'40%'}/>
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
                            props.setComplete()
                            refSwipeable.current.close()
                        }
                    }
                }
                containerStyle={{flex: 1}}
                childrenContainerStyle={{flex: 1}}
            >
                <View style={StylesTodo.TodoItem}>
                    <Text> {props.id + " " + props.title + " " + props.isComplete} </Text>
                </View>
            </Swipeable>
        </Animated.View>
    );
};

export default TodoItem;