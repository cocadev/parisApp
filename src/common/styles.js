import {Dimensions, StyleSheet} from 'react-native';
export const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({

    tile: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});


export default styles;
