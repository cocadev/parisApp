import {StyleSheet} from 'react-native';
import COLORS from "../../common/colors";
import * as LAYOUT from "../../common/styles";
import { Dimensions,Platform} from 'react-native';
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#ffffff',
    },
    divider: {
        width: '92%',
        alignSelf: "center",
        borderWidth: 0.2,
        borderColor: "#E1E1E1",
        borderStyle: "dotted",
    },
    titleItem:{
        position: 'absolute',
        bottom: 1,
        textAlign: 'center',
        fontFamily: 'GothamNarrow-Bold',
        lineHeight: 18,
        width: 66,
        marginLeft: 43
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: LAYOUT.SCREEN_HEIGHT / 50,
        paddingLeft: LAYOUT.SCREEN_HEIGHT / 25,
    },

    image: {
        width,
        height:220
      },

    Button: {
        height: 30,
        paddingLeft: 3,
        paddingRight: 3,
        marginLeft: 22,
        fontSize: 16,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: '#6BBDE3',
        marginBottom: 10
    },
    dots: {
        marginTop: 2,
        marginBottom: 2,
        width:'100%'
    },
    dot: {
        height: 3,
        marginLeft: 16,
        width:'90%'
    },
    dot2: {
        height: 7,
        marginLeft: 16,
        width:'90%',
        marginTop: 10,
        marginBottom: 1,
    },

    TextTitle: {
        color: '#32539A',
        fontSize: 23,
        paddingTop: 4,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'GothamNarrow-Medium',
    },
    TextContent: {
        color: '#898989',
        fontFamily: 'GothamNarrow-Medium',
        fontSize: 24,
        paddingLeft: 20,
        marginTop: 1,
        lineHeight:21

    },
    ButtonText: {
        color: 'white',
        fontSize: 16,
    },
    ScrollView: {
        marginBottom: 7
    },

    grid: {
        width: 400
    },

    tile: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
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

    welcome: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 5,
        fontWeight: 'bold',
        color: COLORS.menu,
    },
    TouchableOpacity:{marginHorizontal: 10,marginVertical:4,height:115}


});
export default styles;
