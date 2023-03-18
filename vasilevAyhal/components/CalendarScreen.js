import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import { View, Text, TouchableOpacity, Image, RefreshControl } from 'react-native';

import StylesContainers from './style/containers';
import StylesButtons from './style/buttons';
import StylesTexts from './style/texts';

import ArrowForward from '../assets/svg/arrow-forward'
import ArrowBack from '../assets/svg/arrow-back'

LocaleConfig.locales['ru'] = {
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
};
LocaleConfig.defaultLocale = 'ru';

const CalendarScreen = (props) => {
    const DateNow = moment().format("YYYY-MM-DD");
    const [loading, setLoading] = useState(true)

    const [selectDate, setSelectDate] = useState(DateNow)

    const selected = {selected: true, disableTouchEvent: true};
    const vacation = {key: 'vacation', color: 'red'};
    const massage = {key: 'massage', color: 'blue'};
    const workout = {key: 'workout', color: 'green'};

    const refresh = React.useCallback(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, []);

    useEffect(
        () => {
            refresh()
        }, []
    )

    return (
        <View>
            <CalendarList
                onDayPress={day => {
                    setSelectDate(day.dateString)
                }}
                markingType={'multi-dot'}
                markedDates={{
                    [selectDate]: selected,
                    '2023-03-20': Object.assign(
                        selectDate !== '2023-03-20' ? {} : selected,
                        {marked: true, dots: [massage, workout]}
                    ),
                    '2023-03-21': Object.assign(
                        selectDate !== '2023-03-21' ? {} : selected,
                        {marked: true, dots: [vacation]}
                    ),
                }}
                displayLoadingIndicator={loading}
                firstDay={1}
                showWeekNumbers={true}
                hideArrows={false}
                scrollEnabled={true}
                horizontal={true}
                pagingEnabled={true}
                renderArrow={ direction => (
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        { direction === 'left' ? <ArrowBack size={20}/> : <ArrowForward size={20}/> }
                    </View>
                )}
                theme={{
                    arrowColor: '#000000',
                    indicatorColor: '#000000',
                    dayTextColor: StylesButtons.inactiveBack.backgroundColor,
                    todayTextColor: StylesTexts.linkColor.color,
                    todayBackgroundColor: StylesButtons.inactive.backgroundColor,
                    selectedDayTextColor: StylesButtons.active.backgroundColor,
                    selectedDayBackgroundColor: StylesButtons.activeBack.backgroundColor,
                }}
            />
        </View>
    );
};

export default CalendarScreen;