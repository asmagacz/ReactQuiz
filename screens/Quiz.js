/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Button, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation'

type Props = {};
export default class QuizScreen extends Component<Props> {

    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component:{
                name: screenName
            }
        })
    }

    render() {
        return <View style={styles.container}>
            <Button title='Test screen' style={styles.welcome} onPress={() => this.goToScreen('TestScreen')}
            />
            <Button title='Score screen' style={styles.footer} onPress={() => this.goToScreen('ScoreScreen')}
            />
        </View>
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
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 50,
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
        backgroundColor: '#F5FCFF',
    }
});
