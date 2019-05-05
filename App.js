import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HOMEPAGE from './src/screen/home/home';
import CATEGORY from './src/screen/category';
import SideMenu from './src/sideMenu/SideMenu';
import {DrawerNavigator, TabNavigator, StackNavigator} from 'react-navigation';
import HomeScreen from './src/screen/article/pages/ArticleScreen';
import FoodScreen from './src/screen/article/pages/FoodScreen';
import Index from './src/screen/article/detail';
import ListingScreen from './src/screen/article/pages/ListingScreen';
import NavTabBar from './src/screen/article/Tab/NavTabBar';
import HeaderLogo from './src/sideMenu/HeaderLogo';
import HeaderLogo0 from './src/sideMenu/HeaderLogo0';

class HamburgerIcon extends Component {

    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    }

    render() {
        return (

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Icon name="align-left" size={35} style={{paddingLeft: 15, paddingTop: 6}} color="white"/>
                </TouchableOpacity>
            </View>
        );
    }
}

export const ArticleNavigator = TabNavigator(
    {
        ArticleTab: {screen: HomeScreen},
        ListingTab: {screen: ListingScreen},
        FoodTab: {screen: FoodScreen},
    },
    {
        initialRouteName: 'ArticleTab',
        tabBarComponent: NavTabBar,
        tabBarPosition: 'top'
    }
);

const HomeActivity_StackNavigator = StackNavigator({
    First: {
        screen: HOMEPAGE,
        navigationOptions: ({navigation}) => ({
            headerTitle: (<HeaderLogo/>),
            headerLeft: <HamburgerIcon navigationProps={navigation}/>,
            headerStyle: {backgroundColor: '#2E549A', elevation: 0, shadowOpacity: 0},

        })
    },
});

const CATEGORY_StackNavigator = StackNavigator({
    First: {
        screen: CATEGORY,
        navigationOptions: ({navigation}) => ({
            headerTitle: (<HeaderLogo/>),
            headerLeft: <HamburgerIcon navigationProps={navigation}/>,
            headerStyle: {backgroundColor: '#2E549A', elevation: 0, shadowOpacity: 0},
        })
    },
});

const DETAIL_StackNavigator = StackNavigator({
    First: {
        screen: Index,
        navigationOptions: ({navigation}) => ({
            headerTitle: (<HeaderLogo0/>),
            headerLeft: <HamburgerIcon navigationProps={navigation}/>,
            headerStyle: {backgroundColor: '#2E549A'},
        })
    },
});

export default DrawerNavigator({
        HOME: {screen: HomeActivity_StackNavigator},
        CATEGORY: {screen: CATEGORY_StackNavigator},
        DETAIL: {screen: DETAIL_StackNavigator}
    }, {
        initialRouteName: 'HOME',
        contentComponent: SideMenu,
        drawerWidth: 300
    },
);
