/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import SQLite from 'react-native-sqlite-storage';

let DB;
const getDB = () => DB ? DB : DB = SQLite.openDatabase({ name: 'QuizQuestions.db', createFromLocation: 1 });


type Props = {};
export default class WelcomeScreen extends Component<Props> {

    constructor(props) {
        super(props);
        getDB();
        this.state = {
            refreshing: false,
            id: '',
            name: '',
            description: '',
            tasks: [{
                question: '',
                answers: []
            }],
            tags: [],
            currentQuestion: 0,
            score: 0,
            nick: 'nick'
        };
        this.getAlltestData(DB);
    }

    getAlltestData = (DB) => {
        DB.transaction((tx) => {
            tx.executeSql('SELECT * FROM test WHERE id = ?;', [this.props.testId], (tx, results) => {
                let t = results.rows.item(0);
                this.setState({
                    id: t.id,
                    name: t.name,
                    description: t.description,
                    tasks: JSON.parse(t.tasks),
                    tags: JSON.parse(t.tags)
                });
            });
        });
    }

    saveTestResults = () => {
        fetch('https://pwsz-quiz-api.herokuapp.com/api/result', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nick: this.state.nick,
                score: this.state.score,
                total: this.state.tasks.length,
                type: this.state.tags[0],
                date: new Date().toISOString().split('T')[0]
            }),
        })
            .then(() => {
                Navigation.pop('MAIN_STACK');
            })
            .catch((error) => {
                alert('Błąd podczas wysyłania wyniku.\nSprawdź połączenie z internetem!');
            });
    };

    buttonPress = (correctAnswer) => {
        if( correctAnswer ) {
            this.setState({score: this.state.score + 1});
        }
        this._onRefresh();
    };

    _onRefresh = () => {
        this.setState({
            refreshing: true,
            currentQuestion: this.state.currentQuestion + 1
        });
        this.setState({refreshing: false});
    };
/*
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
        if(this.index < this.tests.questions.length){
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
*/

    render() {
        if( this.state.currentQuestion === this.state.tasks.length ) {
            return(
                <View style={styles.container}>
                    <View style={styles.welcome}>
                        <Text style={styles.text}>Twój wynik to:</Text>
                        <Text style={styles.text}>{this.state.score} / {this.state.tasks.length}</Text>

                        <Text style={styles.text}>Wprowadź swój nick:</Text>
                        <TextInput
                            style={styles.welcome}
                            onChangeText={(nick) => this.setState({nick})}
                            value={this.state.nick}
                        />

                        <TouchableOpacity style={styles.welcome} onPress={() => this.saveTestResults()}>
                            <Text style={{textAlign: 'center'}}>Wyślij!</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            );
        } else {
            let answers = [];
            for(let j = 0; j < this.state.tasks[this.state.currentQuestion].answers.length; j++) {
                answers.push(
                    <TouchableOpacity key={j} style={styles.welcome}
                                      onPress={() => this.buttonPress(this.state.tasks[this.state.currentQuestion].answers[j].isCorrect)}>
                        <Text style={styles.text}>{this.state.tasks[this.state.currentQuestion].answers[j].content}</Text>
                    </TouchableOpacity>
                );
            }
                return (<ScrollView>
                            <View style={styles.welcome}>
                                <Text style={styles.text}>{this.state.name}</Text>
                            </View>
                            <View style={styles.welcome}>
                                <Text style={styles.text}>Pytanie: {this.state.currentQuestion+1} / {this.state.tasks.length}:</Text>
                                <Text style={styles.text}>{this.state.tasks[this.state.currentQuestion].question}</Text>
                            </View>
                            <View style={styles.welcome}>
                                {answers}
                            </View>
                    </ScrollView>
                );
            }
        }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 4,
        padding: 20,
        borderColor: 'rgba(81, 149, 217,1)',
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
