import React, { useState, useRef } from "react";
import { Animated, View, Text, Easing } from 'react-native';
import 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import StylesContainers from '../style/containers'
import StylesTexts from '../style/texts'
import StylesNote from './styles/note'

import IconDelete from '../../assets/svg/delete';
import IconEdit from '../../assets/svg/edit';
import IconDone from '../../assets/svg/done';
import IconUndone from '../../assets/svg/undone';

const Note = (props) => {
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

    const swipeRight = () => {
        return (
            <View
                style={[
                    StylesNote.noteSwipe,
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
        <Animated.View style={[StylesNote.noteContainer, {transform: [{scale: animValue}], opacity: animValue}]}>
            <Swipeable
                renderRightActions={swipeRight}
                onSwipeableOpen={
                    (direction) => {
                        if (direction == 'right') {
                            animStart()
                        }
                    }
                }
                containerStyle={{flex: 1}}
                childrenContainerStyle={{flex: 1}}
            >
                <View style={StylesNote.note}>
                    <Text
                        style={[StylesTexts.default, {borderBottomWidth: 1}]}
                        numberOfLines={1}
                    > 
                        {props.title}
                    </Text>

                    <Text
                        style={[StylesNote.textField, StylesTexts.small]}
                        numberOfLines={2}
                    >
                        {props.description}
                    </Text>
                </View>
            </Swipeable>
        </Animated.View>
    );
};

export default Note;