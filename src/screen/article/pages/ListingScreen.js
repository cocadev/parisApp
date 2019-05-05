import React from 'react';
import {Text, View, ScrollView,FlatList,ActivityIndicator} from 'react-native';
import {Button} from 'native-base';
import styles from './styles';
import Image from 'react-native-remote-svg';
import {ImageBackground,Tile} from '@shoutem/ui';
import {TESTIMG} from "../../../common/global";

class ListingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state ={ isLoading: true}
    }
    
    componentDidMount(){
        return fetch('http://dev.apiapp.handsoffmyfries.com/wp-json/wp/v2/pages/54')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.acf.marche,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View style={styles.container}>

                <ScrollView style={{marginBottom: 55}}>
                    
                    <Image style={styles.img}
                           source={{uri:TESTIMG}}
                    />

                    <Button style={styles.Button}><Text style={styles.ButtonText}> VIE CITOYENNE </Text></Button>
                    <Image style={styles.dot}
                           source={require('../../../../assets/img/dots.png')}
                    />
                    <Text style={styles.TextTitle}>Restauration scolaire </Text>
                    <Text style={styles.TextContent}>conseditia ventis et unt dus aceri aut eos audipiet</Text>
                    <Image style={styles.dot2}
                           source={require('../../../../assets/img/dots.png')}
                    />
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) => 
                        <View style={styles.imgItem}>
                            <ImageBackground
                                styleName="medium-square"
                                source={{uri: item.image_principale}}
                            />
                            <Tile>
                                <Text style={styles.Listingtitle}>{item.nom_du_marche}</Text>
                                <Text style={styles.Listingaddress}>{item.adresse}</Text>
                                <Text style={styles.Listingdescription}>{item.horaires}</Text>
                                <Text style={styles.Listingtransports}>{item.transports}</Text>
                            </Tile>
                         </View>
                        }
                        keyExtractor={(item, index) => index}
                    />
                </ScrollView>

            </View>
        );
    }
}

export default ListingScreen;
