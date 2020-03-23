import {Alert} from 'react-native';

const URL_DATA = 'http://192.168.0.3/iot/data/';

class API {
    async validarLog(user,pass){
        const query = await fetch(`${URL_DATA}login.php?user=${user}&pass=${pass}`);
        const data = await query.json();
        return data;
    }

    registerData(nombre,user,correo,pass){
        fetch(`${URL_DATA}registrar.php`,{
            method: 'POST',
            body: JSON.stringify({
                pNombre: nombre,
                pUser: user,
                pCorreo: correo,
                pPass: pass
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.text())
        .catch(error => console.error('Error: ',error))
        .then(response => {
            if(response.status == 1){
                Alert.alert('Ocurrio un error');
            }
            else{
                Alert.alert('Registro exitoso');
            }
        });
    }
}

export default new API();