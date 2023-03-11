import React, { useEffect } from "react";
import { Animated, View, Text, Easing } from 'react-native';
import 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import StylesContainers from '../style/containers'
import StylesTexts from '../style/texts'
import StylesSubject from './styles/subject'

import IconDelete from '../../assets/svg/delete';
import IconEdit from '../../assets/svg/edit';
import IconDone from '../../assets/svg/done';
import IconUndone from '../../assets/svg/undone';

const Subject = (props) => {
    // const translateX = new Animated.Value(0);
    // const translateY = new Animated.Value(0);
    // const swipe = Animated.event(
    //     [ { nativeEvent: { translationX: translateX } }, ],
    //     { useNativeDriver: true }
    // );
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

    // const swipeLeft = () => {
    //     return (
    //         <View
    //             style={[
    //                 StylesSubject.subjectSwipe,
    //                 {alignItems: 'flex-start'},
    //                 props.isComplete ? {backgroundColor: '#F7F19E'} : {backgroundColor: '#B2F7C1'}
    //             ]}>
    //             {
    //                 props.isComplete ?
    //                     <View style={{ alignItems: 'center' }}>
    //                         <IconUndone size={iconSize}/>
    //                         <Text style={StylesTexts.small}> Undone </Text>
    //                     </View>
    //                     :
    //                     <View style={{ alignItems: 'center' }}>
    //                         <IconDone size={iconSize}/>
    //                         <Text style={StylesTexts.small}> Done </Text>
    //                     </View>
    //             }
    //         </View>
    //     );
    // };

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
                // renderLeftActions={swipeLeft}
                renderRightActions={swipeRight}
                onSwipeableOpen={
                    (direction) => {
                        if (direction == 'right') {
                            animStart()
                        }
                        // else {
                        //     refSwipeable.current.close()
                        //     props.setComplete()
                        // }
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