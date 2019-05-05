import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 20,
        backgroundColor: '#fff'
    },
    active: {
        color: '#C7D327',
        fontWeight: 'bold',
        fontSize: 12
    },
    active2: {
        color: '#EF5A29',
        fontSize: 12,
    //    fontFamily:'GothamNarrow-Medium',
    },
    nonactive: {
        color: 'grey',
        fontSize: 12,
    //    fontFamily:'GothamNarrow-Medium',
    }
});

export default styles;
