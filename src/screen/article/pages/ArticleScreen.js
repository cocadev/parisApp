import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Button} from 'native-base';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import Image from 'react-native-remote-svg';
import {image} from '@shoutem/ui';
import {TESTIMG,TESTLETTER} from "../../../common/global";

class HomeScreen extends React.Component {
    render() {
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

                    <Text style={styles.TextTitle}>Eco citoyen</Text>
                    <Text style={styles.TextContent}>ll mod qui veniut lantionseque digent qui ut porectore con preius
                        sum alibus</Text>

                    <Image style={styles.dot2}
                           source={require('../../../../assets/img/dots.png')}
                    />

                    <Text style={styles.TextDetail}>Ibusapienti omnia corum rationem harcilitibus re officim olptam
                        landae ea sandi cullest orbeatem eum inullatur, unt in pla aut estrumqui aut perest,occus,cus
                        imo dolestia cus, volorem quibus,ssunt, sed et posam exceaturia con preius,sum alibus, coriti
                        odis et dolo</Text>
                    <Text style={styles.TextCommit}>repedetab ipsum iur sa con nim</Text>
                    <Text style={styles.Textanalysis}>fuga.qulbus dolesequl aut rem facepelent.To cum aspero cum
                        sitatium venda corrundam andant facillquae nati asse sam que laute maximaxim qulandaenlatus
                        daepror</Text>
                </ScrollView>

            </View>
        );
    }
}

export default withNavigation(HomeScreen);
