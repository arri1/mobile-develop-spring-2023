import React, { useState, useRef, useEffect } from "react";
import { ActivityIndicator, Modal, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';

import StylesContainers from '../style/containers'
import StylesButtons from '../style/buttons'
import StylesTexts from '../style/texts'
import StylesNote from './styles/note'

const ModalEdit = (props) => {
    const [edit, setEdit] = useState(false)
    const [inputTitle, setInputTitle] = useState(props.title)
    const [inputDescription, setInputDescription] = useState(props.description ? props.description : '')

    return (
        <Modal
            visible={true}
            animationType='fade'
            transparent={true}
            statusBarTranslucent={true}
        >
            <KeyboardAvoidingView
                behavior='padding'
                style={[StylesContainers.default, StylesContainers.modalBackground]}
                enabled
            >
                <View style={[{ justifyContent: 'center', width: '90%', maxHeight: '90%', gap: 30 }]}>
                    <View style={{borderBottomWidth: 2, borderBottomColor: edit ? '#B3B3B3' : 'transparent' }}>
                        <TextInput
                            inputMode="text"
                            placeholder="Заголовок"
                            blurOnSubmit={false}
                            returnKeyType={'done'}
                            value={inputTitle}
                            onChangeText={(v) => setInputTitle(v)}
                            editable={edit}
                            style={[StylesTexts.big, {color: '#ffffff'}]}
                            placeholderTextColor={StylesTexts.placeholder.color}
                            maxLength={100}
                        />
                    </View>
                    <View style={{ maxHeight: '70%', borderRadius: 10, backgroundColor: edit ? '#FFF2E3' : '#ffffff', overflow: 'hidden' }}>
                        <ScrollView>
                            <TextInput
                                blurOnSubmit={false}
                                inputMode="text"
                                placeholder="Описание"
                                value={inputDescription}
                                onChangeText={(v) => setInputDescription(v)}
                                editable={edit}
                                style={[StylesTexts.small, StylesNote.editField]}
                                placeholderTextColor={StylesTexts.placeholder.color}
                                multiline={true}
                            />
                        </ScrollView>
                    </View>
                    <View style={{flexDirection: 'row', gap: 10}}>
                        <TouchableOpacity onPress={() => props.show()}
                            style={[StylesButtons.default, StylesButtons.bottom, { flex: 0.5, backgroundColor: 'black' }]}
                        >
                            <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Закрыть </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={
                            () => {
                                if(edit) {
                                    if(inputTitle.length === 0) alert('Заголовок пустой!')
                                    else {
                                        props.saveInputs(inputTitle, inputDescription)
                                        setEdit(!edit)
                                    }
                                } else { setEdit(!edit) }
                            }
                        }
                            style={[StylesButtons.default, StylesButtons.bottom, edit ? StylesButtons.accept : StylesButtons.edit, { flex: 0.5 }]}
                        >
                            <Text style={[StylesTexts.default]}> {edit ? 'Сохранить' : 'Изменить' } </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default ModalEdit;