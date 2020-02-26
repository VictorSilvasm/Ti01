import React,{Component} from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Item,Input,Icon } from 'native-base';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      nombr:'',
      passwords:''
    }
  }

render(){
  const navegar=this.props.navigation;
  return (
    <Container>
        <Header />
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style={misEstilos.textCenter}>Inicio de sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Item inlineLabel>
                  <Icon type = 'FontAwesome' name='user'></Icon>
                  <Input placeholder='Nombre de usuario' value={this.state.nombr} onChangeText={(nombr)=> this.setState({nombr})} />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'FontAwesome' name = 'lock'></Icon>
                  <Input placeholder='Contraseña' value={this.state.passwords} onChangeText={(passwords)=> this.setState({passwords})} secureTextEntry={true} />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button primary style={misEstilos.boton} onPress={() => {navegar.navigate('Pantalla',{nombres:this.state.nombr,pass:this.state.passwords});}}><Text> Entrar </Text></Button>
            </CardItem>
          </Card>
          <Text style={misEstilos.textCenter}>No tienes cuenta:</Text>
          <Button onPress={() => {navegar.navigate('Registro',{titulo:'Registro de usuarios'});}}><Text  style={misEstilos.textCenter}>Registrate</Text></Button>
        </Content>
      </Container>
  );
}
};

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton:{
    marginLeft: '70%',
  },
  boton2:{
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;