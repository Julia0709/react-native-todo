import React, {Component} from 'react'
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View key={this.props.keyVal} style={styles.cardContainer}>
                <View style={styles.text}>
                    <Text>Note: {this.props.note.note}</Text>
                    <Text>Date: {this.props.note.date}</Text>
                </View>
                <View style={styles.deleteButton}>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        height: 100,
        backgroundColor: 'white',
        marginTop: 5,
    },
    text: {
        flex: 5,
    },
    deleteButton: {
        flex: 0.8,
        backgroundColor: 'green',
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
    }
})