import React, {Component} from 'react'
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native'

import moment from 'moment'
import Card from './card'

export default class App extends Component {
    constructor(props) {
        console.log('App', props);
        super(props)
        this.state = {
            notes: [],
            note: '',
        }
    }

    handlePress() {
        if (this.state.note) {
            this.state.notes.push({
                note: this.state.note
                // date: moment().format("LL")
            })
            this.setState({notes: this.state.note, note: ''})
            console.log("notes: ", this.state.notes)
        }
    }

    deleteNote(i) {
        this.state.notes.splice(i, 1)
        this.setState({notes: this.state.notes})
    }

    render() {
        const notes = this.state.notes.map((note, i) => {
            return (
                <Card
                    key={i}
                    keyVal={i}
                    note={note}
                    onPress={() => this.deleteNote(i)}
                />
            )
        })

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TextInput 
                        style={styles.inputfield}
                        value={this.state.note}
                        placeholder={"Todo item..."}
                        onChangeText={(note) => this.setState({note})}>
                    </TextInput>
                    <View style={styles.button}>
                        <TouchableOpacity 
                            onPress={() => this.handlePress()}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.content}>
                    {notes}
                </View>

                <View style={styles.footer}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: 'red',
        width: '100%',
    },
    inputfield: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginTop: 40,
        marginLeft: 10,
    },
    button: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'black',
        zIndex: 100,
        justifyContent: 'center',
        position: 'absolute',
        top: 42,
        right: 15
    },
    buttonText: {
        backgroundColor: 'transparent',
        textAlign:'center',
        color: 'white',
    },
    content: {
        flex: 5,
        backgroundColor: 'white',
        width: '100%',
    },
    footer: {
        flex: 1,
        backgroundColor: 'black',
        width: '100%',
    }
})