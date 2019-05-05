import {Dimensions, StyleSheet} from 'react-native';
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const TESTIMG = 'https://raw.githubusercontent.com/EugenePizzerbert/react-native-house1/master/screenshots/test2.jpeg';
export const TESTLETTER = 'This is test data. We are working to update all the time. Waiting good results';
export const TESTSMALL = 'This is test data.';

const styles = StyleSheet.create({

    tile: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});


export default styles;
