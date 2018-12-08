/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {};
export default class WelcomeScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.index = 0;
        this.score =0;
    }
    tests = {
        questions: [
            {
                id: 1,
                question: 'What\'s first polish King name?',
                correctAnswer: 'C',
                answerA: 'Mieszko',
                answerB: 'Michal',
                answerC: 'Boleslaw',
                answerD: 'Janina'
            },
            {
                id: 2,
                question: 'What letter is between A and C',
                correctAnswer: 'B',
                answerA: 'F',
                answerB: 'M',
                answerC: 'B',
                answerD: 'J'
            },
            {
                id: 3,
                question: 'When ',
                correctAnswer: 'C',
                answerA: 'Mieszko',
                answerB: 'Michal',
                answerC: 'Boleslaw',
                answerD: 'Janina'
            },
            {
                id: 4,
                question: 'What was first polish King name?',
                correctAnswer: 'C',
                answerA: 'Mieszko',
                answerB: 'Michal',
                answerC: 'Boleslaw',
                answerD: 'Janina'
            }
        ]
    };

    _renderQuestion(){
        if(this.tests.length < this.index){
           return( <View>
                <Text style={styles.text}>{this.tests.questions[this.index].question}</Text>
                <TouchableOpacity style={styles.welcome} onPress={this._checkAnswer('A')}>
                    <Text style={styles.text}>A: {this.tests.questions[this.index].answerA}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.welcome} onPress={this._checkAnswer('B')}>
                    <Text style={styles.text}>B: {this.tests.questions[this.index].answerB}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.welcome} onPress={this._checkAnswer('C')}>
                    <Text style={styles.text}>C: {this.tests.questions[this.index].answerC}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.welcome} onPress={this._checkAnswer('D')}>
                    <Text style={styles.text}>D: {this.tests.questions[this.index].answerD}</Text>
                </TouchableOpacity>
            </View>)
        }else {
           return( <View>
                <Text style={styles.text}>test</Text>
            </View>)
        }
    }

    _checkAnswer(answer){
        if(this.tests.length < this.index) {
            if (answer === this.tests.questions[this.index].correctAnswer) {
                this.score += 1;
            }
            this.index += 1;
        }
    }


    render() {

        return(
            <View style={styles.container}>{this._renderQuestion}</View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 4,
        padding: 20,
        borderColor: 'rgba(81, 149, 217,1)',
        height: 60,
        fontFamily: 'Arvo-Regular',
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
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20
    }
});
