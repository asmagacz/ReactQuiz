

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Navigation} from "react-native-navigation";

type Props = {};
export default class Drawer extends Component<Props> {
    render() {
        const { width } = Dimensions.get('window');
        Navigation.events().registerAppLaunchedListener(() => {
            Navigation.setDefaultOptions({
                topBar: {
                    elevation: 0,
                    visible: false,
                    drawBehind: true,
                    animate: false,
                    buttonColor: 'white',
                    title: {
                        color: 'white',
                        alignment: 'center'
                    },
                    background: {
                        color: 'transparent'
                    }
                }
            });
            Navigation.setRoot({
                root: {
                    sideMenu: {
                        left: {
                            component: {
                                id: 'drawerId',
                                name: 'Drawer',
                                fixedWidth: width
                            }
                        },
                        center: {
                            stack: {
                                id: 'MAIN_STACK',
                                children: [
                                    {
                                        component: {
                                            name: 'Splash',
                                        }
                                    },
                                ]
                            }
                        }
                    },
                }
            });
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
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


