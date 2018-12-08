

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Navigation} from "react-native-navigation";


type Props = {};

export default class Drawer extends Component<Props> {

    goToScreen = (screenName) => {
        Navigation.mergeOptions('drawerId',{
            sideMenu: {
                left: {
                    visible: true
                }
            }
        });
        Navigation.push('MAIN_STACK', {
            component:{
                name: screenName,
                options: {
                        title: {
                        text: screenName
                    }
                }
            }
        })
    };
    render() {
        return <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native Quizz App!</Text>
            <TouchableOpacity onPress={() => this.goToScreen('TestScreen')}>
                <View style={styles.welcome}>
                    <Text>Test #1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToScreen('TestScreen')}>
                <View style={styles.welcome}>
                    <Text>Test #2</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToScreen('TestScreen')}>
                <View style={styles.welcome}>
                    <Text>Test #3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToScreen('TestScreen')}>
                <View style={styles.welcome}>
                    <Text>Test #4</Text>
                </View>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center',
        margin: 10,
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


