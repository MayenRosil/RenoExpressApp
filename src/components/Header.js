import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView
} from 'react-native';

class Header extends Component {

    render = () => {
        return(
            <SafeAreaView style={styles.headerContainer}>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>{this.props.titulo}</Text>
                </View>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    headerContainer: {
        margin: 'auto', 
        alignItems: 'center', 
        backgroundColor: '#ED574A',
        marginBottom: 1
    },
    headerTitleContainer: {
        padding: 20
    },
    headerTitle: {
        fontWeight: 'bold', 
        fontFamily: 'notoserif', 
        fontSize: 15,
        color: '#FFFFFF'
    }
});

export default Header;