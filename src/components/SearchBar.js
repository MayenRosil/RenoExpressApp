import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    TextInput
} from 'react-native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchBar = (props) => {

    return(
        <View style={styles.barraBusquedaContainer}>
            <IconMaterialIcons name="search" backgroundColor="#5C5A54" color={"#f2b305"} size={50} />
            <TextInput
                placeholder={"Buscar..."}
                onChangeText = {props.handleChange}
                style={styles.barraBusqueda}
                placeholderTextColor="#000"
                returnKeyType={'search'}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    barraBusquedaContainer: {
        flexDirection: 'row'
    },
    barraBusqueda: {
        width: '45%', 
        height: 50, 
        color: '#000',
        borderBottomColor: '#000',
        borderBottomWidth: 1
    }
});

export default SearchBar;