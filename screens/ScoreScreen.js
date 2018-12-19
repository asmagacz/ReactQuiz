/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, RefreshControl } from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class ScoreScreen extends Component {



    constructor() {
        super();
        this.state = {
            refreshing: false,
            DataBase:[],
            dataSource:ds.cloneWithRows([])
        };
    }

    componentWillMount(){
        this.getData();
    }

    getData = async () => {
        const res = await fetch('https://pwsz-quiz-api.herokuapp.com/api/results');
        const json = await res.json();

        this.setState({
            dataSource:ds.cloneWithRows(json),
        })
    };

    _renderRow(rowData) {
        return (
            <View style={styles.subContener}>
                <Text style={styles.tekst}>Nick: {rowData.nick}</Text>
                <Text style={styles.tekst}>Score: {rowData.score}</Text>
                <Text style={styles.tekst}>Total Points {rowData.total}</Text>
                <Text style={styles.tekst}>Category: {rowData.type}</Text>
                <Text style={styles.tekst}>Date: {rowData.date}</Text>
            </View>
        );
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.getData().then(() => {
            this.setState({ refreshing: false });
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tekst: {
        flex: 1,
        fontSize: 20,
        alignItems: 'flex-start',
        marginRight: 200,
    },
    subContener: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 50,
        borderColor: 'rgba(81, 149, 217,1)',
        borderWidth: 4,
        borderRadius: 4,
        padding: 40

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});