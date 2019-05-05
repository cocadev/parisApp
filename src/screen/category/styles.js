import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    logo1: {
        position: 'absolute',
        right: 30,
        top: 12,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    logo2: {
        position: 'absolute',
        top: -49,
        left: 56,
        width: 112,
        height: 120,
        zIndex: 1
    },
    menu: {
        position: 'absolute',
        marginTop: 21,
        marginLeft: 16
    },
    img: {
        width: '100%',
        height: 220
    },
    Button: {
        height: 30,
        paddingLeft: 3,
        paddingRight: 3,
        marginLeft: 22,
        fontSize: 16,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: '#BCC248',
        marginBottom: 10
    },
    dots: {
        marginTop: 2,
        marginBottom: 2,
    },
    dot: {
        height: 3,
        width: '89%',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 2
    },
    dot2: {
        height: 7,
        marginLeft: 20,
        width: '89%',
        marginRight: 20,
        marginBottom: 7,
        marginTop: 12
    },

    TextTitle: {
        color: '#68BBDD',
        fontSize: 23,
        paddingTop: 4,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'GothamNarrow-Medium'
    },
    TextContent: {
        color: '#898989',
        fontSize: 24,
        fontFamily: 'GothamNarrow-Medium',
        paddingLeft: 20,
        marginTop: 1,
        width: '84%',
        lineHeight: 21
    },
    ButtonText: {
        color: 'white',
        fontSize: 16,
    },
    listitem: {
        backgroundColor: '#A2BA4A',
        marginLeft: 22,
        marginTop: 11,
        marginRight: 22,
        width: '90%'
    },
    listitem2: {
        backgroundColor: '#BCC248',
        marginLeft: 22,
        marginTop: 11,
        marginRight: 22,

    },
    listitem3: {
        backgroundColor: '#809F42',
        marginLeft: 22,
        marginTop: 11,
        marginRight: 22,

    }
    , item: {
        color: 'white',
        fontSize: 23,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 11,
        fontFamily: 'GothamNarrow-Medium',

    },
    divider: {
        width: '92%',
        alignSelf: "center",
        borderWidth: 0.2,
        borderColor: "#E1E1E1",
        borderStyle: "dotted",
    },

});

export default styles;
