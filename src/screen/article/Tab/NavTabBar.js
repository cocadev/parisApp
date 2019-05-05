import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class NavTabBar extends Component {

    render() {
        const {navigate, state} = this.props.navigation;
        const {index, routes} = state;
        const active = routes[index].key;
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => navigate('ArticleTab')}>
                    <Text
                        style={active === 'ArticleTab' ? styles.active : styles.nonactive}
                    >
                        ECO CITOYEN
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('ListingTab')}>
                    <Text
                        style={active === 'ListingTab' ? styles.active : styles.nonactive}
                    >
                        BUDGET PARTICIPATIE
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('FoodTab')}>
                    <Text
                        style={active === 'FoodTab' ? styles.active2 : styles.nonactive}
                    >
                        CONSEIL DE OUART
                    </Text>
                </TouchableWithoutFeedback>


            </View>
        );
    }
}

NavTabBar.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default NavTabBar;
