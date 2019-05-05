import React, {Component} from 'react';
import {Text, ScrollView, View, Platform} from 'react-native';
import {Button} from 'native-base';
import Image from 'react-native-remote-svg';
import {ListView, GridRow} from '@shoutem/ui';
import styles from './styles';
import {TESTIMG,TESTSMALL} from "../../common/global";

class CategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        return fetch('http://dev.apiapp.handsoffmyfries.com/wp-json/wp/v2/pages?categories='+global.id)
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
                <View style={styles.listitem}>
                    <Text style={styles.item}
                          onPress={() => {
                              this.props.navigation.navigate('DETAIL', {});
                          }}>{restaurant.title.rendered}</Text>
                </View>
            );
        });

        return (
            <GridRow
                style={{backgroundColor: '#fff', paddingLeft: 10, paddingVertical: 5, paddingRight: 15}}>
                {cellViews}
            </GridRow>
        );
    }

    render() {
        const restaurants = this.state.dataSource;
        const groupedData = GridRow.groupByRows(restaurants, 1, () => {
            isFirstArticle = false;
            return 1;

        });


        return (
            <View style={styles.container}>

                {
                    Platform.OS === 'android'
                        ? <Image style={styles.logo2} source={require('../../../assets/img/logo2.png')}/>
                        : <View/>
                }

                <Image style={styles.dots}
                       source={require('../../../assets/img/dots.png')}
                />

                {
                    !global.image
                    ?<Image style={styles.img}
                            source={{uri: TESTIMG}}
                    />
                    :<Image style={styles.img}
                       source={{uri:global.image}}
                    />
                }
                <Button style={styles.Button}>
                    <Text style={styles.ButtonText}> {global.title} </Text></Button>
                <Image style={styles.dot}
                       source={require('../../../assets/img/dots.png')}
                />
                <ScrollView>
                    <Text style={styles.TextTitle}>{global.slug}</Text>
                    <Text style={styles.TextContent}>
                        {
                            !global.description
                            ?TESTSMALL
                            :global.description
                        }
                        </Text>
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

export default CategoryScreen;
