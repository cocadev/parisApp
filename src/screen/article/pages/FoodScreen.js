import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Button} from 'native-base';
import styles from './styles';
import Image from 'react-native-remote-svg';
import {ImageBackground, ListView,GridRow,TouchableOpacity, image} from '@shoutem/ui';
import {TESTIMG,TESTLETTER} from "../../../common/global";

class FoodScreen extends React.Component {

    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state ={ isLoading: true}

        this.state = {
            restaurants: [
                {
                    "date": "23/06/2018",
                    "title": TESTLETTER,
                    "mealtitle": "label rouge",
                    "meallabel": {"url": TESTIMG},
                },
                {
                    "date": "23/06/2018",
                    "title": TESTLETTER,
                    "mealtitle": "bio",
                    "meallabel": {"url": TESTIMG},
                },
                {
                    "date": "05/06/2018",
                    "title": TESTLETTER,
                    "mealtitle": "plat du chef",
                    "meallabel": {"url": TESTIMG},
                },
                {
                    "date": "05/06/2018",
                    "title": TESTLETTER,
                    "mealtitle": "charolais",
                    "meallabel": {"url": TESTIMG},
                },
                {
                    "date": "05/06/2018",
                    "title": TESTLETTER,
                    "mealtitle": "Test data",
                    "meallabel": {"url": TESTIMG},
                }
            ],
        }
    }

    renderRow(rowData) {

        const cellViews = rowData.map((restaurant, id) => {
            return (
                <TouchableOpacity key={id} styleName="flexible" style={styles.box}>
                    <View>
                        <Text style={styles.fooddate}>{restaurant.date}</Text>
                        <Text style={styles.foodtitle}>{restaurant.title}</Text>
                        <View style={{flexDirection: 'row', width: '90%', marginLeft: 15}}>
                            <ImageBackground
                                styleName="small"
                                style={{width: 42, height: 42, marginTop: 5}}
                                source={{uri: restaurant.meallabel.url}}
                            />
                            <Text style={styles.foodmealtitle}>
                                <Text style={{fontFamily:'GothamNarrow-Bold',color:'#515151'}}>
                                    Gouter:
                                </Text>
                                {restaurant.mealtitle}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        });

        return (
            <GridRow columns={2}>
                {cellViews}
            </GridRow>
        );
    }

    render() {
        const restaurants = this.state.restaurants;
        const groupedData = GridRow.groupByRows(restaurants, 2, () => {
            isFirstArticle = false;
            return 1;
        });
        return (
            <View style={styles.container}>

                <ScrollView style={{marginBottom: 55}}>
                    <Image style={styles.img}
                           source={{uri:TESTIMG}}
                    />

                    <Button style={styles.Button_3}><Text style={styles.ButtonText}> FAMILLE </Text></Button>
                    <Image style={styles.dot}
                           source={require('../../../../assets/img/dots.png')}
                    />
                    <Text style={styles.TextTitle}>Restaurant quid quntisto invenis </Text>
                    <Text style={styles.TextContent_3}>Condcel rendem et exeressim simpos etur abo</Text>
                    <Image style={styles.dot2}
                           source={require('../../../../assets/img/dots.png')}
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

export default FoodScreen;

// import React from 'react';
// import {Text, View, ScrollView,FlatList,ActivityIndicator} from 'react-native';
// import {Button} from 'native-base';
// import styles from './styles';
// import Image from 'react-native-remote-svg';
// import {ImageBackground,GridRow,TouchableOpacity, Tile} from '@shoutem/ui';
// import {TESTIMG} from "../../../common/global";
//
// class FoodScreen extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.renderRow = this.renderRow.bind(this);
//         this.state ={ isLoading: true}
//     }
//
//     componentDidMount(){
//         return fetch('http://dev.apiapp.handsoffmyfries.com/wp-json/wp/v2/pages/8')
//             .then((response) => response.json())
//             .then((responseJson) => {
//
//                 this.setState({
//                     isLoading: false,
//                     dataSource: responseJson.acf.food_menu,
//                 }, function(){
//
//                 });
//
//             })
//             .catch((error) =>{
//                 console.error(error);
//             });
//     }
//
//     renderRow(rowData) {
//
//         const cellViews = rowData.map((restaurant, id) => {
//             return (
//                 <TouchableOpacity key={id} styleName="flexible" style={styles.box}>
//                     <View>
//                         <Text style={styles.fooddate}>{restaurant.date}</Text>
//                         <Text style={styles.foodtitle}>{restaurant.title}</Text>
//                         <View style={{flexDirection: 'row', width: '90%', marginLeft: 15}}>
//                             <ImageBackground
//                                 styleName="small"
//                                 style={{width: 42, height: 42, marginTop: 5}}
//                                 //source={{uri: restaurant.meallabel.url}}
//                                 source={{uri: TESTIMG}}
//                             />
//                             <Text style={styles.foodmealtitle}>
//                                 <Text style={{fontFamily:'GothamNarrow-Medium',color:'#515151'}}>
//                                     Gouter:
//                                 </Text>
//                                 {restaurant.mealtitle}
//                             </Text>
//                         </View>
//                     </View>
//                 </TouchableOpacity>
//             );
//         });
//
//         return (
//             <GridRow columns={2}>
//                 {cellViews}
//             </GridRow>
//         );
//     }
//
//     render() {
//
//         if(this.state.isLoading){
//             return(
//                 <View style={{flex: 1, padding: 20}}>
//                     <ActivityIndicator/>
//                 </View>
//             )
//         }
//
//         return (
//             <View style={styles.container}>
//
//                 <ScrollView style={{marginBottom: 55}}>
//                     <Image style={styles.img}
//                            source={require('../../../../assets/img/r4.jpg')}
//                     />
//
//                     <Button style={styles.Button_3}><Text style={styles.ButtonText}> FAMILLE </Text></Button>
//                     <Image style={styles.dot}
//                            source={require('../../../../assets/img/dots.png')}
//                     />
//                     <Text style={styles.TextTitle}>Restaurant quid quntisto invenis </Text>
//                     <Text style={styles.TextContent_3}>Condcel rendem et exeressim simpos etur abo</Text>
//                     <Image style={styles.dot2}
//                            source={require('../../../../assets/img/dots.png')}
//                     />
//                     <FlatList
//                         data={this.state.dataSource}
//                         renderItem={({item}) =>
//                         <View style={styles.imgItem}>
//                             <Tile>
//                                 <Text style={styles.Listingtitle}>{item.date}</Text>
//                                 <Text style={styles.Listingaddress}>{item.meals.quality}</Text>
//                                 <Text style={styles.Listingdescription}>{item.meals.title}</Text>
//                             </Tile>
//                          </View>
//                         }
//                         keyExtractor={(item, index) => index}
//                     />
//                 </ScrollView>
//
//             </View>
//         );
//     }
// }
//
// export default FoodScreen;
