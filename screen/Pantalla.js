import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {Card} from 'native-base'


class Principal extends Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading : true,
    }
  }// end  constructor
  //lo que esta aquí se ejecuta 
  async componentDidMount(){
    try{
      const response = 
      await fetch('https://swapi.co/api/films/?format=json')  //https://reactnative.dev/movies.json
      const responseJson = await response.json();

      this.setState({
        isLoading : false,
        dataSourse : responseJson.results,
      }, function(){

      });
    }
    catch (error){
      console.log(error);
    }
  }//end componentDidMount

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex:1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }//en if

    return(
      <View>
        <FlatList
          data = {this.state.dataSourse}
          renderItem = {({item}) =>
            <Card>
              <Text>Titulo: {item.title}</Text>
              <Text>Episodio: {item.episode_id}</Text>
              <Text>Director: {item.director}</Text>
            </Card>
          }
         keyExtractor =  {({episode_id}, index) => episode_id}
        />
      </View>
    );
  }
}// end class

export default Principal;
















/*import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Item, Icon,Input } from 'native-base';

class Pantalla extends Component{
render(){
  const navegar = this.props.navegation;
  return (
    <Container>
        <Header />
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
            <CardItem>
              <Text>Tu nombre es:{this.props.route.params.nombres}</Text>
            </CardItem>
            <CardItem>
              <Text>Tu contraseña es:{this.props.route.params.pass}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  boton:{
    marginLeft: '70%',
  },
});

export default Pantalla;*/