import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Button,
    Alert,
    ToastAndroid
} from 'react-native';
import Header from '../components/Header';
import RNPickerSelect from 'react-native-picker-select';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import { ScrollView } from 'react-native-gesture-handler';

class RegisterTransaction extends Component {

    state={
        name: '',
        nit: '',
        address: '',
        transactionType: '',
        showResume: false
    }

    validateFormData = () => {
        console.log(this.state)
        if(this.state.transactionType == null || !this.state.transactionType || this.state.transactionType == ''){
            ToastAndroid.show("Seleccione un Tipo de Transacción", 3000);
        }else if(this.state.name == null || this.state.name == ''){
            ToastAndroid.show("Ingrese nombre", 3000);
        }else if(this.state.nit == null || this.state.nit == ''){
            ToastAndroid.show("Ingrese NIT", 3000);
        }else if(this.state.address == null || this.state.address == ''){
            ToastAndroid.show("Ingrese dirección", 3000);
        }else{
            this.setState({
                showResume: true
            })
        }
    }

    onChangeText = (key, value) => {

        this.setState({
            [key]: value,
        })
    }

    render = () => {
        let array = [{ label: "Compra", value: "compra" },{ label: "Venta", value: "venta" }]
        return(
            <SafeAreaView style={styles.registerTransactionContainer}>
                <ScrollView>
                    <View>
                        <Header titulo={'Registrar Transacción'}/>
                    </View>
                    <View style={{padding: 20, marginBottom: 50}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center'}}>Registro de Transacción</Text>
                    </View>
                    <View style={{paddingHorizontal: 40, marginBottom: 35}}>
                        <RNPickerSelect
                            value={this.state.transactionType}
                            style={estilosPickerAndroid}
                            onValueChange={(text) => this.onChangeText('transactionType', text)}
                            placeholder={{label:"Seleccione un valor",value:''}}
                            items={array}
                        />
                    </View>
                    <View style={{paddingHorizontal: 40, marginBottom: 35}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold',}}>Proveedor o Cliente</Text>
                        <TextInput value={this.state.name} onChangeText={(text) => this.onChangeText('name', text)} placeholder={'Ingrese Proveedor o Cliente'} style={{borderBottomColor: '#000', borderBottomWidth: 1}}/>
                    </View>
                    <View style={{paddingHorizontal: 40, marginBottom: 35}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold',}}>NIT</Text>
                        <TextInput value={this.state.nit} onChangeText={(text) => this.onChangeText('nit', text)} placeholder={'Ingrese NIT'} style={{borderBottomColor: '#000', borderBottomWidth: 1}}/>
                    </View>
                    <View style={{paddingHorizontal: 40, marginBottom: 35}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold',}}>Dirección</Text>
                        <TextInput value={this.state.address} onChangeText={(text) => this.onChangeText('address', text)} placeholder={'Ingrese dirección'} style={{borderBottomColor: '#000', borderBottomWidth: 1}}/>
                    </View>
                    <View style={{paddingHorizontal: 40, marginBottom: 35}}>
                            <Button
                                title="Validar Datos"
                                color="green"
                                onPress={() => {this.validateFormData()}}
                            />
                    </View>
                    <ConfirmDialog
                        title="Resumen de Transacción"
                        visible={this.state.showResume}
                        onTouchOutside={() => this.setState({showResume: false})}
                        positiveButton={{
                            title: "Entendido",
                            onPress: () => this.setState({showResume: false})
                        }} >
                        <View>
                            <View style={{}}>
                                <View style={{flexDirection: 'column', marginBottom: 10}}>
                                    <Text style={{color: '#000', fontSize: 15}}>Proveedor o Cliente</Text>
                                    <Text style={{color: '#215e9c', fontSize: 25}}>{this.state.name}</Text>
                                </View>
                                <View style={{flexDirection: 'column', marginBottom: 10}}>
                                    <Text style={{color: '#000', fontSize: 15}}>NIT</Text>
                                    <Text style={{color: '#215e9c', fontSize: 25}}>{this.state.nit}</Text>
                                </View>
                                <View style={{flexDirection: 'column', marginBottom: 10}}>
                                    <Text style={{color: '#000', fontSize: 15}}>Dirección</Text>
                                    <Text style={{color: '#215e9c', fontSize: 25}}>{this.state.address}</Text>
                                </View>
                            </View>
                        </View>
                    </ConfirmDialog>
                </ScrollView>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    registerTransactionContainer: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    pickerSelect: {
        borderBottomColor: '#000',
        borderBottomWidth: 1
    }
});

const estilosPickerAndroid = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      marginVertical: 7,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black', // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

export default RegisterTransaction;