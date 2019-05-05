import React, {Component} from 'react';
import {View,TouchableOpacity} from 'react-native';
import Image from 'react-native-remote-svg';
import {ArticleNavigator} from '../../../../App';
import styles from './styles';

export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={{width: '100%', flex: 1, backgroundColor: '#f00'}}>
                    <ArticleNavigator/>
                    <View style={styles.footer}>

                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('CATEGORY', {});
                        }}>
                        <Image style={styles.imgicon} source={require('../../../../assets/img/back.jpg')}/>
                        </TouchableOpacity>
                        <View style={styles.iconright}>
                            <Image style={styles.imgiconR} source={require('../../../../assets/img/facebook.png')}/>
                            <Image style={styles.imgiconR} source={require('../../../../assets/img/call.png')}/>
                            <Image style={styles.imgiconR} source={require('../../../../assets/img/tweet.png')}/>
                            <Image style={styles.imgiconR} source={require('../../../../assets/img/share.png')}/>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}
