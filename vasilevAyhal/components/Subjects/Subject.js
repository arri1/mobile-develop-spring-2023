import React from "react";
import { Animated, View, Text, Easing } from 'react-native';
import 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import StylesTexts from '../style/texts'
import StylesSubject from './styles/subject'

import IconDelete from '../../assets/svg/delete';

const Subject = (props) => {
    const iconSize = 20
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
                    StylesSubject.subjectSwipe,
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
        <Animated.View style={[StylesSubject.subjectContainer, {transform: [{scale: animValue}], opacity: animValue}]}>
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
                <View style={StylesSubject.subject}>
                    <Text
                        style={StylesTexts.default}
                        numberOfLines={1}
                    > 
                        {props.title}
                    </Text>
                </View>
            </Swipeable>
        </Animated.View>
    );
};

export default Subject;