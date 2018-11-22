/** @format */

import {Navigation} from "react-native-navigation";
import QuizScreen from './screens/Quiz'
import ScoreScreen from './screens/ScoreScreen'
import TestScreen from './screens/TestScreen'
import Drawer from './screens/Drawer'
import {Button, Dimensions, View} from "react-native";
import React from "react";


Navigation.registerComponent(`QuizScreen`, () => QuizScreen);
Navigation.registerComponent(`ScoreScreen`, () => ScoreScreen)
Navigation.registerComponent(`TestScreen`, () => TestScreen)
Navigation.registerComponent(`DrawerScreen`, () => Drawer)


const {width} = Dimensions.get('window');
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        topBar: {
            elevation: 0,
            //visible: false,
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

