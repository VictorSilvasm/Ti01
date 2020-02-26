import React from 'react';
import {View, Text, StyleSheet, Button, Alert, TextInput} from 'react-native';

function AppLayout(props){
    return(
        <>
            <View style={misEsilos.container}>
                <View style = {misEstilos.header}></View>

                <View style = {misEstilos.imagen}>
                    <Image style={{height:120, width:120}} source={props.url}/>
                </View>


                <View style = {misEstilos.body}>
                    <Text>Usuario:</Text>
                    <TextInput style= {miEstilo.texto} placeholder='User'/>
                    <Text>Contraseña:</Text>
                    <TextInput style= {miEstilo.texto} placeholder='Password'/>
                </View>

                <View style={misEsilos.food}>
                    <Button title='Iniciar Sesión'
                            onPress = {() => Alert.alert('Bienvenido')}/>
                    <Text>No Tinene una Cuenta: </Text>
                    <Button title='Registrarse'
                            onPress = {() => Alert.alert('Datos')}/>
                </View>

            </View>
        </>
    );
}

const misEsilos = StyleSheet.create({
    container : {
        flex: 1,
        /*flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',*/
    },
    header : {
        flex: 0.3,
        flexDirection: 'row',
        backgroundColor: 'red',
    },
    imagen : {
        margin : 30,
        alignItems : 'center',
    },
    body : {
        margin : 30,
    },
    food : {
        margin: 60,
        justifyContent: 'center',
    },
    texto: {
        backgroundColor: '#E5E4E2',
        fontSize: 16,
    }
});

export default AppLayout;