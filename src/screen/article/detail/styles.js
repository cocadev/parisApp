import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column'
    },

    header: {
        height: 56,
        backgroundColor: '#2E539A'
    },

    logo1: {
        position: 'absolute',
        right: 30,
        top: 12,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    menu: {
        position: 'absolute',
        marginTop: 21,
        marginLeft: 16
    },
    footer: {
        position: 'absolute',
        backgroundColor: 'white',
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 12,
        borderTopWidth: 0.5,
        borderTopColor: 'grey',
        height: 55,
        width: '100%',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imgicon: {
        width: 40,
        height: 40
    },
    imgiconR: {
        width: 40,
        height: 40,
        marginRight: 6
    },
    iconright: {
        flexDirection: 'row'
    }

});


export default styles;
