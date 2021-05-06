import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    Image,
    Alert, 
    Button
} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

import { Badge, ListItem,  } from 'react-native-elements';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import {Picker} from '@react-native-picker/picker';

const data = require('../../util/Data.json');

class Inventory extends Component {

    state={
        inventarioJuguetes: [],
        showItemDetail: false,
        actualItemDetail: {},
        busqueda: '',
    }

    componentDidMount = () => {
        this.setState({ inventarioJuguetes: data });
    }
      
    renderItem = ({ item }) => {
        return(
            <View style={styles.cardItem}>
                <View style={styles.cardItemImage}>
                <Image
                    source={{
                    uri: `${item.image}`,
                    width: 100,
                    height: 100
                    }}
                />
                </View>
                <View style={styles.cardItemInside}>
                    <View style={styles.cardItemCodeAndBadge}>
                        <Text style={{fontFamily: 'notoserif', fontSize: 15, fontWeight: 'bold', marginRight: 5}}>{item.codigo}</Text>
                        <Badge value={item.categoria} status="success" />
                    </View>
                    <View>
                        <Text style={{fontFamily: 'notoserif', fontSize: 20, fontWeight: 'bold'}}>{item.nombre}</Text>
                    </View>
                    <View>
                        <Text style={{fontFamily: 'notoserif', fontSize: 15}}>{item.descripcion}</Text>
                    </View>
                    <View>
                        <Button
                            title="Ver Detalle"
                            onPress={() => {
                                this.setState({
                                    showItemDetail: true,
                                    actualItemDetail: item
                                })
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    render = () => {
        const { actualItemDetail, inventarioJuguetes, busqueda } = this.state;
        const datoFiltrado = inventarioJuguetes.filter(dato => (
            dato.nombre.toLowerCase().includes(busqueda.toLowerCase()) || dato.codigo.toString().includes(busqueda.toString()) || dato.categoria.toLowerCase().includes(busqueda.toLowerCase())
        ))
        return(
            <SafeAreaView style={styles.inventoryContainer}>
                <Header titulo={'Inventario'}/>
                <View style={{marginBottom: 15}}>
                    <SearchBar handleChange={(e) => this.setState({ busqueda: e, tipoFiltro: 'barra' })} />
                </View>
                <View style={{marginBottom: '6%'}}>
                    <FlatList
                        data={datoFiltrado}
                        extraData={datoFiltrado}
                        renderItem={this.renderItem}
                        numColumns={1}
                        style={styles.inventoryList}
                    />
                </View>
                <ConfirmDialog
                    title="Detalle de Juguete"
                    visible={this.state.showItemDetail}
                    onTouchOutside={() => this.setState({showItemDetail: false})}
                    positiveButton={{
                        title: "Entendido",
                        onPress: () => this.setState({showItemDetail: false})
                    }} >
                    <View style={{flexDirection: 'column'}}>
                        {Object.keys(actualItemDetail).map(function(key, i) {
                            if(key != 'image'){
                                return(
                                    <View style={{flexDirection: 'column', marginBottom: 3}}>
                                        <Text style={{color: '#215e9c'}}>{(key.charAt(0).toUpperCase() + key.substring(1)).replace(/_|#|-|@|<>|^[H]/g, " ")}</Text>
                                        <Text style={{color: '#000', fontSize: 15}}>{actualItemDetail[key]}</Text>
                                    </View>

                                )
                            }
                        })}
                        <View style={{flex: 1, alignSelf: 'flex-end', position: 'absolute',}}>
                            <Image
                                source={{
                                uri: `${actualItemDetail.image}`,
                                width: 100,
                                height: 100
                                }}
                            />
                        </View>
                    </View>
                </ConfirmDialog>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    inventoryContainer: {
        flex: 1, 
        backgroundColor: '#FFF',
    },
    cardItem: {
        backgroundColor: '#FFF',
        //width: '45%',
        height: 150,
        padding: 10,
        marginHorizontal: '2%',
        marginVertical: '1.5%',
        borderRadius: 2,
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 10,
    },
    cardItemInside: {
        height: 150,
        marginHorizontal: 10,
        flex: 1,
        flexDirection: 'column',
    },
    cardItemImage: {
        width: 100
    },  
    inventoryList: {
        width: '100%',
        height: '85%',
    },
    cardItemCodeAndBadge: {
        flexDirection: 'row',
    }
});

export default Inventory;