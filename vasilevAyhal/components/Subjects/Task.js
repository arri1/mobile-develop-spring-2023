import React, { useRef } from "react";
import { Animated, View, Text, Easing, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import StylesContainers from '../style/containers'
import StylesButtons from '../style/buttons'
import StylesTexts from '../style/texts'
import StylesSubject from './styles/subject'

import IconDelete from '../../assets/svg/delete';
import IconEdit from '../../assets/svg/edit';
import IconDone from '../../assets/svg/done';
import IconUndone from '../../assets/svg/undone';
import IconCheck from '../../assets/svg/check';

const Task = (props) => {
    const iconSize = 30
    const animValue = new Animated.Value(0)
    const opacityValue = new Animated.Value(1)
    const refSwipeable = useRef(null)

    const animStart = async () => {
        Animated.timing(opacityValue, {
            toValue: 0,
            duration: 200,
            easing: Easing.cubic,
            useNativeDriver: true,
        }).start()
        Animated.timing(animValue, {
            toValue: -300,
            duration: 200,
            easing: Easing.cubic,
            useNativeDriver: true,
        }).start(() => props.setDelete())
    };

    const swipeLeft = () => {
        return (
            <View
                style={[
                    StylesSubject.subjectSwipe,
                    props.isComplete ? StylesButtons.edit : StylesButtons.accept
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
            <TouchableOpacity onPress={() => animStart()}
                style={[
                    StylesSubject.subjectSwipe,
                    StylesButtons.delete
                ]}>
                <View style={{ alignItems: 'center' }}>
                    <IconDelete size={iconSize}/>
                    <Text style={StylesTexts.small}> Delete </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <Animated.View style={[StylesSubject.subjectContainer, {transform: [{translateX: animValue}], opacity: opacityValue}]}>
            <Swipeable
                ref={refSwipeable}
                friction={3}
                overshootLeft={false}
                overshootRight={false}
                renderLeftActions={swipeLeft}
                renderRightActions={swipeRight}
                onSwipeableOpen={
                    (direction) => {
                        if (direction == 'left') {
                            refSwipeable.current.close()
                            props.setComplete()
                        }
                    }
                }
                containerStyle={{flex: 1}}
                childrenContainerStyle={{flex: 1}}
            >
                <View style={[StylesSubject.subject, {flexDirection: 'row', height: 100}]}>
                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity
                            style={[{width: 30, height: 30}, props.isComplete ? [StylesSubject.taskCheck, StylesButtons.accept] : StylesSubject.taskUnCheck]}
                            onPress={() => props.setComplete()}
                        >
                            { props.isComplete ? <IconCheck color={'#000000'} size={'100%'}/> : null }
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={[StylesTexts.big]} numberOfLines={1}>
                                {props.title}
                            </Text>
                            {
                                !props.grade ? null :
                                <View style={{alignItems: 'flex-end'}}>
                                    <Text style={[StylesTexts.default, StylesTexts.fadeColor]}> {props.grade} </Text>
                                    <Text style={[StylesTexts.small, StylesTexts.fadeColor]}> баллов </Text>
                                </View>
                            }
                        </View>

                        {
                            props.description.length === 0 ? null :
                            <Text style={[StylesSubject.textField, StylesTexts.small]} numberOfLines={2}>
                                {props.description}
                            </Text>
                        }
                    </View>
                    
                </View>
            </Swipeable>
        </Animated.View>
    );
};

export default Task;