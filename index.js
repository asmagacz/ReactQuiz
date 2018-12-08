/** @format */

import {Navigation} from "react-native-navigation";
import QuizScreen from './screens/Quiz'
import ScoreScreen from './screens/ScoreScreen'
import TestScreen from './screens/TestScreen'
import Drawer from './screens/Drawer'

import {Dimensions} from "react-native";
import React from "react";


Navigation.registerComponent(`QuizScreen`, () => QuizScreen);
Navigation.registerComponent(`ScoreScreen`, () => ScoreScreen);
Navigation.registerComponent(`TestScreen`, () => TestScreen);
Navigation.registerComponent(`DrawerScreen`, () => Drawer);



const {width} = Dimensions.get('window');

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        topBar: {
            elevation: 0,
            visible: true,
            drawBehind: true,
            animate: false,
            buttonColor: 'black',
            title: {
                color: 'black',
                alignment: 'center'
            },
            background: {
                color: 'rgba(81, 149, 217,1)'
            }
        }
    });
    Navigation.setRoot({
        root: {
            sideMenu: {
                left: {
                    component: {
                        id: 'drawerId',
                        name: 'DrawerScreen',
                        fixedWidth: width
                    }
                },
                center: {
                    stack: {
                        id: 'MAIN_STACK',
                        children: [
                            {
                                component: {
                                    name: 'QuizScreen',
                                    options: {
                                        topBar: {
                                            title: {
                                                text: 'Quiz'
                                            },
                                            rightButtons: {
                                                text: 'Menu'
                                            }
                                        },
                                    }
                                }
                            },
                        ]
                    }
                }
            },
        }
    });
});

