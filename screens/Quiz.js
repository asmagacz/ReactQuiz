/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {Navigation} from 'react-native-navigation'
import Agreements from './Agreements'

Navigation.registerComponent(`AgreementsScreen`, () => Agreements);

type Props = {};

export default class QuizScreen extends Component<Props> {
    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component:{
                name: screenName,
                options: {
                    title: {
                        text: screenName
                    },

                }
            }
        })
    };
    /*
    constructor(props) {
        super(props)

        this.state = {
            DataBase: [],
            len: 0
        };
    }

  componentWillMount() {
        this.getData();
    }

    getData = async () => {
        const res = await fetch('https://pwsz-quiz-api.herokuapp.com/api/results');
        const json = await res.json();
        let leng = json.length;
        this.setState({
            DataBase: json,
            len: leng
        })
    };
*/

    render() {
        return <ScrollView>
            <StatusBar
                backgroundColor='rgba(81, 149, 217,1)'
            />
            <Agreements/>

            <TouchableOpacity onPress={() => this.goToScreen('TestScreen')}>
                <View >
                    <Text style={styles.welcome}>Test #1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToScreen('TestScreen')}>
                <View >
                    <Text style={styles.welcome}>Test #2</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToScreen('TestScreen')}>
                <View >
                    <Text style={styles.welcome}>Test #3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToScreen('TestScreen')}>
                <View >
                    <Text style={styles.welcome}>Test #4</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToScreen('ScoreScreen')}>
                <View style={styles.footer}>
                    <Text>Score Screen</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        marginTop: 50
    },
    welcome: {
        fontSize: 20,
        fontFamily: 'Arvo-Regular',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderColor: 'rgba(81, 149, 217,1)',
        borderWidth: 2,
        borderRadius: 4,
        padding: 40
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(81, 149, 217,1)',
        padding: 20
    }
});
