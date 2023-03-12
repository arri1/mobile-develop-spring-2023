import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    default: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    screen: {
        padding: 30
    },
    fill: {
        width: '100%',
        height: '100%'
    },
    modalContainer: {
        flex: 1,
        paddingVertical: 100,
        backgroundColor: '#00000070',
    },
    modal: {
        width: '90%',
        alignSelf: 'center',
        padding: 30,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    alert: {
        padding: 40,
        backgroundColor: '#ffffff90',
        borderRadius: 10,
    }
});