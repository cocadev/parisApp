import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ExpandableList from 'react-native-expandable-section-flatlist';
import MockData from './mockData';
import {SCREEN_WIDTH} from '../common/global';

class SideMenu extends Component {

    _renderRow = (rowItem, rowId) => (
        <TouchableOpacity key={rowId} onPress={this.navigateToScreen('DETAIL')}>
            <View style={{padding: 5, paddingLeft: 30, backgroundColor: '#E9E9E9'}}>
                <Text style={{fontSize: 20}}>
                    {rowItem.title}
                </Text>
            </View>
        </TouchableOpacity>
    );

    _renderSection = (section) => {
        return (
            <View style={{
                paddingVertical: 6,
                paddingHorizontal: 15,
                height: 39,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderBottomColor: "#E9E9E9"
            }}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 19, fontWeight: 'bold'}}>
                        {section}
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Icon style={styles.icon} name="angle-right" size={25} color="#69B8D7"/>
                </View>
            </View>
        );
    };

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View>
                <ScrollView>

                    <View style={styles.header}>

                        <Image style={styles.imgicon} source={require('../../assets/img/face.png')}/>
                        <Image style={styles.imgicon} source={require('../../assets/img/phone.png')}/>
                        <Image style={styles.imgicon} source={require('../../assets/img/tw.png')}/>

                        <View style={styles.iconright}>
                            <Image style={styles.imgicon} source={require('../../assets/img/up.png')}/>
                        </View>

                    </View>

                    <View style={styles.search}>
                        <TouchableOpacity>
                          <Icon style={styles.icon} name="search" size={30} color="white"/>
                        </TouchableOpacity>
                        <TextInput style={styles.textSearch} underlineColorAndroid='transparent'/>
                    </View>

                    <TouchableOpacity onPress={this.navigateToScreen('HOME')}>
                        <Text style={{
                            color: '#69B8D7',
                            fontWeight: 'bold',
                            fontSize: 20,
                            width: SCREEN_WIDTH/2,
                            paddingLeft: 10,
                            paddingVertical: 10
                        }}>Acceuil</Text>
                    </TouchableOpacity>
                    <Image style={styles.dot}
                           source={require('../../assets/img/dots.png')}
                    />
                    <ExpandableList
                        dataSource={MockData.workbenchData}
                        headerKey="title"
                        memberKey="member"
                        renderRow={this._renderRow}
                        renderSectionHeaderX={this._renderSection}
                    />
                </ScrollView>

            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;
