import React, { useState, useRef, useEffect } from "react";
import moment from 'moment';
import 'moment/locale/ru'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Modal, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions, Keyboard } from 'react-native';

import StylesContainers from '../style/containers'
import StylesButtons from '../style/buttons'
import StylesTexts from '../style/texts'

const ModalEdit = (props) => {
    const windowDimensions = Dimensions.get('window');
    const windowWidth = windowDimensions.width

    const [edit, setEdit] = useState(false)
    const [inputTitle, setInputTitle] = useState(props.title)
    const [inputGrade, setInputGrade] = useState(props.grade)
    const [inputDescription, setInputDescription] = useState(props.description)

    const [modalDate, setModalDate] = useState(false)
    const [date, setDate] = useState('')

    return (
        <Modal visible={true} animationType='slide' transparent={true} >
            <KeyboardAvoidingView behavior='height'
                style={StylesContainers.modalBackground}
            >
                <View style={StylesContainers.modalContainer}>
                    <ScrollView keyboardShouldPersistTaps='handled'>
                        <View style={StylesContainers.modal}>
                            <View style={{gap: 30}}>
                                <View style={{gap: 5}}>
                                    <Text style={StylesTexts.big}> Заголовок </Text>
                                    <TextInput
                                        blurOnSubmit={false}
                                        editable={edit}
                                        inputMode="text"
                                        placeholder="Введите заголовок"
                                        returnKeyType='done'
                                        value={inputTitle}
                                        onChangeText={(v) => setInputTitle(v)}
                                        onSubmitEditing={() => Keyboard.dismiss()}
                                        style={[StylesTexts.input, StylesTexts.default]}
                                        placeholderTextColor={StylesTexts.placeholder.color}
                                        maxLength={50}
                                    />
                                </View>

                                { !props.extraShow ? null :
                                    <View style={windowWidth >= 350 ? StylesContainers.rowSpace : StylesContainers.column}>
                                        <TouchableOpacity onPress={() => {setModalDate(true)}}
                                            disabled={!edit}
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
                                            blurOnSubmit={false}
                                            editable={edit}
                                            inputMode="numeric"
                                            placeholder="Баллов"
                                            returnKeyType='done'
                                            value={inputGrade}
                                            onChangeText={(v) => setInputGrade(v)}
                                            onSubmitEditing={() => Keyboard.dismiss()}
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
                                        <View style={{overflow: 'hidden' }}>
                                            <TextInput
                                                blurOnSubmit={false}
                                                editable={edit}
                                                inputMode="text"
                                                placeholder="Описание"
                                                value={inputDescription}
                                                onChangeText={(v) => setInputDescription(v)}
                                                style={[StylesTexts.input, StylesTexts.inputMulti]}
                                                placeholderTextColor={StylesTexts.placeholder.color}
                                                multiline={true}
                                            />
                                        </View>
                                    </View>
                                }
                            </View>
                            <View style={{flexDirection: 'row', width: '100%', marginTop: 100, gap: 10}}>
                                <TouchableOpacity onPress={() => props.show()}
                                    activeOpacity={ 0.5 }
                                    style={[StylesButtons.default, StylesButtons.bottom, { flex: 0.5, backgroundColor: 'black' }]}
                                >
                                    <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Закрыть </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={ () => {
                                        if(edit) {
                                            if(inputTitle.length === 0) alert('Заголовок пустой!')
                                            else {
                                                props.saveInputs(inputTitle, inputDescription, inputGrade)
                                                setEdit(!edit)
                                            }
                                        } else { setEdit(!edit) }
                                    }}
                                    style={[StylesButtons.default, StylesButtons.bottom, edit ? StylesButtons.accept : StylesButtons.edit, { flex: 0.5 }]}
                                >
                                    <Text style={[StylesTexts.default]}> {edit ? 'Сохранить' : 'Изменить' } </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default ModalEdit;