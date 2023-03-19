import React, { useState, useRef, useEffect } from "react";
import moment from 'moment';
import 'moment/locale/ru'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Modal, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';

import StylesContainers from '../style/containers'
import StylesButtons from '../style/buttons'
import StylesTexts from '../style/texts'

const ModalAdd = (props) => {
    const windowDimensions = Dimensions.get('window');
    const windowWidth = windowDimensions.width
    
    const inputSecond = useRef(null)
    const inputThird = useRef(null)
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState("")
    const [inputGrade, setInputGrade] = useState("")
    
    const [modalDate, setModalDate] = useState(false)
    const [date, setDate] = useState('')


    const checkTitle = () => {
        if(inputTitle.length === 0) alert('Заголовок пустой!')
        else props.addInputs(inputTitle, inputDescription, inputGrade)
    }

    return (
        <Modal visible={true} animationType='slide' transparent={true}>
            <KeyboardAvoidingView behavior='height'
                style={StylesContainers.modalBackground}
            >
                <View style={StylesContainers.modalContainer}>
                    <ScrollView>
                        <View style={StylesContainers.modal}>
                            <View style={{gap: 30}}>
                                <Text style={StylesTexts.big}>
                                    Создание нового задания
                                </Text>
                                
                                <View style={{gap: 5}}>
                                    <Text style={StylesTexts.big}> Заголовок </Text>
                                    <TextInput
                                        autoFocus={true}
                                        blurOnSubmit={false}
                                        inputMode="text"
                                        placeholder="Введите заголовок"
                                        returnKeyType='next'
                                        value={inputTitle}
                                        onChangeText={(v) => setInputTitle(v)}
                                        onSubmitEditing={() => props.extraShow ? inputThird.current.focus() : inputSecond.current.focus()}
                                        style={StylesTexts.input}
                                        placeholderTextColor={StylesTexts.placeholder.color}
                                        maxLength={50}
                                    />
                                </View>
                                
                                { !props.extraShow ? null :
                                    <View style={windowWidth >= 350 ? StylesContainers.rowSpace : StylesContainers.column}>
                                        <TouchableOpacity onPress={() => {setModalDate(true)}}
                                            style={[StylesTexts.input, {width: 180}]}
                                        >
                                            <Text style={[!date ? StylesTexts.placeholder : null]}>
                                                {!date ? 'Без срока сдачи' : `Срок сдачи: ${moment(date).locale('ru').format('D MMMM')}`}
                                            </Text>
                                        </TouchableOpacity>

                                        <DateTimePickerModal
                                            isVisible={modalDate}
                                            mode='date'
                                            onHide={() => setModalDate(false)}
                                            onConfirm={(d) => {
                                                setDate(d)
                                                setModalDate(false)
                                            }}
                                            onCancel={() => { setDate(''); setModalDate(false) }}
                                        />

                                        <TextInput
                                            ref={inputThird}
                                            blurOnSubmit={false}
                                            inputMode="numeric"
                                            placeholder="Баллов"
                                            returnKeyType='next'
                                            value={inputGrade}
                                            onChangeText={(v) => setInputGrade(v)}
                                            onSubmitEditing={() => inputSecond.current.focus()}
                                            style={[StylesTexts.input, {textAlign: 'center', width: 100}]}
                                            placeholderTextColor={StylesTexts.placeholder.color}
                                            numberOfLines={1}
                                            maxLength={10}
                                        />
                                    </View>
                                }
                                { !props.descriptionShow ? null :
                                    <View style={{gap: 5}}>
                                        <Text style={StylesTexts.big}> Описание </Text>
                                        <TextInput
                                            ref={inputSecond}
                                            blurOnSubmit={false}
                                            inputMode="text"
                                            placeholder="Введите описание"
                                            value={inputDescription}
                                            onChangeText={(v) => setInputDescription(v)}
                                            style={[StylesTexts.input, StylesTexts.inputMulti]}
                                            placeholderTextColor={StylesTexts.placeholder.color}
                                            multiline={true}
                                        />
                                    </View>
                                }
                            </View>

                            <View style={{flexDirection: 'row', width: '100%', marginTop: 100, gap: 10}}>
                                <TouchableOpacity
                                    activeOpacity={ 0.5 }
                                    style={[StylesButtons.default, StylesButtons.bottom, StylesButtons.cancel, { flex: 0.5 }]}
                                    onPress={() => props.show()}
                                >
                                    <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Закрыть </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={ 0.5 }
                                    style={[StylesButtons.default, StylesButtons.bottom, StylesButtons.accept, { flex: 0.5 }]}
                                    onPress={() => checkTitle()}
                                >
                                    <Text style={[StylesTexts.default]}> Создать </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default ModalAdd;