import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    img: {
        width: '100%',
        height: 240
    },
    Button: {
        height: 30,
        paddingLeft: 8,
        paddingRight: 8,
        marginLeft: 22,
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 10,
        backgroundColor: '#BCC248'
    },
    dot: {
        height: 3,
        width: '90%',
        marginLeft: 20,
    },
    dot2: {
        height: 7,
        width: '90%',
        marginLeft: 20,
    },

    Button_3: {
        height: 30,
        paddingLeft: 6,
        paddingRight: 6,
        marginTop: 0,
        marginLeft: 22,
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 10,
        backgroundColor: '#EF5A29'
    },
    TextTitle: {
        color: '#0091C6',
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily:'GothamNarrow-Medium',
    },
    TextDetail: {
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 40,
        marginTop: 10,
        fontFamily:'GothamNarrow-Medium',
        lineHeight: 21
    },
    TextCommit: {
        color: '#0091C6',
        fontSize: 18,
        fontFamily:'GothamNarrow-Bold',
        paddingLeft: 20,
        textDecorationLine: 'underline',
    },

    Textanalysis: {
        fontSize: 12,
        paddingLeft: 20,
        fontFamily:'GothamNarrow-Medium',
        paddingRight: 30,
        marginTop: 18,
        marginBottom: 15,

    },
    TextContent: {
        color: '#BCC248',
        fontSize: 25,
        paddingLeft: 20,
        fontFamily:'GothamNarrow-Medium',
        width: '97%',
        lineHeight: 22,
        marginBottom: 8
    },
    TextContent_3: {
        color: '#EF5A29',
        fontSize: 25,
        paddingLeft: 20,
        width: '97%',
        lineHeight: 22,
        marginBottom: 8,
        fontFamily:'GothamNarrow-Medium',

    },
    ButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily:'GothamNarrow-Bold',
    },

    listitem: {
        backgroundColor: '#A2BA4A',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        margin: 5,
        width: '100%'
    }
    ,item: {
        fontSize: 26,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        color: 'white',
        marginBottom: 2
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
    divider1: {
        width: '90%',
        paddingLeft: 20,
        paddingRight: 20
    },
    divider2: {
        width: '90%'
    },
    imgItem: {
        flexDirection: 'row',
        padding: 10,
    },
    Listingtitle: {
        color: 'white',
        fontSize: 20,
        marginTop:2,
        backgroundColor: '#6C9E36',
        marginLeft: 12,
        paddingLeft: 3,
        fontFamily:'GothamNarrow-Medium',
        paddingRight: 3
    },
    Listingaddress: {
        color: '#6C9E36',
        fontSize: 20,
        fontFamily:'GothamNarrow-Medium',
        backgroundColor: 'white',
        marginLeft: 12
    },
    Listingtitle2: {
        color: 'white',
        marginTop:2,
        fontSize: 20,
        backgroundColor: '#BCC248',
        marginLeft: 12,
        fontFamily:'GothamNarrow-Medium',
        paddingLeft: 3,
        paddingRight: 3
    },
    Listingaddress2: {
        color: '#BCC248',
        fontSize: 20,
        backgroundColor: 'white',
        fontFamily:'GothamNarrow-Medium',
        marginLeft: 12
    },
    Listingdescription: {
        fontSize: 15,
        marginLeft: 12,
        color:'#515151',
        fontFamily:'GothamNarrow-Medium',
        marginRight: 12,
        lineHeight:13
    },
    Listingtransports: {
        color: '#0091C6',
        fontSize: 18,
        marginLeft: 12,
        fontFamily:'GothamNarrow-Medium',
    },
    fooddate: {
        color: 'white',
        fontSize: 20,
        fontFamily:'GothamNarrow-Medium',
        backgroundColor: '#EE9601',
        marginLeft: 12,
        marginTop: 8,
        paddingLeft: 3,
        paddingRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        textAlign: 'center'
    },
    foodtitle: {
        fontSize: 16,
        marginLeft: 12,
        paddingLeft: 3,
        color:'#515151',
        paddingRight: 3
    },
    foodmealtitle: {
        fontFamily:'GothamNarrow-Medium',
        fontSize: 18,
        marginLeft: 12,
        paddingLeft: 1,
        width: '70%'
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: 250
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
