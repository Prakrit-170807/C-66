import * as React from 'react';
import { Text, view, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class Spelling extends React.Component {

    hear=async(sound1)=>{
        await Audio.Sound.createAsync(
        {
          uri:"'https://s3-whitehatjrcontent.whjr.online/phones/' + sound1 + '.mp3'"
        }
        ,
        {
          shouldPlay: true
        }
        )
      }


    render() {
        return (
            <TouchableOpacity style={styles.touchableOpacity1} onPress={this.hear(this.props.sound1)}>
                <Text style={styles.text1}>{this.props.text1}</Text>

            </TouchableOpacity>
        )
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    textInput: {
        marginTop: 100,
        color: "black",
        borderWidth: 5,
        borderColor: "#EEC229",
        borderRadius: 10,
    },
    img: {
        marginTop: 100,
        width: 200,
        height: 200,
    },
    text: {
        color: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        color: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableOpacity: {
        marginTop: 60,
        backgroundColor: "black",
        color: "white",
        width: 200,
        height: 30,
        borderRadius: 8,
        borderWidth: -1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableOpacity1: {
        marginTop: 10,
        backgroundColor: "#EFC239",
        color: "white",
        width: 200,
        height: 30,
        borderRadius: 8,
        borderWidth: -1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});