import React, {Component} from 'react';
import {Text, ScrollView, View, Platform} from 'react-native';
import {Button} from 'native-base';
import styles from './styles';
import Image from 'react-native-remote-svg';
import {ImageBackground, ListView, Tile, Title, GridRow,TouchableOpacity} from '@shoutem/ui';
import {TESTIMG,SCREEN_WIDTH} from "../../common/global";

class Home extends Component {

    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        global.SampleVar = 'asdfdsfds';
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        return fetch('http://dev.apiapp.handsoffmyfries.com/wp-json/wp/v2/categories')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {

                });
            })

            .catch((error) => {
                console.error(error);
            });
    }

    renderRow(rowData) {

        const cellViews = rowData.map((restaurant, id) => {
            return (
                <TouchableOpacity
                    style={{marginHorizontal: 18, marginVertical: 4, height: 115}}
                    key={id} styleName="flexible"
                    onPress={() => {
                        this.props.navigation.navigate('CATEGORY');
                        global.id = restaurant.id;
                        global.title = restaurant.name;
                        global.image = restaurant.acf.image;
                        global.description = restaurant.description;
                        global.slug = restaurant.slug;

                    }}>

                    {
                        !restaurant.acf.image
                            ? <ImageBackground
                                styleName="medium"
                                source={{uri: TESTIMG}}
                            >
                                <Tile style={styles.tile}>
                                    <Title style={{
                                        position: 'absolute',
                                        bottom: 1,
                                        textAlign: 'center',
                                        fontFamily: 'GothamNarrow-Bold',
                                        lineHeight: 18,
                                        width: SCREEN_WIDTH/4,
                                        marginLeft: SCREEN_WIDTH/15
                                      }}>{restaurant.name}
                                    </Title>
                                </Tile>
                            </ImageBackground>
                            : <ImageBackground
                                styleName="medium"
                                source={{uri: restaurant.acf.image}}
                            >
                                <Tile style={styles.tile}>
                                    <Title style={{
                                        position: 'absolute',
                                        bottom: 1,
                                        textAlign: 'center',
                                        fontFamily: 'GothamNarrow-Bold',
                                        lineHeight: 18,
                                        width: SCREEN_WIDTH/4,
                                        marginLeft: SCREEN_WIDTH/15
                                    }}>{restaurant.name}</Title>
                                </Tile>
                            </ImageBackground>
                    }
                </TouchableOpacity>
            );
        });

        return (
            <GridRow columns={2}
                     style={{backgroundColor: '#fff', paddingLeft: 10, paddingVertical: 5, paddingRight: 15}}>
                {cellViews}
            </GridRow>
        );
    }

    render() {
        const restaurants = this.state.dataSource;
        const groupedData = GridRow.groupByRows(restaurants, 2, () => {
            isFirstArticle = false;
            return 1;

        });

        return (
            <View style={[styles.container, {backgroundColor: this.props.isOpen ? '#CCCCCC' : '#F5FCFF'}]}>

                {
                    Platform.OS === 'android'
                        ? <Image style={styles.logo2} source={require('../../../assets/img/logo2.png')}/>
                        : <View/>
                }

                <Image style={styles.dots}
                       source={require('../../../assets/img/dots.png')}
                />

                <View>
                    <Image style={styles.image}
                           source={{uri: 'http://dev.apiapp.handsoffmyfries.com/wp-content/uploads/2018/06/restaurant-libre-echange-paris17.jpg'}}/>
                    <Button style={styles.Button}><Text style={styles.ButtonText}> ACTUALITES </Text></Button>
                    <Image style={styles.dot} source={require('../../../assets/img/dots.png')}/>
                </View>
                <ScrollView style={styles.ScrollView}>
                    <View>

                        <Text style={styles.TextTitle}>restaurant-libre-echange-paris17</Text>
                        <Text style={styles.TextContent}>Ditat rendem et exeressim simpos etur abo</Text>
                    </View>

                    <Image style={styles.dot2}
                           source={require('../../../assets/img/dots.png')}
                    />

                    <ListView
                        data={groupedData}
                        renderRow={this.renderRow}
                    />
                </ScrollView>

            </View>
        );
    }
}

export default Home;
